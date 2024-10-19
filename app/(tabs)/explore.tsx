import { View } from 'react-native'
import { Text } from 'react-native-paper'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import SearchBar from '@/components/SearchBar'

const Explore= () => {
  return (
    <SafeAreaView className='h-full w-full px-4 my-2'>
      <SearchBar/>
    </SafeAreaView>
  )
}

export default Explore