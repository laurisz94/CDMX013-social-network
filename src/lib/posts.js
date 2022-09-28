import { getFirestore, collection, addDoc } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const addPost = (inputPost) => addDoc(collection(db, 'post'), { inputPost });

/* try {
    const docRef = await addDoc(collection(db, "post"), {
      email: "Ada",
      Text: "Lovelace",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } */
