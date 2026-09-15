import React, { useState, useMemo, useEffect } from 'react';
import { JenjangType, LearningItem } from './types';
import { LEARNING_DATA } from './data/learningData';
import { getSubjectIcon } from './utils/iconHelper';
import { LogoSD, LogoSMP, LogoSMA } from './components/SchoolLogos';
import { 
  ExternalLink, 
  Sparkles, 
  ChevronRight
} from 'lucide-react';
import { Navbar } from './components/Navbar';
import { QrisPage } from './components/QrisPage';

export default function App() {
  // State: null means on the initial landing state with 3 large centered hero buttons (SD, SMP, SMA)
  const [currentJenjang, setCurrentJenjang] = useState<JenjangType | null>(null);

  const [isQrisPage, setIsQrisPage] = useState<boolean>(() => {
    if (typeof window !== 'undefined') {
      return window.location.hash === '#dukung-kami' || window.location.hash === '#qris';
    }
    return false;
  });

  // Handle URL hash changes
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#dukung-kami' || window.location.hash === '#qris') {
        setIsQrisPage(true);
      } else if (isQrisPage && window.location.hash === '') {
        setIsQrisPage(false);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, [isQrisPage]);

  const handleOpenQris = () => {
    setIsQrisPage(true);
    if (typeof window !== 'undefined') {
      window.location.hash = '#dukung-kami';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleBackFromQris = () => {
    setIsQrisPage(false);
    if (typeof window !== 'undefined') {
      if (window.location.hash === '#dukung-kami' || window.location.hash === '#qris') {
        history.pushState(null, '', window.location.pathname + window.location.search);
      }
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectJenjang = (jenjang: JenjangType | null) => {
    if (isQrisPage) {
      handleBackFromQris();
    }
    setCurrentJenjang(jenjang);
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // Counts of subjects per jenjang
  const counts = useMemo(() => {
    return {
      SD: LEARNING_DATA.filter((i) => i.jenjang === 'SD').length,
      SMP: LEARNING_DATA.filter((i) => i.jenjang === 'SMP').length,
      SMA: LEARNING_DATA.filter((i) => i.jenjang === 'SMA').length,
    };
  }, []);

  // Items for the active jenjang
  const filteredItems = useMemo(() => {
    if (!currentJenjang) return [];
    return LEARNING_DATA.filter((item) => item.jenjang === currentJenjang);
  }, [currentJenjang]);

  return (
    <div id="app-root" className="min-h-screen bg-[#24466b] text-white flex flex-col font-sans selection:bg-[#ffa92d] selection:text-[#172d45] relative">
      {/* Subtle ambient lighting with developer grid pattern for Laravel/CodeIgniter/Tailwind touch */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:32px_32px] pointer-events-none" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(61,107,157,0.45),transparent_75%)] pointer-events-none" />

      {/* TOP HEADER / NAVBAR with EDUNEXUS Logo */}
      <Navbar
        currentJenjang={currentJenjang}
        onSelectJenjang={handleSelectJenjang}
        onOpenQris={handleOpenQris}
        isQrisPage={isQrisPage}
      />

      {/* SCREEN VIEW LOGIC */}
      {isQrisPage ? (
        <QrisPage onBack={handleBackFromQris} />
      ) : currentJenjang === null ? (
        /* INITIAL SCREEN: 3 large centered hero buttons (SD, SMP, SMA) */
        <div
          id="landing-hero-screen"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16 max-w-5xl mx-auto w-full text-center my-auto"
        >
          {/* THREE LARGE CENTERED HERO BUTTONS (SD, SMP, SMA) */}
          <div id="hero-buttons-container" className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-4xl">
            
            {/* HERO BUTTON SD */}
            <button
              id="hero-btn-sd"
              type="button"
              onClick={() => handleSelectJenjang('SD')}
              className="group relative flex flex-col items-center justify-between p-7 sm:p-8 rounded-3xl bg-[#1c3552] border-2 border-[#446f9e] hover:border-[#ffa92d] hover:bg-[#162b42] hover:shadow-2xl hover:shadow-[#ffa92d]/20 transition-all duration-200 cursor-pointer text-center overflow-hidden"
            >
              {/* Subtle top sheen border (Laravel style) */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffa92d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* White Pedestal for School Logo */}
              <div className="w-32 h-36 rounded-2xl bg-white/95 border border-white/40 flex items-center justify-center p-3 shadow-md group-hover:scale-105 group-hover:bg-white transition-all mb-4">
                <LogoSD className="w-full h-full drop-shadow-sm" />
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#9ec1e6] uppercase tracking-wider mb-1">
                  <span>Fase A • B • C</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ffa92d] transition-colors">
                  Sekolah Dasar
                </h2>
                <span className="inline-block text-xs font-extrabold text-[#172d45] bg-[#ffa92d] px-3 py-1 rounded-lg mt-2 uppercase tracking-wider shadow-xs">
                  Kelas 1 - 6
                </span>
                <p className="text-xs text-[#b8d4f1] mt-2 font-medium">
                  {counts.SD} Mata Pelajaran &amp; TP
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffa92d] group-hover:translate-x-1 transition-transform">
                  <span>Masuk Jenjang SD</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* HERO BUTTON SMP */}
            <button
              id="hero-btn-smp"
              type="button"
              onClick={() => handleSelectJenjang('SMP')}
              className="group relative flex flex-col items-center justify-between p-7 sm:p-8 rounded-3xl bg-[#1c3552] border-2 border-[#446f9e] hover:border-[#ffa92d] hover:bg-[#162b42] hover:shadow-2xl hover:shadow-[#ffa92d]/20 transition-all duration-200 cursor-pointer text-center overflow-hidden"
            >
              {/* Subtle top sheen border */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffa92d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* White Pedestal for School Logo */}
              <div className="w-32 h-36 rounded-2xl bg-white/95 border border-white/40 flex items-center justify-center p-3 shadow-md group-hover:scale-105 group-hover:bg-white transition-all mb-4">
                <LogoSMP className="w-full h-full drop-shadow-sm" />
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#9ec1e6] uppercase tracking-wider mb-1">
                  <span>Fase D</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ffa92d] transition-colors">
                  SMP
                </h2>
                <span className="inline-block text-xs font-extrabold text-[#172d45] bg-[#ffa92d] px-3 py-1 rounded-lg mt-2 uppercase tracking-wider shadow-xs">
                  Kelas 7 - 9
                </span>
                <p className="text-xs text-[#b8d4f1] mt-2 font-medium">
                  {counts.SMP} Mata Pelajaran &amp; TP
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffa92d] group-hover:translate-x-1 transition-transform">
                  <span>Masuk Jenjang SMP</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>

            {/* HERO BUTTON SMA */}
            <button
              id="hero-btn-sma"
              type="button"
              onClick={() => handleSelectJenjang('SMA')}
              className="group relative flex flex-col items-center justify-between p-7 sm:p-8 rounded-3xl bg-[#1c3552] border-2 border-[#446f9e] hover:border-[#ffa92d] hover:bg-[#162b42] hover:shadow-2xl hover:shadow-[#ffa92d]/20 transition-all duration-200 cursor-pointer text-center overflow-hidden"
            >
              {/* Subtle top sheen border */}
              <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#ffa92d]/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* White Pedestal for School Logo */}
              <div className="w-32 h-36 rounded-2xl bg-white/95 border border-white/40 flex items-center justify-center p-3 shadow-md group-hover:scale-105 group-hover:bg-white transition-all mb-4">
                <LogoSMA className="w-full h-full drop-shadow-sm" />
              </div>

              <div className="w-full flex flex-col items-center">
                <div className="flex items-center gap-1.5 text-[11px] font-mono text-[#9ec1e6] uppercase tracking-wider mb-1">
                  <span>Fase E • F</span>
                </div>
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ffa92d] transition-colors">
                  SMA
                </h2>
                <span className="inline-block text-xs font-extrabold text-[#172d45] bg-[#ffa92d] px-3 py-1 rounded-lg mt-2 uppercase tracking-wider shadow-xs">
                  Kelas 10 - 12
                </span>
                <p className="text-xs text-[#b8d4f1] mt-2 font-medium">
                  {counts.SMA} Mata Pelajaran &amp; TP
                </p>
                <div className="mt-4 inline-flex items-center gap-1.5 text-xs font-bold text-[#ffa92d] group-hover:translate-x-1 transition-transform">
                  <span>Masuk Jenjang SMA</span>
                  <ChevronRight className="w-4 h-4" />
                </div>
              </div>
            </button>

          </div>
        </div>
      ) : (
        /* DETAIL SCREEN: Linear Subject List */
        <div id="detail-screen" className="relative z-10 flex-1 max-w-5xl mx-auto px-4 sm:px-6 py-8 w-full">
          
          {/* List of Subjects: cards with TP Description and Links */}
          <div id="subject-list-container" className="space-y-4">
            {filteredItems.map((item: LearningItem, index: number) => (
              <div
                key={item.id}
                id={`item-row-${item.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-[#1c3552] border border-[#446f9e] hover:border-[#ffa92d] hover:shadow-xl hover:shadow-[#ffa92d]/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group relative overflow-hidden"
              >
                {/* Subtle top indicator bar */}
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#ffa92d]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />

                {/* 1. Icon & Subject Name */}
                <div className="flex items-center gap-4 min-w-[220px] md:max-w-[240px]">
                  <div className="w-14 h-14 rounded-2xl bg-[#ffa92d] text-[#172d45] flex items-center justify-center flex-shrink-0 shadow-md font-bold group-hover:scale-105 transition-transform">
                    {getSubjectIcon(item.icon, { className: 'w-7 h-7 text-[#172d45]' })}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono text-[#9ec1e6] uppercase">
                      MODUL #{index + 1 < 10 ? `0${index + 1}` : index + 1}
                    </div>
                    <h2 className="font-extrabold text-base sm:text-lg text-white leading-snug group-hover:text-[#ffa92d] transition-colors">
                      {item.mataPelajaran}
                    </h2>
                    <span className="text-[10px] font-bold text-[#ffa92d] bg-[#14263b] border border-[#ffa92d]/40 px-2 py-0.5 rounded-md uppercase tracking-wider inline-block mt-1">
                      {item.categoryGroup}
                    </span>
                  </div>
                </div>

                {/* 2. TP (Tujuan Pembelajaran) in styled code/doc box */}
                <div className="flex-1 md:px-4 md:border-l md:border-[#446f9e]/60">
                  <div className="p-3.5 rounded-xl bg-[#14263b]/90 border border-[#446f9e]/40">
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <div className="flex items-center gap-1.5 text-[11px] font-mono font-bold text-[#ffa92d] uppercase tracking-wider">
                        <Sparkles className="w-3.5 h-3.5 text-[#ffa92d] flex-shrink-0" />
                        <span>Tujuan Pembelajaran (TP):</span>
                      </div>
                      <span className="text-[10px] font-mono text-[#9ec1e6] hidden sm:inline">
                        Kurikulum Merdeka
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                      {item.fokus}
                    </p>
                    <p className="text-xs text-[#b8d4f1] mt-1.5 leading-relaxed">
                      {item.deskripsiRingkas}
                    </p>
                  </div>
                </div>

                {/* 3. Direct Link action buttons on the right */}
                <div className="flex flex-col sm:flex-row md:flex-col lg:flex-row items-stretch md:items-end lg:items-center gap-2 flex-shrink-0 md:min-w-[210px]">
                  {item.tools.map((tool, idx) => (
                    <a
                      key={idx}
                      id={`link-${item.id}-${idx}`}
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-between sm:justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-extrabold text-[#172d45] bg-[#ffa92d] hover:bg-[#ffb84e] active:bg-[#e6921b] border border-[#ffa92d] hover:shadow-md hover:shadow-[#ffa92d]/30 transition-all shadow-xs group/btn cursor-pointer"
                    >
                      <span>{tool.name}</span>
                      <ExternalLink className="w-3.5 h-3.5 text-[#172d45] group-hover/btn:translate-x-0.5 transition-transform" />
                    </a>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Simple Bottom Tip */}
          <div className="mt-8 text-center text-xs text-[#b8d4f1] flex items-center justify-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#ffa92d]" />
            <span>Semua simulasi dan materi pembelajaran dapat diakses langsung tanpa registrasi akun.</span>
          </div>

        </div>
      )}
    </div>
  );
}
