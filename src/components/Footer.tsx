import React from 'react';
import { Compass, ArrowUp, Heart } from 'lucide-react';
import { JenjangType } from '../types';

interface FooterProps {
  onSelectJenjang: (jenjang: JenjangType | 'ALL') => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectJenjang }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer id="main-footer" className="bg-white border-t border-stone-200 mt-16 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-stone-900 text-amber-300 flex items-center justify-center">
            <Compass className="w-4 h-4 text-amber-300" />
          </div>
          <div>
            <p className="font-extrabold text-sm text-stone-900">
              Portal Belajar Interaktif
            </p>
            <p className="text-xs text-stone-500">
              Menghubungkan siswa dan guru ke platform belajar digital terbaik dunia
            </p>
          </div>
        </div>

        {/* Quick Jenjang Links */}
        <div className="flex items-center gap-2 text-xs font-semibold text-stone-600">
          <span>Pintas Jenjang:</span>
          <button
            type="button"
            onClick={() => {
              onSelectJenjang('SD');
              scrollToTop();
            }}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-rose-100 hover:text-rose-800 transition-colors"
          >
            SD (Kelas 1-6)
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectJenjang('SMP');
              scrollToTop();
            }}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-sky-100 hover:text-sky-800 transition-colors"
          >
            SMP (Kelas 7-9)
          </button>
          <button
            type="button"
            onClick={() => {
              onSelectJenjang('SMA');
              scrollToTop();
            }}
            className="px-2.5 py-1 rounded bg-stone-100 hover:bg-slate-200 hover:text-slate-900 transition-colors"
          >
            SMA (Kelas 10-12)
          </button>
        </div>

        {/* Back to top */}
        <button
          id="btn-scroll-to-top"
          type="button"
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-medium text-stone-600 hover:text-stone-900 hover:bg-stone-100 transition-colors"
        >
          <span>Kembali ke Atas</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>

      <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-400 gap-2">
        <p>
          Semua materi dan logo hak cipta milik masing-masing penyedia platform edukasi (PhET, GeoGebra, Desmos, Google, dsb).
        </p>
        <p className="flex items-center gap-1">
          Dibuat dengan dedikasi untuk kemajuan pendidikan Indonesia
        </p>
      </div>
    </footer>
  );
};
