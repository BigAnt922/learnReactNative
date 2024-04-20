import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Loader from "../components/Loader";
import { getAllTypes } from "../api/getRequest";
import Error from "../components/Error";

const Home = ({ navigation }) => {
  const [type, setType] = useState({ reqStatus: false, data: [] });

  useEffect(() => {
    getAllTypes()
      .then((res = []) => setType({ reqStatus: true, data: res }))
      .catch((err) => setType({ reqStatus: true, data: [] }));
  }, []);

  return (
    <View style={styles.homeContainer}>
      {type.reqStatus ? (
        type.data.length > 1 ? (
          <Text> {JSON.stringify(type.data)}</Text>
        ) : (
          <Error message={type.data[0]?.message ?? "Something went wrong"} />
        )
      ) : (
        <Loader message={"Loading ..."} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  homeContainer: {
    flex: 1,
    marginTop: 24,
  },
});

export default Home;
