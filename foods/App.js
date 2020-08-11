

import {createAppContainer}  from  'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import platosPantallas  from './screens/Platos' ;
import Modal from './screens/Modal' ;



const AppNavigator = createStackNavigator ({
  platos: { screen : platosPantallas,
}
},
  {
    initialRouteName : 'Platos',
    
})

const RootStack = createStackNavigator ({
  Main:  AppNavigator,
    Modal : Modal,
  },
  {
    mode : 'modal',
    headerMode: 'none',
})

export default createAppContainer(RootStack)