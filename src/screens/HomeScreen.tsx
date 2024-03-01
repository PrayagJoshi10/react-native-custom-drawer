import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';

const HomeScreen = ({navigation}: any) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header onPress={() => navigation.openDrawer()} />
      <View style={styles.contentContainer}>
        <View style={styles.textContainer}>
          <Text style={styles.title}>
            This is a Custom Drawer Navigation Demo.
          </Text>
          <Text style={styles.info}>
            Click on the menu button in header or slide from left to open the
            drawer.
          </Text>
        </View>
        <Image source={require('../assets/rope.png')} style={styles.image} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  textContainer: {
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
  },
  title: {
    color: '#000000',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  info: {
    color: '#000000',
    fontSize: 16,
    fontWeight: '500',
    textAlign: 'center',
  },
  image: {height: '35%', width: '100%', marginRight: 'auto'},
});
