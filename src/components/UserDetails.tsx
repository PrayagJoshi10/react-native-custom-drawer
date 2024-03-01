import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface FollowersDetailsProps {
  count: string | number;
  title: string;
}

const UserDetails = () => {
  return (
    <View style={styles.container}>
      <Image source={require('../assets/profile.jpg')} style={styles.image} />
      <Text style={styles.name}>Gol D. Roger</Text>
      <Text style={styles.username}>@gol.d.roger</Text>
      <View style={styles.followerDetails}>
        <FollowersDetails title={'Followers'} count={'240'} />
        <FollowersDetails title={'Following'} count={'14'} />
      </View>
    </View>
  );
};

const FollowersDetails = ({count, title}: FollowersDetailsProps) => {
  return (
    <View style={styles.followerDetailsContainer}>
      <Text style={styles.count}>{count}</Text>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {marginTop: 25},
  image: {height: 100, width: 100, borderRadius: 50},
  name: {
    color: '#ffffff',
    fontSize: 20,
    fontWeight: '600',
    marginTop: 10,
  },
  username: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '400',
    marginTop: 5,
  },
  followerDetails: {
    flexDirection: 'row',
    gap: 15,
    marginTop: 10,
  },
  followerDetailsContainer: {},
  count: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '500',
  },
  title: {
    color: '#ffffff',
    fontSize: 14,
    fontWeight: '300',
  },
});
