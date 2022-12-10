import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import AppContainer from './src/components/app-container'
import Navigator from './src/index'

export default function App() {
  return (
    <AppContainer>
      <Navigator />
    </AppContainer>
  )
}
