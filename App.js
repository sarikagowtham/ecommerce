import React , {Component} from 'react'
import {Platform,Text,Button,View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Main from './android/app/source/main';

import Login from './android/app/source/login';
import Signup from './android/app/source/signup';

import firebase from '@firebase/app';
import '@firebase/auth';
const firebaseConfig=
{
  apiKey:'AIzaSyBdYcPjQ62WPgR80UszZioR6_6Rfnxy0pM',
  authDomain:'myapp-5103e.firebaseapp.com',
  firebase_url: 'https://myapp-5103e.firebaseio.com',
  project_id: 'myapp-5103e',
  storage_bucket: 'myapp-5103e.appspot.com',


};
firebase.initializeApp(firebaseConfig);
console.log(firebase.app().name);

const app=createStackNavigator({
  

 Login: Login,
 Main: Main,
 Signup:Signup,
 
},
{
  initialRouteName: 'Signup'
}
  
)
export default createAppContainer(app);
