import React , {Component} from 'react';
import {Platform,Text,Button,View} from 'react-native';
import {StackNavigator} from 'react-navigation';
 class Home extends Component{
    render()
    {
        return(
<View>
    <Text>Welcome to this site !!!</Text>
    <Button title="logout"
    onPress={()=>this.props.navigation.navigate('main')}/>
    
</View>
        );
    }
}
export default Home;