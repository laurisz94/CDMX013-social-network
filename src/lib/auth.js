/* eslint-disable max-len */
import {
  getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider,
  signInWithRedirect, getRedirectResult, signInWithEmailAndPassword, signOut,
} from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

export const auth = getAuth();

export const adduserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// return implícito

export const providerGoogle = new GoogleAuthProvider();
export const providerTwitter = new TwitterAuthProvider();
export const providerGithub = new GithubAuthProvider();

export const signInUserWithProviders = (provider) => signInWithRedirect(auth, provider);

export const redirectResult = () => getRedirectResult(auth);

export const validateUserWithEmail = (email, password) => signInWithEmailAndPassword(auth, email, password);

export const singOutUser = () => signOut(auth);
