import React from 'react'
import { View, Text,Button } from 'react-native'

const DetailsScreen = ({navigation}) => {
    return (
    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>And so it begins</Text>
      <Button onPress={() => navigation.push('Details')} title="Render Details Page again" />
      <Button onPress={() => navigation.navigate("Home")} title="Go to random Page" />
      <Button onPress={() => navigation.goBack()} title="Go Back" />
      <Button onPress={() => navigation.popToTop()} title="Go to first Screen" />
    </View>
    )
}

export default DetailsScreen
