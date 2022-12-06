// import React in our code
import React, { useState, useEffect } from "react";

// import all the components we are going to use
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
const s = require("../style");
const verdeAzulado = "#4EB5A2";
const MINUTE_MS = 60000;

const TimeSince = (props) => {
  const [currentDate, setCurrentDate] = useState("");
  const [minutes, setMinutes] = useState("");
  const [hours, setHours] = useState("");
  const [days, setDays] = useState("");
  const computeValues = () => {
    const diffTime = Math.abs(new Date() - props.dateLast);
    const diffSecs = diffTime / 1000;
    const diffMins = diffTime / 60000;
    const diffHours = diffSecs / 3600;
    const diffDays = diffSecs / (24 * 3600);
    setMinutes(
      Math.floor(diffMins % 60)
        .toString()
        .padStart(2, "0")
    );

    setHours(
      Math.floor(diffHours % 60)
        .toString()
        .padStart(2, "0")
    );
    setDays(Math.floor(diffDays).toString().padStart(2, "0"));
    setCurrentDate(
      Math.floor(diffDays).toString().padStart(2, "0") +
        "." +
        Math.floor(diffHours % 60)
          .toString()
          .padStart(2, "0") +
        "." +
        Math.floor(diffMins % 60)
          .toString()
          .padStart(2, "0")
    );
  };

  // To execute on initialization
  useEffect(() => {
    computeValues();
  }, []);

  // To execute every minute
  useEffect(() => {
    const interval = setInterval(() => {
      computeValues();
    }, MINUTE_MS);
    return () => clearInterval(interval);
  }, [props.dateLast]);

  // return <Text style={s.timeSince}>{currentDate}</Text>;
  return (
    <View style={{ flex: 1, flexDirection: "row", justifyContent: "flex-end" }}>
      <View>
        <Text style={{ fontSize: 10, color: verdeAzulado }}>D</Text>
        <Text style={{ fontSize: 32, color: verdeAzulado }}>{days}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 10, color: verdeAzulado }}>&nbsp;</Text>
        <Text style={{ fontSize: 32, color: verdeAzulado }}>.</Text>
      </View>
      <View>
        <Text style={{ fontSize: 10, color: verdeAzulado }}>H</Text>
        <Text style={{ fontSize: 32, color: verdeAzulado }}>{hours}</Text>
      </View>
      <View>
        <Text style={{ fontSize: 10, color: verdeAzulado }}>&nbsp;</Text>
        <Text style={{ fontSize: 32, color: verdeAzulado }}>.</Text>
      </View>
      <View>
        <Text style={{ fontSize: 10, color: verdeAzulado }}>M</Text>
        <Text style={{ fontSize: 32, color: verdeAzulado }}>{minutes}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    textAlign: "center",
    fontSize: 18,
    color: "green",
  },
});

export default TimeSince;
