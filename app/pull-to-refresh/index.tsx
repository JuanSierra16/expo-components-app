import { useThemeColor } from "@/hooks/useThemeColor";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import { useState } from "react";
import { RefreshControl, ScrollView } from "react-native";

const PullToRefreshScreen = () => {
  const primaryColor = useThemeColor({}, "primary");
  const backgroundColor = useThemeColor(
    { dark: "black", light: "white" },
    "background"
  );

  const [isRefresing, setIsRefresing] = useState(false);

  const onRefresh = async () => {
    setIsRefresing(true);

    setTimeout(() => {
      setIsRefresing(false);
    }, 3000);
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={isRefresing}
          onRefresh={onRefresh}
          colors={[primaryColor, "red", "orange", "green"]}
          progressBackgroundColor={backgroundColor}
        />
      }
    >
      <ThemedView margin>
        <ThemedText type="h2">Yeah</ThemedText>
      </ThemedView>
    </ScrollView>
  );
};
export default PullToRefreshScreen;
