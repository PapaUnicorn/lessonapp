import { LearningItem, JenjangType } from '../types';

export interface JenjangInfo {
  id: JenjangType;
  title: string;
  subTitle: string;
  badgeLabel: string;
  gradeLevels: string;
  colorTheme: {
    primary: string;
    bgBadge: string;
    borderAccent: string;
    badgeText: string;
    ringColor: string;
    heroGradient: string;
  };
  description: string;
}

export const JENJANG_CONFIG: Record<JenjangType, JenjangInfo> = {
  SD: {
    id: 'SD',
    title: 'Sekolah Dasar',
    subTitle: 'Fase Fondasi & Eksplorasi Visual',
    badgeLabel: 'SD (Kelas 1-6)',
    gradeLevels: 'Kelas 1, 2, 3, 4, 5, 6',
    colorTheme: {
      primary: '#e11d48', // ruby / rose red classic SD
      bgBadge: 'bg-rose-100 text-rose-800 border-rose-200',
      borderAccent: 'border-rose-300',
      badgeText: 'text-rose-700',
      ringColor: 'ring-rose-500',
      heroGradient: 'from-rose-50 to-orange-50/40',
    },
    description: 'Pembelajaran visual, penuh manipulatif warna-warni, permainan logika interaktif, dan cerita bergambar yang menyenangkan.',
  },
  SMP: {
    id: 'SMP',
    title: 'Sekolah Menengah Pertama',
    subTitle: 'Fase Pemahaman Konsep & Simulasi',
    badgeLabel: 'SMP (Kelas 7-9)',
    gradeLevels: 'Kelas 7, 8, 9',
    colorTheme: {
      primary: '#0284c7', // navy / ocean sky blue SMP
      bgBadge: 'bg-sky-100 text-sky-800 border-sky-200',
      borderAccent: 'border-sky-300',
      badgeText: 'text-sky-700',
      ringColor: 'ring-sky-500',
      heroGradient: 'from-sky-50 to-indigo-50/40',
    },
    description: 'Eksperimen laboratorium virtual, simulasi tata surya, grafik kartesius, kuis kelas, dan pengenalan coding kreatif.',
  },
  SMA: {
    id: 'SMA',
    title: 'Sekolah Menengah Atas',
    subTitle: 'Fase Analisis Mendalam & Praktik Tingkat Lanjut',
    badgeLabel: 'SMA (Kelas 10-12)',
    gradeLevels: 'Kelas 10, 11, 12',
    colorTheme: {
      primary: '#475569', // slate / navy seragam abu-abu SMA
      bgBadge: 'bg-slate-100 text-slate-800 border-slate-200',
      borderAccent: 'border-slate-300',
      badgeText: 'text-slate-700',
      ringColor: 'ring-slate-500',
      heroGradient: 'from-slate-50 to-teal-50/40',
    },
    description: 'Simulasi kalkulus 3D, mekanika kuantum, molekul 3D, anatomi detail, data sains global, dan editor Python online.',
  },
};

