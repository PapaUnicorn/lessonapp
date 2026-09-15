import React, { useState, useMemo } from 'react';
import { JenjangType, LearningItem } from './types';
import { LEARNING_DATA, JENJANG_CONFIG } from './data/learningData';
import { getSubjectIcon } from './utils/iconHelper';
import { LogoSD, LogoSMP, LogoSMA } from './components/SchoolLogos';
import { ArrowLeft, ExternalLink, Sparkles } from 'lucide-react';

export default function App() {
  // State: null means on the initial landing state with 3 large centered hero buttons (SD, SMP, SMA)
  const [currentJenjang, setCurrentJenjang] = useState<JenjangType | null>(null);

  // Counts of subjects per jenjang
  const counts = useMemo(() => {
    return {
      SD: LEARNING_DATA.filter((i) => i.jenjang === 'SD').length,
      SMP: LEARNING_DATA.filter((i) => i.jenjang === 'SMP').length,
      SMA: LEARNING_DATA.filter((i) => i.jenjang === 'SMA').length,
    };
  }, []);

  // Filtered items when a jenjang is active
  const activeItems = useMemo(() => {
    if (!currentJenjang) return [];
    return LEARNING_DATA.filter((item) => item.jenjang === currentJenjang);
  }, [currentJenjang]);

  const activeConfig = currentJenjang ? JENJANG_CONFIG[currentJenjang] : null;

  return (
    <div id="app-root" className="min-h-screen bg-[#2f557f] text-white flex flex-col font-sans selection:bg-[#ffa92d] selection:text-[#172d45] relative">
      {/* Subtle ambient lighting for depth on denim background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_15%,rgba(61,107,157,0.5),transparent_70%)] pointer-events-none" />

      {/* INITIAL SCREEN: Only 3 large centered hero buttons (SD, SMP, SMA) */}
      {currentJenjang === null ? (
        <div
          id="landing-hero-screen"
          className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 py-12 max-w-4xl mx-auto w-full text-center"
        >
          {/* Header */}
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#203c5d] border border-[#ffa92d]/40 text-[#ffa92d] text-xs font-bold uppercase tracking-wider mb-4 shadow-xs">
              <Sparkles className="w-3.5 h-3.5 text-[#ffa92d]" />
              <span>Kurikulum Merdeka & Interaktif</span>
            </div>
            <h1 id="landing-title" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight">
              Portal Belajar <span className="text-[#ffa92d]">Interaktif</span>
            </h1>
            <p id="landing-subtext" className="mt-3 text-[#d2e4f7] text-sm sm:text-base max-w-md mx-auto leading-relaxed">
              Pilih jenjang sekolah kamu untuk mengakses materi dan aplikasi simulasi pembelajaran:
            </p>
          </div>

          {/* Three Large Centered Hero Buttons */}
          <div id="hero-buttons-container" className="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8 w-full max-w-3xl">
            {/* HERO BUTTON SD */}
            <button
              id="hero-btn-sd"
              type="button"
              onClick={() => setCurrentJenjang('SD')}
              className="group relative flex flex-col items-center justify-between p-7 sm:p-9 rounded-3xl bg-[#203c5d] border-2 border-[#446f9e] hover:border-[#ffa92d] hover:bg-[#1a334f] hover:shadow-2xl hover:shadow-[#ffa92d]/20 transition-all duration-200 cursor-pointer text-center"
            >
              {/* White Pedestal for School Logo */}
              <div className="w-32 h-36 rounded-2xl bg-white/95 border border-white/40 flex items-center justify-center p-3 shadow-md group-hover:scale-105 group-hover:bg-white transition-all mb-4">
                <LogoSD className="w-full h-full drop-shadow-sm" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ffa92d] transition-colors">
                  Sekolah Dasar
                </h2>
                <span className="inline-block text-xs font-extrabold text-[#172d45] bg-[#ffa92d] px-3 py-1 rounded-lg mt-2 uppercase tracking-wider shadow-xs">
                  Kelas 1 - 6
                </span>
                <p className="text-xs text-[#b8d4f1] mt-2 font-medium">
                  {counts.SD} Mata Pelajaran
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#ffa92d] group-hover:translate-x-0.5 transition-transform">
                  <span>Pilih Jenjang</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>

            {/* HERO BUTTON SMP */}
            <button
              id="hero-btn-smp"
              type="button"
              onClick={() => setCurrentJenjang('SMP')}
              className="group relative flex flex-col items-center justify-between p-7 sm:p-9 rounded-3xl bg-[#203c5d] border-2 border-[#446f9e] hover:border-[#ffa92d] hover:bg-[#1a334f] hover:shadow-2xl hover:shadow-[#ffa92d]/20 transition-all duration-200 cursor-pointer text-center"
            >
              {/* White Pedestal for School Logo */}
              <div className="w-32 h-36 rounded-2xl bg-white/95 border border-white/40 flex items-center justify-center p-3 shadow-md group-hover:scale-105 group-hover:bg-white transition-all mb-4">
                <LogoSMP className="w-full h-full drop-shadow-sm" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ffa92d] transition-colors">
                  SMP
                </h2>
                <span className="inline-block text-xs font-extrabold text-[#172d45] bg-[#ffa92d] px-3 py-1 rounded-lg mt-2 uppercase tracking-wider shadow-xs">
                  Kelas 7 - 9
                </span>
                <p className="text-xs text-[#b8d4f1] mt-2 font-medium">
                  {counts.SMP} Mata Pelajaran
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#ffa92d] group-hover:translate-x-0.5 transition-transform">
                  <span>Pilih Jenjang</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>

            {/* HERO BUTTON SMA */}
            <button
              id="hero-btn-sma"
              type="button"
              onClick={() => setCurrentJenjang('SMA')}
              className="group relative flex flex-col items-center justify-between p-7 sm:p-9 rounded-3xl bg-[#203c5d] border-2 border-[#446f9e] hover:border-[#ffa92d] hover:bg-[#1a334f] hover:shadow-2xl hover:shadow-[#ffa92d]/20 transition-all duration-200 cursor-pointer text-center"
            >
              {/* White Pedestal for School Logo */}
              <div className="w-32 h-36 rounded-2xl bg-white/95 border border-white/40 flex items-center justify-center p-3 shadow-md group-hover:scale-105 group-hover:bg-white transition-all mb-4">
                <LogoSMA className="w-full h-full drop-shadow-sm" />
              </div>
              <div className="w-full flex flex-col items-center">
                <h2 className="text-xl sm:text-2xl font-black text-white group-hover:text-[#ffa92d] transition-colors">
                  SMA
                </h2>
                <span className="inline-block text-xs font-extrabold text-[#172d45] bg-[#ffa92d] px-3 py-1 rounded-lg mt-2 uppercase tracking-wider shadow-xs">
                  Kelas 10 - 12
                </span>
                <p className="text-xs text-[#b8d4f1] mt-2 font-medium">
                  {counts.SMA} Mata Pelajaran
                </p>
                <div className="mt-4 flex items-center gap-1.5 text-xs font-bold text-[#ffa92d] group-hover:translate-x-0.5 transition-transform">
                  <span>Pilih Jenjang</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </div>
              </div>
            </button>
          </div>
        </div>
      ) : (
        /* DETAIL SCREEN: Linear Subject List with Icon, TP Description, & Links on the right */
        <div id="detail-screen" className="relative z-10 flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
          {/* Top Bar: Back button and active Jenjang indicator */}
          <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#446f9e]/60">
            <button
              id="btn-back-to-home"
              type="button"
              onClick={() => setCurrentJenjang(null)}
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#203c5d] border border-[#446f9e] hover:border-[#ffa92d] hover:text-[#ffa92d] transition-all shadow-sm cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-[#ffa92d]" />
              <span>Kembali ke Pilihan Jenjang</span>
            </button>

            {/* Current badge */}
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-9 rounded-lg bg-white/95 p-1 border border-white/40 flex items-center justify-center flex-shrink-0 shadow-2xs">
                {currentJenjang === 'SD' && <LogoSD className="w-full h-full" />}
                {currentJenjang === 'SMP' && <LogoSMP className="w-full h-full" />}
                {currentJenjang === 'SMA' && <LogoSMA className="w-full h-full" />}
              </div>
              <span className="px-3.5 py-1.5 rounded-lg text-xs font-black text-[#172d45] bg-[#ffa92d] shadow-sm tracking-wide">
                {currentJenjang}
              </span>
              <span className="text-xs font-bold text-[#d2e4f7] hidden sm:inline">
                {activeConfig?.gradeLevels}
              </span>
            </div>
          </div>

          {/* Page Heading */}
          <div className="mb-6 flex items-center gap-4">
            <div className="w-16 h-18 rounded-2xl bg-white/95 p-2 shadow-md border border-white/40 hidden sm:flex items-center justify-center flex-shrink-0">
              {currentJenjang === 'SD' && <LogoSD className="w-full h-full" />}
              {currentJenjang === 'SMP' && <LogoSMP className="w-full h-full" />}
              {currentJenjang === 'SMA' && <LogoSMA className="w-full h-full" />}
            </div>
            <div>
              <h1 id="subject-list-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                Mata Pelajaran <span className="text-[#ffa92d]">{activeConfig?.title}</span>
              </h1>
              <p className="text-xs sm:text-sm text-[#b8d4f1] mt-1">
                Daftar mata pelajaran beserta deskripsi Tujuan Pembelajaran (TP) dan link interaktif langsung.
              </p>
            </div>
          </div>

          {/* List of Subjects: Left Icon + Name, Middle TP Description, Right Link Buttons */}
          <div id="subject-list-container" className="space-y-4">
            {activeItems.map((item: LearningItem) => (
              <div
                key={item.id}
                id={`item-row-${item.id}`}
                className="p-5 sm:p-6 rounded-2xl bg-[#203c5d] border border-[#446f9e] hover:border-[#ffa92d] hover:shadow-xl hover:shadow-[#ffa92d]/10 transition-all flex flex-col md:flex-row md:items-center justify-between gap-5 group"
              >
                {/* 1. Icon & Subject Name */}
                <div className="flex items-center gap-4 min-w-[220px] md:max-w-[240px]">
                  <div className="w-14 h-14 rounded-2xl bg-[#ffa92d] text-[#172d45] flex items-center justify-center flex-shrink-0 shadow-md font-bold">
                    {getSubjectIcon(item.icon, { className: 'w-7 h-7 text-[#172d45]' })}
                  </div>
                  <div>
                    <h2 className="font-extrabold text-base sm:text-lg text-white leading-snug group-hover:text-[#ffa92d] transition-colors">
                      {item.mataPelajaran}
                    </h2>
                    <span className="text-[11px] font-bold text-[#ffa92d] bg-[#2f557f] border border-[#ffa92d]/40 px-2.5 py-0.5 rounded-md uppercase tracking-wider inline-block mt-1">
                      {item.categoryGroup}
                    </span>
                  </div>
                </div>

                {/* 2. TP (Tujuan Pembelajaran) Description in the middle */}
                <div className="flex-1 md:px-4 md:border-l md:border-[#446f9e]/60">
                  <div className="flex items-center gap-1.5 text-[11px] font-extrabold text-[#ffa92d] uppercase tracking-wider mb-1">
                    <Sparkles className="w-3.5 h-3.5 text-[#ffa92d] flex-shrink-0" />
                    <span>Deskripsi TP (Tujuan Pembelajaran):</span>
                  </div>
                  <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed">
                    {item.fokus}
                  </p>
                  <p className="text-xs text-[#b8d4f1] mt-1 leading-normal">
                    {item.deskripsiRingkas}
                  </p>
                </div>

                {/* 3. Link buttons on the right */}
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
          <div className="mt-8 text-center text-xs text-[#b8d4f1] flex items-center justify-center gap-1.5">
            <Sparkles className="w-3.5 h-3.5 text-[#ffa92d]" />
            <span>Semua simulasi dan materi pembelajaran dapat diakses langsung tanpa registrasi akun.</span>
          </div>
        </div>
      )}
    </div>
  );
}
