import React from 'react';
import { Sparkles, Bookmark, Compass, HelpCircle } from 'lucide-react';
import { JenjangType } from '../types';

interface NavbarProps {
  selectedJenjang: JenjangType | 'ALL';
  onSelectJenjang: (jenjang: JenjangType | 'ALL') => void;
  favoritesCount: number;
  showFavoritesOnly: boolean;
  onToggleFavoritesOnly: () => void;
  onOpenTips: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  selectedJenjang,
  onSelectJenjang,
  favoritesCount,
  showFavoritesOnly,
  onToggleFavoritesOnly,
  onOpenTips,
}) => {
  return (
    <header id="main-header" className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-stone-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo & App Title */}
          <div 
            id="brand-logo-container" 
            onClick={() => {
              onSelectJenjang('ALL');
              if (showFavoritesOnly) onToggleFavoritesOnly();
            }}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div id="brand-icon-box" className="w-10 h-10 rounded-xl bg-stone-900 text-amber-300 flex items-center justify-center shadow-sm group-hover:scale-105 transition-transform duration-200">
              <Compass className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span id="brand-title" className="text-lg sm:text-xl font-extrabold text-stone-900 tracking-tight">
                  Portal Belajar Interaktif
                </span>
                <span className="hidden sm:inline-flex items-center px-2 py-0.5 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 border border-emerald-200">
                  Bebas Login
                </span>
              </div>
              <p className="text-xs text-stone-500 hidden md:block">
                Katalog Pembelajaran Siswa SD • SMP • SMA
              </p>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Guide / Tips Button */}
            <button
              id="btn-open-student-guide"
              onClick={onOpenTips}
              className="inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium text-stone-700 bg-stone-100 hover:bg-stone-200 rounded-lg transition-colors"
              title="Panduan untuk siswa dan guru"
            >
              <HelpCircle className="w-4 h-4 text-stone-600" />
              <span className="hidden sm:inline">Panduan Belajar</span>
            </button>

            {/* Favorite Filter Button */}
            <button
              id="btn-toggle-favorites"
              onClick={onToggleFavoritesOnly}
              className={`inline-flex items-center gap-1.5 px-3 py-2 text-xs sm:text-sm font-medium rounded-lg transition-all border ${
                showFavoritesOnly
                  ? 'bg-amber-500 text-white border-amber-600 shadow-sm'
                  : 'bg-white text-stone-700 border-stone-200 hover:bg-stone-50'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${showFavoritesOnly ? 'fill-white text-white' : 'text-amber-500'}`} />
              <span>Favorit</span>
              {favoritesCount > 0 && (
                <span
                  id="navbar-favorites-counter"
                  className={`px-1.5 py-0.2 rounded-full text-xs font-bold ${
                    showFavoritesOnly ? 'bg-amber-700 text-amber-100' : 'bg-amber-100 text-amber-800'
                  }`}
                >
                  {favoritesCount}
                </span>
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
