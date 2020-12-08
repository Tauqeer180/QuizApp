import React,  {Component} from 'react';
import {Text, View, ScrollView} from 'react-native';
import { Input, Button, Form } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
class Signup extends Component {
  render(){
    return(
                  <View style={{backgroundColor:'darkorchid' ,flex: 1,
                   flexDirection: 'column', justifyContent:'flex-end',
                    alignItems:'center'}}>

                       
      <View style={{height:'70%',width:'95%', backgroundColor:'white',
       borderTopRightRadius:20, borderTopLeftRadius:20}}>
       <ScrollView>
        <View style={{padding:20}}>

      
             <Input
               placeholder="Full Name"
               leftIcon={{ type: 'font-awesome', name: 'user' }}
               onChangeText={value => this.setState({ comment: value })}
               errorMessage='ENTER A VALID ERROR HERE'
              />
              <Input
              placeholder="Email"
              leftIcon={{ type: 'entypo', name: 'email' }}
              onChangeText={value => this.setState({ comment: value })}
              errorMessage='ENTER A VALID ERROR HERE'
             />
            
            <Input placeholder="Password" secureTextEntry={true} 
            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
            />
             <Input placeholder="Confirm Password" secureTextEntry={true} 
            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
            />

            <Button title='SIGNUP' />
        </View>     
              <View style={{padding:30, flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button onPress={()=>{this.props.navigation.navigate('Signin')}} titleStyle={{color:'red'}} title="Have an Account? Please Signin" type='clear' />
              </View>   
        </ScrollView>
        </View>
                </View>
    )
  }
}
export default Signup;