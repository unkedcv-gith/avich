import { useState, useEffect, ChangeEvent, DragEvent } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  X, Lock, LogOut, Plus, Trash2, Eye, EyeOff, GripVertical, 
  Upload, Image as ImageIcon, Check, Edit3, ArrowUp, ArrowDown,
  Sparkles, AlertCircle
} from 'lucide-react';
import { NewsItem } from '../data/newsData';
import { getStoredNews, saveStoredNews } from '../utils/newsStorage';

interface AdminModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AdminModal({ isOpen, onClose }: AdminModalProps) {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [loginError, setLoginError] = useState('');

  const [news, setNews] = useState<NewsItem[]>([]);
  const [editingItem, setEditingItem] = useState<NewsItem | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  // Form states for Create / Edit
  const [formTitle, setFormTitle] = useState('');
  const [formDate, setFormDate] = useState('');
  const [formTag, setFormTag] = useState('');
  const [formDescription, setFormDescription] = useState('');
  const [formImage, setFormImage] = useState('');
  const [formPublished, setFormPublished] = useState(true);
  const [imagePreview, setImagePreview] = useState('');

  // Drag and Drop state
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);

  useEffect(() => {
    if (isOpen) {
      // Check saved login session
      const auth = sessionStorage.getItem('avich_admin_auth');
      if (auth === 'true') {
        setIsLoggedIn(true);
      }
      setNews(getStoredNews());
    }
  }, [isOpen]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (username === 'admin' && password === 'adminlab') {
      setIsLoggedIn(true);
      setLoginError('');
      sessionStorage.setItem('avich_admin_auth', 'true');
    } else {
      setLoginError('Usuario o contraseña incorrectos.');
    }
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    sessionStorage.removeItem('avich_admin_auth');
    setUsername('');
    setPassword('');
  };

  const resetForm = () => {
    setFormTitle('');
    setFormDate(new Date().toLocaleDateString('es-ES', { month: 'long', year: 'numeric' }));
    setFormTag('');
    setFormDescription('');
    setFormImage('');
    setImagePreview('');
    setFormPublished(true);
    setEditingItem(null);
    setIsCreating(false);
  };

  const openCreateForm = () => {
    resetForm();
    setFormDate('Septiembre 2026');
    setIsCreating(true);
  };

  const openEditForm = (item: NewsItem) => {
    setEditingItem(item);
    setFormTitle(item.title);
    setFormDate(item.date);
    setFormTag(item.tag || '');
    setFormDescription(item.description);
    setFormImage(item.image);
    setImagePreview(item.image);
    setFormPublished(item.published !== false);
    setIsCreating(false);
  };

  const handleImageFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const result = reader.result as string;
        setFormImage(result);
        setImagePreview(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSaveNews = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formTitle.trim() || !formDescription.trim()) return;

    const finalImage = formImage.trim() || 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80';

    if (editingItem) {
      // Update existing
      const updated = news.map((item) =>
        item.id === editingItem.id
          ? {
              ...item,
              title: formTitle,
              date: formDate,
              tag: formTag,
              description: formDescription,
              image: finalImage,
              published: formPublished,
            }
          : item
      );
      setNews(updated);
      saveStoredNews(updated);
    } else {
      // Create new
      const newItem: NewsItem = {
        id: Date.now(),
        title: formTitle,
        date: formDate || 'Septiembre 2026',
        tag: formTag || 'Biotecnología',
        description: formDescription,
        image: finalImage,
        published: formPublished,
      };
      const updated = [newItem, ...news];
      setNews(updated);
      saveStoredNews(updated);
    }

    resetForm();
  };

  const handleDelete = (id: string | number) => {
    if (window.confirm('¿Está seguro de eliminar esta novedad?')) {
      const updated = news.filter((item) => item.id !== id);
      setNews(updated);
      saveStoredNews(updated);
    }
  };

  const handleTogglePublished = (id: string | number) => {
    const updated = news.map((item) =>
      item.id === id ? { ...item, published: !item.published } : item
    );
    setNews(updated);
    saveStoredNews(updated);
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const targetIndex = direction === 'up' ? index - 1 : index + 1;
    if (targetIndex < 0 || targetIndex >= news.length) return;

    const updated = [...news];
    const [moved] = updated.splice(index, 1);
    updated.splice(targetIndex, 0, moved);

    setNews(updated);
    saveStoredNews(updated);
  };

  // Drag and Drop handlers
  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;

    const updated = [...news];
    const [draggedItem] = updated.splice(draggedIndex, 1);
    updated.splice(index, 0, draggedItem);

    setDraggedIndex(index);
    setNews(updated);
    saveStoredNews(updated);
  };

  const handleDragEnd = () => {
    setDraggedIndex(null);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/75 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.25 }}
            className="relative z-10 w-full max-w-3xl bg-[#1d1847]/95 backdrop-blur-2xl border border-white/20 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.8)] text-white overflow-hidden my-8 p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-white/10 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FD8548]/20 border border-[#FD8548]/30 text-[#FD8548]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white leading-tight">
                    Administrador de Novedades
                  </h3>
                  <p className="text-xs text-gray-400">
                    AVICH - Gestión de Publicaciones
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    title="Cerrar sesión"
                    className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* LOGIN FORM IF NOT LOGGED IN */}
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="space-y-5 max-w-md mx-auto py-6">
                <div className="text-center space-y-2 mb-6">
                  <div className="inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 text-[#FD8548] mb-2">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-white">Acceso Restringido</h4>
                  <p className="text-xs text-gray-300">
                    Inicie sesión con sus credenciales de administrador para gestionar las noticias.
                  </p>
                </div>

                {loginError && (
                  <div className="p-3.5 rounded-xl bg-red-500/20 border border-red-500/40 text-red-200 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Usuario
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="Usuario"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-[#FD8548] transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-300 uppercase tracking-wider mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Contraseña"
                    className="w-full px-4 py-3 rounded-xl bg-white/10 border border-white/15 text-white placeholder-gray-400 focus:outline-none focus:border-[#FD8548] transition-colors text-sm"
                    required
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 rounded-xl bg-gradient-to-r from-[#FD8548] to-[#f26c23] hover:from-[#f26c23] hover:to-[#e05b12] text-white font-bold text-sm shadow-lg active:scale-98 transition-all duration-200"
                >
                  Ingresar al Panel
                </button>
              </form>
            ) : (
              /* ADMIN MANAGEMENT PANEL */
              <div className="space-y-6">
                {/* CREATE / EDIT FORM VIEW */}
                {(isCreating || editingItem) ? (
                  <form onSubmit={handleSaveNews} className="space-y-5 bg-white/5 p-5 sm:p-6 rounded-2xl border border-white/10">
                    <div className="flex items-center justify-between pb-3 border-b border-white/10">
                      <h4 className="text-base font-bold text-white flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FD8548]" />
                        {editingItem ? 'Editar Novedad' : 'Nueva Novedad'}
                      </h4>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs text-gray-400 hover:text-white underline"
                      >
                        Cancelar
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Title */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Título *
                        </label>
                        <input
                          type="text"
                          value={formTitle}
                          onChange={(e) => setFormTitle(e.target.value)}
                          placeholder="Ej: Ampliamos nuestra capacidad analítica VICH"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-[#FD8548]"
                          required
                        />
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Fecha *
                        </label>
                        <input
                          type="text"
                          value={formDate}
                          onChange={(e) => setFormDate(e.target.value)}
                          placeholder="Ej: Septiembre 2026"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-[#FD8548]"
                          required
                        />
                      </div>

                      {/* Tag */}
                      <div>
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Etiqueta / Categoría
                        </label>
                        <input
                          type="text"
                          value={formTag}
                          onChange={(e) => setFormTag(e.target.value)}
                          placeholder="Ej: Ensayos Clínicos & VICH"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-[#FD8548]"
                        />
                      </div>

                      {/* Image Source */}
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-xs font-medium text-gray-300">
                          Imagen (Subir archivo o ingresar URL)
                        </label>
                        
                        <div className="flex flex-col sm:flex-row gap-3 items-center">
                          {/* File upload input */}
                          <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-semibold text-white flex items-center gap-2 transition-colors shrink-0">
                            <Upload className="w-4 h-4 text-[#FD8548]" />
                            <span>Subir desde dispositivo</span>
                            <input
                              type="file"
                              accept="image/*"
                              onChange={handleImageFileChange}
                              className="hidden"
                            />
                          </label>

                          <span className="text-xs text-gray-400">o</span>

                          {/* URL input */}
                          <input
                            type="url"
                            value={formImage}
                            onChange={(e) => {
                              setFormImage(e.target.value);
                              setImagePreview(e.target.value);
                            }}
                            placeholder="URL de imagen (https://...)"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-xs focus:outline-none focus:border-[#FD8548]"
                          />
                        </div>

                        {/* Image Preview */}
                        {imagePreview && (
                          <div className="mt-2 relative w-32 h-20 rounded-xl overflow-hidden border border-white/20 shadow-md">
                            <img
                              src={imagePreview}
                              alt="Previsualización"
                              className="w-full h-full object-cover"
                            />
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-medium text-gray-300 mb-1.5">
                          Texto / Descripción *
                        </label>
                        <textarea
                          value={formDescription}
                          onChange={(e) => setFormDescription(e.target.value)}
                          rows={3}
                          placeholder="Escriba la descripción completa de la novedad..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white/10 border border-white/15 text-white text-sm focus:outline-none focus:border-[#FD8548]"
                          required
                        />
                      </div>

                      {/* Published status toggle */}
                      <div className="sm:col-span-2 flex items-center gap-3 pt-1">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            checked={formPublished}
                            onChange={(e) => setFormPublished(e.target.checked)}
                            className="sr-only peer"
                          />
                          <div className="w-11 h-6 bg-white/20 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#FD8548]"></div>
                          <span className="ml-3 text-xs font-semibold text-gray-300">
                            {formPublished ? 'Publicado en la web' : 'Despublicado (Borrador)'}
                          </span>
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-4 py-2 rounded-xl bg-white/10 hover:bg-white/20 text-xs font-medium text-gray-300"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-5 py-2 rounded-xl bg-[#FD8548] hover:bg-[#f26c23] text-white text-xs font-bold shadow-md transition-colors flex items-center gap-1.5"
                      >
                        <Check className="w-4 h-4" />
                        <span>{editingItem ? 'Guardar Cambios' : 'Publicar Novedad'}</span>
                      </button>
                    </div>
                  </form>
                ) : (
                  /* LIST & DRAG-AND-DROP REORDER VIEW */
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="text-sm font-bold text-white">Noticias Guardadas</h4>
                        <p className="text-xs text-gray-400">
                          Arrastre o use las flechas para cambiar el orden de publicación.
                        </p>
                      </div>
                      <button
                        onClick={openCreateForm}
                        className="px-4 py-2 rounded-xl bg-[#FD8548] hover:bg-[#f26c23] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 active:scale-95"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Nueva Novedad</span>
                      </button>
                    </div>

                    {news.length === 0 ? (
                      <div className="text-center py-8 bg-white/5 rounded-2xl border border-white/10">
                        <p className="text-sm text-gray-400">No hay noticias registradas.</p>
                      </div>
                    ) : (
                      <div className="space-y-2.5 max-h-[380px] overflow-y-auto pr-1">
                        {news.map((item, index) => {
                          const isPublished = item.published !== false;
                          return (
                            <div
                              key={item.id}
                              draggable
                              onDragStart={() => handleDragStart(index)}
                              onDragOver={(e) => handleDragOver(e, index)}
                              onDragEnd={handleDragEnd}
                              className={`flex items-center gap-3 p-3 rounded-2xl border transition-all duration-200 ${
                                draggedIndex === index
                                  ? 'bg-[#FD8548]/20 border-[#FD8548]'
                                  : 'bg-white/5 hover:bg-white/10 border-white/10'
                              }`}
                            >
                              {/* Drag handle */}
                              <div
                                className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-white p-1"
                                title="Arrastrar para reordenar"
                              >
                                <GripVertical className="w-5 h-5" />
                              </div>

                              {/* Reorder Buttons (fallback) */}
                              <div className="flex flex-col gap-0.5">
                                <button
                                  onClick={() => handleMove(index, 'up')}
                                  disabled={index === 0}
                                  className="p-1 text-gray-400 hover:text-white disabled:opacity-30"
                                  title="Mover arriba"
                                >
                                  <ArrowUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleMove(index, 'down')}
                                  disabled={index === news.length - 1}
                                  className="p-1 text-gray-400 hover:text-white disabled:opacity-30"
                                  title="Mover abajo"
                                >
                                  <ArrowDown className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {/* Thumbnail */}
                              <div className="w-14 h-12 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-black/40">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-gray-500">
                                    <ImageIcon className="w-5 h-5" />
                                  </div>
                                )}
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <h5 className="text-xs sm:text-sm font-bold text-white truncate">
                                    {item.title}
                                  </h5>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-gray-400 mt-0.5">
                                  <span>{item.date}</span>
                                  <span>•</span>
                                  <span
                                    className={`px-2 py-0.5 rounded-full font-medium ${
                                      isPublished
                                        ? 'bg-emerald-500/20 text-emerald-300 border border-emerald-500/30'
                                        : 'bg-amber-500/20 text-amber-300 border border-amber-500/30'
                                    }`}
                                  >
                                    {isPublished ? 'Publicado' : 'Despublicado'}
                                  </span>
                                </div>
                              </div>

                              {/* Actions */}
                              <div className="flex items-center gap-1.5 shrink-0">
                                {/* Toggle publish */}
                                <button
                                  onClick={() => handleTogglePublished(item.id)}
                                  className={`p-2 rounded-lg border transition-colors ${
                                    isPublished
                                      ? 'bg-emerald-500/10 border-emerald-500/30 text-emerald-400 hover:bg-emerald-500/20'
                                      : 'bg-amber-500/10 border-amber-500/30 text-amber-400 hover:bg-amber-500/20'
                                  }`}
                                  title={isPublished ? 'Despublicar' : 'Publicar'}
                                >
                                  {isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>

                                {/* Edit */}
                                <button
                                  onClick={() => openEditForm(item)}
                                  className="p-2 rounded-lg bg-white/10 hover:bg-white/20 text-gray-300 hover:text-white transition-colors"
                                  title="Editar"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>

                                {/* Delete */}
                                <button
                                  onClick={() => handleDelete(item.id)}
                                  className="p-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 border border-red-500/30 text-red-400 transition-colors"
                                  title="Eliminar"
                                >
                                  <Trash2 className="w-4 h-4" />
                                </button>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
