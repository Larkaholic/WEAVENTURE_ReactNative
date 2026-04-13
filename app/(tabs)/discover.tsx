import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import type { ReactNode } from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
} from "react-native";

const filters = ["All", "Cultural", "Nature", "Crafts"];

const bestTourismVillages = [
  {
    year: "2025",
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    location: "Balbalan, Kalinga",
    title: "Balbalasang Eco-Village",
    description:
      "Balbalasang Eco-Village stands as the 2025 Best Tourism Village of the Cordilleras, a testament to the harmonious relationship between people, nature, and culture.",
  },
  {
    year: "2024",
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    location: "Aguinaldo, Ifugao",
    title: "Damag, Jacmal, and Bunhian Sustainable Tourism Village",
    description:
      "The 2024 Best Tourism Village represents a unique clustering of three barangays united in their commitment to community-based tourism and heritage preservation.",
  },
  {
    year: "2023",
    image:
      "https://images.unsplash.com/photo-1441123285228-1448e608f3d5?auto=format&fit=crop&w=1200&q=80",
    location: "Tabuk City, Kalinga",
    title: "Barangay Bagumbayan Coffee Village",
    description:
      "Barangay Bagumbayan has transformed itself into a premier coffee tourism destination, where local growers and visitors share a grounded cultural experience.",
  },
  {
    year: "2022",
    image:
      "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    location: "Hungduan, Ifugao",
    title: "Hapao-Baang-Nungulunan Clustered Tourism Village",
    description:
      "As the inaugural Cordillera Best Tourism Village, Hapao-Baang-Nungulunan set the standard for community-based tourism rooted in rice culture and collective stewardship.",
  },
];

const journeyPackages = [
  {
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    location: "Balbalasang Eco-Village, Balbalan, Kalinga",
    title: "Eco-Warrior Journey: Forest, River & Peace Pacts",
    duration: "4 days / 3 nights",
    description:
      "A 4-day deep immersion into Balbalasang’s pristine ecology and the Kalinga bodong peace pact system. Trek sacred forests, swim in the Chico River, learn indigenous watershed management, and participate in ceremonial gatherings with community elders.",
    price: "₱8,500",
  },
  {
    image:
      "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1200&q=80",
    location: "Aguinaldo, Ifugao",
    title: "Terrace Life Immersion: Harvest, Weave, and Share",
    duration: "3 days / 2 nights",
    description:
      "Travel through rice terrace communities, join traditional weaving sessions, and share meals prepared by local households. Built for travelers who want a calm, meaningful cultural rhythm.",
    price: "₱6,200",
  },
];

const individualExperiences = [
  {
    image:
      "https://images.unsplash.com/photo-1441123285228-1448e608f3d5?auto=format&fit=crop&w=1200&q=80",
    category: "NATURE",
    duration: "4-5 hours",
    location: "Balbalasang Eco-Village",
    title: "Sacred Forest Watershed Walk",
    description:
      "Trek through pristine primary forest with Kalinga guides who will share indigenous watershed practices and stories of stewardship.",
    price: "₱1,000",
    guests: "Up to 8 guests",
  },
  {
    image:
      "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=1200&q=80",
    category: "CRAFTS",
    duration: "2-3 hours",
    location: "Tabuk City, Kalinga",
    title: "Coffee Roasting and Tasting Session",
    description:
      "Meet local growers, learn the roasting process, and sample village coffee while listening to the people behind the harvest.",
    price: "₱850",
    guests: "Up to 12 guests",
  },
];

