"use strict";
import React, { Component } from "react";
import {
  AppRegistry,
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from "react-native";
import { RNCamera } from "react-native-camera";
const axios = require("axios");

export default class CameraComp extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.takePicture = this.takePicture.bind(this);
  }
  render() {
    return (
      <View style={styles.container}>
        <RNCamera
          ref={ref => {
            this.camera = ref;
          }}
          style={styles.preview}
          type={RNCamera.Constants.Type.back}
          flashMode={RNCamera.Constants.FlashMode.on}
          permissionDialogTitle={"Permission to use camera"}
          permissionDialogMessage={
            "We need your permission to use your camera phone"
          }
          onGoogleVisionBarcodesDetected={({ barcodes }) => {
            console.log(barcodes);
          }}
        />
        <View
          style={{ flex: 0, flexDirection: "row", justifyContent: "center" }}
        >
          <TouchableOpacity onPress={this.takePicture} style={styles.capture}>
            <Text style={{ fontSize: 14 }}> SNAP </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  takePicture = async function() {
    if (this.camera) {
      const options = { quality: 0.5 };
      const data = await this.camera.takePictureAsync(options);
      // request.post(
      //   { url: "https://file.io", form: { file: data.uri } },
      //   function(err, httpResponse, body) {
      //     /* ... */
      //     console.log(err);
      //     console.log(httpResponse);
      //     console.log(body);
      //   }
      //   console.log("________________________________");
      // );
      //var params = new URLSearchParams();
      //params.append("file", data.uri);
      // axios
      //   .post("https://file.io?file=@" + data.uri)
      axios({
        method: "post",
        url: "https://file.io",
        data: {
          file: "@" + data //.uri.substring(7)
        }
      })
        .then(function(response) {
          console.log(response.data);
        })
        .catch(function(error) {
          console.log(error);
        });
    }
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "black"
  },
  preview: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center"
  },
  capture: {
    flex: 0,
    backgroundColor: "#fff",
    borderRadius: 5,
    padding: 15,
    paddingHorizontal: 20,
    alignSelf: "center",
    margin: 20
  }
});

AppRegistry.registerComponent("CameraComp", () => CameraComp);
