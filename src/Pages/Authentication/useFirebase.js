import { useEffect, useState } from "react";
import intializationFirebase from "../../Firebasesetup/Firebaseinit";
import {getIdToken,updateProfile,signOut,onAuthStateChanged ,signInWithEmailAndPassword , getAuth, createUserWithEmailAndPassword } from "firebase/auth";

intializationFirebase()
const useFirebase = () => {
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [logerror, setLogerror] = useState('')
    const [isloading, setIsloading] = useState(true);
    const [isadmin, setIsadmin] = useState(false)
    const auth = getAuth();

    //register user
    const RegisterUser = (email,password,name,history) => {
      setIsloading(true)
        createUserWithEmailAndPassword(auth, email, password,name,history)
        
        .then((userCredential) => {
            const user = userCredential.user;
            SaveUser(email,name)
            history.push('/')
            //saving name into firebase
            updateProfile(auth.currentUser, {
              displayName: name,
            }).then(() => {

            }).catch((error) => {
              setError('Email is Already Register please Log in')
            }).finally(() => setIsloading(false));

        })
        .catch((error) => {
            setError('Your Email is Already Register Please Log in')
        });
    }
    //Login User
    const LoginUser = (email,password,location,history) => {
        setIsloading(true)
        signInWithEmailAndPassword(auth, email, password)
        
        .then((userCredential) => {
          // Signed in 
          const user = userCredential.user;
          history.push(location.state?.from || '/')
        })
        .catch((error) => {
          setLogerror('Your Email/Password is Wrong Please Try Again')
        }).finally(() => setIsloading(false));
    }

    //Getting current sign in user
    useEffect(() => {

        onAuthStateChanged(auth, (user) => {
            if (user) {
              localStorage.setItem('currentemail', user.email)
              const uid = user.uid;
              getIdToken(user).then(idtoken => localStorage.setItem('idtoken', idtoken))
                setUser(user)
            } else {
              setUser({})
            }
            setIsloading(false)
          });
    },[])
    //searching admin
    useEffect(() => {
        const email = localStorage.getItem('currentemail')
        if(email)
        {
          fetch(`https://evening-caverns-02179.herokuapp.com/users?email=${email}`)
          .then(res => res.json())
          .then(data => setIsadmin(data.admin))
        }
      
    },[user.email])
    //saving user to data base
    const SaveUser = (email,name) => {
      const newuser = {email,name}
      fetch('https://evening-caverns-02179.herokuapp.com/users',{
        method: 'POST',
        headers:{
          'content-type':'application/json'
        },
        body: JSON.stringify(newuser)
      })
      .then(res => res.json())
      .then(data => console.log(data))
    }
    //
    //Log out User
    const LogoutUser = () => {
        signOut(auth).then(() => {
            setUser({})
          }).catch((error) => {
            // An error happened.
          });
    }
    return {
        RegisterUser,
        user,
        LoginUser,
        error,
        LogoutUser,
        isloading,
        isadmin,
        logerror
    }
}

export default useFirebase;