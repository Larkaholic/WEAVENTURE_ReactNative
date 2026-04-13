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

const villages = [
  {
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    badge: "2025 Winner",
    location: "Balbalan, Kalinga",
    title: "Balbalasang Eco-Village",
    description:
      "Balbalasang Eco-Village stands as the 2025 Best Tourism Village of the Cordilleras, a testament to the harmonious relationship between people, nature, and culture.",
  },
  {
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    badge: "2024 Winner",
    location: "Aguinaldo, Ifugao",
    title: "Damag, Jacmal, and Bunhian Sustainable Tourism Village",
    description:
      "The 2024 Best Tourism Village represents a unique clustering of three barangays united in their commitment to community-based tourism and heritage preservation.",
  },
  {
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1441123285228-1448e608f3d5?auto=format&fit=crop&w=1200&q=80",
    badge: "2023 Winner",
    location: "Tabuk City, Kalinga",
    title: "Barangay Bagumbayan Coffee Village",
    description:
      "Barangay Bagumbayan has transformed itself into a premier coffee tourism destination, where local growers and visitors share a grounded cultural experience.",
  },
  {
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    badge: "2022 Winner",
    location: "Hungduan, Ifugao",
    title: "Hapao-Baang-Nungulunan Clustered Tourism Village",
    description:
      "As the inaugural Cordillera Best Tourism Village, Hapao-Baang-Nungulunan set the standard for community-based tourism rooted in rice culture and collective stewardship.",
  },
];

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
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 112 }}
        showsVerticalScrollIndicator={false}
        nestedScrollEnabled
      >
        <View
          style={{ minHeight: heroHeight, flexGrow: 1 }}
          className="relative overflow-hidden"
        >
          <Image
            source={{
              uri: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=1400&q=80",
            }}
            contentFit="cover"
            style={StyleSheet.absoluteFillObject}
          />

          <View className="absolute inset-0 bg-black/55" />

          <View
            className="flex-1 justify-center px-6 pb-16 pt-12"
            style={{ minHeight: heroHeight }}
          >
            <View className="items-center">
              <Text className="max-w-[320px] text-center text-[36px] font-bold leading-[42px] text-white">
                Weaving Culture,{"\n"}Connecting Journeys
              </Text>

              <Text className="mt-6 text-center text-[18px] leading-8 text-white/95">
                An Intelligent Digital Marketplace for Slow Tourism in the
                Cordillera Best Tourism Villages
              </Text>

              <Pressable
                onPress={scrollToSectionTwo}
                className="mt-10 flex-row items-center self-center rounded-full bg-[#00AF77] px-8 py-4"
                style={{ boxShadow: "0px 10px 18px rgba(0, 0, 0, 0.25)" }}
              >
                <Text className="text-[18px] font-semibold text-white">
                  Begin Your Journey
                </Text>
                <Ionicons name="arrow-forward" size={20} color="#FFFFFF" />
              </Pressable>
            </View>
          </View>
        </View>

        <View className="bg-[#eff8f1] px-6 pb-14 pt-12">
          <View className="items-center">
            <Text className="text-center text-[34px] font-bold leading-[40px] text-[#111111]">
              Experience Authentic{"\n"}Slow Tourism
            </Text>

            <Text className="mt-5 text-center text-[18px] leading-8 text-[#35505a]">
              Connect with indigenous communities in the Cordillera mountains
              through immersive, culturally-respectful journeys. Each visit
              supports village preservation and honors ancestral traditions.
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

              <Text className="mt-3 max-w-[300px] text-center text-[17px] leading-7 text-[#35505a]">
                Your journey directly benefits local families, cooperatives, and
                cultural preservation.
              </Text>
            </View>

            <View className="mt-12 items-center">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-[#fdebbd]">
                <Ionicons name="people-outline" size={28} color="#c45e00" />
              </View>

              <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                Culturally Immersive
              </Text>

              <Text className="mt-3 max-w-[300px] text-center text-[17px] leading-7 text-[#35505a]">
                Learn ancestral traditions, participate in rituals, and forge
                meaningful connections.
              </Text>
            </View>

            <View className="mt-12 items-center">
              <View className="h-16 w-16 items-center justify-center rounded-full bg-[#d7e6ff]">
                <Ionicons name="location-outline" size={28} color="#2557d6" />
              </View>

              <Text className="mt-7 text-center text-[22px] font-bold text-[#111111]">
                Slow & Mindful
              </Text>

              <Text className="mt-3 max-w-[300px] text-center text-[17px] leading-7 text-[#35505a]">
                No star ratings, no rush. Travel at the rhythm of mountain life
                and seasonal cycles.
              </Text>
            </View>
          </View>
        </View>

        <View className="bg-[#eff8f1] px-4 pb-16 pt-4">
          <View className="px-2">
            <Text className="text-center text-[30px] font-bold leading-[36px] text-[#111111]">
              Cordillera Best Tourism Villages (2022-2025)
            </Text>
          </View>

          <View className="mt-8 gap-6">
            {villages.map((village) => (
              <View
                key={village.year}
                className="overflow-hidden rounded-[24px] bg-white"
                style={{ boxShadow: "0px 8px 20px rgba(19, 55, 54, 0.12)" }}
              >
                <Image
                  source={{ uri: village.image }}
                  contentFit="cover"
                  style={styles.cardImage}
                />

                <View className="gap-3 px-5 pb-5 pt-4">
                  <View className="flex-row items-center gap-3">
                    <View className="flex-row items-center rounded-full bg-[#0E8B54] px-4 py-1.5">
                      <Ionicons name="trophy" size={14} color="#FFFFFF" />
                      <Text className="ml-2 text-[13px] font-semibold text-white">
                        {village.badge}
                      </Text>
                    </View>

                    <View className="flex-row items-center gap-1">
                      <Ionicons
                        name="location-outline"
                        size={15}
                        color="#8B8B8B"
                      />
                      <Text className="text-[14px] text-[#6B6B6B]">
                        {village.location}
                      </Text>
                    </View>
                  </View>

                  <Text className="text-[27px] font-semibold leading-[32px] text-[#111111]">
                    {village.title}
                  </Text>

                  <Text className="text-[16px] leading-7 text-[#35505a]">
                    {village.description}
                  </Text>

                  <Pressable className="flex-row items-center self-start pt-1">
                    <Text className="text-[16px] font-semibold text-[#0E8B54]">
                      Explore Village
                    </Text>
                    <Ionicons name="arrow-forward" size={18} color="#0E8B54" />
                  </Pressable>
                </View>
              </View>
            ))}
          </View>
        </View>

        <View className="bg-[#eff8f1] px-4 pb-16 pt-2">
          <View
            className="items-center rounded-[24px] bg-[#0C7B57] px-6 py-10"
            style={{ boxShadow: "0px 10px 22px rgba(10, 80, 56, 0.18)" }}
          >
            <Text className="text-center text-[28px] font-bold leading-[34px] text-white">
              Are you a village host{"\n"}or cooperative?
            </Text>

            <Text className="mt-6 text-center text-[17px] leading-7 text-white/95">
              Use the Journey Builder to create authentic travel experiences that share your
              culture and support your community.
            </Text>

            <Pressable className="mt-10 flex-row items-center self-center rounded-full bg-white px-7 py-4">
              <Text className="text-[16px] font-semibold text-[#0C7B57]">Create a Journey</Text>
              <Ionicons name="arrow-forward" size={18} color="#0C7B57" />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  cardImage: {
    height: 208,
    width: "100%",
  },
});
