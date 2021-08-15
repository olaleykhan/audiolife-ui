import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyBURrJG0sX7MOojQ8S97KCWidN_dgmrl8I",
    authDomain: "audio-lifer.firebaseapp.com",
    projectId: "audio-lifer",
    storageBucket: "audio-lifer.appspot.com",
    messagingSenderId: "606570145485",
    appId: "1:606570145485:web:2592c8f326e97a869e6b84",
    measurementId: "G-VZQW9983LP"
};

// firebase.initializeApp(config);
!firebase.apps.length ? firebase.initializeApp(config) : firebase.app()


// this creates a document for us under the user collection in our firebase database (firestore)
// it receives the user or call it userAuth object that firebase returns to us as argument.
// it also recieves other data we want to put in it as second argument.
export const createUserProfileDocument = async (userAuth, data) => {
    // checks if the login was succesfull and firebase returns an actual object to us containing data
    if (!userAuth) return null;
    // getting the user queryReference using the uid that comes  with the user object that the firebase auth returns
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    console.log(userRef);
    // get the snapshot that containes properties of our query using the userref.get() method. 
    const snapshot = await userRef.get();

    // since firebase auth has returned a snapshot of that particular document to us, 
    // we want to check if that user already exists in our database by checking the exists property in the snapshot object
    // if it does not exist, we store the user in our database and return the userRef.
    // if they exist, we simply return the userRef and do nothing else.
    if (!snapshot.exists) {
        // getting the name and email property from the user object that the firebase login oauth returns to us after a succesful login. 
        // remember that that userAuth argument is being passing in by us from where =ever we are calling this fuction from
        // probably from the app or from a reducer and the reducer is getting the data from the store. 
        const { displayName, email } = userAuth;
        // just trying to capture the time of creating the user here
        const createdAt = new Date();

        // we try to store the data in out database since the user does NOT already exist as seen in the snapshot we got.
        try {
            await userRef.set({
                displayName, email, createdAt, ...data
            })
        } catch (err) {
            console.log("error creating user", err.message)
        }
    }

    return userRef
}

// when we have logged in, we query inside the firestore document to see if user already exists. 
// it returs one of two things.either 1. a query reference or 2. a query snapshot. it always returns one of 
// these two things regardless of if the nothing exists in the db we are querying. 
// we query the db using firestore.doc("../filepath") or firestore.collections("../filepath") depending
// on if we are trying to query a particular document or a collection of documents. 

// 1. Query reference
// a query reference does not contain actual data. rather, it only contains properties that gives us details about what we are querying
// but then, a quesry refrence can either be a collection reference or a document reference. you already know the difference between a 
// document and a collection. 

// a document reference is used for performing Crud methods. HTTP crud methods. in firebase, the commads vary a lil

// Create = .set()
// Read = .get()
// update  = .update()
// delete = .delete()

// 2. Query Snapshot
// we get the query snapshot by calling the .get() method using the query reference

// in short, snapshot is gotten from query reference




export const auth = firebase.auth();
export const firestore = firebase.firestore();

// gives us access to the authprovider class in the google auth library
const provider = new firebase.auth.GoogleAuthProvider();

// gives us a popup in our app so they can signin
provider.setCustomParameters({ prompt: "select_account" });

// can give us pupops for multiple oAuths, e.g, github, twitter google, but we only wantg google
// , so we pass in our provider which has been setup for google popup from above
// then we export it so that we can use it in our app ui. e.g, the signIn component. 
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;