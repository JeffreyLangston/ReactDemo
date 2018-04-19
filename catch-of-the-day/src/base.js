import Rebase from "re-base";
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
	apiKey: "AIzaSyDIGfDu1Lx1puEfuWfqgFlosnv-lX-nYdk",
	authDomain: "catch-of-the-day-1bcd7.firebaseapp.com",
	databaseURL: "https://catch-of-the-day-1bcd7.firebaseio.com"
});

const base = Rebase.createClass(firebaseApp.database());

export {firebaseApp};

export default base;