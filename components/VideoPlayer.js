import { StyleSheet, Text, Button, View } from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";

const VideoPlayer = () => {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View style={styles.videoContainer}>
      <Video
        onLoadStart={() => <Text>loading...</Text>}
        ref={video}
        style={styles.video}
        source={{
          uri: "https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
        }}
        useNativeControls
        resizeMode="contain"
        isLooping
        onPlaybackStatusUpdate={(status) => setStatus(() => status)}
      />
    </View>
  );
};

export default VideoPlayer;

const styles = StyleSheet.create({
  videoContainer: {
    width: "100%",
    height: "90%",
  },
  video: {
    width: "100%",
    height: "100%",
  },
});
