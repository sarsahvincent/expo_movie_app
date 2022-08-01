import React, { useState } from "react";
import { SafeAreaView, StatusBar, StyleSheet } from "react-native";
import Navigation from "./navigation/Naviagtion";

const App = () => {
  const STYLES = ["default", "dark-content", "light-content"];
  const TRANSITIONS = ["fade", "slide", "none"];

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState(STYLES[0]);
  const [statusBarTransition, setStatusBarTransition] = useState(
    TRANSITIONS[0]
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        animated={true}
        backgroundColor="black"
        barStyle={statusBarStyle}
        showHideTransition={statusBarTransition}
        hidden={hidden}
      />
      <Navigation />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#ECF0F1",
  },
});

export default App;
