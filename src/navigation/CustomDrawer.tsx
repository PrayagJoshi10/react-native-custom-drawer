import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {
  DrawerContentScrollView,
  createDrawerNavigator,
} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
// import CustomDrawerContent from '../components/CustomDrawerContent';

const Drawer = createDrawerNavigator();

const CustomDrawerContent = ({navigation}) => {
  return (
    <DrawerContentScrollView
      scrollEnabled={true}
      contentContainerStyle={{flex: 1}}>
      <View style={{flex: 1, paddingHorizontal: 20}}>
        {/* userDetails */}
        <View style={{marginTop: 25}}>
          <Image
            source={require('../assets/profile.jpg')}
            style={{height: 100, width: 100, borderRadius: 50}}
          />
        </View>
        {/* sepetator */}
        {/* drawerItems */}
        {/* closeButton */}
      </View>
    </DrawerContentScrollView>
  );
};

const CustomDrawer = () => {
  return (
    <View style={styles.container}>
      <Drawer.Navigator
        screenOptions={{
          drawerType: 'slide',
          overlayColor: 'transparent',
          drawerStyle: {
            flex: 1,
            width: '65%',
            paddingRight: 20,
            backgroundColor: 'transparent',
          },
          sceneContainerStyle: {
            backgroundColor: 'transparent',
          },
          headerShown: false,
        }}
        initialRouteName="Home"
        drawerContent={props => (
          <CustomDrawerContent navigation={props.navigation} />
        )}>
        <Drawer.Screen name="Home" component={HomeScreen} />
      </Drawer.Navigator>
    </View>
  );
};

export default CustomDrawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181717',
  },
});
