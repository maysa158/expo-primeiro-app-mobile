import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../styles/colors';

export default function UnitCard({ label, value }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value !== null ? value : '--'}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.surface,
    padding: 16,
    borderRadius: 12,
    width: '48%',
    marginBottom: 12,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  label: {
    fontSize: 14,
    color: colors.textSecondary,
    marginBottom: 6,
  },
  value: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.primary,
  },
});
