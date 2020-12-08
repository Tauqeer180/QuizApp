import React, { Component } from 'react';
import { DrawerRouter, NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {Button, Icon } from 'react-native-elements';
import { DrawerContentScrollView, DrawerItem,  DrawerItemList, createDrawerNavigator } from '@react-navigation/drawer';
import Signin from './Signin';
import Signup from './Signup';
import Subject from './Subject';
import Forgotpassword from './Forgotpassword';
import Quiz from './Quiz';
const stack = createStackNavigator();
const Drawer = createDrawerNavigator();

DrawerRoutes=()=>{
    return(
        <Drawer.Navigator headerMode='float' screenOptions={{
            headerStyle: {backgroundColor: '#483d8b',},
            headerTintColor: '#fff',
            headerTitleStyle: {fontWeight: 'bold',},}}  initialRouteName="Quiz">
            
            <Drawer.Screen name="Subject" 
                            component={Subject} 
                            options={{title:'Subjects ',headerLeft: () => (
                                <Icon 
                                iconStyle={{padding:15}}
                                name='home'
                                  onPress={() => alert('This is a button!')}
                                  // onPress={()=> this.props.navigation.openDrawer()}
                                />
                              ),}} />
            <Drawer.Screen name="Quiz" 
                component={Quiz} 
                options={{title:'Quiz ',headerLeft: () => (
                    <Icon 
                    iconStyle={{padding:15}}
                    name='home'
                      onPress={() => alert('This is a button!')}
                      // onPress={()=> this.props.navigation.openDrawer()}
                    />
                  ),}} />
            {/* <Drawer.Screen name="View Reports" component={Reports} />
            <Drawer.Screen name="CreatePost" component={CreatePost} />
            <Drawer.Screen name="Details" component={Details} />
            <Drawer.Screen name='Search' component={Search} /> */}
            {/* <Drawer.Screen name="Logout" component={SigninTabs} /> */}
          </Drawer.Navigator>
    )
}
class Navigator extends Component{
    render(){
        return(
            <NavigationContainer >
              <stack.Navigator 
                    initialRouteName="Home">

              <stack.Screen    
                            name="Signin" 
                            component={Signin} />
              <stack.Screen    
                            name="Signup" 
                            component={Signup} />
              <stack.Screen    
                            name="Home" 
                            component={DrawerRoutes} 
                            // options={{title:'Subjects ',headerLeft: () => (
                            //   <Icon 
                            //   iconStyle={{padding:15}}
                            //   name='menu'
                            //     onPress={() => alert('This is a button!')}
                            //     onPress={()=> this.props.navigation.openDrawer()}
                            //   />
                            // ),}}
                             />
              <stack.Screen    
                            name='Forgotpassword' 
                            component={Forgotpassword} />
              </stack.Navigator>
        </NavigationContainer>
        )
    }
}
export default Navigator;