 import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, database} from "../config/firebaseConfig";
import { set, ref } from "firebase/database";

// Hàm tạo tài khoản người dùng mới
const createProfile = async (user, userName) => 
{
    set(ref(database, `users/${user.uid}`), {
        email: user.email,
        userName: userName,
    });
};

const signUpUser = async (userName, email, password) => {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        const user = userCredential.user;
        if(user) {
            await createProfile(user, userName);
        }
        return user;
    }
    catch (error) {
        const errorCode = error.code;
        const errorMessage = error.message;
        throw new Error(`Error ${errorCode}: ${errorMessage}`);
    }
};

export default signUpUser;