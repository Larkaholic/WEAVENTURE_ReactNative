import Ionicons from "@expo/vector-icons/Ionicons";
import { useBottomTabBarHeight } from "@react-navigation/bottom-tabs";
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

const activities = [
  {
    id: 1,
    name: "Sacred Forest Watershed Walk",
    category: "NATURE",
    categoryColor: "#10b981",
    description:
      "Trek through pristine primary forest with Kalinga guides who will share indigenous knowledge of medicinal plants, sacred trees, and the watershed protection systems that sustain the community.",
    duration: "4-5 hours",
    price: 1000,
    maxGuests: 8,
    icon: "leaf",
  },
  {
    id: 2,
    name: "Chico River Heritage & Swimming",
    category: "NATURE",
    categoryColor: "#10b981",
    description:
      "Experience the crystal-clear Chico River through swimming, riverside meditation, and stories of the historic struggle to protect this waterway from damming projects.",
    duration: "3-4 hours",
    price: 700,
    maxGuests: 10,
    icon: "water",
  },
  {
    id: 3,
    name: "Bodong Peace Pact Learning",
    category: "CULTURAL",
    categoryColor: "#f59e0b",
    description:
      "Learn about the bodong system - an indigenous peace pact mechanism that has maintained inter-tribal harmony for centuries. Participate in a ceremonial gathering with community elders.",
    duration: "2-3 hours",
    price: 800,
    maxGuests: 12,
    icon: "handshake",
  },
  {
    id: 4,
    name: "Traditional Kalinga Backstrap Weaving",
    category: "CRAFT",
    categoryColor: "#8b5cf6",
    description:
      "Learn the ancient art of backstrap loom weaving with master artisans. Create your own small textile piece using natural dyes and traditional Kalinga patterns.",
    duration: "3-4 hours",
    price: 900,
    maxGuests: 6,
    icon: "build",
  },
];

