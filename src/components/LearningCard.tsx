import React from 'react';
import { ExternalLink, Bookmark, Sparkles, HelpCircle } from 'lucide-react';
import { LearningItem } from '../types';
import { getSubjectIcon } from '../utils/iconHelper';

interface LearningCardProps {
  item: LearningItem;
  isFavorite: boolean;
  onToggleFavorite: (id: string) => void;
  onOpenDetail: (item: LearningItem) => void;
}

export const LearningCard: React.FC<LearningCardProps> = ({
  item,
  isFavorite,
  onToggleFavorite,
  onOpenDetail,
}) => {
  // Jenjang badge styling
  const getJenjangBadge = (jenjang: string) => {
    switch (jenjang) {
      case 'SD':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-rose-100 text-rose-800 border border-rose-200">
            SD
          </span>
        );
      case 'SMP':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-sky-100 text-sky-800 border border-sky-200">
            SMP
          </span>
        );
      case 'SMA':
        return (
          <span className="inline-flex items-center px-2.5 py-0.5 rounded-md text-xs font-bold bg-slate-100 text-slate-800 border border-slate-200">
            SMA
          </span>
        );
      default:
        return null;
    }
  };

  return (
    <div
      id={`card-learning-${item.id}`}
      className="bg-white rounded-xl border border-stone-200 hover:border-stone-300 shadow-2xs hover:shadow-md transition-all duration-200 flex flex-col justify-between overflow-hidden group"
    >
      {/* Card Header */}
      <div className="p-5 pb-4">
        <div className="flex items-start justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            {getJenjangBadge(item.jenjang)}
            <span className="text-xs font-medium text-stone-500">
              {item.tingkatKelas}
            </span>
          </div>
          <button
            id={`btn-favorite-${item.id}`}
            type="button"
            onClick={() => onToggleFavorite(item.id)}
            title={isFavorite ? 'Hapus dari favorit' : 'Simpan ke favorit'}
            className="p-1.5 rounded-lg text-stone-400 hover:text-amber-500 hover:bg-amber-50/60 transition-colors"
          >
            <Bookmark
              className={`w-4 h-4 ${
                isFavorite ? 'fill-amber-400 text-amber-500' : 'text-stone-400'
              }`}
            />
          </button>
        </div>

        {/* Title & Icon */}
        <div className="flex items-center gap-3 mb-2.5">
          <div className="w-10 h-10 rounded-lg bg-stone-100 text-stone-800 flex items-center justify-center flex-shrink-0 group-hover:bg-stone-900 group-hover:text-amber-300 transition-colors">
            {getSubjectIcon(item.icon, { className: 'w-5 h-5' })}
          </div>
          <div>
            <h3 className="font-bold text-stone-900 text-base leading-snug">
              {item.mataPelajaran}
            </h3>
            <span className="text-[11px] font-semibold text-stone-500 uppercase tracking-wider">
              {item.categoryGroup}
            </span>
          </div>
        </div>

        {/* Focus highlight box */}
        <div className="mt-3 p-2.5 rounded-lg bg-stone-50 border border-stone-200/80">
          <div className="text-[11px] font-bold text-stone-600 uppercase tracking-wider mb-1 flex items-center gap-1">
            <Sparkles className="w-3 h-3 text-amber-600" />
            <span>Fokus Pembelajaran:</span>
          </div>
          <p className="text-xs text-stone-800 font-medium leading-relaxed">
            {item.fokus}
          </p>
        </div>

        {/* Short explanation */}
        <p className="mt-2.5 text-xs text-stone-600 leading-relaxed line-clamp-2">
          {item.deskripsiRingkas}
        </p>
      </div>

      {/* Card Footer: Interactive direct launch buttons */}
      <div className="px-5 pb-5 pt-3 border-t border-stone-100 bg-stone-50/40">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[11px] font-bold text-stone-500 uppercase tracking-wider">
            Aplikasi Interaktif Langsung:
          </span>
          <button
            id={`btn-panduan-${item.id}`}
            type="button"
            onClick={() => onOpenDetail(item)}
            className="text-[11px] font-semibold text-stone-600 hover:text-stone-900 flex items-center gap-1 hover:underline"
          >
            <HelpCircle className="w-3 h-3" />
            <span>Tips Belajar</span>
          </button>
        </div>

        {/* Tools links */}
        <div className="flex flex-wrap gap-2">
          {item.tools.map((tool, idx) => (
            <a
              key={idx}
              id={`link-tool-${item.id}-${idx}`}
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold text-stone-900 bg-white hover:bg-stone-900 hover:text-white border border-stone-300 hover:border-stone-900 shadow-2xs transition-all duration-150 group/link"
            >
              <span>{tool.name}</span>
              {tool.tag && (
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-stone-100 text-stone-600 group-hover/link:bg-stone-800 group-hover/link:text-stone-200">
                  {tool.tag}
                </span>
              )}
              <ExternalLink className="w-3 h-3 text-stone-400 group-hover/link:text-amber-300" />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
