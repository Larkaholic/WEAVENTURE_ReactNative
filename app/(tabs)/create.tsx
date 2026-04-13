import Ionicons from "@expo/vector-icons/Ionicons";
import { Image } from "expo-image";
import { useState } from "react";
import {
    Pressable,
    SafeAreaView,
    ScrollView,
    Text,
    TextInput,
    View,
} from "react-native";

const villages = [
  {
    id: 1,
    name: "Balbalasang Eco-Village",
    location: "Balbaian, Kalinga",
    image:
      "https://images.unsplash.com/photo-1539571696357-5a69c006ad4b?w=500&h=300&fit=crop",
  },
  {
    id: 2,
    name: "Damag, Jacmal, and Bunhian Sustainable Tourism Village",
    location: "Aguinaldo, Ifugao",
    image:
      "https://images.unsplash.com/photo-1449844908441-8829872d2607?w=500&h=300&fit=crop",
  },
  {
    id: 3,
    name: "Barangay Bagumbayan Coffee Village",
    location: "Tabuk City, Kalinga",
    image:
      "https://images.unsplash.com/photo-1559056169-641ef0ac8b9d?w=500&h=300&fit=crop",
  },
  {
    id: 4,
    name: "Hapao-Baang-Nungulunan Clustered Tourism Village",
    location: "Hungduan, Ifugao",
    image:
      "https://images.unsplash.com/photo-1595441810032-2048a7a13d6f?w=500&h=300&fit=crop",
  },
];

export default function CreateScreen() {
  const [selectedVillageId, setSelectedVillageId] = useState<number | null>(
    null,
  );
  const [journeyTitle, setJourneyTitle] = useState("");
  const [journeyDescription, setJourneyDescription] = useState("");
  const [duration, setDuration] = useState("3");
  const [basePrice, setBasePrice] = useState("0");
  return (
    <SafeAreaView className="flex-1 bg-[#eff8f1]">
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        {/* Header Section */}
        <View className="bg-[#0a6b50] px-4 py-12">
          <Text className="text-[32px] font-bold leading-[38px] text-white">
            Journey Builder
          </Text>
          <Text className="mt-3 text-[17px] leading-6 text-white/90">
            Create authentic, immersive journey packages for your village
            community
          </Text>
        </View>

        {/* Content */}
        <View className="px-4 py-6">
          {/* Notice Card */}
          <View className="rounded-[16px] border border-[#c7dfd8] bg-[#f0f9f6] px-6 py-6">
            {/* Info Icon + Heading */}
            <View className="flex-row items-center gap-4">
              <View className="h-8 w-8 items-center justify-center rounded-full border-2 border-[#0a6b50]">
                <Ionicons name="information" size={18} color="#0a6b50" />
              </View>
              <Text className="flex-1 text-[16px] font-semibold leading-5 text-[#0a6b50]">
                For Village Hosts & Cooperatives
              </Text>
            </View>

            {/* Description */}
            <Text className="mt-5 text-[15px] leading-6 text-[#0a6b50]/85">
              This tool helps you assemble 3–5 day journey packages by selecting
              activities, setting pricing, and managing cultural protocols. Each
              journey should tell your village's unique story while ensuring
              sustainable, respectful tourism.
            </Text>
          </View>

          {/* Select Your Village Section */}
          <View className="mt-10">
            <Text className="text-[20px] font-bold leading-6 text-[#0a6b50]">
              1. Select Your Village
            </Text>

            {/* Village Cards */}
            <View className="mt-6 gap-4 pb-16">
              {villages.map((village) => (
                <Pressable
                  key={village.id}
                  onPress={() => setSelectedVillageId(village.id)}
                  className={`overflow-hidden rounded-[16px] border-2 ${
                    selectedVillageId === village.id
                      ? "border-[#0a6b50] bg-white"
                      : "border-[#e0e8e5] bg-white"
                  }`}
                >
                  {/* Village Image */}
                  <Image
                    source={village.image}
                    contentFit="cover"
                    style={{ height: 160, width: "100%" }}
                  />

                  {/* Village Info */}
                  <View className="px-4 py-4">
                    <Text className="text-[16px] font-semibold leading-5 text-[#0a6b50]">
                      {village.name}
                    </Text>
                    <Text className="mt-2 text-[14px] leading-5 text-[#888888]">
                      {village.location}
                    </Text>
                  </View>

                  {/* Selection Indicator */}
                  {selectedVillageId === village.id && (
                    <View className="absolute right-4 top-4 h-6 w-6 items-center justify-center rounded-full bg-[#0a6b50]">
                      <Ionicons name="checkmark" size={16} color="white" />
                    </View>
                  )}
                </Pressable>
              ))}
            </View>
          </View>

          {/* Journey Information Section - Show only when village is selected */}
          {selectedVillageId !== null && (
            <View className="mt-10">
              <Text className="text-[20px] font-bold leading-6 text-[#0a6b50]">
                2. Journey Information
              </Text>

              {/* Journey Title */}
              <View className="mt-6">
                <Text className="text-[15px] font-semibold leading-5 text-[#0a6b50]">
                  Journey Title <Text className="text-red-500">*</Text>
                </Text>
                <TextInput
                  value={journeyTitle}
                  onChangeText={setJourneyTitle}
                  placeholder="e.g., Echoes of the Ancestors"
                  placeholderTextColor="#999999"
                  className="mt-3 rounded-[12px] border border-[#d8ddd9] bg-white px-4 py-3 text-[16px] text-[#0a6b50]"
                />
              </View>

              {/* Journey Description */}
              <View className="mt-6">
                <Text className="text-[15px] font-semibold leading-5 text-[#0a6b50]">
                  Journey Description <Text className="text-red-500">*</Text>
                </Text>
                <TextInput
                  value={journeyDescription}
                  onChangeText={setJourneyDescription}
                  placeholder="Describe the essence and narrative of this journey..."
                  placeholderTextColor="#999999"
                  multiline
                  numberOfLines={4}
                  className="mt-3 rounded-[12px] border border-[#d8ddd9] bg-white px-4 py-3 text-[16px] text-[#0a6b50]"
                />
              </View>

              {/* Duration */}
              <View className="mt-6">
                <Text className="text-[15px] font-semibold leading-5 text-[#0a6b50]">
                  <Ionicons name="calendar" size={14} color="#0a6b50" />{" "}
                  Duration (days) <Text className="text-red-500">*</Text>
                </Text>
                <TextInput
                  value={duration}
                  onChangeText={setDuration}
                  placeholder="3"
                  placeholderTextColor="#999999"
                  keyboardType="number-pad"
                  className="mt-3 rounded-[12px] border border-[#d8ddd9] bg-white px-4 py-3 text-[16px] text-[#0a6b50]"
                />
              </View>

              {/* Base Price */}
              <View className="mt-6 pb-16">
                <Text className="text-[15px] font-semibold leading-5 text-[#0a6b50]">
                  <Text className="text-[16px]">₱</Text> Base Price per Person
                  (₱)
                  <Text className="text-red-500">*</Text>
                </Text>
                <TextInput
                  value={basePrice}
                  onChangeText={setBasePrice}
                  placeholder="0"
                  placeholderTextColor="#999999"
                  keyboardType="number-pad"
                  className="mt-3 rounded-[12px] border border-[#d8ddd9] bg-white px-4 py-3 text-[16px] text-[#0a6b50]"
                />
              </View>
            </View>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
