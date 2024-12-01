import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TouchableOpacity } from 'react-native';

const SettingsScreen = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  return (
    <View style={[styles.container, isDarkMode && styles.darkContainer]}>
      <Text style={[styles.title, isDarkMode && styles.darkText]}>Pengaturan</Text>
      <View style={styles.settingsList}>
        {/* Dark Mode toggle */}
        <View style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            🌙 Dark Mode:
          </Text>
          <Switch
            value={isDarkMode}
            onValueChange={() => setIsDarkMode(!isDarkMode)}
          />
        </View>

        {/* About */}
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            ℹ️ About
          </Text>
        </TouchableOpacity>

        {/* Notifications */}
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            🔔 Notifications
          </Text>
        </TouchableOpacity>

        {/* Privacy */}
        <TouchableOpacity style={styles.settingsItem}>
          <Text style={[styles.settingsText, isDarkMode && styles.darkText]}>
            🔒 Privacy
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
    padding: 20,
  },
  darkContainer: {
    backgroundColor: '#333',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#00796b',
  },
  darkText: {
    color: '#fff',
  },
  settingsList: {
    width: '100%',
    marginTop: 30,
  },
  settingsItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 5,
  },
  settingsText: {
    fontSize: 18,
    marginLeft: 10,
    color: '#333',
  },
});

export default SettingsScreen;
