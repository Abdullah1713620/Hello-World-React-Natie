import { View, Text } from 'react-native'
import React from 'react'

const index = () => {
  return (
    <View style={{ 
      flex: 1, 
      justifyContent: 'center', 
      alignItems: 'center', 
      backgroundColor: '#f0f0f0' 
    }}>
      <Text style={{ 
        fontSize: 24, 
        color: '#333', 
        fontWeight: 'bold' 
      }}>
        Hello World
      </Text>
    </View>
  )
}

export default index