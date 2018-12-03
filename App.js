import React , {Component} from 'react';
import {Platform,Text,Button,View} from 'react-native';
import {createStackNavigator,createAppContainer} from 'react-navigation';
import Main from './android/app/source/main';
import Home from './android/app/source/home';


const AppstackNavigator=createStackNavigator({
   main: Main,
   

  home1:Home
  
   
  
})
export default createAppContainer(AppstackNavigator);
