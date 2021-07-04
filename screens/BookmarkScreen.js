import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native';

export default function BookmarkScreen({navigation}) {
    return (
        <View style={styles.container}>
          <Text>This is my future</Text>
          <Button onPress={() => navigation.navigate('Details')} title="Details" />
          <Button style onPress={() => {navigation.toggleDrawer()}} title="Open Drawer" />
        </View>   
    )
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    alignItems: 'center', 
    justifyContent: 'center'
  },
});