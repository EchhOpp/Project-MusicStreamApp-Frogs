// Lấy thông tin từ form đăng ký và gọi hàm tạo tài khoản người dùng mới
import { signInWithEmailAndPassword} from "firebase/auth";
import { auth } from "../config/firebaseConfig";

/**
 * Hàm để tạo tài khoản người dùng mới
 * @param {string} email - Địa chỉ email của người dùng
 * @param {string} password - Mật khẩu của người dùng
 * @returns {Promise} - Trả về một Promise chứa thông tin người dùng hoặc lỗi
 */
const signInUser = (email, password) => {
  return signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
      return user;
    })
    .catch((error) => {
      // Xử lý lỗi đăng ký
      const errorCode = error.code;
      const errorMessage = error.message;
      throw new Error(`Error ${errorCode}: ${errorMessage}`);
    });
};

export default signInUser;