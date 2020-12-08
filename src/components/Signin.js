import React,  {Component} from 'react';
import {Text, View} from 'react-native';
import { Input, Button, Form } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
class Signin extends Component {
  render(){
    return(
                  <View style={{backgroundColor:'darkorchid' ,flex: 1,
                   flexDirection: 'column', justifyContent:'flex-end',
                    alignItems:'center'}}>
      <View style={{height:'70%',width:'95%', backgroundColor:'white',
       borderTopRightRadius:20, borderTopLeftRadius:20}}>
        <View style={{padding:20}}>

      
             <Input
               placeholder="Email"
               leftIcon={{ type: 'entypo', name: 'email' }}
               onChangeText={value => this.setState({ comment: value })}
               errorMessage='ENTER A VALID ERROR HERE'
              />
            
            <Input placeholder="Password" secureTextEntry={true} 
            leftIcon={{ type: 'font-awesome', name: 'unlock-alt' }}
            />

            <Button title='SIGNIN' onPress={()=>{this.props.navigation.navigate('Home')}} />
        </View>     
              <View style={{padding:30, flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button raised onPress={()=>{this.props.navigation.navigate('Forgotpassword')}}  buttonStyle={{}}  title="Forgot Password" type='outline' />
                <Button raised onPress={()=>{this.props.navigation.navigate('Signup')}} titleStyle={{color:'red'}} title="Don't Have an Account? Create one" type='clear' />
              </View>   
        </View>
                </View>
    )
  }
}
export default Signin;