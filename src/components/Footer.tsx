import React from 'react';
import { MessageCircle, Heart, ShieldCheck, Sparkles, Flame, Code2 } from 'lucide-react';

interface FooterProps {
  onOpenQris: () => void;
  isQrisPage?: boolean;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQris, isQrisPage = false }) => {
  const whatsappUrl =
    'https://wa.me/628115973500?text=' +
    encodeURIComponent(
      'Halo EDUNEXUS INDONESIA, saya ingin menyampaikan kritik dan saran mengenai Portal Belajar Interaktif:'
    );

  return (
    <footer
      id="edunexus-footer"
      className="relative z-10 w-full mt-auto border-t border-[#446f9e]/70 bg-[#1a324d]/95 backdrop-blur-md text-white transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center text-center gap-5">
        
        {/* Main Sentence requested by user + EDUNEXUS Official Logo */}
        <div className="flex items-center justify-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-white/95 p-1 border border-white/40 shadow-xs flex items-center justify-center flex-shrink-0">
            <img
              src="/edunexus-logo.svg"
              alt="EDUNEXUS Logo"
              className="w-full h-full object-contain"
            />
          </div>
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#14263b] border border-[#ffa92d]/40 shadow-2xs">
            <ShieldCheck className="w-4 h-4 text-[#ffa92d]" />
            <span className="text-xs sm:text-sm font-extrabold tracking-wide text-white">
              Aplikasi ini disediakan oleh{' '}
              <span className="text-[#ffa92d] font-black uppercase">
                EDUNEXUS INDONESIA
              </span>
              .
            </span>
          </div>
        </div>

        {/* Action Buttons: 'Kritik dan Saran' & 'Dukung Kami' */}
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* WhatsApp 'Kritik dan Saran' Button */}
          <a
            id="btn-footer-kritik-saran"
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-[#172d45] bg-[#ffa92d] hover:bg-[#ffb84e] active:bg-[#e6921b] border border-[#ffa92d] shadow-sm hover:shadow-md hover:shadow-[#ffa92d]/25 transition-all cursor-pointer group"
          >
            <MessageCircle className="w-4 h-4 text-[#172d45] group-hover:scale-110 transition-transform" />
            <span>Kritik dan Saran</span>
          </a>

          {/* 'Dukung Kami' Button */}
          {!isQrisPage ? (
            <button
              id="btn-footer-dukung-kami"
              type="button"
              onClick={onOpenQris}
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#203c5d] hover:bg-[#284b74] hover:border-[#ffa92d] border border-[#446f9e] shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <Heart className="w-4 h-4 text-[#ffa92d] group-hover:scale-110 transition-transform fill-[#ffa92d]/20" />
              <span>Dukung Kami</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#14263b] border border-[#446f9e]/60 text-xs font-semibold text-[#b8d4f1]">
              <Sparkles className="w-3.5 h-3.5 text-[#ffa92d]" />
              <span>Halaman Donasi &amp; QRIS</span>
            </div>
          )}
        </div>

        {/* Framework signature note: CodeIgniter / Laravel / Tailwind CSS */}
        <div className="flex flex-wrap items-center justify-center gap-2 text-[11px] text-[#9bbddf] font-mono pt-1">
          <span className="flex items-center gap-1">
            <Flame className="w-3 h-3 text-[#ff5c38]" />
            <span>CodeIgniter &amp; Laravel UI</span>
          </span>
          <span className="text-[#446f9e]">•</span>
          <span className="text-[#38bdf8] font-semibold">Tailwind CSS</span>
          <span className="text-[#446f9e]">•</span>
          <span className="text-[#d2e4f7]">Kurikulum Merdeka 2024/2025</span>
        </div>

        {/* Small subtitle notice */}
        <p className="text-[11px] sm:text-xs text-[#b8d4f1]/80 max-w-xl leading-relaxed">
          Platform pembelajaran kurikulum merdeka dengan simulasi interaktif untuk siswa dan guru di seluruh Indonesia.
        </p>

      </div>
    </footer>
  );
};
