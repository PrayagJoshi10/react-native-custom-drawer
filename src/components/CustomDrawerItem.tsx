import {
  Image,
  ImageProps,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';

interface Props {
  label: string;
  icon: ImageProps;
}

const CustomDrawerItem = ({label, icon}: Props) => {
  return (
    <TouchableOpacity style={styles.button}>
      <View style={styles.container}>
        <Image source={icon} style={styles.icon} resizeMode="contain" />
        <Text style={styles.label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CustomDrawerItem;

const styles = StyleSheet.create({
  button: {
    paddingVertical: 10,
  },
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    height: 32,
    width: 32,
    tintColor: '#ffffff',
  },
  label: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 25,
  },
});
