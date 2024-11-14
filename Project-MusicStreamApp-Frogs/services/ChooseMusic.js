// Lấy genre và artists từ firebase
import { database } from "../config/firebaseConfig";
import { getAuth } from "firebase/auth";
import { ref, onValue, update } from "firebase/database";

// Hàm lấy genre từ Firebase
const getGenre = async () => {
    const genreRef = ref(database, 'artists');
    const genreList = [];

    // Trả về một Promise để đợi lấy dữ liệu
    return new Promise((resolve, reject) => {
        onValue(genreRef, (snapshot) => {
            const data = snapshot.val();
            for (let id in data) {
                genreList.push(id); // Lấy genre từ firebase
            }
            resolve(genreList); // Trả về genreList khi lấy xong
        }, (error) => {
            reject(error); // Bắt lỗi nếu có
        });
    });
};

// Hàm lấy artists từ Firebase theo genre
const getArtists = async () => {
    const artistsRef = ref(database, 'artists');
    const artistsList = [];

    // Trả về một Promise để đợi lấy dữ liệu
    return new Promise((resolve, reject) => {
        onValue(artistsRef, (snapshot) => {
            const data = snapshot.val();
            for (let id in data) {
                artistsList.push(data[id]); // Lấy artist từ firebase
            }
            resolve(artistsList); // Trả về artistsList khi lấy xong
        }, (error) => {
            reject(error); // Bắt lỗi nếu có
        });
    });
}

// Tạo ra 1 trường trong user để lưu genre và artist đã chọn
// Để lưu dữ liệu vào Firebase, chúng ta sẽ sử dụng hàm update() của Firebase
// Hãy xem cách sử dụng hàm update() trong tài liệu Firebase
// https://firebase.google.com/docs/database/web/read-and-write#update_specific_fields

const saveGenreAndArtists = async (userId, genre, artists) => {
    const userRef = ref(database, `users/${userId}`);
    const data = {
        genre: genre,
        artists: artists
    };

    return new Promise((resolve, reject) => {
        update(userRef, data)
            .then(() => {
                resolve('Data saved successfully');
            })
            .catch((error) => {
                reject(error);
            });
    });
}

// Lấy người dùng hiện tại
const getCurrentUser = () => {
    const auth = getAuth();
    const user = auth.currentUser;
    return user.uid;
  }

export { getGenre, getArtists, saveGenreAndArtists, getCurrentUser};