export const LEARNING_DATA: LearningItem[] = [
  // ========================== JENJANG SD ==========================
  {
    id: 'sd-matematika',
    jenjang: 'SD',
    mataPelajaran: 'Matematika',
    categoryGroup: 'Matematika',
    fokus: 'Konsep bilangan, manipulatif visual, geometri, & jam',
    deskripsiRingkas: 'Eksplorasi berhitung seru dengan manik-manik virtual, jam dinding interaktif, pecahan visual, dan balok geometri.',
    caraBelajar: [
      'Gunakan manipulatif balok untuk memahami penjumlahan & pecahan dasar.',
      'Putar jarum jam interaktif untuk melatih membaca waktu.',
      'Selesaikan teka-teki bangun datar dan pola bilangan.'
    ],
    tools: [
      {
        name: 'Mathigon',
        url: 'https://mathigon.org',
        type: 'Kanvas Virtual Matematika',
        description: 'Papan tulis matematika visual terbaik dunia dengan alat geometri, tangram, manipulatif pecahan, dan dadu virtual.',
        tag: 'Interaktif'
      },
      {
        name: 'Toy Theater',
        url: 'https://toytheater.com/category/math/',
        type: 'Games & Manipulatif',
        description: 'Alat peraga matematika ramah anak: timbangan, jam analog, balok pecahan & teka-teki seru.',
        tag: 'Cocok Pemula'
      }
    ],
    icon: 'Calculator',
    popular: true,
    tingkatKelas: 'Kelas 1 - 6 SD'
  },
  {
    id: 'sd-ipa',
    jenjang: 'SD',
    mataPelajaran: 'IPA (Ilmu Pengetahuan Alam)',
    categoryGroup: 'Sains',
    fokus: 'Fenomena alam, siklus air, dan ekosistem dasar',
    deskripsiRingkas: 'Simulasi interaktif tentang bagaimana air menguap, hewan beradaptasi, dan hukum alam bekerja di sekitar kita.',
    caraBelajar: [
      'Jalankan simulasi PhET untuk melihat molekul air berubah menjadi es atau uap.',
      'Jelajahi ensiklopedia satwa dan habitat bumi di NatGeo Kids.',
      'Uji coba tebak ekosistem dan rantai makanan.'
    ],
    tools: [
      {
        name: 'PhET Interactive Simulations',
        url: 'https://phet.colorado.edu',
        type: 'Lab Virtual Sains',
        description: 'Simulasi sains interaktif dari University of Colorado Boulder.',
        tag: 'Resmi & Gratis'
      },
      {
        name: 'NatGeo Kids',
        url: 'https://kids.nationalgeographic.com/',
        type: 'Ensiklopedia Interaktif',
        description: 'Eksplorasi satwa liar, video ekspedisi sains, kuis hewan, dan fakta sains bumi.',
        tag: 'Visual Menarik'
      }
    ],
    icon: 'Leaf',
    popular: true,
    tingkatKelas: 'Kelas 3 - 6 SD'
  },
  {
    id: 'sd-ips',
    jenjang: 'SD',
    mataPelajaran: 'IPS (Ilmu Pengetahuan Sosial)',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Pengenalan peta wilayah Indonesia & lingkungan',
    deskripsiRingkas: 'Menjelajah 38 provinsi di Indonesia, pulau-pulau nusantara, bentang alam, serta tempat bersejarah langsung dari layar.',
    caraBelajar: [
      'Mainkan kuis tebak letak pulau dan ibukota provinsi di Seterra.',
      'Terbang secara 3D ke puncak gunung atau cagar alam di Google Earth.',
      'Kenali batas-batas wilayah dan kenampakan alam Indonesia.'
    ],
    tools: [
      {
        name: 'Seterra Peta Interaktif',
        url: 'https://www.geoguessr.com/seterra/id/',
        type: 'Kuis Peta Wilayah',
        description: 'Game kuis peta Indonesia dan dunia dalam bahasa Indonesia untuk menguji daya ingat geografi.',
        tag: 'Bahasa Indonesia'
      },
      {
        name: 'Google Earth Web',
        url: 'https://earth.google.com/web/',
        type: 'Globe 3D Real-time',
        description: 'Eksplorasi satelit planet bumi dengan fitur Voyager yang memandu perjalanan edukasi alam.',
        tag: '3D Satelit'
      }
    ],
    icon: 'Compass',
    tingkatKelas: 'Kelas 4 - 6 SD'
  },
  {
    id: 'sd-bahasa',
    jenjang: 'SD',
    mataPelajaran: 'Bahasa Indonesia & Inggris',
    categoryGroup: 'Bahasa',
    fokus: 'Literasi cerita bergambar & kuis kosa kata tematik',
    deskripsiRingkas: 'Membaca ribuan buku cerita berilustrasi warna-warni dan latihan kosakata bahasa Inggris lewat permainan lagu serta mini-game.',
    caraBelajar: [
      'Baca cerita digital bilingual bersama orang tua atau guru.',
      'Dengarkan pelafalan audio kosakata benda di sekitar rumah dan sekolah.',
      'Selesaikan kuis kata bergambar untuk memperkaya kosakata.'
    ],
    tools: [
      {
        name: 'StoryWeaver',
        url: 'https://storyweaver.org.in/',
        type: 'Perpustakaan Digital',
        description: 'Platform buku cerita anak sumber terbuka dengan ribuan kisah ilustratif berjenjang dalam Bahasa Indonesia.',
        tag: 'Ribuan Buku'
      },
      {
        name: 'British Council Kids',
        url: 'https://learnenglishkids.britishcouncil.org/',
        type: 'Media Bahasa Inggris',
        description: 'Lagu interaktif, video animasi pendek, latihan pengucapan fonik, dan permainan kata bahasa Inggris.',
        tag: 'Standar Global'
      }
    ],
    icon: 'BookOpen',
    tingkatKelas: 'Kelas 1 - 6 SD'
  },
  {
    id: 'sd-informatika',
    jenjang: 'SD',
    mataPelajaran: 'Informatika (Coding Ceria)',
    categoryGroup: 'Informatika',
    fokus: 'Pengenalan logika pemrograman visual & blok',
    deskripsiRingkas: 'Membangun logika berpikir komputasional sejak dini dengan menyusun blok puzzle perintah tanpa perlu mengetik sintaks rumit.',
    caraBelajar: [
      'Pandu karakter melewati labirin menggunakan blok maju, belok, dan lompat.',
      'Bikin karakter berjoget mengikuti irama musik di Code.org Dance Party.',
      'Pahami konsep algoritma runtut (step-by-step) lewat permainan seru.'
    ],
    tools: [
      {
        name: 'Blockly Games',
        url: 'https://blockly.games/',
        type: 'Game Logika Coding',
        description: 'Permainan edukatif resmi Google untuk mengajarkan konsep percabangan dan perulangan secara visual.',
        tag: 'Google Education'
      },
      {
        name: 'Code.org Dance Party',
        url: 'https://code.org/dance',
        type: 'Interactive Dance Studio',
        description: 'Kreativitas coding memprogram gerakan tarian karakter kartun dengan lagu-lagu populer.',
        tag: 'Musik & Animasi'
      }
    ],
    icon: 'Code',
    popular: true,
    tingkatKelas: 'Kelas 3 - 6 SD'
  },
  {
    id: 'sd-seni',
    jenjang: 'SD',
    mataPelajaran: 'Seni Budaya & Kreativitas',
    categoryGroup: 'Seni & Kreativitas',
    fokus: 'Eksplorasi nada, harmoni, dan sketsa visual cerdas',
    deskripsiRingkas: 'Bermain nada piano, aransemen ritme drum, serta menggambar sketsa imajinatif dengan bantuan kecerdasan buatan sederhana.',
    caraBelajar: [
      'Gubah melodi sederhana di kanvas Song Maker Chrome Music Lab.',
      'Gambar coretan garis kasar lalu biarkan AutoDraw menebak objek yang kamu maksud.',
      'Eksplorasi hubungan antara getaran suara, frekuensi nada, dan warna.'
    ],
    tools: [
      {
        name: 'Chrome Music Lab',
        url: 'https://musiclab.chromeexperiments.com/',
        type: 'Eksperimen Musik',
        description: 'Laboratorium eksperimen suara, arpeggio, ritme, dan harmoni yang intuitif cukup dengan klik mouse atau sentuhan.',
        tag: 'Audio Interaktif'
      },
      {
        name: 'AutoDraw',
        url: 'https://www.autodraw.com/',
        type: 'Kanvas Gambar Cerdas',
        description: 'Alat gambar sketsa cepat bertenaga machine learning yang mengubah coretan tangan menjadi ilustrasi rapi.',
        tag: 'AI Sketch'
      }
    ],
    icon: 'Palette',
    tingkatKelas: 'Kelas 1 - 6 SD'
  },

  // ========================== JENJANG SMP ==========================
  {
    id: 'smp-matematika',
    jenjang: 'SMP',
    mataPelajaran: 'Matematika',
    categoryGroup: 'Matematika',
    fokus: 'Aljabar, manipulatif geometri, grafik fungsi, & koordinat Kartesius',
    deskripsiRingkas: 'Visualisasikan persamaan garis lurus, bangun datar-ruang secara dinamis, serta manipulatif aljabar interaktif.',
    caraBelajar: [
      'Ubah nilai gradien m dan konstanta c pada fungsi y = mx + c di GeoGebra.',
      'Gunakan kanvas manipulatif Mathigon untuk mengeksplorasi jaring-jaring bangun dan pecahan.',
      'Plot grafik fungsi kuadrat dan sistem persamaan linier di Desmos.'
    ],
    tools: [
      {
        name: 'GeoGebra',
        url: 'https://geogebra.org',
        type: 'Software Matematika Interaktif',
        description: 'Paket lengkap aljabar, geometri analitik, kalkulator grafik, dan alat peraga matematika dinamis.',
        tag: 'Paling Lengkap'
      },
      {
        name: 'Mathigon',
        url: 'https://mathigon.org',
        type: 'Kanvas Manipulatif & Polypad',
        description: 'Buku teks matematika interaktif dengan kanvas manipulatif geometri, ubin aljabar, dan visualisasi bilangan.',
        tag: 'Interaktif'
      },
      {
        name: 'Desmos Calculator',
        url: 'https://www.desmos.com/calculator',
        type: 'Kalkulator Grafik Cepat',
        description: 'Kalkulator grafik super responsif dengan animasi slider parameter dan tampilan kurva presisi.',
        tag: 'Mudah Dipakai'
      }
    ],
    icon: 'Calculator',
    popular: true,
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-ipa-biologi',
    jenjang: 'SMP',
    mataPelajaran: 'IPA (Biologi)',
    categoryGroup: 'Sains',
    fokus: 'Struktur sel, fotosintesis, genetika dasar, & ekosistem makhluk hidup',
    deskripsiRingkas: 'Simulasi interaktif mikroskopis organel sel hidup, rantai makanan ekosistem, seleksi alam, dan hereditas sifat.',
    caraBelajar: [
      'Jalankan simulasi biologi interaktif di PhET untuk memahami seleksi alam dan fotosintesis.',
      'Eksplorasi model DNA, pembelahan sel, dan adaptasi ekosistem di Concord Consortium.',
      'Pelajari organel sel tumbuhan dan hewan dengan model animasi di Cells Alive.'
    ],
    tools: [
      {
        name: 'PhET Interactive Simulations',
        url: 'https://phet.colorado.edu',
        type: 'Lab Virtual Sains & Biologi',
        description: 'Simulasi interaktif seleksi alam, ekspresi genetik, dan ekosistem dari University of Colorado Boulder.',
        tag: 'Resmi PhET'
      },
      {
        name: 'Concord Consortium',
        url: 'https://learn.concord.org',
        type: 'Modul Pembelajaran STEM',
        description: 'Aktivitas eksplorasi interaktif genetika, adaptasi makhluk hidup, dan ekologi berbasis model sains.',
        tag: 'STEM Model'
      },
      {
        name: 'Cells Alive',
        url: 'https://www.cellsalive.com/',
        type: 'Mikroskop & Sel Interaktif',
        description: 'Visualisasi mitosis, meiosis, bakteri, virus, dan perbandingan ukuran sel hidup.',
        tag: 'Biologi Sel'
      }
    ],
    icon: 'Leaf',
    popular: true,
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-ipa-kimia',
    jenjang: 'SMP',
    mataPelajaran: 'IPA (Kimia)',
    categoryGroup: 'Sains',
    fokus: 'Partikel materi, wujud zat, reaksi kimia dasar, & listrik magnet',
    deskripsiRingkas: 'Eksperimen virtual susunan atom partikel materi, perubahan wujud padat-cair-gas, dan praktikum sirkuit listrik aman.',
    caraBelajar: [
      'Amati interaksi antar molekul dan perubahan fasa zat di Concord Consortium.',
      'Rakit sirkuit listrik arus searah (DC) dan uji konduktivitas zat di PhET.',
      'Pahami perbedaan campuran homogen, heterogen, serta reaksi kimia sederhana.'
    ],
    tools: [
      {
        name: 'Concord Consortium',
        url: 'https://learn.concord.org',
        type: 'Model Partikel & Reaksi Kimia',
        description: 'Simulasi interaktif wujud zat, difusi gas, ikatan atom, dan interaksi molekuler tingkat dasar.',
        tag: 'Molekuler STEM'
      },
      {
        name: 'PhET Interactive Simulations',
        url: 'https://phet.colorado.edu',
        type: 'Simulasi Kimia & Listrik',
        description: 'Eksperimen kerapatan zat, gaya gerak partikel, dan perakitan sirkuit listrik interaktif.',
        tag: 'Praktikum Virtual'
      }
    ],
    icon: 'Atom',
    popular: true,
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-ips-geografi',
    jenjang: 'SMP',
    mataPelajaran: 'IPS (Geografi)',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Lempeng tektonik, dinamika bumi, bentang alam, & cagar budaya',
    deskripsiRingkas: 'Simulasi lempeng tektonik, gempa bumi, siklus batuan, iklim lingkungan, serta penjelajahan situs cagar budaya dunia.',
    caraBelajar: [
      'Simulasikan pergerakan lempeng tektonik dan pembentukan pegunungan di Concord Consortium.',
      'Jelajahi topografi bumi, sungai, dan kepulauan Nusantara secara 3D dengan Google Earth.',
      'Kunjungi museum peradaban dan cagar budaya di Google Arts & Culture.'
    ],
    tools: [
      {
        name: 'Concord Consortium',
        url: 'https://learn.concord.org',
        type: 'Simulasi Geosains & Tektonik',
        description: 'Eksplorasi interaktif Seismic Explorer, pergeseran lempeng bumi, siklus batuan, dan sistem iklim global.',
        tag: 'Geosains STEM'
      },
      {
        name: 'Google Earth Web',
        url: 'https://earth.google.com/web/',
        type: 'Eksplorasi Planet 3D',
        description: 'Ukur jarak antar benua, pantau ketinggian gunung, dan pelajari bentang alam bumi.',
        tag: 'Geografi Global'
      },
      {
        name: 'Google Arts & Culture',
        url: 'https://artsandculture.google.com/',
        type: 'Museum & Tur Cagar Budaya',
        description: 'Jelajahi ribuan museum dunia, artefak sejarah Indonesia, dan tur candi secara interaktif.',
        tag: 'Sejarah & Budaya'
      }
    ],
    icon: 'Compass',
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-bahasa',
    jenjang: 'SMP',
    mataPelajaran: 'Bahasa (Indonesia & Asing)',
    categoryGroup: 'Bahasa',
    fokus: 'Tata bahasa, struktur kalimat, & permainan kosa kata kelas',
    deskripsiRingkas: 'Tantangan seru memahami tata bahasa, majas, peribahasa, serta game kosakata kolaboratif bersama teman sekelas.',
    caraBelajar: [
      'Mainkan kuis Baamboozle bersama teman untuk menguji daya ingat kosakata.',
      'Cari bahan literasi cerpen dan artikel tematik di StoryWeaver.',
      'Analisis struktur kalimat SPOK dan tenses bahasa Inggris secara interaktif.'
    ],
    tools: [
      {
        name: 'Baamboozle Games',
        url: 'https://www.baamboozle.com/games',
        type: 'Game Kuis Interaktif',
        description: 'Ratusan ribu game tebak kata, trivia tata bahasa, dan kuis kelas tanpa perlu registrasi pemain.',
        tag: 'Bisa Main Bareng'
      },
      {
        name: 'StoryWeaver',
        url: 'https://storyweaver.org.in/',
        type: 'Bacaan Multibahasa',
        description: 'Kumpulan cerita bacaan tingkat menengah untuk meningkatkan kemampuan membaca kritis.',
        tag: 'Literasi Menengah'
      }
    ],
    icon: 'MessageSquare',
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-informatika',
    jenjang: 'SMP',
    mataPelajaran: 'Informatika',
    categoryGroup: 'Informatika',
    fokus: 'Logika algoritma, creative coding, & dasar web HTML',
    deskripsiRingkas: 'Bikin game arcade sendiri dengan Scratch dan coba koding kode dasar web HTML/CSS langsung di editor interaktif.',
    caraBelajar: [
      'Rancang animasi atau game lompat rintangan dengan logika loop & variabel Scratch.',
      'Ketik tag <h1> dan <p> di W3Schools lalu saksikan langsung hasilnya di layar sebelah.',
      'Pelajari cara komputer memproses data dan mengambil keputusan logika.'
    ],
    tools: [
      {
        name: 'Scratch Editor (MIT)',
        url: 'https://scratch.mit.edu/projects/editor/',
        type: 'Studio Game & Animasi',
        description: 'Platform creative coding paling populer di dunia ciptaan MIT Media Lab untuk membuat proyek interaktif.',
        tag: 'Standar Dunia'
      },
      {
        name: 'W3Schools TryIt Editor',
        url: 'https://www.w3schools.com/html/tryit.asp?filename=tryhtml_default',
        type: 'Live HTML/CSS Editor',
        description: 'Kotak pasir koding web sederhana untuk mencoba kode tag HTML dan styling langsung di browser.',
        tag: 'Dasar Web'
      }
    ],
    icon: 'Laptop',
    popular: true,
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },

  // ========================== JENJANG SMA ==========================
  {
    id: 'sma-matematika',
    jenjang: 'SMA',
    mataPelajaran: 'Matematika',
    categoryGroup: 'Matematika',
    fokus: 'Kalkulus, grafik fungsi 3D, irisan kerucut, vektor, & geometri analitik',
    deskripsiRingkas: 'Eksplorasi kalkulus visual, putar bidang koordinat 3D xyz, dan konstruksi geometri fraktal serta aljabar tingkat lanjut.',
    caraBelajar: [
      'Plot persamaan permukaan z = f(x, y) dan bidang ruang di GeoGebra.',
      'Gunakan Mathigon untuk mempelajari visualisasi kalkulus, teori graf, dan fraktal interaktif.',
      'Eksplorasi konstruksi geometri transformasi di Desmos Geometry.'
    ],
    tools: [
      {
        name: 'GeoGebra',
        url: 'https://geogebra.org',
        type: 'Software Matematika 2D & 3D',
        description: 'Platform dinamis aljabar, kalkulus, vektor 3D, geometri analitik, dan alat peraga matematika lengkap.',
        tag: 'Paling Lengkap'
      },
      {
        name: 'Mathigon',
        url: 'https://mathigon.org',
        type: 'Kanvas & Pembelajaran Visual',
        description: 'Buku teks matematika interaktif dengan materi kalkulus visual, origami geometri, fraktal, dan kanvas Polypad.',
        tag: 'Interaktif'
      },
      {
        name: 'Desmos Geometry',
        url: 'https://www.desmos.com/geometry',
        type: 'Studio Geometri Analitik',
        description: 'Konstruksi sudut, transformasi refleksi/rotasi, dan kurva fungsi presisi tinggi.',
        tag: 'Presisi Tinggi'
      }
    ],
    icon: 'Sigma',
    popular: true,
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-fisika',
    jenjang: 'SMA',
    mataPelajaran: 'Fisika',
    categoryGroup: 'Sains',
    fokus: 'Mekanika, gelombang optik, rangkaian sirkuit analog, & fisika kuantum',
    deskripsiRingkas: 'Simulasi interaktif sirkuit listrik analog, osilasi gelombang riak, efek Doppler, induksi elektromagnetik, dan mekanika klasik.',
    caraBelajar: [
      'Rancang dan amati aliran sinyal arus listrik AC/DC dan simulasi gelombang di Falstad Applets.',
      'Uji fenomena kuantum, efek fotolistrik, dan medan magnet di PhET.',
      'Analisis gerak parabola dan tumbukan momentum di oPhysics.'
    ],
    tools: [
      {
        name: 'Falstad Applets',
        url: 'https://falstad.com',
        type: 'Simulator Gelombang & Sirkuit',
        description: 'Simulator interaktif sirkuit listrik analog, osilasi gelombang riak, optik, mekanika kuantum, dan termodinamika.',
        tag: 'Simulator Fisika'
      },
      {
        name: 'PhET Interactive Simulations',
        url: 'https://phet.colorado.edu',
        type: 'Lab Fisika Modern & Listrik',
        description: 'Simulasi efek fotolistrik, struktur atom Rutherford, gelombang radio, dan hukum Faraday.',
        tag: 'Resmi PhET'
      },
      {
        name: 'oPhysics Interactive',
        url: 'https://ophysics.com/',
        type: 'Simulasi Fisika Khusus SMA',
        description: 'Koleksi simulasi fisika klasik mekanika, kinematika, fluida, optik geometris, dan gelombang.',
        tag: 'Sangat Detail'
      }
    ],
    icon: 'Zap',
    popular: true,
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-kimia',
    jenjang: 'SMA',
    mataPelajaran: 'Kimia',
    categoryGroup: 'Sains',
    fokus: 'Struktur molekul 3D, kesetimbangan kimia, larutan asam-basa, & tabel periodik dinamis',
    deskripsiRingkas: 'Simulasi interaktif reaksi kesetimbangan kimia, dinamika molekuler, pemodelan rumus 3D bola-dan-batang, serta data tabel unsur.',
    caraBelajar: [
      'Uji kesetimbangan reaksi kimia dan pH larutan asam-basa di PhET Interactive Simulations.',
      'Eksplorasi dinamika molekuler, ikatan kimia, dan hukum gas di Concord Consortium.',
      'Gambarkan rumus senyawa di MolView untuk diubah ke model ruang 3D.',
      'Pelajari tren elektronegativitas dan konfigurasi orbital di Ptable.'
    ],
    tools: [
      {
        name: 'PhET Interactive Simulations',
        url: 'https://phet.colorado.edu',
        type: 'Lab Kimia Interaktif',
        description: 'Simulasi kesetimbangan reaksi, larutan asam-basa, molaritas, dan polaritas molekul dari University of Colorado.',
        tag: 'Resmi PhET'
      },
      {
        name: 'Concord Consortium',
        url: 'https://learn.concord.org',
        type: 'Molecular Workbench STEM',
        description: 'Simulasi interaktif dinamika molekuler, reaksi endoterm/eksoterm, laju reaksi kimia, dan elektrokimia.',
        tag: 'Model Molekuler'
      },
      {
        name: 'MolView Molecular Viewer',
        url: 'https://molview.org/',
        type: 'Model Molekul Kimia 3D',
        description: 'Aplikasi web pemodelan senyawa kimia dan spektroskopi dengan kemampuan render 3D molekul nyata.',
        tag: 'Model 3D'
      },
      {
        name: 'Ptable Tabel Periodik',
        url: 'https://ptable.com/',
        type: 'Tabel Periodik Lengkap',
        description: 'Tabel periodik dinamis dengan visualisasi orbital elektron, isotop, titik leleh, dan wujud zat.',
        tag: 'Data Lengkap'
      }
    ],
    icon: 'FlaskConical',
    popular: true,
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-biologi',
    jenjang: 'SMA',
    mataPelajaran: 'Biologi',
    categoryGroup: 'Sains',
    fokus: 'Genetika molekuler, seleksi alam, replikasi DNA, sintesis protein, & anatomi 3D',
    deskripsiRingkas: 'Model interaktif hereditas sifat Mendel, proses transkripsi DNA, mekanisme adaptasi evolusi, dan anatomi sistem organ tubuh 3D.',
    caraBelajar: [
      'Amati simulasi seleksi alam, genetika populasi, dan ekspresi gen di PhET.',
      'Pelajari replikasi DNA, sintesis protein, dan mutasi genetik di Concord Consortium.',
      'Bongkar-pasang lapisan anatomi organ manusia di Anatomy Learning 3D.',
      'Telusuri modul bioteknologi DNA rekombinan di Learn.Genetics.'
    ],
    tools: [
      {
        name: 'PhET Interactive Simulations',
        url: 'https://phet.colorado.edu',
        type: 'Simulasi Biologi & Ekologi',
        description: 'Simulasi seleksi alam, spesiasi, ekspresi gen, dan fotosintesis dari University of Colorado Boulder.',
        tag: 'Resmi PhET'
      },
      {
        name: 'Concord Consortium',
        url: 'https://learn.concord.org',
        type: 'Genetika Molekuler STEM',
        description: 'Model interaktif replikasi DNA, sintesis protein, mutasi gen, hereditas Mendel, dan aliran energi biologi.',
        tag: 'Genetika STEM'
      },
      {
        name: 'Anatomy Learning 3D',
        url: 'https://anatomylearning.com/',
        type: 'Atlas Anatomi Manusia 3D',
        description: 'Model anatomi tubuh manusia interaktif yang dapat diputar 360°, dipotong lapisannya, dan diidentifikasi.',
        tag: 'Anatomi 3D'
      },
      {
        name: 'Learn.Genetics',
        url: 'https://learn.genetics.utah.edu/',
        type: 'Lab Genetika & Molekuler',
        description: 'Panduan interaktif untuk genetika, mutasi gen, kloning, dan teknologi DNA rekombinan.',
        tag: 'Riset Genetika'
      }
    ],
    icon: 'Leaf',
    popular: true,
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-biologi-kesehatan',
    jenjang: 'SMA',
    mataPelajaran: 'Biologi (Kesehatan)',
    categoryGroup: 'Sains',
    fokus: 'Sistem imunologi, transmisi epidemi penyakit, kurva penularan, & fisiologi tubuh',
    deskripsiRingkas: 'Simulasi interaktif cara kerja sistem imun manusia, persebaran patogen, dinamika epidemiologi herd immunity, dan organ fisiologis.',
    caraBelajar: [
      'Jalankan simulasi esai interaktif transmisi virus dan kekebalan kelompok (herd immunity) di Explorable Explanations.',
      'Pelajari mekanisme antibodi, sel darah putih, dan respon imun terhadap infeksi.',
      'Bedah anatomi sistem sirkulasi, respirasi, dan pencernaan manusia secara 3D.'
    ],
    tools: [
      {
        name: 'Explorable Explanations',
        url: 'https://explorabl.es',
        type: 'Simulasi Interaktif Epidemi & Imunitas',
        description: 'Esai interaktif pemodelan dinamika transmisi virus, kurva epidemiologi, dan respon sistem kekebalan tubuh.',
        tag: 'Eksplorasi Interaktif'
      },
      {
        name: 'Anatomy Learning 3D',
        url: 'https://anatomylearning.com/',
        type: 'Atlas Anatomi & Fisiologi',
        description: 'Model anatomi 3D sistem organ manusia tingkat medis untuk memahami kesehatan fisiologis.',
        tag: 'Anatomi 3D'
      }
    ],
    icon: 'HeartPulse',
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-geografi',
    jenjang: 'SMA',
    mataPelajaran: 'Geografi',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Lempeng tektonik, model iklim global, meteorologi cuaca real-time, & geosfer',
    deskripsiRingkas: 'Simulasi lempeng tektonik bumi, atmosfer iklim global, serta visualisasi radar angin, arus laut, dan siklon cuaca langsung.',
    caraBelajar: [
      'Simulasikan pergerakan lempeng tektonik, gempa bumi, dan siklus air bumi di Concord Consortium.',
      'Amati aliran angin siklon dan suhu permukaan laut Nusantara di Ventusky.',
      'Analisis pola perubahan cuaca dan presipitasi global di radar Windy.'
    ],
    tools: [
      {
        name: 'Concord Consortium',
        url: 'https://learn.concord.org',
        type: 'Simulasi Geosains & Tektonik',
        description: 'Eksplorasi interaktif model lempeng tektonik bumi, perubahan iklim global, dan atmosfer bumi.',
        tag: 'Geosains STEM'
      },
      {
        name: 'Ventusky Weather Live',
        url: 'https://www.ventusky.com/',
        type: 'Peta Meteorologi Real-Time',
        description: 'Visualisasi aliran angin, suhu, curah hujan, dan gelombang laut global berbasis partikel fluida dinamis.',
        tag: 'Data Live'
      },
      {
        name: 'Windy Meteorologi Dinamis',
        url: 'https://www.windy.com/',
        type: 'Radar Angin & Presipitasi',
        description: 'Peta prediksi cuaca resolusi tinggi profesional untuk analisis iklim dan pergerakan geosfer.',
        tag: 'Radar Cuaca'
      }
    ],
    icon: 'CloudRain',
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-sosiologi',
    jenjang: 'SMA',
    mataPelajaran: 'Sosiologi',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Interaksi kelompok sosial, diferensiasi, segregasi, & dinamika masyarakat',
    deskripsiRingkas: 'Simulasi interaktif dinamika kelompok sosial, segregasi pemukiman (Parable of the Polygons), serta data statistik perubahan masyarakat.',
    caraBelajar: [
      'Jalankan simulasi interaktif tentang bagaimana bias individu kecil memicu segregasi kelompok di Explorable Explanations.',
      'Analisis tren kemiskinan, kesetaraan sosial, dan indeks demografi dunia di Gapminder.',
      'Kaji faktor pendorong integrasi dan disintegrasi dalam tatanan masyarakat majemuk.'
    ],
    tools: [
      {
        name: 'Explorable Explanations',
        url: 'https://explorabl.es',
        type: 'Simulasi Dinamika Sosial & Segregasi',
        description: 'Simulasi interaktif konsep sosiologi terkemuka (Parable of the Polygons karya Nicky Case & Vi Hart) tentang dinamika sosial.',
        tag: 'Eksplorasi Sosial'
      },
      {
        name: 'Gapminder Tools',
        url: 'https://www.gapminder.org/tools/',
        type: 'Statistik Sosial & Demografi Global',
        description: 'Grafik interaktif tren kemiskinan, angka harapan hidup, dan indeks pembangunan sosial masyarakat dunia.',
        tag: 'Data Statistik'
      }
    ],
    icon: 'Globe',
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-psikologi-teori-sosial',
    jenjang: 'SMA',
    mataPelajaran: 'Psikologi / Teori Sosial',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Teori permainan (Game Theory), kepercayaan antar-individu, bias kognitif, & psikologi massa',
    deskripsiRingkas: 'Eksplorasi interaktif The Evolution of Trust, perilaku kooperatif vs kecurangan, bias kognitif, dan pengambilan keputusan manusia.',
    caraBelajar: [
      'Mainkan simulasi The Evolution of Trust di Explorable Explanations untuk memahami psikologi kepercayaan dan kerja sama.',
      'Eksplorasi bagaimana informasi dan persepsi membentuk perilaku kolektif masyarakat.',
      'Pelajari data riset empiris perilaku manusia dan modal sosial di Our World in Data.'
    ],
    tools: [
      {
        name: 'Explorable Explanations',
        url: 'https://explorabl.es',
        type: 'Simulasi Teori Permainan & Kepercayaan',
        description: 'Simulasi interaktif The Evolution of Trust, bias kognitif, persepsi probabilitas, dan psikologi perilaku kelompok.',
        tag: 'Game Theory'
      },
      {
        name: 'Our World in Data',
        url: 'https://ourworldindata.org/',
        type: 'Riset Empiris Perilaku & Kesejahteraan',
        description: 'Publikasi sains berbasis data empiris tentang tantangan global, modal sosial, dan perilaku masyarakat.',
        tag: 'Riset Terpercaya'
      }
    ],
    icon: 'TrendingUp',
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-sejarah',
    jenjang: 'SMA',
    mataPelajaran: 'Sejarah',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Atlas kronologis peta batas wilayah peradaban dunia & Nusantara',
    deskripsiRingkas: 'Garis waktu kronologis ekspansi kerajaan Nusantara, Kekaisaran Romawi, Perang Dunia, hingga batas geopolitik modern.',
    caraBelajar: [
      'Geser slider tahun di Omniatlas untuk melihat peta dunia dari abad ke abad.',
      'Jelajahi arsip naskah bersejarah dan artefak di Google Arts & Culture.',
      'Kaji perubahan geopolitik dan dampaknya terhadap peradaban manusia.'
    ],
    tools: [
      {
        name: 'Omniatlas Kronologi Peta',
        url: 'https://omniatlas.com/',
        type: 'Peta Geopolitik Sejarah',
        description: 'Atlas sejarah interaktif yang memetakan batas wilayah politik di seluruh benua dari masa ke masa.',
        tag: 'Garis Waktu Peta'
      },
      {
        name: 'Google Arts & Culture',
        url: 'https://artsandculture.google.com/',
        type: 'Dokumentasi Sejarah Dunia',
        description: 'Pameran daring momen bersejarah dunia dan warisan budaya Indonesia dengan narasi interaktif.',
        tag: 'Arsip Bersejarah'
      }
    ],
    icon: 'Landmark',
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-informatika',
    jenjang: 'SMA',
    mataPelajaran: 'Informatika',
    categoryGroup: 'Informatika',
    fokus: 'Coding Python instan di browser & simulasi kriptografi',
    deskripsiRingkas: 'Kompilasi kode Python tanpa install aplikasi dan pecahkan sandi rahasia seperti enkripsi AES, Hashing, serta Base64.',
    caraBelajar: [
      'Tulis script Python untuk menghitung deret Fibonacci atau membaca dataset sederhana di browser.',
      'Eksperimen dekripsi sandi Caesar cipher dan konversi biner menggunakan CyberChef.',
      'Pahami dasar keamanan siber (cybersecurity) dan integritas data digital.'
    ],
    tools: [
      {
        name: 'Programiz Online Python Compiler',
        url: 'https://www.programiz.com/python-programming/online-compiler/',
        type: 'Kompilator Python Instan',
        description: 'Editor kode Python 3 cepat langsung jalan di browser tanpa konfigurasi lingkungan rumit.',
        tag: 'Langsung Coding'
      },
      {
        name: 'CyberChef (GCHQ)',
        url: 'https://gchq.github.io/CyberChef/',
        type: 'Swiss Army Knife Kriptografi',
        description: 'Aplikasi web interaktif untuk menganalisis data biner, dekripsi kode sandi, dan pembedahan format file.',
        tag: 'Kriptografi & Sekuriti'
      }
    ],
    icon: 'Terminal',
    popular: true,
    tingkatKelas: 'Kelas 10 - 12 SMA'
  }
];

export const ALL_CATEGORIES = [
  'Semua',
  'Matematika',
  'Sains',
  'Sosial & Humaniora',
  'Bahasa',
  'Informatika',
  'Seni & Kreativitas',
] as const;
