import React from  'react';
import {Platform,Text,Button,View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Main from './android/app/source/main';
import SignUp from './android/app/source/signup'
import Login from './android/app/source/login'
import Loading from './android/app/source/loading'


const app=createStackNavigator({
  
 Loading: Loading,
 Signup:SignUp,
 Login: Login,
 Main: Main
},
{
  initialRouteName: 'Loading'
}
  
)
export default createAppContainer(app);
