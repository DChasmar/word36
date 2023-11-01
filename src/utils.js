const GAME_PROGRESS_LOCAL_STORAGE_KEY = "game-progress";
const DEFAULT_GAME_PROGRESS = {
  three: 0,
  four: 0,
  five: 0,
  six: 0,
  seven: 0
};

export function readSavedGameProgress() {
  const localStorageValue = localStorage.getItem(GAME_PROGRESS_LOCAL_STORAGE_KEY);

  if (localStorageValue == null) {
    return DEFAULT_GAME_PROGRESS;
  } else {
    try {
      const parsed = JSON.parse(localStorageValue);
      return parsed || DEFAULT_GAME_PROGRESS;
    } catch (error) {
      return DEFAULT_GAME_PROGRESS;
    }
  }
}

export function writeSavedGameProgress(value) {
  localStorage.setItem(GAME_PROGRESS_LOCAL_STORAGE_KEY, JSON.stringify(value));
}