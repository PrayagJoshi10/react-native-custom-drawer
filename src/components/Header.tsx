import {Image, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface Props {
  onPress: () => {};
}

const Header = ({onPress}: Props) => {
  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <Image
          source={require('../assets/menu.png')}
          resizeMode="contain"
          style={styles.icon}
        />
      </Pressable>
      <Text style={styles.title}>Header</Text>
      <View style={styles.emptyView} />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  icon: {
    height: 25,
    width: 25,
  },
  title: {
    color: '#00000',
    fontSize: 20,
    fontWeight: 'bold',
  },
  emptyView: {
    height: 25,
    width: 25,
  },
});
