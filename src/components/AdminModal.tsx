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
        date: formDate,
        tag: formTag,
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

  const handleDelete = (id: number | string) => {
    if (window.confirm('¿Está seguro de que desea eliminar esta noticia?')) {
      const updated = news.filter((item) => item.id !== id);
      setNews(updated);
      saveStoredNews(updated);
    }
  };

  const handleTogglePublished = (id: number | string) => {
    const updated = news.map((item) =>
      item.id === id ? { ...item, published: item.published === false ? true : false } : item
    );
    setNews(updated);
    saveStoredNews(updated);
  };

  const handleMove = (index: number, direction: 'up' | 'down') => {
    const newIndex = direction === 'up' ? index - 1 : index + 1;
    if (newIndex < 0 || newIndex >= news.length) return;

    const updated = [...news];
    const temp = updated[index];
    updated[index] = updated[newIndex];
    updated[newIndex] = temp;

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
            className="relative z-10 w-full max-w-3xl bg-white border border-purple-200 rounded-3xl shadow-[0_25px_60px_rgba(0,0,0,0.15)] text-[#1a1640] overflow-hidden my-8 p-6 sm:p-8"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-4 border-b border-purple-100 mb-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#FD8548]/10 border border-[#FD8548]/30 text-[#FD8548]">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#1a1640] leading-tight">
                    Administrador AVICH
                  </h3>
                  <p className="text-xs text-gray-500">
                    Gestión de Publicaciones & Descarga de Documentos
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {isLoggedIn && (
                  <button
                    onClick={handleLogout}
                    title="Cerrar sesión"
                    className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-gray-600 hover:text-[#1a1640] transition-colors"
                  >
                    <LogOut className="w-4 h-4" />
                  </button>
                )}
                <button
                  onClick={onClose}
                  className="p-2 rounded-xl bg-purple-50 hover:bg-purple-100 text-gray-600 hover:text-[#1a1640] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* LOGIN FORM IF NOT LOGGED IN */}
            {!isLoggedIn ? (
              <form onSubmit={handleLogin} className="space-y-5 max-w-md mx-auto py-4">
                <div className="text-center space-y-2 mb-6">
                  <div className="inline-flex p-3 rounded-2xl bg-orange-50 border border-orange-100 text-[#FD8548] mb-2">
                    <Lock className="w-8 h-8" />
                  </div>
                  <h4 className="text-lg font-bold text-[#1a1640]">Acceso Restringido</h4>
                  <p className="text-xs text-gray-600">
                    Inicie sesión con sus credenciales de administrador para gestionar las noticias.
                  </p>
                </div>

                {loginError && (
                  <div className="p-3.5 rounded-xl bg-red-50 border border-red-200 text-red-700 text-xs flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>{loginError}</span>
                  </div>
                )}

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Usuario
                  </label>
                  <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    placeholder="admin"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1640] placeholder-gray-400 focus:outline-none focus:border-[#FD8548] focus:bg-white transition-colors text-sm"
                    required
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-600 uppercase tracking-wider mb-2">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="••••••••"
                    className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 text-[#1a1640] placeholder-gray-400 focus:outline-none focus:border-[#FD8548] focus:bg-white transition-colors text-sm"
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
                  <form onSubmit={handleSaveNews} className="space-y-5 bg-[#f8f7fd] p-5 sm:p-6 rounded-2xl border border-purple-100">
                    <div className="flex items-center justify-between pb-3 border-b border-purple-200">
                      <h4 className="text-base font-bold text-[#1a1640] flex items-center gap-2">
                        <Sparkles className="w-4 h-4 text-[#FD8548]" />
                        {editingItem ? 'Editar Novedad' : 'Nueva Novedad'}
                      </h4>
                      <button
                        type="button"
                        onClick={resetForm}
                        className="text-xs text-gray-500 hover:text-[#1a1640] underline"
                      >
                        Cancelar
                      </button>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Title */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Título *
                        </label>
                        <input
                          type="text"
                          value={formTitle}
                          onChange={(e) => setFormTitle(e.target.value)}
                          placeholder="Ej: Ampliamos nuestra capacidad analítica VICH"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#1a1640] text-sm focus:outline-none focus:border-[#FD8548]"
                          required
                        />
                      </div>

                      {/* Date */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Fecha *
                        </label>
                        <input
                          type="text"
                          value={formDate}
                          onChange={(e) => setFormDate(e.target.value)}
                          placeholder="Ej: Septiembre 2026"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#1a1640] text-sm focus:outline-none focus:border-[#FD8548]"
                          required
                        />
                      </div>

                      {/* Tag */}
                      <div>
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Etiqueta / Categoría
                        </label>
                        <input
                          type="text"
                          value={formTag}
                          onChange={(e) => setFormTag(e.target.value)}
                          placeholder="Ej: Ensayos Clínicos & VICH"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#1a1640] text-sm focus:outline-none focus:border-[#FD8548]"
                        />
                      </div>

                      {/* Image Source */}
                      <div className="sm:col-span-2 space-y-2">
                        <label className="block text-xs font-semibold text-gray-700">
                          Imagen (Subir archivo o ingresar URL)
                        </label>
                        
                        <div className="flex flex-col sm:flex-row gap-3 items-center">
                          {/* File upload input */}
                          <label className="cursor-pointer px-4 py-2.5 rounded-xl bg-purple-50 hover:bg-purple-100 border border-purple-200 text-xs font-semibold text-[#6A00C8] flex items-center gap-2 transition-colors shrink-0">
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
                            type="text"
                            value={formImage}
                            onChange={(e) => {
                              setFormImage(e.target.value);
                              setImagePreview(e.target.value);
                            }}
                            placeholder="https://ejemplo.com/imagen.jpg"
                            className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#1a1640] text-xs focus:outline-none focus:border-[#FD8548]"
                          />
                        </div>

                        {/* Image Preview */}
                        {imagePreview && (
                          <div className="mt-3 relative w-full h-36 rounded-xl overflow-hidden border border-purple-200 bg-black/10">
                            <img
                              src={imagePreview}
                              alt="Vista previa"
                              className="w-full h-full object-cover"
                              onError={() => setImagePreview('')}
                            />
                            <div className="absolute top-2 right-2 px-2 py-1 rounded bg-black/70 text-white text-[10px] font-medium">
                              Vista previa
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Description */}
                      <div className="sm:col-span-2">
                        <label className="block text-xs font-semibold text-gray-700 mb-1.5">
                          Descripción / Contenido *
                        </label>
                        <textarea
                          value={formDescription}
                          onChange={(e) => setFormDescription(e.target.value)}
                          rows={4}
                          placeholder="Texto completo de la novedad o avance científico..."
                          className="w-full px-3.5 py-2.5 rounded-xl bg-white border border-gray-200 text-[#1a1640] text-sm focus:outline-none focus:border-[#FD8548]"
                          required
                        />
                      </div>

                      {/* Published status checkbox */}
                      <div className="sm:col-span-2 flex items-center gap-2 pt-1">
                        <input
                          type="checkbox"
                          id="formPublished"
                          checked={formPublished}
                          onChange={(e) => setFormPublished(e.target.checked)}
                          className="w-4 h-4 rounded text-[#FD8548] focus:ring-[#FD8548] border-gray-300"
                        />
                        <label htmlFor="formPublished" className="text-xs text-gray-700 font-medium cursor-pointer">
                          Publicar inmediatamente en el sitio web
                        </label>
                      </div>
                    </div>

                    <div className="flex items-center justify-end gap-3 pt-4 border-t border-purple-200">
                      <button
                        type="button"
                        onClick={resetForm}
                        className="px-4 py-2 rounded-xl bg-gray-100 hover:bg-gray-200 text-xs font-medium text-gray-700"
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
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-purple-100">
                      <div>
                        <h4 className="text-sm font-bold text-[#1a1640]">Noticias y Publicaciones</h4>
                        <p className="text-xs text-gray-500">
                          Arrastre o use las flechas para cambiar el orden de publicación.
                        </p>
                      </div>
                      <button
                        onClick={openCreateForm}
                        className="px-4 py-2 rounded-xl bg-[#FD8548] hover:bg-[#f26c23] text-white text-xs font-bold shadow-md transition-all flex items-center gap-1.5 active:scale-95 shrink-0"
                      >
                        <Plus className="w-4 h-4" />
                        <span>Nueva Novedad</span>
                      </button>
                    </div>

                    {news.length === 0 ? (
                      <div className="text-center py-8 bg-[#f8f7fd] rounded-2xl border border-purple-100">
                        <p className="text-sm text-gray-500">No hay noticias registradas.</p>
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
                                  ? 'bg-orange-50 border-[#FD8548]'
                                  : 'bg-[#f8f7fd] hover:bg-purple-50/50 border-purple-100'
                              }`}
                            >
                              {/* Drag handle */}
                              <div
                                className="cursor-grab active:cursor-grabbing text-gray-400 hover:text-gray-600 p-1"
                                title="Arrastrar para reordenar"
                              >
                                <GripVertical className="w-5 h-5" />
                              </div>

                              {/* Reorder Buttons (fallback) */}
                              <div className="flex flex-col gap-0.5">
                                <button
                                  onClick={() => handleMove(index, 'up')}
                                  disabled={index === 0}
                                  className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                                  title="Mover arriba"
                                >
                                  <ArrowUp className="w-3.5 h-3.5" />
                                </button>
                                <button
                                  onClick={() => handleMove(index, 'down')}
                                  disabled={index === news.length - 1}
                                  className="p-1 text-gray-400 hover:text-gray-700 disabled:opacity-30"
                                  title="Mover abajo"
                                >
                                  <ArrowDown className="w-3.5 h-3.5" />
                                </button>
                              </div>

                              {/* Thumbnail */}
                              <div className="w-14 h-12 rounded-lg overflow-hidden border border-purple-200 shrink-0 bg-gray-100">
                                {item.image ? (
                                  <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-full h-full object-cover"
                                  />
                                ) : (
                                  <div className="w-full h-full flex items-center justify-center text-gray-400">
                                    <ImageIcon className="w-5 h-5" />
                                  </div>
                                )}
                              </div>

                              {/* Info */}
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center gap-2">
                                  <h5 className="text-xs sm:text-sm font-bold text-[#1a1640] truncate">
                                    {item.title}
                                  </h5>
                                </div>
                                <div className="flex items-center gap-2 text-[11px] text-gray-500 mt-0.5">
                                  <span>{item.date}</span>
                                  <span>•</span>
                                  <span
                                    className={`px-2 py-0.5 rounded-full font-medium ${
                                      isPublished
                                        ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                                        : 'bg-amber-50 text-amber-700 border border-amber-200'
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
                                      ? 'bg-emerald-50 text-emerald-600 border-emerald-200 hover:bg-emerald-100'
                                      : 'bg-gray-100 text-gray-400 border-gray-200 hover:bg-gray-200'
                                  }`}
                                  title={isPublished ? 'Despublicar' : 'Publicar'}
                                >
                                  {isPublished ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                                </button>

                                {/* Edit */}
                                <button
                                  onClick={() => openEditForm(item)}
                                  className="p-2 rounded-lg bg-purple-50 text-[#6A00C8] border border-purple-200 hover:bg-purple-100 transition-colors"
                                  title="Editar"
                                >
                                  <Edit3 className="w-4 h-4" />
                                </button>

                                {/* Delete */}
                                <button
                                  onClick={() => handleDelete(item.id)}
                                  className="p-2 rounded-lg bg-red-50 text-red-600 border border-red-200 hover:bg-red-100 transition-colors"
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
