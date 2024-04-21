import React, { useLayoutEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { getAllTypes } from "../api/getRequest";
import Error from "../components/Error";
import Loader from "../components/Loader";
import TypeList from "../components/screen/home/TypeList";

const Home = ({ navigation, route }) => {
  const [type, setType] = useState({ reqStatus: false, data: [] });

  useLayoutEffect(() => {
    getAllTypes()
      .then((res = []) => setType({ reqStatus: true, data: res }))
      .catch((err) => setType({ reqStatus: true, data: [] }));
  }, []);

  return (
    <View style={styles.homeContainer}>
      {type.reqStatus ? (
        type.data.length > 1 ? (
          <TypeList navigation={navigation} route={route} data={type.data} />
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
    padding: 16,
  },
});

export default Home;
