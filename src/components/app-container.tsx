import * as React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { NativeBaseProvider } from 'native-base'
import theme from '../../theme'

type Props = {
  children: React.ReactNode
}

export default function AppContainer(props: Props) {
  return (
    <NavigationContainer>
      <NativeBaseProvider>{props.children}</NativeBaseProvider>
    </NavigationContainer>
  )
}
