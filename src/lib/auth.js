/* eslint-disable max-len */
import {
 getAuth, createUserWithEmailAndPassword, GoogleAuthProvider, TwitterAuthProvider, GithubAuthProvider, signInWithRedirect, getRedirectResult } from 'https://www.gstatic.com/firebasejs/9.9.4/firebase-auth.js';
import { app } from './config.js';

const auth = getAuth();

export const adduserWithEmail = (email, password) => createUserWithEmailAndPassword(auth, email, password);
// return implícito

export const providerGoogle = new GoogleAuthProvider();
export const providerTwitter = new TwitterAuthProvider();
export const providerGithub = new GithubAuthProvider();

export const signInUserWithProviders = (provider) => signInWithRedirect(auth, provider);

export const redirectResult = () => getRedirectResult(auth);
