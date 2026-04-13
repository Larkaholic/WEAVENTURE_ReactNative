import Ionicons from "@expo/vector-icons/Ionicons";
import { ScrollView, Text, View } from "react-native";

const topMetrics = [
  {
    id: "gmv",
    label: "Monthly GMV",
    value: "₱842,500",
    icon: "cash-outline" as const,
    color: "#0f766e",
  },
  {
    id: "bookings",
    label: "Total Bookings",
    value: "214",
    icon: "receipt-outline" as const,
    color: "#2563eb",
  },
  {
    id: "hosts",
    label: "Active Hosts",
    value: "37",
    icon: "people-outline" as const,
    color: "#7c3aed",
  },
  {
    id: "conversion",
    label: "Conversion Rate",
    value: "4.8%",
    icon: "trending-up-outline" as const,
    color: "#059669",
  },
];

const sustainabilityMetrics = [
  {
    label: "Visitor Flow",
    value: 75,
    status: "GOOD",
    description: "Within sustainable capacity",
    barColor: "#2563eb",
  },
  {
    label: "Environmental Impact",
    value: 30,
    status: "GOOD",
    description: "Low impact activities",
    barColor: "#2563eb",
  },
  {
    label: "Community Benefit",
    value: 92,
    status: "EXCELLENT",
    description: "High local employment",
    barColor: "#059669",
  },
  {
    label: "Cultural Preservation",
    value: 88,
    status: "EXCELLENT",
    description: "Strong cultural engagement",
    barColor: "#059669",
  },
];

const revenueDistribution = [
  {
    id: "balbalasang",
    label: "Balbalasang Eco-Village",
    type: "Village",
    percentage: 24,
    amount: "₱202,200",
    color: "#059669",
  },
  {
    id: "damag-jacmal-bunhian",
    label: "Damag, Jacmal, and Bunhian Sustainable Tourism Village",
    type: "Village",
    percentage: 21,
    amount: "₱176,925",
    color: "#2563eb",
  },
  {
    id: "bagumbayan",
    label: "Barangay Bagumbayan Coffee Village",
    type: "Village",
    percentage: 15,
    amount: "₱126,375",
    color: "#0f766e",
  },
  {
    id: "hapao",
    label: "Hapao-Baang-Nungulunan Clustered Tourism Village",
    type: "Village",
    percentage: 18,
    amount: "₱151,650",
    color: "#14b8a6",
  },
  {
    id: "chico-eco-park",
    label: "Chico River Heritage Eco-Park",
    type: "Eco-Park",
    percentage: 12,
    amount: "₱101,100",
    color: "#8b5cf6",
  },
  {
    id: "watershed-eco-park",
    label: "Sacred Forest Watershed Eco-Park",
    type: "Eco-Park",
    percentage: 10,
    amount: "₱84,250",
    color: "#9333ea",
  },
];

const bookingTrends = [
  { month: "Jan", bookings: 118 },
  { month: "Feb", bookings: 132 },
  { month: "Mar", bookings: 149 },
  { month: "Apr", bookings: 164 },
  { month: "May", bookings: 181 },
  { month: "Jun", bookings: 214 },
];

const bookingsByVillage = [
  { name: "Balbalasang Eco-Village", bookings: 54, share: 25 },
  {
    name: "Damag, Jacmal, and Bunhian Sustainable Tourism Village",
    bookings: 47,
    share: 22,
  },
  { name: "Barangay Bagumbayan Coffee Village", bookings: 39, share: 18 },
  {
    name: "Hapao-Baang-Nungulunan Clustered Tourism Village",
    bookings: 44,
    share: 21,
  },
  { name: "Eco-Park Partner Routes", bookings: 30, share: 14 },
];

