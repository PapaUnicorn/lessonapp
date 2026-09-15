import React, { useEffect } from 'react';
import { X, ExternalLink, Sparkles, CheckCircle2, Bookmark, Copy, Check } from 'lucide-react';
import { LearningItem } from '../types';
import { getSubjectIcon } from '../utils/iconHelper';

interface DetailModalProps {
  item: LearningItem | null;
  isOpen: boolean;
  onClose: () => void;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
}

export const DetailModal: React.FC<DetailModalProps> = ({
  item,
  isOpen,
  onClose,
  isFavorite,
  onToggleFavorite,
}) => {
  const [copiedUrl, setCopiedUrl] = React.useState<string | null>(null);

  // Close on Escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !item) return null;

  const handleCopy = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(null), 2000);
  };

  return (
    <div
      id="detail-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="detail-modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-6 pb-4 border-b border-stone-100 flex items-start justify-between gap-4">
          <div className="flex items-center gap-3.5">
            <div className="w-12 h-12 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center flex-shrink-0">
              {getSubjectIcon(item.icon, { className: 'w-6 h-6' })}
            </div>
            <div>
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2.5 py-0.5 rounded-md text-xs font-bold bg-stone-100 text-stone-800">
                  Jenjang {item.jenjang}
                </span>
                <span className="text-xs text-stone-500 font-medium">
                  {item.tingkatKelas}
                </span>
              </div>
              <h2 id="modal-title" className="text-xl font-extrabold text-stone-900 leading-snug">
                {item.mataPelajaran}
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-1">
            <button
              id="btn-modal-favorite"
              type="button"
              onClick={() => onToggleFavorite(item.id)}
              className="p-2 rounded-lg text-stone-400 hover:text-amber-500 hover:bg-stone-100 transition-colors"
              title={isFavorite ? 'Hapus favorit' : 'Tambah favorit'}
            >
              <Bookmark className={`w-5 h-5 ${isFavorite ? 'fill-amber-400 text-amber-500' : 'text-stone-400'}`} />
            </button>
            <button
              id="btn-close-modal"
              type="button"
              onClick={onClose}
              className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Body */}
        <div className="p-6 space-y-5 max-h-[75vh] overflow-y-auto">
          {/* Fokus Pembelajaran */}
          <div className="p-4 rounded-xl bg-amber-50/70 border border-amber-200/80">
            <div className="text-xs font-bold text-amber-900 uppercase tracking-wider mb-1.5 flex items-center gap-1.5">
              <Sparkles className="w-4 h-4 text-amber-600" />
              <span>Fokus Pembelajaran Utama</span>
            </div>
            <p className="text-sm font-semibold text-stone-900">
              {item.fokus}
            </p>
            <p className="text-xs text-stone-600 mt-2 leading-relaxed">
              {item.deskripsiRingkas}
            </p>
          </div>

          {/* Panduan Belajar / Langkah Siswa */}
          <div>
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5">
              Rekomendasi Eksplorasi Siswa:
            </h3>
            <div className="space-y-2">
              {item.caraBelajar.map((cara, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <span>{cara}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Daftar Tautan Aplikasi Interaktif */}
          <div>
            <h3 className="text-xs font-bold text-stone-500 uppercase tracking-wider mb-2.5">
              Tautan Aplikasi Interaktif (Bebas Akses Tanpa Login):
            </h3>
            <div className="space-y-3">
              {item.tools.map((tool, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-stone-200 hover:border-stone-300 bg-stone-50/50 flex flex-col sm:flex-row sm:items-center justify-between gap-3 transition-colors"
                >
                  <div className="space-y-1">
                    <div className="flex items-center gap-2">
                      <span className="font-bold text-sm text-stone-900">
                        {tool.name}
                      </span>
                      {tool.tag && (
                        <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-stone-200 text-stone-700">
                          {tool.tag}
                        </span>
                      )}
                    </div>
                    <p className="text-xs text-stone-600">
                      {tool.description}
                    </p>
                    <span className="text-[11px] text-stone-400 font-mono block truncate max-w-sm">
                      {tool.url}
                    </span>
                  </div>

                  <div className="flex items-center gap-2 flex-shrink-0 self-end sm:self-center">
                    <button
                      type="button"
                      onClick={() => handleCopy(tool.url)}
                      title="Salin tautan"
                      className="p-2 rounded-lg text-xs font-medium text-stone-600 bg-white hover:bg-stone-100 border border-stone-200 transition-colors flex items-center gap-1"
                    >
                      {copiedUrl === tool.url ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-600" />
                          <span className="text-emerald-700 text-xs">Tersalin</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span className="hidden sm:inline text-xs">Salin</span>
                        </>
                      )}
                    </button>
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg text-xs font-bold text-white bg-stone-900 hover:bg-stone-800 shadow-xs transition-colors"
                    >
                      <span>Buka Aplikasi</span>
                      <ExternalLink className="w-3.5 h-3.5 text-amber-300" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            id="btn-footer-close-modal"
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-stone-700 bg-white hover:bg-stone-100 border border-stone-200 shadow-2xs transition-colors"
          >
            Tutup Jendela
          </button>
        </div>
      </div>
    </div>
  );
};
