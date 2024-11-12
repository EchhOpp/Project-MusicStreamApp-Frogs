import { Text, View, Button } from "react-native";
import { database } from "../config/firebaseConfig";
import { ref, set, onValue } from "firebase/database";
import { doc, setDoc } from 'firebase/firestore';

export default function Index() {

  function writeUserData() {
    set(ref(database, 'users/' + '4'), {
      username: 'Luan',
      email: 'abc@gmail.com',
      profile_picture : 'imageUrl'
    });
  }

  function readUserData() {
    const starCountRef = ref(database, 'users');
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      alert(JSON.stringify(data, null, 2));
    });
  }

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Xin chao fen</Text>
      <Button
        onPress={writeUserData}
        title="Connect to Firebase"
        color="#841584"
      />

      <Button
        onPress={readUserData}
        title="Read Data"
        color="#841584"
      />
    </View>
  );
}