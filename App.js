import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WebView } from 'react-native-webview';

export default function App() {
  const privateLocalUrl = 'https://57c08671fb2c.ap.ngrok.io';
  // const privateLocalUrl = 'https://staging.miime.io';
  // const privateLocalUrl = 'https://reactnative.dev/';
  // const privateLocalUrl = 'http://10.0.2.2:5000';

  return <WebView source={{ uri: privateLocalUrl }} />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
