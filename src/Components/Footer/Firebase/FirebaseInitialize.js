import { initializeApp } from "firebase/app";
import firebaseConfig from './FirebaseConfiq';


const Authentication =()=>{
    initializeApp(firebaseConfig);
}


export default Authentication;