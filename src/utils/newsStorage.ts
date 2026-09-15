import { NewsItem, initialNewsList } from '../data/newsData';

const STORAGE_KEY = 'avich_news_list_v5';

export function getStoredNews(): NewsItem[] {
  try {
    const data = localStorage.getItem(STORAGE_KEY);
    if (!data) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(initialNewsList));
      return initialNewsList;
    }
    const parsed = JSON.parse(data);
    if (Array.isArray(parsed) && parsed.length >= 0) {
      return parsed.map((item) => ({
        ...item,
        published: item.published ?? true
      }));
    }
  } catch (err) {
    console.error("Error reading news from storage", err);
  }
  return initialNewsList;
}

export function saveStoredNews(newList: NewsItem[]): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newList));
    window.dispatchEvent(new Event('avich_news_updated'));
  } catch (err) {
    console.error("Error saving news to storage", err);
  }
}
