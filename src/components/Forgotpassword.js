import React,  {Component} from 'react';
import {Text, View} from 'react-native';
import { Input, Button, Form } from 'react-native-elements'
import Icon from 'react-native-vector-icons/Entypo'
class Forgotpassword extends Component {
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
            

            <Button title='SIGNIN' />
        </View>     
              <View style={{padding:30, flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button onPress={()=>{this.props.navigation.goBack()}}  buttonStyle={{paddingHorizontal:30, marginBottom:30}}  title="GO BACK" type='outline' />
              </View>   
        </View>
                </View>
    )
  }
}
export default Forgotpassword;