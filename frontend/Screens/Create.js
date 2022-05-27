import React, { Component } from "react";
import {
  Text,
  View,
  Dimensions,
  ActivityIndicator,
  Platform,
  Alert,
  Linking,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { ImagePicker, Permissions } from "expo";
import uid from "uuid/v4";
export default class UploadImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      endpoint: this.props.endpoint,
    };
    defaultProps = {
      onSuccess: undefined,
      onFailure: undefined,
      onStartUpload: undefined,
      alertTitle: "Please Allow Access",
      alertMessage: [
        "This applicaton needs access to your photo library to upload images.",
        "\n\n",
        "Please go to Settings of your device and grant permissions to Photos.",
      ].join(""),
      alertNo: "Not Now",
      alertYes: "Settings",
    };
  }
  render() {
    return (
      <View style={style.imgwrapper}>
        {this.props.callbackUrl != null ? (
          <Image
            source={{
              uri: this.state.uploaded_photo
                ? this.state.uploaded_photo
                : this.props.callbackUrl,
            }}
            style={{ width: 80, height: 80, borderRadius: 40 }}
          />
        ) : (
          <Image
            source={{
              uri:
                "https://www.royaleboost.com/template/default-profile-img.png",
            }}
            style={{ width: 80, height: 80 }}
          />
        )}
        <TouchableOpacity
          style={style.circleWrapper}
          onPress={() => {
            this.uploadResult();
          }}
        >
          <View />
        </TouchableOpacity>
      </View>
    );
  }
}
const style = StyleSheet.create({
  imgwrapper: {
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
    marginBottom: 80,
  },
  circleWrapper: {
    backgroundColor: "#ECECEC",
    height: 22,
    width: 22,
    borderWidth: 3,
    borderColor: "#ffffff",
    borderRadius: 11,
    marginLeft: 70,
    marginTop: -80,
  },
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
