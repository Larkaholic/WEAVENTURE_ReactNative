import Ionicons from "@expo/vector-icons/Ionicons";
import { useMemo, useState } from "react";
import { Pressable, ScrollView, Text, View } from "react-native";

const stats = [
  {
    id: "pending",
    label: "Pending",
    value: "1",
    icon: "time-outline" as const,
    iconColor: "#f97316",
    valueColor: "#f97316",
  },
  {
    id: "confirmed",
    label: "Confirmed",
    value: "1",
    icon: "checkmark-circle-outline" as const,
    iconColor: "#10b981",
    valueColor: "#059669",
  },
  {
    id: "guests",
    label: "Total Guests",
    value: "6",
    icon: "people-outline" as const,
    iconColor: "#2563eb",
    valueColor: "#2563eb",
  },
  {
    id: "revenue",
    label: "Revenue",
    value: "₱11,000",
    icon: "cash-outline" as const,
    iconColor: "#059669",
    valueColor: "#047857",
  },
];

type BookingStatus = "pending" | "confirmed" | "completed";

type BookingItem = {
  id: string;
  travelerName: string;
  status: BookingStatus;
  totalAmount: string;
  village: string;
  packageTitle: string;
  date: string;
  guests: number;
  days: number;
  email: string;
  requests: string[];
};

const bookings: BookingItem[] = [
  {
    id: "book-001",
    travelerName: "Maria Santos",
    status: "confirmed",
    totalAmount: "₱11,000",
    village: "Balbalasang Eco-Village",
    packageTitle: "Eco-Warrior Journey: Forest, River & Peace Pacts",
    date: "2026-03-15",
    guests: 2,
    days: 4,
    email: "maria.santos@email.com",
    requests: ["Extra weaving session", "Vegetarian meals"],
  },
  {
    id: "book-002",
    travelerName: "John Reyes",
    status: "pending",
    totalAmount: "₱32,800",
    village: "Damag, Jacmal, and Bunhian Sustainable Tourism Village",
    packageTitle: "Three-Village Terrace Heritage Journey",
    date: "2026-03-20",
    guests: 4,
    days: 5,
    email: "john.r@email.com",
    requests: ["Elder storytelling session", "Rice planting participation"],
  },
];

const statusLabel: Record<BookingStatus, string> = {
  pending: "PENDING",
  confirmed: "CONFIRMED",
  completed: "COMPLETED",
};

const statusStyles: Record<BookingStatus, { text: string; bg: string }> = {
  pending: { text: "#d97706", bg: "#fef3c7" },
  confirmed: { text: "#059669", bg: "#d1fae5" },
  completed: { text: "#64748b", bg: "#e2e8f0" },
};

