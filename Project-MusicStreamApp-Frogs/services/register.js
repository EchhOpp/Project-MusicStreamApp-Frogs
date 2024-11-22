import { auth, database } from "../config/firebaseConfig";
import { ref, update, get } from "firebase/database";

/**
 * Cập nhật thông tin hồ sơ người dùng trong cơ sở dữ liệu
 * @param {Object} userData - Đối tượng chứa dữ liệu hồ sơ người dùng
 * @param {string} userData.userName - Tên hiển thị của người dùng (tùy chọn)
 * @param {string[]} userData.genre - Mảng thể loại nhạc ưa thích của người dùng (tùy chọn)
 * @param {string[]} userData.artists - Mảng nghệ sĩ yêu thích của người dùng (tùy chọn)
 * @param {string} userData.email - Email của người dùng (tùy chọn)
 * @returns {Promise} - Trả về promise khi cập nhật hoàn tất
 */
const updateUserProfile = async (userData) => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("Không có người dùng nào đang đăng nhập");
        }

        const userRef = ref(database, `users/${user.uid}`);
        
        // Chỉ cập nhật các trường được cung cấp
        const updates = {};
        if (userData.userName) updates.userName = userData.userName;
        if (userData.genre) updates.genre = userData.genre;
        if (userData.artists) updates.artists = userData.artists;
        if (userData.email) updates.email = userData.email;

        await update(userRef, updates);
        return true;
    } catch (error) {
        throw new Error(`Lỗi khi cập nhật hồ sơ: ${error.message}`);
    }
};

/**
 * Lấy thông tin hồ sơ người dùng từ cơ sở dữ liệu
 * @returns {Promise<Object>} - Trả về promise chứa dữ liệu người dùng
 */
const getUserProfile = async () => {
    try {
        const user = auth.currentUser;
        if (!user) {
            throw new Error("Không có người dùng nào đang đăng nhập");
        }

        const userRef = ref(database, `users/${user.uid}`);
        const snapshot = await get(userRef);
        
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            throw new Error("Không tìm thấy hồ sơ người dùng");
        }
    } catch (error) {
        throw new Error(`Lỗi khi lấy hồ sơ: ${error.message}`);
    }
};

export { updateUserProfile, getUserProfile };
