import * as React from 'react'
import {
  Text,
  Box,
  Center,
  themeTools,
  useTheme,
  useColorMode,
  useColorModeValue,
  VStack,
  Pressable
} from 'native-base'
import { StyleSheet, View } from 'react-native'
import ThemeToggle from '../components/theme-toggle'
import AnimatedCheckbox from 'react-native-checkbox-reanimated'

export default function MainScreen() {
  const [checked, setChecked] = React.useState<boolean>(false)

  const handleCheckboxPress = () => {
    setChecked(prev => {
      return !prev
    })
  }

  return (
    <Center
      _dark={{ bg: 'blueGray.900' }}
      _light={{ bg: 'blueGray.50' }}
      px={4}
      flex={1}
    >
      <VStack space={5} alignItems="center">
        <Pressable onPress={handleCheckboxPress} style={styles.checkbox}>
          <AnimatedCheckbox
            checked={checked}
            highlightColor="#4444ff"
            checkmarkColor="#ffffff"
            boxOutlineColor="#4444ff"
          />
        </Pressable>
        <Box p={10} bg={useColorModeValue('red.500', 'yellow.500')}>
          <Text>Hello</Text>
        </Box>
        <ThemeToggle />
      </VStack>
    </Center>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  checkbox: {
    width: 64,
    height: 64
  }
})
