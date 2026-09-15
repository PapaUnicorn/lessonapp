import React from 'react';
import { MessageCircle, Heart, ShieldCheck, Sparkles } from 'lucide-react';

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
      className="relative z-10 w-full mt-auto border-t border-[#446f9e]/70 bg-[#203c5d]/95 backdrop-blur-md text-white transition-colors"
    >
      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-6 sm:py-8 flex flex-col items-center text-center gap-5">
        
        {/* Main Sentence requested by user */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#19314c] border border-[#ffa92d]/40 shadow-2xs">
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
              className="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-extrabold text-white bg-[#2f557f] hover:bg-[#386596] hover:border-[#ffa92d] border border-[#446f9e] shadow-sm hover:shadow-md transition-all cursor-pointer group"
            >
              <Heart className="w-4 h-4 text-[#ffa92d] group-hover:scale-110 transition-transform fill-[#ffa92d]/20" />
              <span>Dukung Kami</span>
            </button>
          ) : (
            <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#19314c] border border-[#446f9e]/60 text-xs font-semibold text-[#b8d4f1]">
              <Sparkles className="w-3.5 h-3.5 text-[#ffa92d]" />
              <span>Halaman Donasi &amp; QRIS</span>
            </div>
          )}
        </div>

        {/* Small subtitle notice */}
        <p className="text-[11px] sm:text-xs text-[#b8d4f1]/80 max-w-xl leading-relaxed">
          Platform pembelajaran kurikulum merdeka dengan simulasi interaktif untuk siswa dan guru di seluruh Indonesia.
        </p>

      </div>
    </footer>
  );
};
