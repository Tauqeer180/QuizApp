import React,  {Component} from 'react';
import { View, ScrollView} from 'react-native';
import { Input, Button, Form,Text, Icon } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Entypo'
class Subject extends Component {
  render(){
    return(
        <ScrollView style={{backgroundColor:'darkorchid', height:'100%' ,flex: 1,flexDirection: 'column'}}>
      <View style={{backgroundColor:'darkorchid', height:'100%' ,flex: 1,flexDirection: 'column', alignItems:'center'}}>
        <View style={{ margin:5, height:200,width:'95%', backgroundColor:'white', borderRadius:20,}}>
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <Icon  name='computer' />
                  <Text  h3>Computer Science</Text>
        </View>
              <View style={{ flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button onPress={()=>{this.props.navigation.goBack()}}  
                    buttonStyle={{paddingHorizontal:30, marginBottom:30}}  
                    title="START" type='outline' />
              </View>   
        </View>


        <View style={{ margin:5, height:200,width:'95%', backgroundColor:'white', borderRadius:20,}}>
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <Icon  name='computer' />
                  <Text  h3>Chemistry</Text>
        </View>
              <View style={{ flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button raised onPress={()=>{this.props.navigation.goBack()}}  
                    buttonStyle={{paddingHorizontal:30, marginBottom:30}}  
                    title="START" type='outline' />
              </View>   
        </View>
        <View style={{ margin:5, height:200,width:'95%', backgroundColor:'white', borderRadius:20,}}>
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <Icon  name='computer' />
                  <Text  h3>Computer Science</Text>
        </View>
              <View style={{ flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button onPress={()=>{this.props.navigation.goBack()}}  
                    buttonStyle={{paddingHorizontal:30, marginBottom:30}}  
                    title="START" type='outline' />
              </View>   
        </View>

        <View style={{ margin:5, height:200,width:'95%', backgroundColor:'white', borderRadius:20,}}>
        <View style={{ flex:1, alignItems:'center', justifyContent:'center'}}>
          <Icon  name='computer' />
                  <Text  h3>Computer Science</Text>
        </View>
              <View style={{ flex:1, justifyContent:'flex-end', alignItems:'center'}} >
                <Button onPress={()=>{this.props.navigation.goBack()}}  
                    buttonStyle={{paddingHorizontal:30, marginBottom:30}}  
                    title="START" type='outline' />
              </View>   
        </View>
        
    </View>
    </ScrollView>
    )
  }
}
export default Subject;
