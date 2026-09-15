import React from 'react';
import { X, CheckCircle, ShieldCheck, Laptop2, Sparkles, BookOpen } from 'lucide-react';

interface StudentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const StudentGuideModal: React.FC<StudentGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div
      id="guide-modal-backdrop"
      className="fixed inset-0 z-50 bg-stone-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="guide-modal-content"
        className="bg-white rounded-2xl max-w-2xl w-full overflow-hidden shadow-2xl border border-stone-200 animate-in fade-in zoom-in-95 duration-200 my-8"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 pb-4 border-b border-stone-100 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-amber-100 text-amber-900 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <h2 id="guide-modal-title" className="text-lg font-bold text-stone-900">
                Panduan Siswa & Guru
              </h2>
              <p className="text-xs text-stone-500">
                Memaksimalkan Pembelajaran Interaktif Mandiri & di Kelas
              </p>
            </div>
          </div>
          <button
            id="btn-close-guide-modal"
            type="button"
            onClick={onClose}
            className="p-2 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-4 max-h-[70vh] overflow-y-auto text-stone-700 text-xs sm:text-sm leading-relaxed">
          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-stone-900 mb-1">
                100% Bebas Login & Aman untuk Siswa
              </h3>
              <p className="text-stone-600">
                Seluruh platform yang terdaftar di Portal Belajar Interaktif ini dapat langsung dimainkan atau digunakan di peramban (browser) tanpa mengharuskan siswa memasukkan alamat email, nomor telepon, atau data pribadi apa pun.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
            <Laptop2 className="w-5 h-5 text-sky-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-stone-900 mb-1">
                Dapat Diakses di Segala Perangkat
              </h3>
              <p className="text-stone-600">
                Aplikasi seperti PhET, Desmos, Google Earth, dan MolView dapat berjalan lancar di komputer lab sekolah, Chromebook, laptop pribadi, tablet, hingga smartphone siswa.
              </p>
            </div>
          </div>

          <div className="p-4 rounded-xl bg-stone-50 border border-stone-200 flex items-start gap-3">
            <Sparkles className="w-5 h-5 text-amber-600 flex-shrink-0 mt-0.5" />
            <div>
              <h3 className="font-bold text-stone-900 mb-1">
                Tips Belajar Efektif
              </h3>
              <ul className="list-disc list-inside space-y-1 text-stone-600 mt-1">
                <li>Buka aplikasi interaktif di tab baru berdampingan dengan buku paket materi pelajaran.</li>
                <li>Gunakan fitur <strong>Favorit (Ikon Bintang)</strong> untuk menandai materi pelajaran yang akan dipelajari minggu ini.</li>
                <li>Ubah parameter angka atau geser slider untuk melihat perubahan rumus atau fenomena secara visual.</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="p-4 bg-stone-50 border-t border-stone-200 flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 rounded-lg text-xs font-semibold text-white bg-stone-900 hover:bg-stone-800 transition-colors"
          >
            Mengerti, Mulai Belajar!
          </button>
        </div>
      </div>
    </div>
  );
};
