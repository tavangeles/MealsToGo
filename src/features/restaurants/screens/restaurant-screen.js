import React, { useState } from "react";
import { Searchbar } from "react-native-paper";
import {
  Text,
  View,
  StatusBar,
  StyleSheet,
  SafeAreaView,
  FlatList,
} from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export default function RestaurantScreen({ restaurants }) {
  const [searchQuery, setSearchQuery] = useState("");
  const onChangeSearch = (query) => setSearchQuery(query);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.search}>
        <Searchbar
          placeholder="Search"
          onChangeText={onChangeSearch}
          value={searchQuery}
        />
      </View>
      <View style={styles.list}>
        <RestaurantInfoCard />
        {/* <FlatList
          data={restaurants}
          renderItem={<RestaurantInfoCard />}
          keyExtractor={(item) => item}
        /> */}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: StatusBar.currentHeight,
    flex: 1,
    backgroundColor: "#fff",
  },
  search: {
    padding: 16,
    // backgroundColor: "green",
  },
  list: {
    flex: 1,
    padding: 16,
  },
});
