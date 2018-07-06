import React from 'react';
import PinView from "./libs/PinView";
import { Text, View } from "react-native";

class LoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      disabledPinView: false
    };
    this.onSuccess = this.onSuccess.bind(this);
    this.onFailure = this.onFailure.bind(this);
  }

  onSuccess = () => {
    alert("Password Correct!");
    this.setState({
      disabledPinView: true
    })
  };
  onFailure = () => {
    alert("Password Incorrect!")
  };

  render() {
    return (
      <View style={ {
        flex           : 1,
        backgroundColor: '#6548b7',
        justifyContent : 'center'
      } }>
        <View>
          <Text>CÜZDAN</Text>
        </View>
        <PinView
          disabled={ this.state.disabledPinView }
          buttonTextColor={ '#FFF' }
          buttonBgColor={ '#FFF' }
          inputBgColor={ '#FFF' }
          onSuccess={ this.onSuccess }
          onFailure={ this.onFailure }
          password={ [5, 1, 3] }
        />
      </View>
    )
  }
}

export default LoginScreen