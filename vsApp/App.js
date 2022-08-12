import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { WebView } from "react-native-webview";

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <SafeAreaView
        style={{
          backgroundColor: "black",
          height: "100%",
          width: "100%",
        }}>
        <WebView
          source={{ uri: "https://vscode.dev/" }}
          style={{ margin: 1, borderRadius: 15 }}
        />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 100,
    height: 100,
    alignItems: "center",
    justifyContent: "center",
  },
});
