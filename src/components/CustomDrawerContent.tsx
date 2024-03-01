import {Image, Pressable, StyleSheet, View} from 'react-native';
import React from 'react';
import {DrawerContentScrollView} from '@react-navigation/drawer';
import UserDetails from './UserDetails';
import CustomDrawerItem from './CustomDrawerItem';

const CustomDrawerContent = ({navigation}: any) => {
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
        <View style={styles.DrawerItemsContainer}>
          <CustomDrawerItem
            label={'Add Item'}
            icon={require('../assets/more.png')}
          />
          <CustomDrawerItem
            label={'View Items'}
            icon={require('../assets/page.png')}
          />
          <CustomDrawerItem
            label={'Analytics'}
            icon={require('../assets/graph.png')}
          />
          <CustomDrawerItem
            label={'Tickets'}
            icon={require('../assets/ticket.png')}
          />
          <CustomDrawerItem
            label={'Logout'}
            icon={require('../assets/exit.png')}
          />
        </View>
        {/* closeButton */}
        <View style={styles.closeButtonContainer}>
          <Pressable
            style={styles.closeButton}
            onPress={() => navigation.closeDrawer()}>
            <Image
              source={require('../assets/cross.png')}
              style={styles.icon}
              resizeMode="contain"
            />
          </Pressable>
        </View>
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
  closeButtonContainer: {
    flexDirection: 'row',
    marginBottom: 25,
  },
  closeButton: {
    backgroundColor: '#ffffff',
    padding: 5,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    width: 50,
  },
  icon: {
    height: 15,
    width: 15,
  },
});
