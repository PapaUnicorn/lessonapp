export type JenjangType = 'SD' | 'SMP' | 'SMA';

export interface InteractiveTool {
  name: string;
  url: string;
  type?: string;
  description?: string;
  tag?: string;
}

export interface LearningItem {
  id: string;
  jenjang: JenjangType;
  mataPelajaran: string;
  categoryGroup: 'Matematika' | 'Sains' | 'Sosial & Humaniora' | 'Bahasa' | 'Informatika' | 'Seni & Kreativitas';
  fokus: string;
  deskripsiRingkas: string;
  caraBelajar: string[];
  tools: InteractiveTool[];
  icon: string;
  popular?: boolean;
  tingkatKelas: string;
}

export type CategoryFilter = 'Semua' | 'Matematika' | 'Sains' | 'Sosial & Humaniora' | 'Bahasa' | 'Informatika' | 'Seni & Kreativitas';
