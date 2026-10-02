import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
} from 'react-native';
import { colors } from './src/styles/colors';
import { UNITS } from './src/constants/units';
import CustomButton from './src/components/CustomButton';
import UnitCard from './src/components/UnitCard';

export default function App() {
  const [celsius, setCelsius] = useState('');
  const [results, setResults] = useState({ fahrenheit: null, kelvin: null });

  const handleConvert = () => {
    const value = parseFloat(celsius);
    if (isNaN(value)) {
      setResults({ fahrenheit: 'Inválido', kelvin: 'Inválido' });
      return;
    }

    const fahrenheit = (value * 9) / 5 + 32;
    const kelvin = value + 273.15;

    setResults({
      fahrenheit: fahrenheit.toFixed(1) + ' °F',
      kelvin: kelvin.toFixed(1) + ' K',
    });
  };

  const handleClear = () => {
    setCelsius('');
    setResults({ fahrenheit: null, kelvin: null });
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      >
        <ScrollView contentContainerStyle={styles.container}>
          <Text style={styles.title}>Conversor de Temperatura</Text>
          <Text style={styles.subtitle}>Digite em Celsius (°C) para converter</Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: 25"
            placeholderTextColor={colors.textSecondary}
            keyboardType="numeric"
            value={celsius}
            onChangeText={setCelsius}
          />

          <View style={styles.buttonContainer}>
            <CustomButton title="Converter" onPress={handleConvert} variant="primary" />
            <CustomButton title="Limpar" onPress={handleClear} variant="secondary" />
          </View>

          <Text style={styles.sectionTitle}>Resultados</Text>

          <View style={styles.grid}>
            {UNITS.map((item) => (
              <UnitCard
                key={item.id}
                label={item.label}
                value={results[item.factor]}
              />
            ))}
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: colors.background,
  },
  container: {
    padding: 24,
    flexGrow: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: colors.primary,
    textAlign: 'center',
    marginBottom: 6,
  },
  subtitle: {
    fontSize: 14,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 24,
  },
  input: {
    backgroundColor: colors.surface,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 12,
    fontSize: 18,
    borderWidth: 1,
    borderColor: colors.primaryLight,
    marginBottom: 16,
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 24,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.textPrimary,
    marginBottom: 12,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
});
