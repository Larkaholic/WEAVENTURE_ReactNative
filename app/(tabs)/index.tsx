import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import {
    Pressable,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    View,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Image
        source={{
          uri: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
        }}
        contentFit="cover"
        style={styles.backgroundImage}
      />

      <View style={styles.overlay} />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <Text style={styles.title}>Weaving Culture, Connecting Journeys</Text>

          <Text style={styles.subtitle}>
            An Intelligent Digital Marketplace for Slow Tourism in the
            Cordillera Best Tourism Villages
          </Text>

          <Pressable style={styles.ctaButton}>
            <Text style={styles.ctaText}>Begin Your Journey</Text>
            <Ionicons name="arrow-forward" size={20} color="#F3FFF8" />
          </Pressable>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B1D2D",
  },
  backgroundImage: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "rgba(0, 0, 0, 0.52)",
  },
  safeArea: {
    flex: 1,
  },
  content: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 24,
    paddingBottom: 56,
    gap: 24,
  },
  title: {
    color: "#FFFFFF",
    fontSize: 48,
    lineHeight: 56,
    fontWeight: "700",
    fontFamily: "Georgia",
    letterSpacing: 0.2,
    textAlign: "center",
  },
  subtitle: {
    color: "rgba(255,255,255,0.95)",
    fontSize: 31,
    lineHeight: 42,
    textAlign: "center",
    fontWeight: "500",
    marginBottom: 4,
  },
  ctaButton: {
    alignSelf: "center",
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    backgroundColor: "#00AF77",
    paddingHorizontal: 30,
    paddingVertical: 16,
    borderRadius: 999,
    minWidth: 250,
    justifyContent: "center",
    shadowColor: "#007C57",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 16,
    elevation: 10,
  },
  ctaText: {
    color: "#F3FFF8",
    fontSize: 30,
    lineHeight: 34,
    fontWeight: "700",
  },
});
