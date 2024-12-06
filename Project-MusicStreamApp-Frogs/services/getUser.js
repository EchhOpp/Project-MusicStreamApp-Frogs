import { auth, database } from "../config/firebaseConfig";
import { ref,update, get  } from "firebase/database";

/**
 * Lấy thông tin của người dùng hiện tại
 * @returns {Promise<Object|null>} - Trả về Promise chứa thông tin người dùng hoặc null nếu có lỗi
 */
const getUserInfo = async () => {
  try {
    const user = auth.currentUser;

    if (!user) {
      return null;
    }

    const userRef = ref(database, `users/${user.uid}`);
    const snapshot = await get(userRef);

    if (snapshot.exists()) {
      const data = snapshot.val();
      return {
        artists: data?.artists || [],
        clips: data?.clips || "",
        email: data?.email || "",
        favorite: data?.favorite || "",
        follow: data?.follow || "",
        genre: data?.genre || [],
        playlist: data?.playlist || "",
        userName: data?.userName || ""
      };
    } else {
      Alert.alert("Lỗi", "Không tìm thấy dữ liệu người dùng.");
      return null;
    }
  } catch (error) {
    Alert.alert("Lỗi khi lấy thông tin người dùng", error.message);
    console.error("Error getting user information:", error);
    return null;
  }
};

/**
 * Cập nhật thông tin của người dùng hiện tại
 * @param {Object} updateData - Dữ liệu cần cập nhật
 * @returns {Promise<boolean>} - Trả về Promise true nếu thành công, false nếu có lỗi
 */
const updateUserInformation = async (userData) => {
  try {
    const user = auth.currentUser;
    if (!user) {
        throw new Error("Không có người dùng nào đang đăng nhập");
    }

    const userRef = ref(database, `users/${user.uid}`);
      
      // Chỉ cập nhật các trường được cung cấp
      const updates = {};
      if( userData.favorite != null) updates.favorite = userData.favorite;
      if( userData.updatedPlaylist != null) updates.updatedPlaylist = userData.updatedPlaylist;
      if( userData.updatedQueue != null ) updates.updatedQueue = userData.updatedQueue;

      console.log("updates", updates);
      await update(userRef, updates);
      return true;
  } catch (error) {
      throw new Error(`Lỗi khi cập nhật hồ sơ: ${error.message}`);
  }
};

export { getUserInfo, updateUserInformation };
