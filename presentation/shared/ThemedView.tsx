import { useThemeColor } from "@/hooks/useThemeColor";
import { View, ViewProps } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface Props extends ViewProps {
  className?: string;
  margin?: boolean;
  safe?: boolean;
  bgColor?: string;
}

const ThemedView = ({
  style,
  className,
  margin = false,
  children,
  safe = false,
  bgColor,
}: Props) => {
  const themeBackgroundColor = useThemeColor({}, "background");
  const backgroundColor = bgColor ?? themeBackgroundColor;
  const safeArea = useSafeAreaInsets();

  return (
    <View
      style={[
        {
          backgroundColor: backgroundColor,
          flex: 1,
          paddingTop: safe ? safeArea.top : 0,
          marginHorizontal: margin ? 10 : 0,
        },
        style,
      ]}
      className={className}
    >
      {children}
    </View>
  );
};
export default ThemedView;
