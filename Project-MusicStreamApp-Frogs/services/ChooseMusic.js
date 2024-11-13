// Lấy genre và artists từ firebase
import { database } from "../config/firebaseConfig";
import { ref, onValue } from "firebase/database";

const getGenre = async () => {
    const genreRef = ref(database, 'artists');
    const genreList = [];
    onValue(genreRef, (snapshot) => {
        const data = snapshot.val();
        for (let id in data) {
            genreList.push(id); // Lấy genre từ firebase
        }
    });
    return genreList;
};

const getArtists = async (genre) => {
    const artistRef = ref(database, `artists/${genre}`);
    const artistList = [];
    onValue(artistRef, (snapshot) => {
        const data = snapshot.val();
        for (let id in data) {
            artistList.push(id); // Lấy artists từ firebase
        }
    });
    return artistList;
}

export { getGenre };