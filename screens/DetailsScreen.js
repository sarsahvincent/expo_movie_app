import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  ScrollView,
  SafeAreaView,
  Modal,
  Pressable,
} from "react-native";
import React, { useState } from "react";
import date from "date-and-time";
import { AirbnbRating } from "react-native-ratings";
import moment from "moment";
import PlayButton from "../components/PlayButton";
import VideoPlayer from "../components/VideoPlayer";
const placeholderImage = require("../assets/images/movie_placeholder.jpeg");

const height = Dimensions.get("screen").height;
const DetailsScreen = ({ navigation, route }) => {
  const item = route.params.item;
  const [modalVisible, setModalVisible] = useState(false);
  const videoShown = () => {
    setModalVisible(!modalVisible);
  };
  return (
    <SafeAreaView>
      <View>
        <ScrollView>
          <Image
            style={styles.image}
            source={
              item?.poster_path
                ? { uri: "https://image.tmdb.org/t/p/w500" + item.poster_path }
                : placeholderImage
            }
          />
          <View style={styles.container}>
            <View style={styles.playButton}>
              <PlayButton handlePress={videoShown} />
            </View>
            <Text style={styles.movieTitle}>{item?.title}</Text>
            {item?.genres?.map((gen) => {
              return <Text>{gen.name}</Text>;
            })}

            <AirbnbRating
              showRating={false}
              defaultRating={item.vote_average / 2}
              size={25}
              isDisabled
            />
            <Text style={styles.overview}>{item.overview}</Text>
            <Text style={styles.releaseDate}>
              Release date :{moment(item.release_date).format("MMMM Do YYYY")}
            </Text>
          </View>
        </ScrollView>

        <Modal visible={modalVisible} animationType="slide">
          <View style={styles.videoModal}>
            <View style={{}}>
              <Pressable onPress={() => videoShown()} tyle={styles.buttton}>
                <Text>Close</Text>
              </Pressable>
            </View>
            <VideoPlayer />
          </View>
        </Modal>
      </View>
    </SafeAreaView>
  );
};

export default DetailsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    height: height / 2.5,
  },
  movieTitle: {
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
    color: "black",
  },
  overview: {
    padding: 15,
    color: "black",
  },
  releaseDate: {
    fontWeight: "bold",
    color: "black",
  },
  playButton: {
    position: "absolute",
    top: -25,
    right: 20,
  },
  videoModal: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  buttton: {
    marginTop: 100,
  },
});
