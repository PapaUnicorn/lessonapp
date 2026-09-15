import React, { useState, useRef } from 'react';
import { ArrowLeft, Download, Copy, Check, ShieldCheck, Heart, Sparkles, Smartphone, CheckCircle2, MessageCircle } from 'lucide-react';

interface QrisPageProps {
  onBack: () => void;
}

export const QrisPage: React.FC<QrisPageProps> = ({ onBack }) => {
  const [copied, setCopied] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const svgRef = useRef<SVGSVGElement | null>(null);

  const NMID = 'ID1025429260991';

  const handleCopyNMID = async () => {
    try {
      await navigator.clipboard.writeText(NMID);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      // Fallback
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  const handleDownloadJPEG = () => {
    setIsDownloading(true);
    try {
      // If SVG element is available, render it onto an offscreen canvas and download as JPEG
      const svgElement = svgRef.current;
      if (!svgElement) {
        // Fallback to direct link
        const a = document.createElement('a');
        a.href = '/edunexus-indonesia-qris-code.jpeg';
        a.download = 'edunexus indonesia qris code.jpeg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setIsDownloading(false);
        return;
      }

      const svgString = new XMLSerializer().serializeToString(svgElement);
      const svgBlob = new Blob([svgString], { type: 'image/svg+xml;charset=utf-8' });
      const blobURL = window.URL.createObjectURL(svgBlob);

      const image = new Image();
      image.onload = () => {
        const canvas = document.createElement('canvas');
        canvas.width = 1200; // high-res
        canvas.height = 1700;
        const ctx = canvas.getContext('2d');
        if (ctx) {
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.drawImage(image, 0, 0, canvas.width, canvas.height);

          canvas.toBlob((blob) => {
            if (blob) {
              const downloadUrl = window.URL.createObjectURL(blob);
              const a = document.createElement('a');
              a.href = downloadUrl;
              a.download = 'edunexus indonesia qris code.jpeg';
              document.body.appendChild(a);
              a.click();
              document.body.removeChild(a);
              window.URL.revokeObjectURL(downloadUrl);
            }
            window.URL.revokeObjectURL(blobURL);
            setIsDownloading(false);
          }, 'image/jpeg', 0.95);
        } else {
          setIsDownloading(false);
        }
      };
      image.onerror = () => {
        // Direct link fallback
        const a = document.createElement('a');
        a.href = '/edunexus-indonesia-qris-code.jpeg';
        a.download = 'edunexus indonesia qris code.jpeg';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        setIsDownloading(false);
      };
      image.src = blobURL;
    } catch {
      const a = document.createElement('a');
      a.href = '/edunexus-indonesia-qris-code.jpeg';
      a.download = 'edunexus indonesia qris code.jpeg';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      setIsDownloading(false);
    }
  };

  const whatsappUrl =
    'https://wa.me/628115973500?text=' +
    encodeURIComponent('Halo EDUNEXUS INDONESIA, saya telah melakukan donasi / ingin mendukung portal belajar:');

  return (
    <div id="qris-page-container" className="relative z-10 flex-1 max-w-4xl mx-auto px-4 sm:px-6 py-8 w-full">
      {/* Top Bar: Back Button */}
      <div className="flex items-center justify-between pb-6 mb-8 border-b border-[#446f9e]/60">
        <button
          id="btn-back-from-qris"
          type="button"
          onClick={onBack}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#203c5d] border border-[#446f9e] hover:border-[#ffa92d] hover:text-[#ffa92d] transition-all shadow-sm cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4 text-[#ffa92d]" />
          <span>Kembali ke Portal Belajar</span>
        </button>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#203c5d] border border-[#ffa92d]/40 text-xs font-bold text-[#ffa92d]">
          <Heart className="w-3.5 h-3.5 fill-[#ffa92d]" />
          <span>Dukung EduNexus Indonesia</span>
        </div>
      </div>

      {/* Page Heading */}
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#203c5d] border border-[#ffa92d]/40 text-[#ffa92d] text-xs font-bold uppercase tracking-wider mb-3">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Donasi &amp; Pengembangan Pendidikan</span>
        </div>
        <h1 className="text-2xl sm:text-4xl font-extrabold text-white tracking-tight">
          Dukung <span className="text-[#ffa92d]">EDUNEXUS INDONESIA</span>
        </h1>
        <p className="mt-2 text-[#d2e4f7] text-xs sm:text-sm max-w-xl mx-auto leading-relaxed">
          Bantuan dan donasi sukarela Anda sangat berharga untuk pemeliharaan server, pengembangan untuk penyediaan lebih banyak lagi aplikasi, dan penyediaan media belajar interaktif bebas biaya bagi sekolah-sekolah dengan keterbatasan sumber daya finansial, dan demi generasi penerus bangsa.
        </p>
      </div>

      {/* Main Grid: QRIS Standee Poster on Left/Center + Information & Actions on Right */}
      <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
        
        {/* QRIS Poster Standee Container */}
        <div className="md:col-span-7 flex flex-col items-center">
          <div
            id="qris-card-wrapper"
            className="w-full max-w-[420px] bg-white text-stone-900 rounded-3xl shadow-2xl p-5 sm:p-6 border-4 border-[#ffa92d] relative overflow-hidden transition-transform duration-200 hover:scale-[1.01]"
          >
            {/* Red Geometric Polygon on Top-Left */}
            <div
              className="absolute -top-10 -left-10 w-28 h-28 bg-[#e1251b] rotate-45 pointer-events-none opacity-90"
              style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%)' }}
            />

            {/* Standee SVG (exact match to EDUNEXUS INDONESIA QRIS CODE.jpeg) */}
            <svg
              ref={svgRef}
              viewBox="0 0 600 850"
              className="w-full h-auto drop-shadow-xs"
              style={{
                backgroundColor: '#ffffff',
                fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif",
              }}
            >
              <defs>
                {/* Traditional Batik Kawung Pattern watermark */}
                <pattern id="batik-pattern" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="20" r="16" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
                  <circle cx="0" cy="0" r="16" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
                  <circle cx="40" cy="0" r="16" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
                  <circle cx="0" cy="40" r="16" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
                  <circle cx="40" cy="40" r="16" fill="none" stroke="#f0f0f0" strokeWidth="1.5" />
                  <rect x="18" y="18" width="4" height="4" fill="#ebebeb" />
                </pattern>
              </defs>

              {/* Background */}
              <rect width="600" height="850" fill="#ffffff" />
              <rect width="600" height="850" fill="url(#batik-pattern)" />

              {/* Red Geometric Polygon Accent Left Edge */}
              <polygon points="0,190 110,290 110,410 0,510" fill="#e1251b" />

              {/* Bottom Right Red Triangle */}
              <polygon points="360,850 600,610 600,850" fill="#e1251b" />

              {/* Top Header: QRIS & GPN */}
              <g transform="translate(60, 48)">
                <g>
                  <text x="0" y="42" fontSize="48" fontWeight="900" fill="#000000" letterSpacing="-1.5">
                    QRIS
                  </text>
                  <rect x="4" y="12" width="12" height="12" fill="#e1251b" rx="2" />
                  <text x="120" y="24" fontSize="11.5" fontWeight="800" fill="#000000" letterSpacing="0.2">
                    QR Code Standar
                  </text>
                  <text x="120" y="38" fontSize="11.5" fontWeight="800" fill="#000000" letterSpacing="0.2">
                    Pembayaran Nasional
                  </text>
                </g>

                {/* GPN Emblem */}
                <g transform="translate(425, 0)">
                  <path d="M10,2 C22,6 30,16 32,24 C24,20 18,22 14,24 C20,18 16,14 6,10 Z" fill="#c9252c" />
                  <path d="M22,14 C32,20 36,28 36,32 C28,28 22,30 18,32 C24,26 22,22 14,18 Z" fill="#c9252c" />
                  <text x="-4" y="55" fontSize="22" fontWeight="900" fill="#1c355e" letterSpacing="1.5">
                    GPN
                  </text>
                </g>
              </g>

              {/* Merchant Details */}
              <g transform="translate(300, 195)" textAnchor="middle">
                <text y="0" fontSize="24" fontWeight="900" fill="#000000" letterSpacing="0.8">
                  EDUNEXUS INDONESIA
                </text>
                <text y="34" fontSize="19" fontWeight="700" fill="#000000" letterSpacing="1.2">
                  NMID : ID1025429260991
                </text>
                <text y="76" fontSize="21" fontWeight="800" fill="#000000" letterSpacing="1">
                  A01
                </text>
              </g>

              {/* QR Code Graphic Area */}
              <g transform="translate(125, 290)">
                <rect x="-15" y="-15" width="380" height="380" fill="#ffffff" rx="10" stroke="#f0f0f0" strokeWidth="1" />
                <image
                  href="/qris-matrix.svg"
                  x="0"
                  y="0"
                  width="350"
                  height="350"
                  preserveAspectRatio="xMidYMid meet"
                />
              </g>

              {/* Slogan & ASPI URL */}
              <g transform="translate(300, 715)" textAnchor="middle">
                <text y="0" fontSize="19" fontWeight="800" fill="#222222" letterSpacing="1">
                  SATU QRIS UNTUK SEMUA
                </text>
                <text y="24" fontSize="13.5" fontWeight="600" fill="#444444">
                  Cek aplikasi penyelenggara di:{' '}
                  <tspan fontWeight="800" fill="#000000">
                    www.aspi-qris.id
                  </tspan>
                </text>
              </g>

              {/* Bottom Left Print Info */}
              <g transform="translate(40, 790)" fontSize="14" fontWeight="700" fill="#333333">
                <text y="0">Dicetak oleh : 93600008</text>
                <text y="22">Versi Cetak : 1.0-2025.08.25</text>
              </g>

              {/* Bottom Right Cara Bayar */}
              <g transform="translate(435, 755)" fill="#ffffff">
                <text x="45" y="-14" fontSize="11" fontWeight="700" fill="#ffffff" textAnchor="middle">
                  Cara bayar dengan QRIS:
                </text>
                <g>
                  {/* Step 1 */}
                  <g transform="translate(-25, 0)">
                    <circle cx="14" cy="14" r="14" fill="#ffffff" />
                    <rect x="9" y="5" width="10" height="18" rx="2" fill="#e1251b" />
                    <circle cx="14" cy="20" r="1" fill="#ffffff" />
                    <text x="14" y="38" fontSize="7.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
                      Buka Aplikasi
                    </text>
                    <text x="14" y="47" fontSize="7.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
                      Berlogo QRIS
                    </text>
                  </g>
                  {/* Step 2 */}
                  <g transform="translate(30, 0)">
                    <circle cx="14" cy="14" r="14" fill="#ffffff" />
                    <path
                      d="M8,8 L13,8 M8,8 L8,13 M20,8 L15,8 M20,8 L20,13 M8,20 L13,20 M8,20 L8,15 M20,20 L15,20 M20,20 L20,15"
                      stroke="#e1251b"
                      strokeWidth="1.8"
                      fill="none"
                    />
                    <text x="14" y="38" fontSize="7.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
                      Scan &amp; Cek
                    </text>
                  </g>
                  {/* Step 3 */}
                  <g transform="translate(85, 0)">
                    <circle cx="14" cy="14" r="14" fill="#ffffff" />
                    <path
                      d="M9,14 L13,18 L19,10"
                      stroke="#e1251b"
                      strokeWidth="2.2"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <text x="14" y="38" fontSize="7.5" fontWeight="700" fill="#ffffff" textAnchor="middle">
                      Bayar
                    </text>
                  </g>
                </g>
              </g>
            </svg>
          </div>

          {/* Quick Buttons below QRIS */}
          <div className="w-full max-w-[420px] mt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
            <button
              id="btn-download-qris-jpeg"
              type="button"
              onClick={handleDownloadJPEG}
              disabled={isDownloading}
              className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-black text-[#172d45] bg-[#ffa92d] hover:bg-[#ffb84e] active:bg-[#e6921b] border border-[#ffa92d] shadow-sm hover:shadow-md transition-all cursor-pointer"
            >
              <Download className="w-4 h-4 text-[#172d45]" />
              <span>{isDownloading ? 'Menyiapkan...' : 'Unduh Gambar QRIS (JPEG)'}</span>
            </button>

            <button
              id="btn-copy-nmid"
              type="button"
              onClick={handleCopyNMID}
              className="inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs sm:text-sm font-bold text-white bg-[#203c5d] hover:bg-[#1a334f] border border-[#446f9e] hover:border-[#ffa92d] transition-all cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span className="text-emerald-400">NMID Tersalin!</span>
                </>
              ) : (
                <>
                  <Copy className="w-4 h-4 text-[#ffa92d]" />
                  <span>Salin NMID</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* Right Column: Instructions, Details, & Payment Apps */}
        <div className="md:col-span-5 flex flex-col gap-5">
          
          {/* Merchant Verified Card */}
          <div className="p-5 rounded-2xl bg-[#203c5d] border border-[#446f9e]">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#ffa92d] flex items-center justify-center flex-shrink-0 text-[#172d45]">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-bold text-[#ffa92d] uppercase tracking-wider block">
                  Informasi Merchant Resmi
                </span>
                <h3 className="font-extrabold text-base text-white mt-0.5">
                  EDUNEXUS INDONESIA
                </h3>
                <p className="text-xs text-[#d2e4f7] font-mono mt-1">
                  NMID: <span className="text-white font-bold">{NMID}</span>
                </p>
                <p className="text-[11px] text-[#b8d4f1] mt-1">
                  Acquirer Bank Mandiri (93600008) • Layanan Nasional Bank Indonesia &amp; ASPI
                </p>
              </div>
            </div>
          </div>

          {/* 3 Easy Steps Guide */}
          <div className="p-5 rounded-2xl bg-[#203c5d] border border-[#446f9e]">
            <h4 className="font-extrabold text-sm text-white mb-3 flex items-center gap-2">
              <Smartphone className="w-4 h-4 text-[#ffa92d]" />
              <span>Cara Melakukan Pembayaran / Donasi:</span>
            </h4>
            <ol className="space-y-3 text-xs text-[#d2e4f7]">
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#ffa92d] text-[#172d45] font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  1
                </span>
                <span>
                  Buka aplikasi <strong>Mobile Banking</strong> (BCA, Mandiri Livin, BRImo, BNI, BSI, CIMB) atau <strong>E-Wallet</strong> (GoPay, OVO, DANA, ShopeePay, LinkAja).
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#ffa92d] text-[#172d45] font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  2
                </span>
                <span>
                  Pilih menu <strong>QRIS / Scan QR</strong>, lalu arahkan kamera ke layar ini atau upload gambar QRIS yang telah diunduh.
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <span className="w-5 h-5 rounded-full bg-[#ffa92d] text-[#172d45] font-black text-[11px] flex items-center justify-center flex-shrink-0 mt-0.5">
                  3
                </span>
                <span>
                  Pastikan nama penerima adalah <strong>EDUNEXUS INDONESIA</strong>. Masukkan jumlah donasi dan konfirmasi pembayaran.
                </span>
              </li>
            </ol>
          </div>

          {/* Supported Providers Grid */}
          <div className="p-5 rounded-2xl bg-[#203c5d] border border-[#446f9e]">
            <h4 className="font-extrabold text-xs text-[#ffa92d] uppercase tracking-wider mb-2.5">
              Dapat Menggunakan Seluruh Pembayaran Digital:
            </h4>
            <div className="grid grid-cols-2 gap-2 text-xs text-[#d2e4f7]">
              <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#19314c] border border-[#446f9e]/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-[11px]">BCA / Mandiri / BRI</span>
              </div>
              <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#19314c] border border-[#446f9e]/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-[11px]">BNI / BSI / CIMB</span>
              </div>
              <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#19314c] border border-[#446f9e]/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-[11px]">GoPay / OVO</span>
              </div>
              <div className="flex items-center gap-1.5 py-1 px-2 rounded-lg bg-[#19314c] border border-[#446f9e]/40">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" />
                <span className="font-semibold text-[11px]">DANA / ShopeePay</span>
              </div>
            </div>
          </div>

          {/* Contact / WhatsApp Box */}
          <div className="p-4 rounded-2xl bg-[#19314c] border border-[#ffa92d]/40 flex items-center justify-between gap-3">
            <div>
              <p className="text-xs font-bold text-white">Ada kendala atau ingin kolaborasi?</p>
              <p className="text-[11px] text-[#b8d4f1]">Hubungi tim EDUNEXUS INDONESIA via WhatsApp</p>
            </div>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-extrabold text-[#172d45] bg-[#ffa92d] hover:bg-[#ffb84e] transition-all flex-shrink-0"
            >
              <MessageCircle className="w-3.5 h-3.5 text-[#172d45]" />
              <span>WhatsApp</span>
            </a>
          </div>

        </div>

      </div>
    </div>
  );
};