export default function DiscoverScreen() {
  return (
    <SafeAreaView className="flex-1 bg-[#f3f6f4]">
      <StatusBar barStyle="light-content" />

      <ScrollView showsVerticalScrollIndicator={false} className="flex-1">
        <View className="bg-[#0a6b50] px-6 pb-8 pt-16">
          <View className="max-w-[340px] gap-4">
            <Text className="text-[36px] font-bold leading-[42px] text-white">
              Discover Journeys
            </Text>

            <Text className="text-[17px] leading-7 text-white/92">
              Explore authentic, immersive experiences in Cordillera Best Tourism Villages.
            </Text>
          </View>
        </View>

        <View className="px-4 pb-8 pt-0">
          <View
            className="-mt-5 rounded-[22px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 12px 24px rgba(17, 66, 52, 0.12)" }}
          >
            <View className="flex-row items-center rounded-full border border-[#E7ECEA] bg-[#FBFCFB] px-4 py-3">
              <Ionicons name="search" size={18} color="#94A3A0" />
              <Text className="ml-3 flex-1 text-[15px] text-[#94A3A0]">
                Search villages, journeys, experiences
              </Text>
            </View>

            <View className="mt-4 flex-row items-start gap-3">
              <View className="mt-2">
                <Ionicons name="filter-outline" size={18} color="#66756F" />
              </View>

              <View className="flex-1 flex-row flex-wrap gap-2">
                {filters.map((filter, index) => {
                  const active = index === 0;

                  return (
                    <View
                      key={filter}
                      className={`rounded-full px-4 py-2 ${
                        active ? "bg-[#0a6b50]" : "bg-[#F2F4F3]"
                      }`}
                    >
                      <Text
                        className={`text-[14px] font-semibold ${
                          active ? "text-white" : "text-[#1F2D29]"
                        }`}
                      >
                        {filter}
                      </Text>
                    </View>
                  );
                })}
              </View>
            </View>
          </View>
        </View>

        <SectionHeading
          title="Best Tourism Villages"
          subtitle="Start with the communities already recognized for cultural preservation and visitor experience."
        />

        <CardStack>
          {bestTourismVillages.map((village) => (
            <InfoCard key={village.year}>
              <Image
                source={{ uri: village.image }}
                contentFit="cover"
                style={{ height: 180, width: "100%" }}
              />

              <View className="px-5 pb-5 pt-4">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={14} color="#0a6b50" />
                  <Text className="text-[13px] text-[#0a6b50]">{village.location}</Text>
                </View>

                <Text className="mt-2 text-[24px] font-bold leading-[30px] text-[#10211D]">
                  {village.title}
                </Text>

                <Text className="mt-3 text-[15px] leading-7 text-[#51635C]">
                  {village.description}
                </Text>

                <View className="mt-5 flex-row items-center self-start gap-2">
                  <Text className="text-[15px] font-semibold text-[#0a6b50]">Explore village</Text>
                  <Ionicons name="arrow-forward" size={16} color="#0a6b50" />
                </View>
              </View>
            </InfoCard>
          ))}
        </CardStack>

        <SectionHeading
          title="Journey Packages"
          subtitle="Ready-made itineraries with clear duration and pricing for easier planning."
        />

        <CardStack>
          {journeyPackages.map((packageItem) => (
            <InfoCard key={packageItem.title}>
              <Image
                source={{ uri: packageItem.image }}
                contentFit="cover"
                style={{ height: 180, width: "100%" }}
              />

              <View className="px-5 pb-5 pt-4">
                <View className="flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={14} color="#0a6b50" />
                  <Text className="text-[13px] text-[#0a6b50]">{packageItem.location}</Text>
                </View>

                <Text className="mt-2 text-[24px] font-bold leading-[30px] text-[#10211D]">
                  {packageItem.title}
                </Text>

                <View className="mt-3 flex-row items-center gap-2">
                  <Ionicons name="calendar-outline" size={14} color="#7A8782" />
                  <Text className="text-[14px] text-[#6A7671]">{packageItem.duration}</Text>
                </View>

                <Text className="mt-3 text-[15px] leading-7 text-[#51635C]">
                  {packageItem.description}
                </Text>

                <View className="mt-5 flex-row items-center justify-between">
                  <Text className="text-[20px] font-bold text-[#0a6b50]">{packageItem.price}</Text>
                  <View className="flex-row items-center gap-2">
                    <Text className="text-[15px] font-semibold text-[#0a6b50]">View Journey</Text>
                    <Ionicons name="arrow-forward" size={16} color="#0a6b50" />
                  </View>
                </View>
              </View>
            </InfoCard>
          ))}
        </CardStack>

        <SectionHeading
          title="Individual Experiences"
          subtitle="Build your own journey by mixing shorter experiences across villages."
        />

        <CardStack>
          {individualExperiences.map((experience) => (
            <InfoCard key={experience.title}>
              <Image
                source={{ uri: experience.image }}
                contentFit="cover"
                style={{ height: 170, width: "100%" }}
              />

              <View className="px-5 pb-5 pt-4">
                <View className="flex-row items-center justify-between gap-3">
                  <View className="rounded-sm bg-[#EAF8F2] px-3 py-1.5">
                    <Text className="text-[12px] font-semibold tracking-wide text-[#0a6b50]">
                      {experience.category}
                    </Text>
                  </View>

                  <Text className="text-[13px] text-[#6A7671]">{experience.duration}</Text>
                </View>

                <Text className="mt-3 text-[23px] font-bold leading-[29px] text-[#10211D]">
                  {experience.title}
                </Text>

                <View className="mt-2 flex-row items-center gap-1">
                  <Ionicons name="location-outline" size={14} color="#7A8782" />
                  <Text className="text-[13px] text-[#6A7671]">{experience.location}</Text>
                </View>

                <Text className="mt-3 text-[15px] leading-7 text-[#51635C]">
                  {experience.description}
                </Text>

                <View className="mt-5 flex-row items-center justify-between">
                  <Text className="text-[20px] font-bold text-[#0a6b50]">{experience.price}</Text>
                  <Text className="text-[13px] text-[#6A7671]">{experience.guests}</Text>
                </View>
              </View>
            </InfoCard>
          ))}
        </CardStack>

        <View className="bg-[#f3f6f4] px-4 pb-16 pt-2">
          <View
            className="items-center rounded-[24px] bg-[#0C7B57] px-6 py-10"
            style={{ boxShadow: "0px 10px 22px rgba(10, 80, 56, 0.18)" }}
          >
            <Text className="text-center text-[28px] font-bold leading-[34px] text-white">
              Ready for a Slow Tourism Journey?
            </Text>

            <Text className="mt-6 text-center text-[17px] leading-7 text-white/95">
              Connect with indigenous communities and experience the authentic rhythms of mountain life.
            </Text>

            <View className="mt-10 rounded-full bg-white px-6 py-4">
              <Text className="max-w-[220px] text-center text-[16px] font-semibold leading-6 text-[#0C7B57]">
                Learn More About Weaving Culture
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

function SectionHeading({ title, subtitle }: { title: string; subtitle: string }) {
  return (
    <View className="px-4 pt-2">
      <Text className="px-1 text-[22px] font-bold text-[#10211D]">{title}</Text>
      <Text className="mt-2 px-1 text-[14px] leading-6 text-[#61736C]">{subtitle}</Text>
    </View>
  );
}

function CardStack({ children }: { children: ReactNode }) {
  return <View className="px-4 pt-4 pb-5 gap-5">{children}</View>;
}

function InfoCard({ children }: { children: ReactNode }) {
  return (
    <View
      className="overflow-hidden rounded-[26px] bg-white"
      style={{ boxShadow: "0px 12px 24px rgba(17, 66, 52, 0.10)" }}
    >
      {children}
    </View>
  );
}