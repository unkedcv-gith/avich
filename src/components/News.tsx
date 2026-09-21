import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { Megaphone, Calendar, ArrowUpRight, ChevronDown } from 'lucide-react';
import MolecularBackground from './MolecularBackground';
import { getStoredNews } from '../utils/newsStorage';
import { NewsItem } from '../data/newsData';
import { useLanguage } from '../context/LanguageContext';

export default function News() {
  const [items, setItems] = useState<NewsItem[]>([]);
  const [visibleCount, setVisibleCount] = useState<number>(2);
  const { t } = useLanguage();

  const loadNews = () => {
    const all = getStoredNews();
    setItems(all.filter((item) => item.published !== false));
  };

  useEffect(() => {
    loadNews();
    window.addEventListener('avich_news_updated', loadNews);
    return () => window.removeEventListener('avich_news_updated', loadNews);
  }, []);

  const handleLoadMore = () => {
    setVisibleCount((prev) => prev + 2);
  };

  const visibleItems = items.slice(0, visibleCount);
  const hasMore = visibleCount < items.length;

  return (
    <section id="news" className="relative py-16 md:py-24 bg-[#181338] overflow-hidden">
      <MolecularBackground variant="services" className="z-[1]" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 border border-white/15 text-[#FD8548] text-xs font-bold uppercase tracking-widest mb-4">
            <Megaphone className="w-3.5 h-3.5 text-[#FD8548]" />
            {t.news.badge}
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight leading-tight">
            {t.news.title}
          </h2>
          <p className="mt-4 text-base sm:text-lg text-gray-300 font-light leading-relaxed">
            {t.news.subtitle}
          </p>
        </div>

        {/* News Grid */}
        {items.length === 0 ? (
          <div className="text-center py-12 bg-white/5 rounded-3xl border border-white/10 max-w-xl mx-auto">
            <p className="text-gray-300 text-base">{t.news.empty}</p>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
              {visibleItems.map((item, index) => (
                <motion.article
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: (index % 2) * 0.15 }}
                  className="group relative bg-[#221c4a]/80 backdrop-blur-xl border border-white/15 rounded-3xl overflow-hidden shadow-xl hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)] hover:border-[#FD8548]/40 transition-all duration-300 flex flex-col justify-between"
                >
                  {/* Image Header */}
                  <div>
                    <div className="relative h-56 sm:h-64 overflow-hidden bg-[#1c1642]">
                      <img
                        src={item.image}
                        alt={item.imageAlt || item.title}
                        className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                        onError={(e) => {
                          e.currentTarget.onerror = null;
                          e.currentTarget.src = "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&w=800&q=80";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#221c4a] via-transparent to-transparent opacity-90" />
                      
                      {/* Tag & Date */}
                      <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                        {item.tag ? (
                          <span className="bg-[#FD8548]/90 text-white text-xs font-bold px-3 py-1 rounded-full shadow-md backdrop-blur-md">
                            {item.tag}
                          </span>
                        ) : <span />}
                        <span className="flex items-center gap-1.5 text-xs text-gray-200 font-medium bg-black/50 backdrop-blur-md px-3 py-1 rounded-full border border-white/15">
                          <Calendar className="w-3.5 h-3.5 text-[#FD8548]" />
                          {item.date}
                        </span>
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 sm:p-8 space-y-3">
                      <h3 className="text-xl sm:text-2xl font-bold text-white leading-snug group-hover:text-[#FD8548] transition-colors duration-200">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm sm:text-base leading-relaxed font-light">
                        {item.description}
                      </p>
                    </div>
                  </div>

                  {/* Card Footer */}
                  <div className="px-6 sm:px-8 pb-6 pt-2 flex items-center justify-between border-t border-white/10 mt-4">
                    <span className="text-xs text-gray-400 uppercase tracking-wider font-semibold">
                      AVICH CRO
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#FD8548] group-hover:translate-x-1 transition-transform duration-200">
                      {t.news.readMore} <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>

            {/* Load More Button Container */}
            {hasMore && (
              <div className="mt-12 md:mt-16 text-center">
                <motion.button
                  whileHover={{ scale: 1.04, y: -2 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={handleLoadMore}
                  className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-gradient-to-r from-[#FD8548] to-[#f26c23] hover:from-[#f26c23] hover:to-[#e05b12] text-white font-bold text-sm sm:text-base shadow-lg shadow-[#FD8548]/25 hover:shadow-xl hover:shadow-[#FD8548]/40 border border-white/20 transition-all duration-200 cursor-pointer"
                >
                  <span>{t.news.loadMore}</span>
                  <ChevronDown className="w-4 h-4 text-white animate-bounce" />
                </motion.button>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
}
