import React , {Component} from 'react';
import {Platform,Text,StyleSheet,View} from 'react-native';
import firebase from '@firebase/app';
import '@firebase/auth';
 class Main extends Component{
    state = { currentUser: null }
    componentDidMount() {
        const { currentUser } = firebase.auth()
        this.setState({ currentUser })
    }
render() {
    const { currentUser } = this.state
return (
      <View style={styles.container}>
        <Text>
          Hi {currentUser && currentUser.email}!
        </Text>
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
export default Main;