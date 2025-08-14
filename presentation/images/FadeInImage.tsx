import { useAnimation } from "@/hooks/useAnimation";
import { useState } from "react";
import {
  ActivityIndicator,
  Animated,
  ImageStyle,
  StyleProp,
  View,
} from "react-native";

interface Props {
  url: string;
  style: StyleProp<ImageStyle>;
}

const FadeInImage = ({ url, style }: Props) => {
  const [isLoading, setIsLoading] = useState(true);
  const { animatedOpacity, fadeIn } = useAnimation();

  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      {isLoading && (
        <ActivityIndicator
          style={{ position: "absolute" }}
          color="gray"
          size={30}
        />
      )}
      <Animated.Image
        source={{ uri: url }}
        style={[style]}
        onLoadEnd={() => {
          fadeIn({ duration: 2000 });
          setIsLoading(false);
        }}
      />
    </View>
  );
};
export default FadeInImage;
