// Lấy genre và artists từ firebase
import { database } from "../config/firebaseConfig";
import { ref, onValue } from "firebase/database";

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

export { getGenre, getArtists };
