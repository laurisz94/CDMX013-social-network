import {
  getFirestore, collection, addDoc, doc, onSnapshot, updateDoc, deleteDoc, /* query, orderBy */
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-firestore.js';
import { app } from './config.js';

const db = getFirestore(app);

export const addPost = (inputPost, userPost) => addDoc(collection(db, 'post'), { inputPost, userPost, fecha: 'hoy' });

/* try {
    const docRef = await addDoc(collection(db, "post"), {
      email: "Ada",
      Text: "Lovelace",
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  } */
// const q = query(collection(db, 'posts'), orderBy('timeStamp'));

export const getPost = (callback) => onSnapshot(collection(db, 'post'), callback);
export const deletePost = (postId) => deleteDoc(doc(db, 'post', postId));

/* export const getPost = ( functionPrueba() ) => onSnapshot(doc(db, 'post'), functionPrueba()); */
