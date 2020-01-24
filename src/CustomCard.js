import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View } from 'react-native';

export default class CustomCard extends Component {
  constructor(props){
    super(props)
    this.state = {isHidden : false}
  }
  showHideText = () => {
    this.setState({isHidden : !this.state.isHidden})
  }
  render() {
    return (
      <View style={styles.container}>
        <Text >{this.state.isHidden? this.props.title : ''}</Text>
        <Image source={this.props.url} style = {{width: 300, height : 250}}/>
        <Button title="Click Me" onPress={this.showHideText}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
});
