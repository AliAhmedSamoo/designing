import firebase from "firebase/app";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2rp8zmynddCNFXYABLhUTiTax5gGmef0",
  authDomain: "rent-a-car-5dabd.firebaseapp.com",
  projectId: "rent-a-car-5dabd",
  storageBucket: "rent-a-car-5dabd.appspot.com",
  messagingSenderId: "197068102895",
  appId: "1:197068102895:web:0a5155082dd1ca8a9bcf1a"
};

firebase.initializeApp(firebaseConfig);

const storage = firebase.storage();

export { storage, firebase as default };
