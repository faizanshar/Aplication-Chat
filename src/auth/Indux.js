import React from 'react';

import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

// auth
import Login from './Login';
import Register from './Register';
import Resetpassword from './Resetpassword';
// import Splash from './src/auth/Splash';

//dashbord
import Faizchat from '../dashbord/Faizchat';
import HomeScreen from '../dashbord/HomeScreen';
import Hide from '../dashbord/Hide';
import Profil from '../dashbord/Profil';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const RootDrawer = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <Hide {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
    </Drawer.Navigator>
  );
};

const Indux = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Reset"
          component={Resetpassword}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component={RootDrawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Faizchat"
          component={Faizchat}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Profil"
          component={Profil}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Indux;
