import React from 'react';
import { 
  StyleSheet, 
  SafeAreaView, 
  View,
  Platform,
  StatusBar,
} from 'react-native';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={{
        backgroundColor: '#fff',
        flex: 1,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        flexWrap: "wrap",
      }}>
        <View
          style={{
            backgroundColor: 'dodgerblue',
            width: 100,
            height: 300,
            alignSelf: "flex-start"
          }}
        >
        </View>
        <View
          style={{
            backgroundColor: 'gold',
            width: 100,
            height: 100,
          }}
        >
        </View>
        <View
          style={{
            backgroundColor: 'tomato',
            height: 100,
            width: 100,
          }}
        >
        </View>
        <View
          style={{
            backgroundColor: 'grey',
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green',
            width: 100,
            height: 100,
          }}
        ></View>
        <View
          style={{
            backgroundColor: 'green-yellow',
            width: 100,
            height: 100,
          }}
        ></View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
  },
});
