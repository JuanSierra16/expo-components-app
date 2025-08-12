import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeSwitch from "@/presentation/shared/ThemeSwitch";
import { useState } from "react";
import { Switch } from "react-native";

const Switches = () => {
  const [state, setState] = useState({
    isActive: true,
    isHungry: false,
    isHappy: true,
  });

  return (
    <ThemedView margin className="mt-2">
      <ThemeCard>
        <ThemeSwitch
          text="Activo"
          value={state.isActive}
          onValueChange={(value) => setState({ ...state, isActive: value })}
          className="mb-2"
        />
        <ThemeSwitch
          text="Hambriento"
          value={state.isHungry}
          onValueChange={(value) => setState({ ...state, isHungry: value })}
          className="mb-2"
        />
        <ThemeSwitch
          text="Contento"
          value={state.isHappy}
          onValueChange={(value) => setState({ ...state, isHappy: value })}
          className="mb-2"
        />
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor={state.isActive ? "#f5dd4b" : "#f4f3f4"}
          ios_backgroundColor="#3e3e3e"
          onValueChange={(value) => setState({ ...state, isActive: value })}
          value={state.isActive}
        />
      </ThemeCard>
    </ThemedView>
  );
};
export default Switches;
