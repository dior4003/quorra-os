let nowPlaying = null;

const playMedia = (media) => {
  nowPlaying = media;
  console.log(`[Media] Playing: ${media.title}`);
};

const stopMedia = () => {
  if (nowPlaying) {
    console.log(`[Media] Stopped: ${nowPlaying.title}`);
    nowPlaying = null;
  } else {
    console.log(`[Media] Nothing is playing`);
  }
};

module.exports = { playMedia, stopMedia };
