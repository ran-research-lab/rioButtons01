import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";

import TimeSince from "./components/TimeSince";
const window = Dimensions.get("window");
const screen = Dimensions.get("screen");

const azulMarino = "#1C7BBA";
const azulAnil = "#5B8EB0";
const verdeAzulado = "#4EB5A2";
const magenta = "#DB8AC0";
const violeta = "#705C87";
const rojo = "#F04B35";

const centerX = Dimensions.get("window").width / 2;
const squareSide = Dimensions.get("window").height * 0.202;
const margin = Dimensions.get("window").height * 0.008;
const screenHeight = Dimensions.get("window").height;
const tenPercent = Dimensions.get("window").height * 0.1;

const App = () => {
  const [dimensions, setDimensions] = useState({ window, screen });

  useEffect(() => {
    const subscription = Dimensions.addEventListener(
      "change",
      ({ window, screen }) => {
        setDimensions({ window, screen });
      }
    );
    return () => subscription?.remove();
  });

  return (
    <View style={styles.container}>
      <View style={styles.libreDeCrisis}>
        <Text style={{ fontSize: 16, color: verdeAzulado }}>
          Libre de crisis
        </Text>
      </View>

      <View style={styles.libreDeCrisisTimeDisplay}>
        <TimeSince dateLast={new Date("November 21, 2022 6:15:00 AM")} />
      </View>

      <View style={[styles.square, styles.rectangle01]}></View>
      <View style={[styles.square, styles.rectangle02]}></View>
      <View style={[styles.square, styles.rectangle03]}></View>
      <View style={[styles.square, styles.rectangle04]}></View>
      <View style={[styles.square, styles.rectangle05]}></View>
      <View style={[styles.square, styles.rectangle06]}></View>
      <View style={styles.comoTeSientesView}>
        <Text style={styles.comoTeSientesText}>¿Cómo te sientes hoy?</Text>
      </View>
      <View style={[styles.basicRect, styles.desarrolladoEnView]}>
        <Text style={styles.desarrolladoEnText}>DESARROLLADO EN LA</Text>
        <Text style={styles.desarrolladoEnText}>
          UNIVERSIDAD DE PUERTO RICO
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    paddingTop: 100,
    backgroundColor: "black",
    padding: 8,
    position: "relative",
  },
  libreDeCrisis: {
    height: tenPercent,
    width: squareSide * 2 + margin,
    zIndex: 99,
    position: "absolute",
    top: screenHeight * 0.05,
    left: centerX - (squareSide + 0.5 * margin),
    justifyContent: "center",
    alignItems: "flex-start",
    borderTopColor: verdeAzulado,
    borderBottomColor: verdeAzulado,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  libreDeCrisisTimeDisplay: {
    height: tenPercent,
    width: squareSide,
    zIndex: 99,
    position: "absolute",
    top: screenHeight * 0.05,
    left: centerX,
    justifyContent: "center",
    alignItems: "flex-end",
    borderTopColor: verdeAzulado,
    borderBottomColor: verdeAzulado,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },

  basicRect: {
    height: tenPercent,
    width: squareSide * 2 + margin,
    zIndex: 99,
    position: "absolute",
  },

  square: {
    height: squareSide,
    width: squareSide,
    borderRadius: 5,
    position: "absolute",
  },
  rectangle01: {
    backgroundColor: azulMarino,
    top: squareSide,
    left: centerX - (squareSide + 0.5 * margin),
  },
  rectangle02: {
    backgroundColor: azulAnil,
    zIndex: 98,
    top: squareSide,
    left: centerX + 0.5 * margin,
  },
  rectangle03: {
    backgroundColor: verdeAzulado,
    zIndex: 98,
    top: squareSide + margin + squareSide,
    left: centerX - (squareSide + 0.5 * margin),
  },
  rectangle04: {
    backgroundColor: rojo,
    zIndex: 98,
    top: squareSide + margin + squareSide,
    left: centerX + 0.5 * margin,
  },
  rectangle05: {
    backgroundColor: violeta,
    zIndex: 98,
    top: 3 * squareSide + 2 * margin,
    left: centerX - (squareSide + 0.5 * margin),
  },
  rectangle06: {
    backgroundColor: magenta,
    zIndex: 98,
    top: 3 * squareSide + 2 * margin,
    left: centerX + 0.5 * margin,
  },

  comoTeSientesText: { fontSize: 24, color: verdeAzulado },
  comoTeSientesView: {
    height: tenPercent,
    width: squareSide * 2 + margin,
    zIndex: 99,
    position: "absolute",
    top: 4 * squareSide + 3 * margin,
    left: centerX - (squareSide + 0.5 * margin),
    justifyContent: "center",
    alignItems: "flex-start",
    borderBottomColor: verdeAzulado,
    borderBottomWidth: 2,
    borderStyle: "solid",
  },
  desarrolladoEnView: {
    top: 4 * squareSide + 3 * margin + tenPercent,
    left: centerX - (squareSide + 0.5 * margin),
    justifyContent: "flex-start",
    alignItems: "flex-start",
  },

  desarrolladoEnText: { fontSize: 7, color: verdeAzulado },
});

export default App;