export default function AdminScreen() {
  return (
    <View className="flex-1 bg-[#f2f4f3] mb-20">
      <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false}>
        <View className="bg-[#066b4c] px-4 pb-10 pt-14">
          <Text className="text-[38px] font-bold leading-[44px] text-white">
            Weave Admin & Analytics
          </Text>
          <Text className="mt-4 text-[18px] leading-7 text-white/95">
            Platform operations, transaction monitoring, and Smart
            Sustainability Dashboard
          </Text>
        </View>

        <View className="px-4 pb-16 pt-6">
          <View className="mb-6 flex-row flex-wrap justify-between">
            {topMetrics.map((metric) => (
              <View
                key={metric.id}
                className="mb-3 w-[48.5%] rounded-[16px] bg-white px-4 py-4"
                style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
              >
                <View className="flex-row items-center justify-between">
                  <Text className="text-[13px] font-medium text-[#6b7280]">
                    {metric.label}
                  </Text>
                  <Ionicons name={metric.icon} size={16} color={metric.color} />
                </View>
                <Text
                  className="mt-3 text-[24px] font-bold"
                  style={{ color: metric.color }}
                >
                  {metric.value}
                </Text>
              </View>
            ))}
          </View>

          <View
            className="mb-6 rounded-[16px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
          >
            <Text className="text-[16px] font-semibold text-[#1f2937]">
              Booking Flow (Last 30 Days)
            </Text>

            <View className="mt-4 space-y-3">
              <View>
                <View className="mb-1 flex-row items-center justify-between">
                  <Text className="text-[13px] text-[#4b5563]">
                    Pending Review
                  </Text>
                  <Text className="text-[13px] font-semibold text-[#f97316]">
                    42
                  </Text>
                </View>
                <View className="h-2 rounded-full bg-[#f3f4f6]">
                  <View className="h-2 w-[38%] rounded-full bg-[#f97316]" />
                </View>
              </View>

              <View>
                <View className="mb-1 flex-row items-center justify-between">
                  <Text className="text-[13px] text-[#4b5563]">Confirmed</Text>
                  <Text className="text-[13px] font-semibold text-[#059669]">
                    126
                  </Text>
                </View>
                <View className="h-2 rounded-full bg-[#f3f4f6]">
                  <View className="h-2 w-[78%] rounded-full bg-[#059669]" />
                </View>
              </View>

              <View>
                <View className="mb-1 flex-row items-center justify-between">
                  <Text className="text-[13px] text-[#4b5563]">Completed</Text>
                  <Text className="text-[13px] font-semibold text-[#2563eb]">
                    88
                  </Text>
                </View>
                <View className="h-2 rounded-full bg-[#f3f4f6]">
                  <View className="h-2 w-[64%] rounded-full bg-[#2563eb]" />
                </View>
              </View>
            </View>
          </View>

          <View
            className="mb-6 rounded-[16px] border border-[#b6e1d3] bg-[#e9f7f1] px-4 py-5"
            style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
          >
            <View className="flex-row items-start">
              <Ionicons name="leaf-outline" size={22} color="#047857" />
              <View className="ml-3 flex-1">
                <Text className="text-[34px] font-bold leading-[40px] text-[#111827]">
                  Smart Sustainability Dashboard
                </Text>
              </View>
            </View>

            <Text className="mt-4 text-[16px] leading-6 text-[#374151]">
              Real-time monitoring of tourism sustainability indicators across
              all Best Tourism Villages
            </Text>

            <View className="mt-5">
              {sustainabilityMetrics.map((item) => {
                const isExcellent = item.status === "EXCELLENT";
                const statusBg = isExcellent ? "#059669" : "#2563eb";

                return (
                  <View
                    key={item.label}
                    className="mb-4 rounded-[14px] bg-white px-4 py-4"
                  >
                    <View className="flex-row items-center justify-between">
                      <View className="flex-row items-center">
                        <Ionicons
                          name="pulse-outline"
                          size={16}
                          color="#059669"
                        />
                        <Text className="ml-2 text-[18px] font-bold text-[#111827]">
                          {item.label}
                        </Text>
                      </View>

                      <View
                        className="rounded-full px-3 py-1"
                        style={{ backgroundColor: statusBg }}
                      >
                        <Text className="text-[11px] font-bold text-white">
                          {item.status}
                        </Text>
                      </View>
                    </View>

                    <View className="mt-3 h-3 rounded-full bg-[#e5e7eb]">
                      <View
                        className="h-3 rounded-full"
                        style={{
                          width: `${item.value}%`,
                          backgroundColor: item.barColor,
                        }}
                      />
                    </View>

                    <View className="mt-2 flex-row items-center justify-between">
                      <Text className="text-[14px] text-[#374151]">
                        {item.description}
                      </Text>
                      <Text className="text-[14px] font-semibold text-[#047857]">
                        {item.value}%
                      </Text>
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View
            className="mb-6 rounded-[16px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
          >
            <View className="flex-row items-center justify-between">
              <Text className="text-[16px] font-semibold text-[#1f2937]">
                Revenue Distribution: Villages & Eco-Parks
              </Text>
              <Text className="text-[13px] font-medium text-[#6b7280]">
                ₱842,500 Total
              </Text>
            </View>

            <View className="mt-4 h-3 flex-row overflow-hidden rounded-full bg-[#eef2f7]">
              {revenueDistribution.map((item) => (
                <View
                  key={item.id}
                  style={{
                    width: `${item.percentage}%`,
                    backgroundColor: item.color,
                  }}
                />
              ))}
            </View>

            <View className="mt-4">
              {revenueDistribution.map((item) => (
                <View
                  key={item.id}
                  className="mb-3 flex-row items-start justify-between rounded-[12px] bg-[#f9fafb] px-3 py-3"
                >
                  <View className="flex-1 pr-3">
                    <View className="flex-row items-start">
                      <View
                        className="mt-1 h-3 w-3 rounded-full"
                        style={{ backgroundColor: item.color }}
                      />
                      <View className="ml-2 flex-1">
                        <Text className="text-[13px] leading-5 text-[#374151]">
                          {item.label}
                        </Text>
                        <View
                          className="mt-1 self-start rounded-full px-2 py-0.5"
                          style={{ backgroundColor: `${item.color}22` }}
                        >
                          <Text
                            className="text-[10px] font-semibold"
                            style={{ color: item.color }}
                          >
                            {item.type}
                          </Text>
                        </View>
                      </View>
                    </View>
                  </View>

                  <View className="w-[88px] flex-shrink-0 items-end">
                    <Text className="text-[13px] font-semibold text-[#111827]">
                      {item.amount}
                    </Text>
                    <Text className="text-[12px] text-[#6b7280]">
                      {item.percentage}%
                    </Text>
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View
            className="mb-6 rounded-[16px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
          >
            <Text className="text-[16px] font-semibold text-[#1f2937]">
              Booking Trends (Last 6 Months)
            </Text>

            <View className="mt-4 flex-row items-end justify-between gap-2">
              {bookingTrends.map((item) => {
                const maxValue = 220;
                const height = Math.max(
                  24,
                  Math.round((item.bookings / maxValue) * 120),
                );

                return (
                  <View key={item.month} className="flex-1 items-center">
                    <Text className="mb-1 text-[11px] text-[#4b5563]">
                      {item.bookings}
                    </Text>
                    <View
                      className="w-full rounded-t-[8px] bg-[#0f766e]"
                      style={{ height }}
                    />
                    <Text className="mt-2 text-[12px] font-medium text-[#6b7280]">
                      {item.month}
                    </Text>
                  </View>
                );
              })}
            </View>
          </View>

          <View
            className="mb-6 rounded-[16px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
          >
            <Text className="text-[16px] font-semibold text-[#1f2937]">
              Bookings by Village
            </Text>

            <View className="mt-4">
              {bookingsByVillage.map((item) => (
                <View key={item.name} className="mb-4">
                  <View className="mb-1 flex-row items-center justify-between">
                    <Text className="flex-1 pr-2 text-[13px] text-[#374151]">
                      {item.name}
                    </Text>
                    <Text className="text-[13px] font-semibold text-[#111827]">
                      {item.bookings}
                    </Text>
                  </View>
                  <View className="h-2 rounded-full bg-[#e5e7eb]">
                    <View
                      className="h-2 rounded-full bg-[#2563eb]"
                      style={{ width: `${item.share}%` }}
                    />
                  </View>
                </View>
              ))}
            </View>
          </View>

          <View
            className="rounded-[16px] bg-white px-4 py-4"
            style={{ boxShadow: "0px 2px 10px rgba(0,0,0,0.08)" }}
          >
            <Text className="text-[16px] font-semibold text-[#1f2937]">
              Priority Alerts
            </Text>

            <View className="mt-4 gap-3">
              <View className="rounded-[12px] border border-[#fde68a] bg-[#fffbeb] px-3 py-3">
                <View className="flex-row items-start">
                  <Ionicons name="warning-outline" size={16} color="#b45309" />
                  <View className="ml-2 flex-1">
                    <Text className="text-[13px] font-semibold text-[#92400e]">
                      4 Bookings Pending Host Response (over 24h)
                    </Text>
                    <Text className="mt-1 text-[12px] text-[#a16207]">
                      Could affect trust score and conversion rates.
                    </Text>
                  </View>
                </View>
              </View>

              <View className="rounded-[12px] border border-[#bfdbfe] bg-[#eff6ff] px-3 py-3">
                <View className="flex-row items-start">
                  <Ionicons
                    name="information-circle-outline"
                    size={16}
                    color="#1d4ed8"
                  />
                  <View className="ml-2 flex-1">
                    <Text className="text-[13px] font-semibold text-[#1e40af]">
                      New village onboarding batch ready for review
                    </Text>
                    <Text className="mt-1 text-[12px] text-[#1d4ed8]">
                      3 communities submitted profile and compliance docs.
                    </Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
