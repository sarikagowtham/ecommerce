import React , {Component} from 'react';
import {Platform,TextInput,Button,View} from 'react-native';

 class Main extends Component{
    render()
    {
        return(
            <View>
                <TextInput placeholder="E-mail"/>
                <TextInput placeholder="Password"/>
                <Button title="Login"
                 onPress={()=>this.props.navigation.navigate('home1')}

                />
            </View>
        );
    }
}
export default Main;