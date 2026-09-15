import React from 'react';
import { Search, X, CheckCircle, ExternalLink, Sparkles } from 'lucide-react';

interface HeroSectionProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalTools: number;
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  searchQuery,
  onSearchChange,
  totalTools,
}) => {
  return (
    <section id="hero-section" className="bg-stone-50 border-b border-stone-200 py-8 sm:py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        {/* Sub-badge */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-white border border-stone-200 text-stone-700 shadow-2xs mb-3">
          <Sparkles className="w-3.5 h-3.5 text-amber-500" />
          <span>Tautan Interaktif Langsung Siap Pakai di Browser</span>
        </div>

        {/* Title */}
        <h1 id="hero-title" className="text-2xl sm:text-4xl font-extrabold text-stone-900 tracking-tight leading-tight sm:leading-tight">
          Eksplorasi Pembelajaran Interaktif untuk Siswa
        </h1>

        {/* Description */}
        <p id="hero-description" className="mt-3 text-stone-600 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed">
          Kumpulan aplikasi simulasi, manipulatif digital, laboratorium virtual, dan kalkulator visual dari jenjang SD hingga SMA. Klik langsung dan coba tanpa registrasi akun.
        </p>

        {/* Search Bar */}
        <div className="mt-6 max-w-2xl mx-auto">
          <div className="relative flex items-center">
            <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-stone-400">
              <Search className="w-5 h-5" />
            </div>
            <input
              id="input-global-search"
              type="text"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              placeholder="Cari mata pelajaran, topik (aljabar, sel, python, ikatan kimia), atau nama alat..."
              className="w-full pl-11 pr-10 py-3 rounded-xl bg-white border border-stone-300 text-stone-900 placeholder-stone-400 text-sm focus:outline-none focus:ring-2 focus:ring-stone-800 focus:border-stone-800 shadow-xs transition-all"
            />
            {searchQuery && (
              <button
                id="btn-clear-search"
                onClick={() => onSearchChange('')}
                className="absolute inset-y-0 right-0 pr-3.5 flex items-center text-stone-400 hover:text-stone-600"
                aria-label="Bersihkan pencarian"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Key Features Chips */}
        <div id="hero-stats-badges" className="mt-5 flex flex-wrap justify-center items-center gap-2 sm:gap-3 text-xs text-stone-600">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>3 Jenjang (SD, SMP, SMA)</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>19 Bidang Studi</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200">
            <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
            <span>{totalTools}+ Alat Pembelajaran</span>
          </span>
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-white border border-stone-200 font-medium text-stone-800">
            <ExternalLink className="w-3.5 h-3.5 text-stone-500" />
            <span>Buka Langsung di Tab Baru</span>
          </span>
        </div>
      </div>
    </section>
  );
};
