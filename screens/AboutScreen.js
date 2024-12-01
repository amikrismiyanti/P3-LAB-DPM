import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const AboutScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>ℹ️ Tentang Halaman Ini</Text>
      <Text style={styles.description}>
        Halaman ini akan muncul ketika di klik "Tekan Aku"
      </Text>
      <TouchableOpacity
        onPress={() => navigation.navigate('Home Amii')}
        style={styles.button}
      >
        <Text style={styles.buttonText}>🔙 Kembali Ke Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff', padding: 20 },
  title: { fontSize: 30, fontWeight: 'bold', marginBottom: 20, color: '#00796b', textAlign: 'center' },
  description: { fontSize: 18, textAlign: 'center', marginBottom: 30, color: '#333', lineHeight: 24 },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 18, fontWeight: '600' },
});

export default AboutScreen;
