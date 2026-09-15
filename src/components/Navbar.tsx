import React from 'react';
import { JenjangType } from '../types';
import { MessageCircle, Heart, ArrowLeft } from 'lucide-react';

interface NavbarProps {
  currentJenjang: JenjangType | null;
  onSelectJenjang: (jenjang: JenjangType | null) => void;
  onOpenQris: () => void;
  isQrisPage?: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({
  currentJenjang,
  onSelectJenjang,
  onOpenQris,
  isQrisPage = false,
}) => {
  const whatsappUrl =
    'https://wa.me/628115973500?text=' +
    encodeURIComponent(
      'Halo EDUNEXUS INDONESIA, saya ingin menyampaikan kritik dan saran mengenai Portal Belajar Interaktif:'
    );

  return (
    <header
      id="main-app-header"
      className="sticky top-0 z-40 w-full border-b border-[#446f9e]/70 bg-[#1d3552]/90 backdrop-blur-md text-white transition-all shadow-sm"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 sm:h-18">
          
          {/* Brand Logo & Platform Name */}
          <div
            id="brand-logo-container"
            onClick={() => onSelectJenjang(null)}
            className="flex items-center gap-3 cursor-pointer group"
          >
            {/* Real EDUNEXUS Logo */}
            <div
              id="brand-logo-badge"
              className="relative w-9 h-9 sm:w-10 sm:h-10 rounded-xl bg-white/95 p-1 border border-white/40 shadow-sm flex items-center justify-center flex-shrink-0 group-hover:scale-105 group-hover:shadow-md transition-all duration-200"
            >
              <img
                src="/edunexus-logo.svg"
                alt="EDUNEXUS Logo"
                className="w-full h-full object-contain"
              />
              {/* Subtle status pulse dot */}
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500 border border-white"></span>
              </span>
            </div>

            <div>
              <div className="flex items-center gap-2">
                <span id="brand-title" className="text-base sm:text-lg font-black tracking-tight text-white group-hover:text-[#ffa92d] transition-colors">
                  EDUNEXUS
                </span>
                <span className="text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-md bg-[#ffa92d] text-[#172d45] tracking-wider hidden sm:inline-block shadow-2xs">
                  Portal Belajar
                </span>
              </div>
              <p className="text-[11px] text-[#b8d4f1] font-medium hidden md:block">
                Katalog Interaktif Jenjang SD • SMP • SMA
              </p>
            </div>
          </div>

          {/* Navigation & Action Buttons */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Back to Home Button when a jenjang is active */}
            {currentJenjang !== null && !isQrisPage && (
              <button
                id="navbar-btn-home"
                type="button"
                onClick={() => onSelectJenjang(null)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-[#203c5d] hover:bg-[#284b74] hover:text-[#ffa92d] border border-[#446f9e] transition-all cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5 text-[#ffa92d]" />
                <span>Pilih Jenjang</span>
              </button>
            )}

            {/* WhatsApp 'Kritik & Saran' */}
            <a
              id="navbar-btn-kritik-saran"
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-bold text-white bg-[#203c5d] hover:bg-[#284b74] hover:border-[#ffa92d] border border-[#446f9e] transition-all shadow-2xs"
              title="Hubungi kami melalui WhatsApp"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#ffa92d]" />
              <span className="hidden sm:inline">Kritik &amp; Saran</span>
            </a>

            {/* 'Dukung Kami' (QRIS) */}
            <button
              id="navbar-btn-dukung-kami"
              type="button"
              onClick={onOpenQris}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 sm:px-3.5 sm:py-2 rounded-lg text-xs font-extrabold transition-all shadow-sm cursor-pointer ${
                isQrisPage
                  ? 'bg-[#ffa92d] text-[#172d45] border border-[#ffa92d]'
                  : 'bg-[#ffa92d] text-[#172d45] hover:bg-[#ffb84e] border border-[#ffa92d]'
              }`}
            >
              <Heart className="w-3.5 h-3.5 fill-[#172d45]" />
              <span>Dukung Kami</span>
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};
