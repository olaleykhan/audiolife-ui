import React from 'react';
import { auth, createUserProfileDocument } from './firebase/firebase.config';
import { connect } from 'react-redux';
import { setCurrentUser } from './store/actions/user-actions/userActions';


import Routes from './routes/Routes'
import './App.css';
// import { setCurrentUser } from './store/actions/user-actions/userActions';

class App extends React.Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      // ************************if the user is logged in and google returns the userAuth object, ************************
      // ************************ then we set that in our store as current user************************
      // ************************below is how we do that

      // if google returns a user auth from the above, meaning that the person has logged in,
      if (userAuth) {
        // we try to store the user in our firestore database. we know that this methods checks if the user already exists, so it doesn't 
        // store it again. then it returns a userReference to us which contains an onSnapshot() method. 
        // remember it is an asynchronous action. so, we have to wait for it. 
        const userRef = await createUserProfileDocument(userAuth);

        // we then call a snapshot method that comes from the userRef
        // remember the userRef is returned after the user data is stored in our database or if the data already exists in our database
        // calling the snapshot method allows us access to the actual data in the database by using the snapshot.data() method. 
        // the data can of course be returned only if the data exists 
        userRef.onSnapshot(snapshot => {
          setCurrentUser({
            // get the id of the document
            id: snapshot.id,
            // get the data of the query using the document.data method
            ...snapshot.data()
          });
        });

      } else {
        setCurrentUser(userAuth);
        console.log(userAuth);

      }

    });


  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();

  }
  render() {
    return (
      <div className="App">
        <Routes />
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    setCurrentUser: (user) => { dispatch(setCurrentUser(user)) },
  }
}

export default connect(null, mapDispatchToProps)(App);
