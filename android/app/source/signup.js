 import React , {Component} from 'react';
import {Platform,Text,Button,View,TextInput,StyleSheet,ImageBackground} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
 class Signup extends Component{
    state = { email: '', password: '', errorMessage: null }
    handleSignUp = () => {
        firebase
        .auth()
        .createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then(() => this.props.navigation.navigate('Login'))
        .catch(error => this.setState({ errorMessage: error.message }))
      console.log('handleSignUp')
    }
    render() {
        return (
         <View >
            <ImageBackground  style={ styles.img } 
          resizeMode='cover' 
          source={require('./cat.png')}>
          <View style={styles.container}>
          

            <Text>Sign Up</Text>
            {this.state.errorMessage &&
              <Text style={{ color: 'red' }}>
                {this.state.errorMessage}
              </Text>}
          
            <TextInput
              placeholder="Email"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={email => this.setState({ email })}
              value={this.state.email}
            />
            <TextInput
              secureTextEntry
              placeholder="Password"
              autoCapitalize="none"
              style={styles.textInput}
              onChangeText={password => this.setState({ password })}
              value={this.state.password}
            />
            
            <View style={styles.buttonContainer}>
           
            <Button 
            
            title="Sign Up" onPress={this.handleSignUp} />
            </View>
            <View style={styles.text}>
            

        
            <Text>
              Already have an account
            </Text>
            </View>
            <View style={styles.button}>
            <Button
             
              title="Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
            </View>
            </View>
            </ImageBackground>
          
          </View>
          
        )
      }
    }
    const styles = StyleSheet.create({
      container: {
        flex: 2,
        
        justifyContent: 'center',
        alignItems: 'center'
      },
      textInput: {
        height: 40,
        width: '90%',
        borderColor: 'gray',
        borderWidth: 1,
        marginTop: 8
      },
      buttonContainer:
      {
        width: '40%',
        height: 40,
        justifyContent: 'space-between',
        marginTop: 8
      },
      button:
      {
        justifyContent: 'space-between',
        width: '40%',
        height: 40
      },
      text:{
        marginTop: 5,
        marginBottom:8
      },
      img:
      {
        width: '100%',
        height: '100%',
      }
    })
export default Signup;