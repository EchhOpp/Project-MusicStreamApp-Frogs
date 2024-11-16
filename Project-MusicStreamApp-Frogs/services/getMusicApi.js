import { database } from "../config/firebaseConfig";
import { ref, onValue } from "firebase/database";


// get songs from firebase
const getSongs = (callback) => {
  const songsRef = ref(database, 'songs');

  onValue(songsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      // Chuyển đổi dữ liệu từ object sang mảng
      const songsArray = Object.keys(data).map(key => ({
        id: data[key].id,
        title: data[key].title,
        author: data[key].author,
        image: data[key].image,
      }));
      callback(songsArray);
    } else {
      callback([]); 
    }
  });
};


// get Album from firebase

const getAlbums = (callback) => {
  const albumsRef = ref(database, 'albums');

  onValue(albumsRef, (snapshot) => {
    const data = snapshot.val();
    if (data) {
      const albumsArray = Object.keys(data).map((albumKey) => {
        const album = data[albumKey];
        const songs = album.song_ablums.map(song => song.id); // Lấy danh sách id bài hát
        return {
          albumName: albumKey,
          artist: album.artist,
          songs: songs
        };
      });
      callback(albumsArray);  // Trả dữ liệu vào callback
    } else {
      callback([]);  // Trả mảng rỗng nếu không có dữ liệu
    }
  });
};

console.log(
  getSongs((data) => {
    console.log(data);
  })
);

console.log(
  getAlbums((data) => {
    console.log(data);
  })
);

export { getSongs, getAlbums };

