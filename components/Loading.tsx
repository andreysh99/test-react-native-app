import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'

const Loading = () => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <ActivityIndicator size={50} />
      <Text style={{ marginTop: 10 }}>Загрузка...</Text>
    </View>
  )
}

export default Loading
