import React, { useRef } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Animated } from 'react-native';

const HomeScreen = ({ navigation }) => {
  const scaleAnim = useRef(new Animated.Value(1)).current;

  const handlePressIn = () => {
    Animated.spring(scaleAnim, {
      toValue: 1.1,
      friction: 3,
      useNativeDriver: true,
    }).start();
  };

  const handlePressOut = () => {
    Animated.spring(scaleAnim, {
      toValue: 1,
      friction: 3,
      useNativeDriver: true,
    }).start(() => navigation.navigate('About Amii'));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>🏡 Selamat Datang di sini!</Text>
      <TouchableOpacity
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        style={styles.button}
      >
        <Animated.Text style={[styles.buttonText, { transform: [{ scale: scaleAnim }] }]}>
          👇 Tekan Aku 📝
        </Animated.Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#e0f7fa' },
  title: { fontSize: 28, fontWeight: 'bold', marginBottom: 20, color: '#00796b', textAlign: 'center' },
  button: {
    backgroundColor: '#FF6347',
    paddingVertical: 12,
    paddingHorizontal: 25,
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  buttonText: { color: '#fff', fontSize: 20, fontWeight: '600' },
});

export default HomeScreen;
