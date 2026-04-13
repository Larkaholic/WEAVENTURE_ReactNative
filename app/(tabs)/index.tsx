import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { useRef } from "react";
import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  useWindowDimensions,
} from "react-native";

export default function HomeScreen() {
  const scrollRef = useRef<ScrollView>(null);
  const { height } = useWindowDimensions();
  const heroHeight = Math.max(620, height * 0.96);

  const scrollToSectionTwo = () => {
    scrollRef.current?.scrollTo({ y: heroHeight - 24, animated: true });
  };

  return (
    <SafeAreaView className="flex-1 bg-[#eff8f1]">
      <StatusBar barStyle="light-content" />

      <ScrollView
        ref={scrollRef}
        className="flex-1"
        contentContainerClassName="pb-28"
        showsVerticalScrollIndicator={false}
      >
        <View style={{ minHeight: heroHeight }} className="relative overflow-hidden">
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
            }}
            contentFit="cover"
            style={StyleSheet.absoluteFillObject}
          />

          <View className="absolute inset-0 bg-black/55" />

          <View className="flex-1 justify-end px-6 pb-10 pt-8" style={{ minHeight: heroHeight }}>
            <View className="items-center">
              <Text className="max-w-[320px] text-center text-[36px] font-bold leading-[42px] text-white">
                Weaving Culture,{"\n"}Connecting Journeys
              </Text>

              <Text className="mt-6 text-center text-[18px] leading-8 text-white/95">
                An Intelligent Digital Marketplace for Slow Tourism in the Cordillera Best Tourism
                Villages
              </Text>

              <Pressable
                onPress={scrollToSectionTwo}
                className="mt-10 flex-row items-center self-center rounded-full bg-[#00AF77] px-8 py-4"
                style={{ boxShadow: "0px 10px 18px rgba(0, 0, 0, 0.25)" }}
              >
                <Text className="text-[18px] font-semibold text-white">Begin Your Journey</Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="bg-[#eff8f1] px-6 pt-12">
          <View className="items-center">
            <Text className="text-center text-[34px] font-bold leading-[40px] text-[#111111]">
              Experience Authentic{"\n"}Slow Tourism
            </Text>

            <Text className="mt-5 text-center text-[18px] leading-8 text-[#35505a]">
              Connect with indigenous communities in the Cordillera mountains through immersive,
              culturally-respectful journeys. Each visit supports village preservation and honors
              ancestral traditions.
            </Text>
          </View>

          <View className="mt-12 items-center">
            <View className="items-center">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-[#d7f7e8]">
                <Ionicons name="heart-outline" size={28} color="#0a7f49" />
              </View>

              <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                Community-Centered
              </Text>

              <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
                Your journey directly benefits local families, cooperatives, and cultural
                preservation.
              </Text>
            </View>

            <View className="mt-12 items-center">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-[#fdebbd]">
                <Ionicons name="people-outline" size={28} color="#c45e00" />
              </View>

              <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                Culturally Immersive
              </Text>

              <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
                Learn ancestral traditions, participate in rituals, and forge meaningful
                connections.
              </Text>
            </View>

            <View className="mt-12 items-center">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-[#d7e6ff]">
                <Ionicons name="location-outline" size={28} color="#2557d6" />
              </View>

              <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                Slow & Mindful
              </Text>

              <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
                No star ratings, no rush. Travel at the rhythm of mountain life and seasonal
                cycles.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView, ScrollView, StatusBar, Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#eff8f1]">
      <StatusBar barStyle="dark-content" />

      <ScrollView
        className="flex-1"
        contentContainerClassName="px-6 pt-6 pb-28"
        showsVerticalScrollIndicator={false}
      >
        <View className="items-center">
          <Text className="text-center text-[34px] font-bold leading-[40px] text-[#111111]">
            Experience Authentic{"\n"}Slow Tourism
          </Text>

          <Text className="mt-5 text-center text-[18px] leading-8 text-[#35505a]">
            Connect with indigenous communities in the Cordillera mountains through immersive,
            culturally-respectful journeys. Each visit supports village preservation and honors
            ancestral traditions.
          </Text>
        </View>

        <View className="mt-12 items-center">
          <View className="items-center">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-[#d7f7e8]">
              <Ionicons name="heart-outline" size={28} color="#0a7f49" />
            </View>

            <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
              Community-Centered
            </Text>

            <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
              Your journey directly benefits local families, cooperatives, and cultural
              preservation.
            </Text>
          </View>

          <View className="mt-12 items-center">
            <View className="h-16 w-16 items-center justify-center rounded-full bg-[#fdebbd]">
              <Ionicons name="people-outline" size={28} color="#c45e00" />
            </View>

            <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
              Culturally Immersive
            </Text>

            <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
              Learn ancestral traditions, participate in rituals, and forge meaningful
              connections.
            </Text>
                  <StatusBar barStyle="light-content" />

  );
                  <ScrollView
                    ref={scrollRef}
                    className="flex-1"
                    contentContainerClassName="pb-28"
                    showsVerticalScrollIndicator={false}
                  >
                    <View style={{ minHeight: heroHeight }} className="relative overflow-hidden">
                      <Image
                        source={{
                          uri: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
                        }}
                        contentFit="cover"
                        style={{ position: "absolute", inset: 0 }}
                      />

                      <View className="absolute inset-0 bg-black/55" />

                      <View
                        className="flex-1 justify-end px-6 pb-10 pt-8"
                        style={{ minHeight: heroHeight }}
                      >
                        <View className="items-center">
                          <Text className="max-w-[320px] text-center text-[36px] font-bold leading-[42px] text-white">
                            Weaving Culture,{"\n"}Connecting Journeys
                          </Text>

                          <Text className="mt-6 text-center text-[18px] leading-8 text-white/95">
                            An Intelligent Digital Marketplace for Slow Tourism in the Cordillera Best Tourism
                            Villages
                          </Text>

                          <Text
                            onPress={() => scrollRef.current?.scrollTo({ y: heroHeight - 24, animated: true })}
                            className="mt-10 flex-row items-center self-center rounded-full bg-[#00AF77] px-8 py-4 text-[18px] font-semibold text-white"
                          >
                            Begin Your Journey <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
                          </Text>
                        </View>
                      </View>
                    </View>

                    <View className="bg-[#eff8f1] px-6 pt-12">
                      <View className="items-center">
                        <Text className="text-center text-[34px] font-bold leading-[40px] text-[#111111]">
                          Experience Authentic{"\n"}Slow Tourism
                        </Text>

                        <Text className="mt-5 text-center text-[18px] leading-8 text-[#35505a]">
                          Connect with indigenous communities in the Cordillera mountains through immersive,
                          culturally-respectful journeys. Each visit supports village preservation and honors
                          ancestral traditions.
                        </Text>
                      </View>

                      <View className="mt-12 items-center">
                        <View className="items-center">
                          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#d7f7e8]">
                            <Ionicons name="heart-outline" size={28} color="#0a7f49" />
                          </View>

                          <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                            Community-Centered
                          </Text>

                          <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
                            Your journey directly benefits local families, cooperatives, and cultural
                            preservation.
                          </Text>
                        </View>

                        <View className="mt-12 items-center">
                          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#fdebbd]">
                            <Ionicons name="people-outline" size={28} color="#c45e00" />
                          </View>

                          <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                            Culturally Immersive
                          </Text>

                          <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
                            Learn ancestral traditions, participate in rituals, and forge meaningful
                            connections.
                          </Text>
                        </View>

                        <View className="mt-12 items-center">
                          <View className="h-16 w-16 items-center justify-center rounded-full bg-[#d7e6ff]">
                            <Ionicons name="location-outline" size={28} color="#2557d6" />
                          </View>

                          <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                            Slow & Mindful
                          </Text>

                          <Text className="mt-3 text-center text-[17px] leading-7 text-[#35505a]">
                            No star ratings, no rush. Travel at the rhythm of mountain life and seasonal
                            cycles.
                          </Text>
                        </View>
                      </View>
                    </View>
