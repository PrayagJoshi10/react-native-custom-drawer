import {StyleSheet, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import UserDetails from './UserDetails';

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={styles.scrollViewContainer}>
      <View style={styles.container}>
        {/* userDetails */}
        <UserDetails />
        {/* sepetator */}
        <View style={styles.seperator} />
        {/* drawerItems */}
        {/* closeButton */}
      </View>
    </DrawerContentScrollView>
  );
};

export default CustomDrawerContent;

const styles = StyleSheet.create({
  scrollViewContainer: {
    flex: 1,
  },
  container: {flex: 1, paddingHorizontal: 20},
  seperator: {
    height: 2,
    width: '100%',
    backgroundColor: '#ffffff',
    marginVertical: 20,
  },
  DrawerItemsContainer: {
    flex: 1,
  },
});
