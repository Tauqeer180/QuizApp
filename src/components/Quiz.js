import React,  {Component} from 'react';
import { View, ScrollView, useWindowDimensions} from 'react-native';
import { Input, Button, Form,Text, Icon, ButtonGroup, Divider } from 'react-native-elements'
// import Icon from 'react-native-vector-icons/Entypo'
class Quiz extends Component {
    constructor () {
        super()
        this.state = {
          selectedIndex: 1,
          question:{
            q:'Which Amazon cloud product recently experienced a massive outage?',
            a:'option 1',
            b:'option 2',
            c:'option 3',
            d:'option 4',
            ans:'b'
          },
          submitted:false,
          selected:null,
          u_ans:null,
        }
        this.updateIndex = this.updateIndex.bind(this)
      }
      
      updateIndex (selectedIndex) {
        this.setState({selectedIndex})
      }
      clicked = (val, prop) => {
        const state = this.state;
        state[prop] = val;
        this.setState(state);
      }
      submit=()=>{
        this.setState({
          u_ans:this.state.question.ans == this.state.selected?true:false,
            submitted:true
          })
      }
      
  render(){
    const buttons = ['Hello World', 'Buttons', 'Hello World', 'Buttons'];
    const { selectedIndex, question, selected, submitted, u_ans } = this.state
    return(
        <ScrollView style={{backgroundColor:'darkorchid', height:'100%' ,flex: 1,flexDirection: 'column'}}>
            <View style={{flex: 1,flexDirection: 'column', alignItems:'center'}}>
                <View style={{width:'98%', backgroundColor:'white', shadowColor:'black', borderBottomLeftRadius:20, borderBottomRightRadius:20}}>
                    <View style={{ flex:1, margin:10, alignItems:'center', justifyContent:'center'}}>
                    <Text style={{fontSize:18, fontWeight:'bold'}} >Question</Text>
                            
                            <Text style={{fontSize:18, fontWeight:'500'}} > {question.q}  </Text>
                    </View>
                    
                </View>
                <Divider style={{ backgroundColor: 'black', width:'100%', height:1, margin:10 }} />

                    <View style={{flex:1, flexDirection:'row'}}>
                        <Button 
                        disabled={submitted?true:false}
                        disabledStyle={{backgroundColor:
                          (submitted && (selected== 'a' || question.ans == 'a'))?
                          (question.ans== 'a' )?'green':'red'
                          :
                          (selected == 'a')?'#000080':'#1e90ff'
                        }}
                          onPress={(val)=>this.clicked('a', 'selected')}
                          containerStyle={{flex:1,margin:5}}
                          buttonStyle={{backgroundColor:
                            (selected == 'a')?'#000080':'#1e90ff'
                          }}                         
                          type='solid' title={question.a} />
                        <Button 
                        disabled={submitted?true:false}
                        disabledStyle={{backgroundColor:
                          (submitted && (selected== 'b' || question.ans == 'b'))?
                          (question.ans== 'b' )?'green':'red'
                          :
                          (selected == 'b')?'#000080':'#1e90ff'
                        }}      
                          onPress={(val)=>this.clicked('b', 'selected')}
                          containerStyle={{flex:1,margin:5}} 
                          buttonStyle={{backgroundColor:
                            (selected == 'b')?'#000080':'#1e90ff'
                          }}                         
                          type='solid' title={question.a} />
                    </View>
                    <View style={{flex:1, flexDirection:'row'}}>
                        <Button 
                        disabled={submitted?true:false}
                        disabledStyle={{backgroundColor:
                          (submitted && (selected== 'c' || question.ans == 'c'))?
                          (question.ans== 'c' )?'green':'red'
                          :
                          (selected == 'c')?'#000080':'#1e90ff'
                        }}
                          onPress={(val)=>this.clicked('c', 'selected')}
                          containerStyle={{ flex:1,margin:5}} 
                          buttonStyle={{backgroundColor:
                            (selected == 'c')?'#000080':'#1e90ff'
                          }}                         
                          type='solid' title={question.a} />
                        <Button 
                        disabled={submitted?true:false}
                        disabledStyle={{backgroundColor:
                          (submitted && (selected== 'd' || question.ans == 'd'))?
                          (question.ans== 'd' )?'green':'red'
                          :
                          (selected == 'd')?'#000080':'#1e90ff'
                        }}
                          onPress={(val)=>this.clicked('d', 'selected')}
                          containerStyle={{ flex:1,margin:5}}
                          buttonStyle={{backgroundColor:
                            (selected == 'd')?'#000080':'#1e90ff'
                          }}                         
                          type='solid' title={question.a} />
                    </View>
                    <Divider style={{ backgroundColor: 'black', width:'100%', height:1, margin:10 }} />
                <View style={{width:'98%', backgroundColor:'white', shadowColor:'black', borderRadius:8}}>
                <View style={{flex:1, flexDirection:'row'}}>

<Button disabled={!selected?true:false}
onPress={this.submit}
  containerStyle={{flex:1}}
   buttonStyle={{margin:15}}
    type='solid' title="Submit" />
<Button disabled={!submitted?true:false} containerStyle={{flex:1}} buttonStyle={{margin:15}} type='solid' title="Next" />
</View>
                </View>

        </View>
    </ScrollView>
    )
  }
}
export default Quiz;