export default function DashboardScreen() {
  const [activeFilter, setActiveFilter] = useState<"all" | BookingStatus>("all");

  const counts = useMemo(
    () => ({
      pending: bookings.filter((item) => item.status === "pending").length,
      confirmed: bookings.filter((item) => item.status === "confirmed").length,
      completed: bookings.filter((item) => item.status === "completed").length,
    }),
    [],
  );

  const visibleBookings = useMemo(
    () =>
      activeFilter === "all"
        ? bookings
        : bookings.filter((item) => item.status === activeFilter),
    [activeFilter],
  );

  return (
    <View className="flex-1 bg-[#f2f3f2]">
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View className="bg-[#066b4c] px-4 pb-10 pt-14">
          <View className="flex-row items-center justify-between">
            <Text className="text-[40px] font-bold leading-[46px] text-white">
              Host Dashboard
            </Text>

            <View className="flex-row items-center rounded-[10px] bg-[#0aa06f] px-3 py-2">
              <Ionicons name="wifi-outline" size={14} color="white" />
              <Text className="ml-2 text-[16px] font-semibold text-white">Online</Text>
            </View>
          </View>

          <Text className="mt-4 text-[18px] leading-[28px] text-white/95">
            Manage bookings, confirm availability, and track your community&apos;s
            tourism activity
          </Text>
        </View>

        <View className="px-4 pb-16 pt-6">
          {stats.map((item) => (
            <View
              key={item.id}
              className="mb-4 rounded-[18px] bg-white px-5 py-5"
              style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)" }}
            >
              <View className="flex-row items-start justify-between">
                <Text className="text-[24px] font-medium leading-[30px] text-[#2f3f49]">
                  {item.label}
                </Text>
                <Ionicons name={item.icon} size={26} color={item.iconColor} />
              </View>

              <Text
                className="mt-2 text-[40px] font-semibold leading-[46px]"
                style={{ color: item.valueColor }}
              >
                {item.value}
              </Text>
            </View>
          ))}

          <View
            className="mb-6 mt-2 rounded-[16px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 2px 10px rgba(0, 0, 0, 0.08)" }}
          >
            <View className="flex-row items-center">
              <Text className="mr-3 text-[16px] font-medium text-[#2f3f49]">Filter:</Text>
              <Pressable
                onPress={() => setActiveFilter("all")}
                className={`rounded-full px-4 py-2 ${
                  activeFilter === "all" ? "bg-[#0a7f5b]" : "bg-[#ececec]"
                }`}
              >
                <Text
                  className={`text-[14px] font-semibold ${
                    activeFilter === "all" ? "text-white" : "text-[#2f3f49]"
                  }`}
                >
                  All Bookings
                </Text>
              </Pressable>
            </View>

            <View className="mt-3 flex-row flex-wrap gap-3">
              {(
                ["pending", "confirmed", "completed"] as BookingStatus[]
              ).map((status) => {
                const isActive = activeFilter === status;
                const countText = counts[status] > 0 ? ` (${counts[status]})` : "";

                return (
                  <Pressable
                    key={status}
                    onPress={() => setActiveFilter(status)}
                    className={`rounded-full px-4 py-2 ${
                      isActive ? "bg-[#0a7f5b]" : "bg-[#ececec]"
                    }`}
                  >
                    <Text
                      className={`text-[14px] font-semibold ${
                        isActive ? "text-white" : "text-[#2f3f49]"
                      }`}
                    >
                      {status[0].toUpperCase() + status.slice(1)}
                      {countText}
                    </Text>
                  </Pressable>
                );
              })}
            </View>
          </View>

          {visibleBookings.map((booking) => {
            const badge = statusStyles[booking.status];

            return (
              <View
                key={booking.id}
                className="mb-5 rounded-[18px] bg-white px-5 py-5"
                style={{ boxShadow: "0px 2px 12px rgba(0, 0, 0, 0.08)" }}
              >
                <View className="flex-row items-start justify-between">
                  <View className="flex-1 pr-3">
                    <View
                      className="mb-2 self-start rounded-full px-3 py-1"
                      style={{ backgroundColor: badge.bg }}
                    >
                      <Text
                        className="text-[12px] font-semibold"
                        style={{ color: badge.text }}
                      >
                        {statusLabel[booking.status]}
                      </Text>
                    </View>

                    <View className="flex-row items-center">
                      <Text className="text-[34px] font-bold leading-[40px] text-[#111827]">
                        {booking.travelerName}
                      </Text>
                    </View>
                    <Text className="mt-1 text-[14px] text-[#6b7280]">
                      Booking ID: {booking.id}
                    </Text>
                  </View>

                  <Text className="text-[18px] font-semibold leading-[24px] text-[#047857]">
                    {booking.totalAmount}
                  </Text>
                </View>

                <View className="mt-4 rounded-[14px] bg-[#f2f4f3] px-4 py-4">
                  <Text className="text-[13px] text-[#6b7280]">{booking.village}</Text>
                  <Text className="mt-2 text-[18px] font-semibold leading-[28px] text-[#111827]">
                    {booking.packageTitle}
                  </Text>

                  <View className="mt-3 flex-row items-center">
                    <Ionicons name="calendar-outline" size={16} color="#666" />
                    <Text className="ml-1 mr-4 text-[14px] text-[#4b5563]">{booking.date}</Text>

                    <Ionicons name="people-outline" size={16} color="#666" />
                    <Text className="ml-1 mr-4 text-[14px] text-[#4b5563]">
                      {booking.guests} guests
                    </Text>

                    <Ionicons name="time-outline" size={16} color="#666" />
                    <Text className="ml-1 text-[14px] text-[#4b5563]">{booking.days} days</Text>
                  </View>
                </View>

                <Text className="mt-4 text-[16px] font-medium text-[#2f3f49]">
                  Contact Information:
                </Text>
                <Text className="mt-1 text-[16px] text-[#2f3f49]">{booking.email}</Text>

                <Text className="mt-3 text-[16px] font-medium text-[#2f3f49]">
                  Special Requests:
                </Text>
                {booking.requests.map((request, index) => (
                  <Text
                    key={`${booking.id}-${index}`}
                    className="mt-1 text-[16px] text-[#2f3f49]"
                  >
                    <Text className="text-[#0a7f5b]">• </Text>
                    {request}
                  </Text>
                ))}

                <View className="my-4 h-[1px] bg-[#e5e7eb]" />

                {booking.status === "pending" ? (
                  <View className="flex-row gap-3">
                    <Pressable className="h-[62px] flex-1 flex-row items-center justify-center rounded-[10px] bg-[#0a7f5b] px-3">
                      <Ionicons name="checkmark-circle-outline" size={18} color="white" />
                      <Text className="ml-2 text-center text-[16px] font-semibold text-white">
                        Confirm Booking
                      </Text>
                    </Pressable>
                    <Pressable className="h-[62px] flex-1 flex-row items-center justify-center rounded-[10px] bg-[#f6dfe0] px-3">
                      <Ionicons name="close-circle-outline" size={18} color="#dc2626" />
                      <Text className="ml-2 text-[16px] font-semibold text-[#b91c1c]">
                        Decline
                      </Text>
                    </Pressable>
                  </View>
                ) : (
                  <Pressable className="flex-row items-center justify-center rounded-[12px] bg-[#dbe8fa] px-3 py-4">
                    <Ionicons name="arrow-down-circle-outline" size={18} color="#1d4ed8" />
                    <Text className="ml-2 text-[16px] font-semibold text-[#1d4ed8]">
                      View Traveler Profile
                    </Text>
                  </Pressable>
                )}
              </View>
            );
          })}

          <View
            className="mt-2 rounded-[20px] bg-[#066b4c] px-6 py-8"
            style={{ boxShadow: "0px 4px 14px rgba(0, 0, 0, 0.1)" }}
          >
            <Text className="text-center text-[24px] font-bold leading-[32px] text-white">
              Need to Create a New Journey?
            </Text>
            <Text className="mt-4 text-center text-[18px] leading-[28px] text-white/95">
              Use the Journey Builder to create new travel packages for your
              community
            </Text>

            <Pressable className="mx-auto mt-6 rounded-full bg-white px-8 py-4">
              <Text className="text-[18px] font-semibold text-[#066b4c]">
                Go to Journey Builder
              </Text>
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
