import { ref, get, update } from "firebase/database";
import { auth, database } from "../config/firebaseConfig";
import { Alert } from "react-native";

/**
 * Hàm để lấy thông tin người dùng hiện tại
 * @returns {Promise<Object>} - Trả về một Promise chứa thông tin người dùng hoặc lỗi
 */
const layThongTinNguoiDung = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      Alert.alert("Lỗi", "Không có người dùng nào đang đăng nhập.");
      return null;
    }

    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return {
        ngheSi: data.artists || [],
        clip: data.clips || "",
        email: data.email || "",
        yeuThich: data.favorite || "",
        theoDoi: data.follow || "",
        theLoai: data.genre || [],
        danhSachPhat: data.playlist || "",
        tenNguoiDung: data.userName || ""
      };
    } else {
      Alert.alert("Lỗi", "Không tìm thấy dữ liệu người dùng.");
      return null;
    }
  } catch (error) {
    Alert.alert("Lỗi khi lấy thông tin người dùng", error.message);
    console.error("Lỗi khi lấy thông tin người dùng:", error);
    return null;
  }
};

/**
 * Hàm để cập nhật thông tin người dùng hiện tại
 * @param {Object} duLieu - Dữ liệu cần cập nhật
 * @returns {Promise<boolean>} - Trả về một Promise chứa kết quả cập nhật hoặc lỗi
 */
const capNhatThongTinNguoiDung = async (duLieu) => {
  try {
    const user = auth.currentUser;

    if (!user) {
      Alert.alert("Lỗi", "Không có người dùng nào đang đăng nhập.");
      return false;
    }

    const userRef = ref(database, `users/${user.uid}`);
    await update(userRef, {
      ngheSi: duLieu.artists || [],
      clip: duLieu.clips || "",
      email: duLieu.email || "",
      yeuThich: duLieu.favorite || "",
      theoDoi: duLieu.follow || "",
      theLoai: duLieu.genre || [],
      danhSachPhat: duLieu.playlist || "",
      tenNguoiDung: duLieu.userName || ""
    });
    return true;
  } catch (error) {
    Alert.alert("Lỗi khi cập nhật thông tin người dùng", error.message);
    console.error("Lỗi khi cập nhật thông tin người dùng:", error);
    return false;
  }
};

export { layThongTinNguoiDung, capNhatThongTinNguoiDung };


