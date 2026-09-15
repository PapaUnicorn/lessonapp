import React from 'react';
import { JenjangType } from '../types';
import { JENJANG_CONFIG } from '../data/learningData';
import { Layers } from 'lucide-react';

interface JenjangSelectorProps {
  selectedJenjang: JenjangType | 'ALL';
  onSelectJenjang: (jenjang: JenjangType | 'ALL') => void;
  counts: {
    ALL: number;
    SD: number;
    SMP: number;
    SMA: number;
  };
}

export const JenjangSelector: React.FC<JenjangSelectorProps> = ({
  selectedJenjang,
  onSelectJenjang,
  counts,
}) => {
  return (
    <div id="jenjang-selector-container" className="py-6">
      <div className="flex items-center justify-between mb-3">
        <h2 id="jenjang-section-heading" className="text-base font-bold text-stone-900 tracking-tight flex items-center gap-2">
          <span>Pilih Jenjang Sekolah</span>
        </h2>
        <span className="text-xs text-stone-500">
          Klik untuk memfilter materi sesuai tingkat kelas
        </span>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {/* Button SEMUA */}
        <button
          id="btn-jenjang-all"
          type="button"
          onClick={() => onSelectJenjang('ALL')}
          className={`relative p-4 rounded-xl text-left transition-all border ${
            selectedJenjang === 'ALL'
              ? 'bg-stone-900 text-white border-stone-900 shadow-md ring-2 ring-stone-900 ring-offset-2'
              : 'bg-white text-stone-800 border-stone-200 hover:border-stone-300 hover:bg-stone-50/70 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <div className={`p-1.5 rounded-lg ${selectedJenjang === 'ALL' ? 'bg-stone-800 text-white' : 'bg-stone-100 text-stone-700'}`}>
              <Layers className="w-4 h-4" />
            </div>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedJenjang === 'ALL' ? 'bg-stone-800 text-stone-200' : 'bg-stone-100 text-stone-600'}`}>
              {counts.ALL} Subjek
            </span>
          </div>
          <p className="font-bold text-sm sm:text-base leading-tight">Semua Jenjang</p>
          <p className={`text-xs mt-1 ${selectedJenjang === 'ALL' ? 'text-stone-300' : 'text-stone-500'}`}>
            SD, SMP & SMA Lengkap
          </p>
        </button>

        {/* Button SD */}
        <button
          id="btn-jenjang-sd"
          type="button"
          onClick={() => onSelectJenjang('SD')}
          className={`relative p-4 rounded-xl text-left transition-all border ${
            selectedJenjang === 'SD'
              ? 'bg-rose-700 text-white border-rose-700 shadow-md ring-2 ring-rose-700 ring-offset-2'
              : 'bg-white text-stone-800 border-stone-200 hover:border-rose-300 hover:bg-rose-50/40 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className={`inline-block font-extrabold text-xs px-2.5 py-1 rounded-md ${
              selectedJenjang === 'SD'
                ? 'bg-rose-800 text-white'
                : 'bg-rose-100 text-rose-800 border border-rose-200'
            }`}>
              SD
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedJenjang === 'SD' ? 'bg-rose-800 text-rose-100' : 'bg-stone-100 text-stone-600'}`}>
              {counts.SD} Subjek
            </span>
          </div>
          <p className="font-bold text-sm sm:text-base leading-tight">Sekolah Dasar</p>
          <p className={`text-xs mt-1 ${selectedJenjang === 'SD' ? 'text-rose-100' : 'text-stone-500'}`}>
            Kelas 1 sampai 6
          </p>
        </button>

        {/* Button SMP */}
        <button
          id="btn-jenjang-smp"
          type="button"
          onClick={() => onSelectJenjang('SMP')}
          className={`relative p-4 rounded-xl text-left transition-all border ${
            selectedJenjang === 'SMP'
              ? 'bg-sky-700 text-white border-sky-700 shadow-md ring-2 ring-sky-700 ring-offset-2'
              : 'bg-white text-stone-800 border-stone-200 hover:border-sky-300 hover:bg-sky-50/40 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className={`inline-block font-extrabold text-xs px-2.5 py-1 rounded-md ${
              selectedJenjang === 'SMP'
                ? 'bg-sky-800 text-white'
                : 'bg-sky-100 text-sky-800 border border-sky-200'
            }`}>
              SMP
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedJenjang === 'SMP' ? 'bg-sky-800 text-sky-100' : 'bg-stone-100 text-stone-600'}`}>
              {counts.SMP} Subjek
            </span>
          </div>
          <p className="font-bold text-sm sm:text-base leading-tight">SMP</p>
          <p className={`text-xs mt-1 ${selectedJenjang === 'SMP' ? 'text-sky-100' : 'text-stone-500'}`}>
            Kelas 7 sampai 9
          </p>
        </button>

        {/* Button SMA */}
        <button
          id="btn-jenjang-sma"
          type="button"
          onClick={() => onSelectJenjang('SMA')}
          className={`relative p-4 rounded-xl text-left transition-all border ${
            selectedJenjang === 'SMA'
              ? 'bg-slate-800 text-white border-slate-800 shadow-md ring-2 ring-slate-800 ring-offset-2'
              : 'bg-white text-stone-800 border-stone-200 hover:border-slate-300 hover:bg-slate-50/40 shadow-2xs'
          }`}
        >
          <div className="flex items-center justify-between mb-1.5">
            <span className={`inline-block font-extrabold text-xs px-2.5 py-1 rounded-md ${
              selectedJenjang === 'SMA'
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-800 border border-slate-200'
            }`}>
              SMA
            </span>
            <span className={`text-xs font-semibold px-2 py-0.5 rounded-full ${selectedJenjang === 'SMA' ? 'bg-slate-700 text-slate-200' : 'bg-stone-100 text-stone-600'}`}>
              {counts.SMA} Subjek
            </span>
          </div>
          <p className="font-bold text-sm sm:text-base leading-tight">SMA</p>
          <p className={`text-xs mt-1 ${selectedJenjang === 'SMA' ? 'text-slate-200' : 'text-stone-500'}`}>
            Kelas 10 sampai 12
          </p>
        </button>
      </div>

      {/* Selected Jenjang Active banner / subtitle */}
      {selectedJenjang !== 'ALL' && (
        <div id="active-jenjang-banner" className="mt-3 p-3.5 rounded-xl bg-white border border-stone-200 flex flex-col sm:flex-row sm:items-center justify-between gap-2 shadow-2xs">
          <div>
            <span className="text-xs font-semibold text-stone-500 uppercase tracking-wider">
              Jenjang Terpilih:
            </span>
            <span className="ml-2 font-bold text-stone-900 text-sm">
              {JENJANG_CONFIG[selectedJenjang].title} ({JENJANG_CONFIG[selectedJenjang].gradeLevels})
            </span>
            <p className="text-xs text-stone-600 mt-0.5">
              {JENJANG_CONFIG[selectedJenjang].description}
            </p>
          </div>
          <button
            id="btn-reset-jenjang-filter"
            type="button"
            onClick={() => onSelectJenjang('ALL')}
            className="self-start sm:self-center text-xs font-medium text-stone-600 hover:text-stone-900 underline underline-offset-4"
          >
            Tampilkan Semua Jenjang
          </button>
        </div>
      )}
    </div>
  );
};
