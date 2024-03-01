import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Header from '../components/Header';
import {useDrawerProgress} from '@react-navigation/drawer';
import Animated, {interpolate, useAnimatedStyle} from 'react-native-reanimated';

const HomeScreen = ({navigation}: any) => {
  const drawerProgress = useDrawerProgress();

  const viewStyle = useAnimatedStyle(() => {
    const scale = interpolate(drawerProgress.value, [0, 1], [1, 0.8]);
    const borderRadius = interpolate(drawerProgress.value, [0, 1], [0, 40]);
    return {
      transform: [{scale}],
      borderRadius,
    };
  });

  return (
    <Animated.View style={[styles.container, viewStyle]}>
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
    </Animated.View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    paddingTop: 25,
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
