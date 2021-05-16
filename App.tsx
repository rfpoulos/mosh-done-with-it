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
        flex: 1
      }}>
        <View
          style={{
            backgroundColor: 'dodgerblue',
            flex: 2,
          }}
        >
        </View>
        <View
          style={{
            backgroundColor: 'gold',
            flex: 1,
          }}
        >
        </View>
        <View
          style={{
            backgroundColor: 'tomato',
            flex: 1,
          }}
        >
        </View>
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
