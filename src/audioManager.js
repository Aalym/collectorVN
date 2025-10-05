let audioRef = null;
let currentMusic = null;
let fadeToken = 0;
let isMuted = false;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

export const AudioManager = {
  async fadeOutAndPlayNew(newMusic) {
    const myToken = ++fadeToken;

    const oldAudio = audioRef;
    if (oldAudio) {
      for (let v = oldAudio.volume; v > 0.01; v -= 0.05) {
        if (fadeToken !== myToken) return;
        oldAudio.volume = Math.max(0, v);
        await sleep(60);
      }
      oldAudio.pause();
    }

    if (fadeToken !== myToken) return;

    if (!newMusic) {
      if (audioRef) audioRef.pause();
      audioRef = null;
      currentMusic = null;
      return;
    }

    if (currentMusic === newMusic && audioRef) return;

    const newAudio = new Audio(newMusic);
    newAudio.loop = true;
    newAudio.volume = isMuted ? 0 : 0.0;

    try {
      await newAudio.play();
    } catch {
      console.warn("🔇 Автовоспроизведение заблокировано — ждём клика пользователя");
      const resume = () => {
        newAudio.play();
        document.removeEventListener("click", resume);
      };
      document.addEventListener("click", resume);
    }

    for (let v = 0; v <= 0.5; v += 0.05) {
      if (fadeToken !== myToken) return;
      if (!isMuted) newAudio.volume = v;
      await sleep(60);
    }

    audioRef = newAudio;
    currentMusic = newMusic;
  },

  stopMusic() {
    fadeToken++;
    if (audioRef) audioRef.pause();
    audioRef = null;
    currentMusic = null;
  },

  toggleMute() {
    isMuted = !isMuted;
    if (audioRef) {
      audioRef.volume = isMuted ? 0 : 0.5;
    }
    return isMuted;
  },

  getMuted() {
    return isMuted;
  },
};