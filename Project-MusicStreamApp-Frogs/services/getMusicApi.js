import { database } from "../config/firebaseConfig";
import { ref, onValue, set, get } from "firebase/database";


// get songs from firebase
const getSongs = () => {
  const songsRef = ref(database, 'songs');

  return new Promise((resolve, reject) => {
    try {
      onValue(songsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const songsArray = Object.keys(data).map((id) => {
            const song = data[id];
            return {
              key: id,
              id: song.id,
              title: song.title,
              author: song.author,
              mp_audio: song.mp_audio,
              image: song.image,
            };
          });
          resolve(songsArray);
        } else {
          resolve([]);
        }
      }, (error) => {
        console.error("Error in getSongs:", error);
        reject(error);
      });
    } catch (error) {
      console.error("Error in getSongs:", error);
      reject(error);
    }
  });
};


// get Album from firebase
const getAlbums = () => {
  const albumsRef = ref(database, 'albums');

  return new Promise((resolve, reject) => {
    try {
      onValue(albumsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const albumsArray = Object.keys(data).map((id) => {
            const album = data[id];
            const songs = album.song_ablums?.map(song => song.id) || []; // Add null check
            return {
              key: id,
              albumName: album.albumName,
              artist: album.artist,
              image: album.image,
              songs: songs,
              image_ablum: album.image_ablum
            };
          });
          resolve(albumsArray);
        } else {
          resolve([]);
        }
      }, (error) => {
        console.error("Error in getAlbums:", error);
        reject(error);
      });
    } catch (error) {
      console.error("Error in getAlbums:", error);
      reject(error); 
    }
  });
};

const getClips = () => {
  const clipsRef = ref(database, 'clips');

  return new Promise((resolve, reject) => {
    try {
      onValue(clipsRef, (snapshot) => {
        const data = snapshot.val();
        if (data) {
          const clipsArray = Object.keys(data).map((id) => {
            const clip = data[id];
            return {
              id: id,
              title: clip.title,
              artist: clip.artist,
              video: clip.video
            };
          });
          resolve(clipsArray);
        } else {
          resolve([]);
        }
      }, (error) => {
        console.error("Error in getClips:", error);
        reject(error);
      });
    } catch (error) {
      console.error("Error in getClips:", error);
      reject(error);
    }
  });
};

// Get current song and listen for changes
const getCurrentSong = (callback) => {
  const currentSongRef = ref(database, 'currentSong');

  // Return a promise that resolves with initial data
  return new Promise((resolve, reject) => {
    try {
      // Set up listener for changes
      const unsubscribe = onValue(
        currentSongRef,
        (snapshot) => {
          const data = snapshot.val();
          if (data) {
            const currentSong = {
              id: data.id,
              title: data.title, 
              artist: data.artist,
              mp_audio: data.mp_audio,
              image: data.image,
            };
            
            // Send updates through callback if provided
            if (callback) {
              callback(currentSong);
            }
            
            // Resolve promise with initial data
            resolve(currentSong);
          } else {
            if (callback) callback(null);
            resolve(null);
          }
        },
        (error) => {
          console.error("Error fetching current song:", error);
          reject(error);
        }
      );

      // Return unsubscribe function
      return () => unsubscribe();
    } catch (error) {
      console.error("Error in getCurrentSong:", error);
      reject(error);
    }
  });
};


// Hàm cập nhật bài hát hiện tại
const updateCurrentSong = async (song) => {
  try {
    const currentSongRef = ref(database, 'currentSong');

    if (!song?.mp_audio) {
      throw new Error("Song mp3 URL is required");
    }

    await set(currentSongRef, {
      id: song.id,
      title: song.title,
      artist: song.artist || song.author,
      mp_audio: song.mp_audio,
      image: song.image
    });

    return true;

  } catch (error) {
    console.error("Error updating current song:", error);
    throw error;
  }
};

// hàm lấy video theo id từ firebase
const getVideoById = async (id) => {
  try {
    const videoRef = ref(database, `clips/${id}`);
    const snapshot = await get(videoRef);
    if(snapshot.exists()) {
      const data = snapshot.val();
      return {
        id: id,
        title: data.title,
        artist: data.artist,
        video: data.video
      }
    } else {
      return null;
    }
  } catch (error) {
    console.error("Error in getVideoById:", error);
    throw error;
  }
}

export { getSongs, getAlbums, getClips, getCurrentSong, updateCurrentSong, getVideoById};
