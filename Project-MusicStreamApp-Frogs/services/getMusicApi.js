import { database } from "../config/firebaseConfig";
import { ref, onValue } from "firebase/database";


// get songs from firebase
const getSongs = () => {
  const songsRef = ref(database, 'songs');

  return new Promise((resolve, reject) => {
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
            image: song.image
          };
        });
        resolve(songsArray);  // Trả dữ liệu qua Promise
      } else {
        resolve([]);  // Trả mảng rỗng nếu không có dữ liệu
      }
    }, (error) => {
      reject(error);
    });
  });
};


// get Album from firebase

const getAlbums = () => {
  const albumsRef = ref(database, 'albums');

  return new Promise((resolve, reject) => {
    onValue(albumsRef, (snapshot) => {
      const data = snapshot.val();
      if (data) {
        const albumsArray = Object.keys(data).map((id) => {
          const album = data[id];
          const songs = album.song_ablums.map(song => song.id); // Lấy danh sách id bài hát
          return {
            key: id,
            id: album.id,
            albumName: album.albumName,
            artist: album.artist,
            image: album.image,
            songs: songs,
            image_ablum: album.image_ablum
          };
        });
        resolve(albumsArray);  // Trả dữ liệu qua Promise
      } else {
        resolve([]);  // Trả mảng rỗng nếu không có dữ liệu
      }
    }, (error) => {
      reject(error);
    });
  });
};

const getClips = () => {
  const clipsRef = ref(database, 'clips');

  return new Promise((resolve, reject) => {
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
        resolve(clipsArray);  // Trả dữ liệu qua Promise
      } else {
        resolve([]);  // Trả mảng rỗng nếu không có dữ liệu
      }
    }, (error) => {
      reject(error);
    });
  });
};

console.log(JSON.stringify(getAlbums()));

export { getSongs, getAlbums, getClips};

