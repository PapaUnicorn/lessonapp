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
        name: 'Toy Theater',
        url: 'https://toytheater.com/category/math/',
        type: 'Games & Manipulatif',
        description: 'Alat peraga matematika ramah anak: timbangan, jam analog, balok pecahan & teka-teki seru.',
        tag: 'Cocok Pemula'
      },
      {
        name: 'Mathigon Polypad',
        url: 'https://mathigon.org/polypad',
        type: 'Kanvas Virtual Bebas',
        description: 'Papan tulis matematika visual terbaik dunia dengan alat geometri, tangram, dan dadu virtual.',
        tag: 'Sangat Populer'
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
        url: 'https://phet.colorado.edu/in/',
        type: 'Lab Virtual Sains',
        description: 'Simulasi sains interaktif berbahasa Indonesia dari University of Colorado Boulder.',
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
        name: 'British Council LearnEnglish Kids',
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
    fokus: 'Aljabar, grafik fungsi, koordinat Kartesius, bangun ruang',
    deskripsiRingkas: 'Visualisasikan persamaan garis lurus, sistem koordinat dua dimensi, serta jaring-jaring bangun ruang secara dinamis.',
    caraBelajar: [
      'Ubah nilai gradien m dan konstanta c pada fungsi y = mx + c untuk melihat pergeseran garis.',
      'Plot titik-titik koordinat pada bidang Kartesius untuk membentuk bangun poligon.',
      'Gunakan slider nilai di Desmos untuk mengamati pergerakan kurva kuadrat.'
    ],
    tools: [
      {
        name: 'GeoGebra Classic',
        url: 'https://www.geogebra.org/classic',
        type: 'Software Matematika Lengkap',
        description: 'Paket kalkulator aljabar, geometri analitik, dan tabel statistik paling banyak digunakan di sekolah.',
        tag: 'Paling Lengkap'
      },
      {
        name: 'Desmos Graphing Calculator',
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
    id: 'smp-ipa',
    jenjang: 'SMP',
    mataPelajaran: 'IPA Terpadu',
    categoryGroup: 'Sains',
    fokus: 'Simulasi listrik statis/dinamis, sel biologi, & tata surya',
    deskripsiRingkas: 'Uji coba rangkaian lampu seri-paralel, intip struktur sel membran dan inti sel, serta jelajahi orbit planet di langit malam.',
    caraBelajar: [
      'Rakit baterai, saklar, dan resistor di lab sirkuit PhET tanpa risiko korsleting.',
      'Gunakan teleskop virtual Stellarium untuk mencari rasi bintang dan posisi Jupiter malam ini.',
      'Pelajari organel sel tumbuhan dan hewan dengan model animasi 3D di Cells Alive.'
    ],
    tools: [
      {
        name: 'PhET Circuit & Physics',
        url: 'https://phet.colorado.edu/in/',
        type: 'Simulasi Rangkaian & Fisika',
        description: 'Eksperimen listrik arus searah, hukum Ohm, dan gaya gravitasi langsung di browser.',
        tag: 'Praktikum Virtual'
      },
      {
        name: 'Stellarium Web',
        url: 'https://stellarium-web.org/',
        type: 'Planetarium Web Real-time',
        description: 'Peta kubah langit malam realistis yang menunjukkan lokasi planet, satelit, dan bintang dari lokasi kamu.',
        tag: 'Tata Surya 3D'
      },
      {
        name: 'Cells Alive',
        url: 'https://www.cellsalive.com/',
        type: 'Mikroskop & Sel Interaktif',
        description: 'Visualisasi mitosis, meiosis, bakteri, virus, dan perbandingan ukuran sel hidup.',
        tag: 'Biologi Sel'
      }
    ],
    icon: 'Atom',
    popular: true,
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-ips',
    jenjang: 'SMP',
    mataPelajaran: 'IPS Terpadu',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Geografi dunia, sejarah peradaban, & cagar budaya',
    deskripsiRingkas: 'Menyelami situs keajaiban dunia, museum peradaban kuno, dan analisis geografis bentang alam berbagai benua.',
    caraBelajar: [
      'Jalan-jalan virtual 360 derajat di Candi Borobudur, Colosseum, atau Piramida Giza.',
      'Lihat koleksi artefak purbakala dan lukisan sejarah dengan resolusi gigapixel.',
      'Bandingkan topografi pegunungan, palung laut, dan lembah sungai di Google Earth.'
    ],
    tools: [
      {
        name: 'Google Earth Web',
        url: 'https://earth.google.com/web/',
        type: 'Eksplorasi Planet 3D',
        description: 'Ukur jarak antar benua, pantau ketinggian gunung, dan pelajari lempeng tektonik bumi.',
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
    icon: 'Globe',
    tingkatKelas: 'Kelas 7 - 9 SMP'
  },
  {
    id: 'smp-bahasa',
    jenjang: 'SMP',
    mataPelajaran: 'Bahasa (Indonesia & Asing)',
    categoryGroup: 'Bahasa',
    fokus: 'Tata bahasa, struktur kalimat, & permainan tebak kata kelas',
    deskripsiRingkas: 'Tantangan seru memahami part of speech, majas, peribahasa, serta game kosakata kolaboratif bersama teman sekelas.',
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
    mataPelajaran: 'Matematika Peminatan & Wajib',
    categoryGroup: 'Matematika',
    fokus: 'Kalkulus, grafik trigonometri, irisan kerucut, vektor 3D',
    deskripsiRingkas: 'Putar bidang koordinat tiga dimensi (X, Y, Z), gambar grafik turunan dan integral, serta periksa perpotongan kurva ruang.',
    caraBelajar: [
      'Plot persamaan permukaan z = f(x, y) di GeoGebra 3D dan putar menggunakan mouse.',
      'Eksplorasi teorema geometri Euclides dan konstruksi lingkaran di Desmos Geometry.',
      'Amati perilaku garis singgung kurva untuk memahami konsep limit dan turunan.'
    ],
    tools: [
      {
        name: 'GeoGebra 3D Calculator',
        url: 'https://www.geogebra.org/3d',
        type: 'Visualisasi Ruang 3 Dimensi',
        description: 'Alat peraga vektor 3 dimensi, bidang sejajar, bola, kerucut, dan kubus dalam koordinat xyz.',
        tag: 'Visualisasi 3D'
      },
      {
        name: 'Desmos Geometry',
        url: 'https://www.desmos.com/geometry',
        type: 'Studio Geometri Analitik',
        description: 'Konstruksi sudut, garis bagi, transformasi geometri rotasi dan dilatasi presisi tinggi.',
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
    fokus: 'Mekanika, gelombang, optik, & rangkaian listrik interaktif',
    deskripsiRingkas: 'Simulasi gerak parabola, pembiasan cermin/lensa cembung, efek Doppler pada gelombang suara, dan induksi elektromagnetik.',
    caraBelajar: [
      'Uji hukum kekekalan momentum pada simulasi tumbukan oPhysics.',
      'Gunakan pembiasan prisma cahaya di PhET untuk melihat spektrum warna optik.',
      'Hitung percepatan gravitasi dan hambatan udara pada gerak jatuh bebas.'
    ],
    tools: [
      {
        name: 'oPhysics Interactive Physics',
        url: 'https://ophysics.com/',
        type: 'Simulasi Fisika Khusus SMA',
        description: 'Koleksi simulasi fisika klasik mekanika, kinematika, fluida, optik geometris, dan gelombang.',
        tag: 'Sangat Detail'
      },
      {
        name: 'PhET Physics Advanced',
        url: 'https://phet.colorado.edu/in/',
        type: 'Lab Fisika Modern & Listrik',
        description: 'Simulasi efek fotolistrik, struktur atom Rutherford, gelombang radio, dan hukum Faraday.',
        tag: 'Simulasi Standar'
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
    fokus: 'Visualisasi ikatan molekul 3D & tabel periodik dinamis',
    deskripsiRingkas: 'Bangun rumus molekul organik/anorganik dalam tampilan 3D dan bedah data elektron valensi, isotop, serta titik leleh setiap unsur.',
    caraBelajar: [
      'Gambarkan struktur Lewis di MolView lalu konversi menjadi model ruang 3D bola-dan-batang.',
      'Pelajari tren keelektronegatifan dan konfigurasi elektron pada Ptable.',
      'Simulasikan ikatan kovalen polar dan ikatan hidrogen antar molekul.'
    ],
    tools: [
      {
        name: 'MolView Molecular Viewer',
        url: 'https://molview.org/',
        type: 'Model Molekul Kimia 3D',
        description: 'Aplikasi web pemodelan senyawa kimia dan spektroskopi dengan kemampuan render 3D molekul nyata.',
        tag: 'Model 3D Molekul'
      },
      {
        name: 'Ptable Tabel Periodik Dinamis',
        url: 'https://ptable.com/',
        type: 'Tabel Periodik Paling Lengkap',
        description: 'Tabel periodik interaktif dengan visualisasi wujud zat berdasarkan suhu (Kelvin), orbital elektron, dan sifat kimia.',
        tag: 'Lengkap & Interaktif'
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
    fokus: 'Anatomi tubuh manusia 3D, genetika, & bioteknologi',
    deskripsiRingkas: 'Eksplorasi lapisan otot, kerangka tulang, sistem syaraf manusia secara 3D 360°, serta mekanisme replikasi DNA dan hukum Mendel.',
    caraBelajar: [
      'Bongkar-pasang organ jantung, paru-paru, dan sistem rangka di Anatomy Learning.',
      'Lakukan ekstraksi DNA virtual dan pelajari pewarisan sifat genetik di Learn.Genetics.',
      'Telusuri jalur persilangan alel monohibrid dan dihibrid.'
    ],
    tools: [
      {
        name: 'Anatomy Learning 3D',
        url: 'https://anatomylearning.com/',
        type: 'Atlas Anatomi Manusia 3D',
        description: 'Model anatomi tubuh manusia interaktif tingkat medis yang dapat diputar, dipotong lapisannya, dan diidentifikasi.',
        tag: 'Anatomi 3D Medis'
      },
      {
        name: 'Learn.Genetics (Univ. of Utah)',
        url: 'https://learn.genetics.utah.edu/',
        type: 'Lab Genetika & Molekuler',
        description: 'Panduan interaktif nomor satu untuk genetika, mutasi gen, kloning, dan teknologi DNA rekombinan.',
        tag: 'Materi Genetika'
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
    fokus: 'Cuaca, angin, arus laut global real-time, lapisan geosfer',
    deskripsiRingkas: 'Pantau pergerakan siklon tropis, arah angin jet stream, tekanan udara, dan arus laut di seluruh dunia secara langsung.',
    caraBelajar: [
      'Amati pola pergerakan angin dan gelombang laut di sekitar kepulauan Nusantara.',
      'Analisis fenomena El Nino dan La Nina melalui peta anomali suhu permukaan laut.',
      'Pantau curah hujan radar dan formasi awan satelit cuaca.'
    ],
    tools: [
      {
        name: 'Ventusky Weather Live',
        url: 'https://www.ventusky.com/',
        type: 'Peta Meteorologi Real-Time',
        description: 'Visualisasi aliran angin, suhu, curah hujan, dan gelombang laut global berbasis animasi partikel fluida.',
        tag: 'Data Cuaca Live'
      },
      {
        name: 'Windy Meteorologi Dinamis',
        url: 'https://www.windy.com/',
        type: 'Radar Angin & Siklon',
        description: 'Peta prediksi cuaca profesional yang digunakan oleh pilot dan meteorolog dunia, sangat visual untuk belajar iklim.',
        tag: 'Radar Dinamis'
      }
    ],
    icon: 'CloudRain',
    tingkatKelas: 'Kelas 10 - 12 SMA'
  },
  {
    id: 'sma-sosiologi-ekonomi',
    jenjang: 'SMA',
    mataPelajaran: 'Sosiologi & Ekonomi',
    categoryGroup: 'Sosial & Humaniora',
    fokus: 'Data statistik global, tren demografi, kesenjangan ekonomi',
    deskripsiRingkas: 'Analisis grafik korelasi antara pendapatan per kapita dengan angka harapan hidup, piramida penduduk, dan tren global.',
    caraBelajar: [
      'Putar animasi kurun waktu 100 tahun di Gapminder untuk melihat kemajuan negara berkembang.',
      'Unduh data empiris kemiskinan, energi terbarukan, dan inflasi dari Our World in Data.',
      'Kaji fenomena bonus demografi dan urbanisasi masyarakat modern.'
    ],
    tools: [
      {
        name: 'Gapminder Tools',
        url: 'https://www.gapminder.org/tools/',
        type: 'Grafik Statistik Dinamis Hans Rosling',
        description: 'Alat visualisasi data interaktif untuk membantah mitos dunia dengan statistik resmi PBB & Bank Dunia.',
        tag: 'Visual Data Dunia'
      },
      {
        name: 'Our World in Data',
        url: 'https://ourworldindata.org/',
        type: 'Riset Data Empiris',
        description: 'Publikasi sains berbasis data empiris tentang tantangan global terbesar: kemiskinan, iklim, kesehatan, dan ekonomi.',
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
    fokus: 'Atlas peta perubahan batas wilayah peradaban dunia',
    deskripsiRingkas: 'Garis waktu kronologis ekspansi kerajaan Nusantara, Kekaisaran Romawi, Perang Dunia, hingga perubahan batas negara modern.',
    caraBelajar: [
      'Geser slider tahun di Omniatlas untuk melihat peta dunia pada tahun 1500, 1945, hingga sekarang.',
      'Jelajahi arsip dokumen naskah proklamasi dan foto bersejarah di Google Arts & Culture.',
      'Hubungkan letak geografis benteng masa lampau dengan jalur perdagangan rempah-rempah.'
    ],
    tools: [
      {
        name: 'Omniatlas Kronologi Peta',
        url: 'https://omniatlas.com/',
        type: 'Peta Geopolitik Sejarah',
        description: 'Atlas sejarah interaktif yang memetakan batas wilayah politik di seluruh benua dari abad ke abad.',
        tag: 'Garis Waktu Peta'
      },
      {
        name: 'Google Arts & Culture Sejarah',
        url: 'https://artsandculture.google.com/',
        type: 'Dokumentasi Sejarah Dunia',
        description: 'Pameran daring momen-momen bersejarah dunia dan warisan budaya Indonesia dengan narasi interaktif.',
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
