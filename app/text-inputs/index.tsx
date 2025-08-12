import ThemeCard from "@/presentation/shared/ThemeCard";
import ThemedText from "@/presentation/shared/ThemedText";
import ThemedView from "@/presentation/shared/ThemedView";
import ThemeTextInput from "@/presentation/shared/ThemeTextInput";
import { useState } from "react";
import { KeyboardAvoidingView, ScrollView } from "react-native";

const TextInputsScreen = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
  });

  return (
    <KeyboardAvoidingView behavior="height">
      <ScrollView>
        <ThemedView margin>
          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Nombre Completo"
              autoCapitalize="words"
              autoComplete="name"
              onChangeText={(text) => setForm({ ...form, name: text })}
            />
          </ThemeCard>
          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Correo Electrónico"
              autoCapitalize="none"
              autoComplete="email"
              keyboardType="email-address"
              onChangeText={(text) => setForm({ ...form, email: text })}
            />
          </ThemeCard>
          <ThemeCard className="mb-5">
            <ThemeTextInput
              placeholder="Número de Teléfono"
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemeCard>

          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard className="my-2">
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>
          <ThemeCard>
            <ThemedText type="normal">
              {JSON.stringify(form, null, 2)}
            </ThemedText>
          </ThemeCard>

          <ThemeCard style={{ marginBottom: 100 }} className="mb-5">
            <ThemeTextInput
              placeholder="Número de Teléfono"
              keyboardType="phone-pad"
              onChangeText={(text) => setForm({ ...form, phone: text })}
            />
          </ThemeCard>
        </ThemedView>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};
export default TextInputsScreen;
