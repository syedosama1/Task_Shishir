import React, { useState } from "react";
import {
  TouchableOpacity,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  FlatList,
  Pressable,
  ScrollView,
  Image,
} from "react-native";

const Tasks = ({ navigation }) => {
  const [items, setItems] = React.useState([]);
  const [complete, setComplete] = useState(false);

  const handlePress = () => {
    setComplete(true);
  };

  React.useEffect(() => {
    fetch("https://4inexpo-backend.ibrew-hub.com/users/test")
      .then((response) => response.json())
      .then((data) => setItems(data))
      .catch((error) => console.error(error));
  }, []);

  console.log({ items });
  const Item = ({ item }) => (
    <TouchableOpacity onPress={handlePress} disabled={false}>
      {complete ? (
        <Text style={{ color: "bold" }}>
          {" "}
          <View style={styles.item_complete}>
            <Image
              source={{ uri: item.image }}
              style={{ width: 60, height: 60, borderRadius: 10 }}
            />
            <View style={styles.view}>
              <Text style={styles.title}>{item.name}</Text>
              <Text
                style={{ color: "bold", flexWrap: "wrap" }}
                onPress={() => Linking.openURL(`${item.link}`)}
              >
                {item.link}
              </Text>
            </View>
            <TouchableOpacity style={styles.btn}>
              <Text style={{ fontSize: 12, color: "white" }}>complete </Text>
            </TouchableOpacity>
          </View>
        </Text>
      ) : (
        <View style={styles.item}>
          <Image
            source={{ uri: item.image }}
            style={{
              width: 60,
              height: 60,
              borderRadius: 10,
            }}
          />
          <View style={styles.view}>
            <Text style={styles.title}>{item.name}</Text>
            <Text
              style={{ color: "blue", flexWrap: "wrap" }}
              onPress={() => Linking.openURL(`${item.link}`)}
            >
              {item.link}
            </Text>
          </View>
          <TouchableOpacity style={styles.button}>
            <Text style={{ fontSize: 12, color: "white" }}> +15 Pt </Text>
          </TouchableOpacity>
        </View>
      )}
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#DCDCDC" }}>
      <FlatList
        data={items}
        renderItem={({ item }) => <Item item={item} />}
        keyExtractor={(item) => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  item: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "white",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },
  view: {
    marginLeft: 20,
    flex: 2,
    flexDirection: "column",
  },
  title: {
    fontSize: 16,
    color: "black",
    fontWeight: "bold",
  },
  button: {
    backgroundColor: "orange",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 15,
    height: 25,
    marginLeft: 5,
  },
  item_complete: {
    flex: 3,
    flexDirection: "row",
    backgroundColor: "gray",
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
  },

  btn: {
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    borderRadius: 15,
    height: 25,
    marginLeft: 5,
  },
});
export default Tasks;
