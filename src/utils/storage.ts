const FAVORITES_KEY = 'portal_belajar_favorit_ids';

export const getSavedFavorites = (): string[] => {
  try {
    const raw = localStorage.getItem(FAVORITES_KEY);
    if (!raw) return [];
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

export const toggleSavedFavorite = (id: string): string[] => {
  try {
    const current = getSavedFavorites();
    let updated: string[];
    if (current.includes(id)) {
      updated = current.filter(item => item !== id);
    } else {
      updated = [...current, id];
    }
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
    return updated;
  } catch {
    return [];
  }
};
