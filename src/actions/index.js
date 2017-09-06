import firebase from 'firebase';

export const POST_COMPANY = 'POST_COMPANY';
export const FETCH_COMPANIES = 'FETCH_COMPANIES';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'businessdirectory-fb984.firebaseapp.com',
  databaseURL: 'https://businessdirectory-fb984.firebaseio.com',
  projectId: 'businessdirectory-fb984',
  storageBucket: 'businessdirectory-fb984.appspot.com',
  messagingSenderId: '88132379225',
};
firebase.initializeApp(config);

export function postCompany(company) {
  const newPostRef = firebase.database().ref().child('companies').push();
  newPostRef.set(company);
  return {
    type: POST_COMPANY,
    payload: newPostRef,
  };
}

export function fetchCompanies() {
  const request = firebase.database().ref('/companies/').once('value');
  return {
    type: FETCH_COMPANIES,
    payload: request,
  };
}
