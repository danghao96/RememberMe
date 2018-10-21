/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  AppRegistry,
  Dimensions,
  TouchableOpacity
} from "react-native";
import FetchExample from "./components/test";
import BadInstagramCloneApp from "./components/cam";

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <View style={styles.container}>
        <BadInstagramCloneApp />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: "center",
    //alignItems: "center",
    flex: 1,
    //flexDirection: "column",
    justifyContent: "center",
    alignItems: "stretch",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  },
  header: {
    flex: 0,
    justifyContent: "flex-end",
    height: 80

    //backgroundColor: "#000000"
  },
  headerText: {
    textAlign: "center",
    fontSize: 20,
    padding: 0
  }
});
