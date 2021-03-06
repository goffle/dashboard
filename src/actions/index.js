import firebase from 'firebase';

export const POST_COMPANY = 'POST_COMPANY';
export const FETCH_COMPANIES = 'FETCH_COMPANIES';
export const FETCH_COMPANY = 'FETCH_COMPANY';
export const POST_ARTICLES = 'POST_ARTICLES';
export const FETCH_ARTICLES = 'FETCH_ARTICLES';

const config = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: 'businessdirectory-fb984.firebaseapp.com',
  databaseURL: 'https://businessdirectory-fb984.firebaseio.com',
  projectId: 'businessdirectory-fb984',
  storageBucket: 'businessdirectory-fb984.appspot.com',
  messagingSenderId: '88132379225',
};
firebase.initializeApp(config);

export function postArticles(company) {
  const newPostRef = firebase.database().ref().child('articles').push();
  newPostRef.set(company);
  return {
    type: POST_ARTICLES,
    payload: newPostRef,
  };
}

export function postCompany(company) {
  if (!company.key) {
    const newPostRef = firebase.database().ref().child('companies').push();
    newPostRef.set(company);
  } else {
    const newPostRef = firebase.database().ref().child(`companies/${company.key}`);
    newPostRef.update(company);
  }
  return {
    type: POST_COMPANY,
  };
}

export function fetchArticles() {
  const request = firebase.database().ref('/articles/').once('value');
  return {
    type: FETCH_ARTICLES,
    payload: request,
  };
}

export function fetchCompanies() {
  const request = firebase.database().ref('/companies/').once('value');
  return {
    type: FETCH_COMPANIES,
    payload: request,
  };
}

export function fetchCompany(key) {
  const request = firebase.database().ref(`/companies/${key}`).once('value');
  return {
    type: FETCH_COMPANY,
    payload: request,
  };
}