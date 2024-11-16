// Lấy thông tin từ form đăng ký và gọi hàm tạo tài khoản người dùng mới
import { signInWithEmailAndPassword } from "firebase/auth";
import { ref, get } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";
import { Alert } from "react-native";

/**
 * Hàm để tạo tài khoản người dùng mới
 * @param {string} email - Địa chỉ email của người dùng
 * @param {string} password - Mật khẩu của người dùng
 * @returns {Promise} - Trả về một Promise chứa thông tin người dùng hoặc lỗi
 */
const signInUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user;
  } catch (error) {
    throw new Error(`Error ${error.code}: ${error.message}`);
  }
};

const checkGenreAndArtists = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      Alert.alert("Error", "No user is currently signed in.");
      return false;
    }

    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);

    // Nếu dữ liệu tồn tại
    if (snapshot.exists()) {
      const data = snapshot.val();
      if (data.genre && data.artists) {
        return true;
      }
    }
    // Trả về false nếu chưa chọn genre và artists
    return false;
  } catch (error) {
    Alert.alert("Error getting document", error.message);
    console.error("Error getting document:", error);
    return false;
  }
}

export {signInUser , checkGenreAndArtists};