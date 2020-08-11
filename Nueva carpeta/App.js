import {createAppContainer}  from  'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import platosPantallas  from './pantallas/platos.js' ;
import Modal from './pantallas/modal.js' ;

import { Header } from 'react-native/Libraries/NewAppScreen';

const AppNavigator = createStackNavigator ({
  platos: {
    pantalla : platosPantallas,
  }},
  {
    initialRouteName : 'platos'
})

const RootStack = createStackNavigator ({
  Main: {
    Modal : Modal,
  }},
  {
    mode : 'modal',
    headerMode: none
})

export  default  createAppContainer(RootStack)
