import firebase from 'firebase';

export const POST_SHOP = 'POST_SHOP';
export const FETCH_SHOPS = 'FETCH_SHOPS';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'businessdirectory-fb984.firebaseapp.com',
  databaseURL: 'https://businessdirectory-fb984.firebaseio.com',
  projectId: 'businessdirectory-fb984',
  storageBucket: 'businessdirectory-fb984.appspot.com',
  messagingSenderId: '88132379225',
};
firebase.initializeApp(config);

export function postShop(props) {
  const newPostRef = firebase.database().ref().child('shops').push();
  newPostRef.set(props);
  return {
    type: POST_SHOP,
    payload: newPostRef,
  };
}

export function fetchShops() {
  const request = firebase.database().ref('/shops/').once('value');
  return {
    type: FETCH_SHOPS,
    payload: request,
  };
}