export default function CreateScreen() {
  const tabBarHeight = useBottomTabBarHeight();
  const [selectedVillageId, setSelectedVillageId] = useState<number | null>(
    null,
  );
  const [journeyTitle, setJourneyTitle] = useState("");
  const [journeyDescription, setJourneyDescription] = useState("");
  const [duration, setDuration] = useState("3");
  const [basePrice, setBasePrice] = useState("0");
  const [selectedActivityIds, setSelectedActivityIds] = useState<number[]>([]);
  const [includedItems, setIncludedItems] = useState<string[]>([]);
  const [newItem, setNewItem] = useState("");
  const [culturalBriefing, setCulturalBriefing] = useState("");
  const toggleActivity = (activityId: number) => {
    setSelectedActivityIds((prev) =>
      prev.includes(activityId)
        ? prev.filter((id) => id !== activityId)
        : [...prev, activityId],
    );
  };

  const addItemToPackage = () => {
    if (newItem.trim()) {
      setIncludedItems((prev) => [...prev, newItem.trim()]);
      setNewItem("");
    }
  };

  const removeItemFromPackage = (index: number) => {
    setIncludedItems((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <SafeAreaView className="flex-1 bg-[#eff8f1]">
      <ScrollView
        style={{ flex: 1 }}
        contentContainerStyle={{ paddingBottom: 1 }}
        showsVerticalScrollIndicator={false}
      >
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
              journey should tell your village&apos;s unique story while
              ensuring sustainable, respectful tourism.
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

              {/* Select Activities Section */}
              <View className="mt-10">
                <Text className="text-[20px] font-bold leading-6 text-[#0a6b50]">
                  3. Include Activities
                </Text>
                <Text className="mt-2 text-[14px] leading-5 text-[#666666]">
                  Select 3-5 experiences to include in your journey
                </Text>

                {/* Activity Cards */}
                <View className="mt-6 gap-4 pb-16">
                  {activities.map((activity) => {
                    const isSelected = selectedActivityIds.includes(
                      activity.id,
                    );
                    return (
                      <Pressable
                        key={activity.id}
                        onPress={() => toggleActivity(activity.id)}
                        className={`overflow-hidden rounded-[14px] border-2 px-4 py-4 ${
                          isSelected
                            ? "border-[#0a6b50] bg-[#f0f9f6]"
                            : "border-[#e0e8e5] bg-white"
                        }`}
                      >
                        {/* Icon + Title Row */}
                        <View className="flex-row items-start gap-3">
                          {/* Checkbox */}
                          <View
                            className={`mt-0.5 h-5 w-5 flex-shrink-0 items-center justify-center rounded-[4px] border-2 ${
                              isSelected
                                ? "border-[#0a6b50] bg-[#0a6b50]"
                                : "border-[#ccc]"
                            }`}
                          >
                            {isSelected && (
                              <Ionicons
                                name="checkmark"
                                size={14}
                                color="white"
                              />
                            )}
                          </View>

                          {/* Title + Category */}
                          <View className="flex-1">
                            <Text className="text-[15px] font-semibold leading-5 text-[#0a6b50]">
                              {activity.name}
                            </Text>
                            <View
                              className="mt-2 inline-flex rounded-full px-2 py-1"
                              style={{
                                backgroundColor: activity.categoryColor + "20",
                              }}
                            >
                              <Text
                                className="text-[12px] font-semibold"
                                style={{ color: activity.categoryColor }}
                              >
                                {activity.category}
                              </Text>
                            </View>
                          </View>
                        </View>

                        {/* Description */}
                        <Text className="mt-4 text-[14px] leading-5 text-[#666666]">
                          {activity.description}
                        </Text>

                        {/* Footer - Duration, Price, Guests */}
                        <View className="mt-4 flex-row justify-between">
                          <View className="flex-1">
                            <Text className="text-[13px] font-semibold text-[#999999]">
                              {activity.duration}
                            </Text>
                          </View>
                          <View className="flex-1 items-center">
                            <Text className="text-[13px] font-semibold text-[#0a6b50]">
                              ₱{activity.price}
                            </Text>
                          </View>
                          <View className="flex-1 items-end">
                            <Text className="text-[13px] font-semibold text-[#999999]">
                              Up to {activity.maxGuests} guests
                            </Text>
                          </View>
                        </View>
                      </Pressable>
                    );
                  })}
                </View>
              </View>

              {/* What's Included in Package Section */}
              <View className="mt-10">
                <Text className="text-[20px] font-bold leading-6 text-[#0a6b50]">
                  4. What&apos;s Included in Package
                </Text>

                {/* Add Item Input */}
                <View className="mt-6">
                  <View className="flex-row gap-3">
                    <TextInput
                      value={newItem}
                      onChangeText={setNewItem}
                      placeholder="e.g., Homestay accommodation with meals"
                      placeholderTextColor="#999999"
                      className="flex-1 rounded-[12px] border border-[#d8ddd9] bg-white px-4 py-3 text-[16px] text-[#0a6b50]"
                    />
                    <Pressable
                      onPress={addItemToPackage}
                      className="items-center justify-center rounded-[12px] bg-[#0a6b50] px-4"
                    >
                      <Ionicons name="add" size={24} color="white" />
                    </Pressable>
                  </View>

                  {/* Add Item Link */}
                  <Pressable
                    onPress={addItemToPackage}
                    className="mt-3 flex-row items-center gap-2"
                  >
                    <Ionicons
                      name="add-circle-outline"
                      size={18}
                      color="#0a6b50"
                    />
                    <Text className="text-[15px] font-semibold text-[#0a6b50]">
                      Add Item
                    </Text>
                  </Pressable>
                </View>

                {/* Included Items List */}
                {includedItems.length > 0 && (
                  <View className="mt-6 gap-2">
                    {includedItems.map((item, index) => (
                      <View
                        key={index}
                        className="flex-row items-center gap-3 rounded-[12px] border border-[#e0e8e5] bg-white px-4 py-3"
                      >
                        <Ionicons
                          name="checkmark-circle"
                          size={20}
                          color="#10b981"
                        />
                        <Text className="flex-1 text-[15px] leading-5 text-[#0a6b50]">
                          {item}
                        </Text>
                        <Pressable
                          onPress={() => removeItemFromPackage(index)}
                          className="items-center justify-center"
                        >
                          <Ionicons
                            name="close-circle"
                            size={20}
                            color="#e05a5a"
                          />
                        </Pressable>
                      </View>
                    ))}
                  </View>
                )}

                {/* Empty State */}
                {includedItems.length === 0 && (
                  <View className="mt-6 rounded-[12px] border border-[#d8ddd9] bg-[#f9fafb] px-4 py-8">
                    <Text className="text-center text-[14px] leading-5 text-[#999999]">
                      No items added yet. Add what&apos;s included in your
                      journey package.
                    </Text>
                  </View>
                )}
              </View>

              {/* Pre-Visit Cultural Briefing Section */}
              <View className="mt-10">
                <Text className="text-[20px] font-bold leading-6 text-[#0a6b50]">
                  5. Pre-Visit Cultural Briefing
                </Text>
                <Text className="mt-2 text-[14px] leading-5 text-[#666666]">
                  Provide important cultural context and expectations for
                  travelers
                  <Text className="text-red-500">*</Text>
                </Text>

                {/* Briefing Text Area */}
                <TextInput
                  value={culturalBriefing}
                  onChangeText={setCulturalBriefing}
                  placeholder="Explain what travelers should know before arriving, how they'll be welcomed, cultural protocols to observe, and what to bring..."
                  placeholderTextColor="#999999"
                  multiline
                  numberOfLines={5}
                  className="mt-4 rounded-[12px] border border-[#d8ddd9] bg-white px-4 py-3 text-[16px] text-[#0a6b50]"
                />

                {/* Tip Card */}
                <View className="mt-6 rounded-[12px] border border-[#fcd34d] bg-[#fffbeb] px-4 py-4">
                  <View className="flex-row gap-3">
                    <Text className="text-[16px] font-semibold text-[#b45309]">
                      Tip:
                    </Text>
                    <View className="flex-1">
                      <Text className="text-[14px] leading-5 text-[#b45309]">
                        Reference the cultural protocols for{" "}
                        {selectedVillageId
                          ? villages.find((v) => v.id === selectedVillageId)
                              ?.name
                          : "your village"}
                        :
                      </Text>
                      <View className="mt-3 gap-2">
                        <Text className="text-[13px] leading-5 text-[#b45309]">
                          • Seek permission from elders before entering sacred
                          forests
                        </Text>
                        <Text className="text-[13px] leading-5 text-[#b45309]">
                          • Respect the bodong peace pact traditions and
                          territorial boundaries
                        </Text>
                        <Text className="text-[13px] leading-5 text-[#b45309]">
                          • Do not remove any plants, stones, or natural
                          materials from the village
                        </Text>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
          )}
        </View>
      </ScrollView>

      <View
        className="border-t border-[#d9e6df] bg-[#eff8f1] px-4  pt-3"
        style={{ marginBottom: tabBarHeight, zIndex: 50, elevation: 12 }}
      >
        <View className="flex-row items-center justify-between">
          <Pressable className="min-h-[58px] flex-1 items-center justify-center rounded-full bg-[#dddcdc]">
            <Text className="text-[18px] font-medium text-[#2f3f49]">
              Save as Draft
            </Text>
          </Pressable>

          <View className="w-3" />

          <Pressable className="min-h-[58px] flex-1 flex-row items-center justify-center rounded-full bg-[#0a7f5b] px-4">
            <Ionicons name="save-outline" size={16} color="white" />
            <Text className="ml-2 text-center text-[18px] font-semibold text-white">
              Create Journey Package
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
