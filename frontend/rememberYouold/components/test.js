import React from "react";
import { FlatList, ActivityIndicator, Text, View } from "react-native";

export default class FetchExample extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true };
  }

  async componentDidMount() {
    fetch("https://rememberme-220022.appspot.com/")
      .then(response => {
        this.setState({
          isLoading: false,
          data: "response"
        });
      })
      .catch(error => {
        console.error(error);
      });
  }

  render() {
    if (this.state.isLoading) {
      return (
        <View style={{ flex: 1, padding: 20 }}>
          <ActivityIndicator />
        </View>
      );
    }

    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "white"
        }}
      >
        <Text>{JSON.stringify(this.state.data)}</Text>
      </View>
    );
  }
}
