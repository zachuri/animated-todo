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
  Pressable,
  Fab,
  Icon
} from 'native-base'
import { StyleSheet, View } from 'react-native'
import ThemeToggle from '../components/theme-toggle'
import shortid from 'shortid'
import TaskList from '../components/task-list'
import { AntDesign } from '@expo/vector-icons'
import AnimatedColorBox from '../components/animated-color-box'
import Masthead from '../components/masthead'

const initialData = [
  {
    id: shortid.generate(),
    subject: 'Buy movie tickets for Friday',
    done: false
  },
  {
    id: shortid.generate(),
    subject: 'Make a React Native tutorial',
    done: false
  }
]

export default function MainScreen() {
  const [data, setData] = React.useState(initialData)
  const [editingItemId, setEditingItemId] = React.useState<string | null>(null)

  const handleToggleTaskItem = React.useCallback((item: any) => {
    setData(prevData => {
      const newData = [...prevData]
      const index = prevData.indexOf(item)
      newData[index] = {
        ...item,
        done: !item.done
      }
      return newData
    })
  }, [])

  const handleChangeTaskItemSubject = React.useCallback(
    (item: any, newSubject: any) => {
      setData(prevData => {
        const newData = [...prevData]
        const index = prevData.indexOf(item)
        newData[index] = {
          ...item,
          subject: newSubject
        }
        return newData
      })
    },
    []
  )

  const handleFinishEditingTaskItem = React.useCallback((_item: any) => {
    setEditingItemId(null)
  }, [])

  const handlePressTaskItemLabel = React.useCallback((item: any) => {
    setEditingItemId(item.id)
  }, [])

  const handleRemoveItem = React.useCallback((item: any) => {
    setData(prevData => {
      const newData = prevData.filter(i => i !== item)
      return newData
    })
  }, [])

  return (
    <>
      <Masthead
        title="What's up, Zack!"
        image={require('../../assets/welcome.png')}
      >
        {/* <NavBar /> */}
      </Masthead>
      <AnimatedColorBox
        flex={1}
        bg={useColorModeValue('warmGray.50', 'primary.900')}
        w="full"
      >
        <VStack
          flex={1}
          space={1}
          bg={useColorModeValue('warmGray.50', 'primary.900')}
          mt="-20px"
          borderTopLeftRadius="20px"
          borderTopRightRadius="20px"
          pt="20px"
        >
          <TaskList
            data={data}
            onToggleItem={handleToggleTaskItem}
            onChangeSubject={handleChangeTaskItemSubject}
            onFinishEditing={handleFinishEditingTaskItem}
            onPressLabel={handlePressTaskItemLabel}
            onRemoveItem={handleRemoveItem}
            editingItemId={editingItemId}
          />
        </VStack>
        <Fab
          position="absolute"
          renderInPortal={false}
          size="sm"
          icon={<Icon color="white" as={<AntDesign name="plus" />} size="sm" />}
          colorScheme={useColorModeValue('blue', 'darkBlue')}
          bg={useColorModeValue('blue.500', 'blue.400')}
          onPress={() => {
            const id = shortid.generate()
            setData([
              {
                id,
                subject: '',
                done: false
              },
              ...data
            ])
            setEditingItemId(id)
          }}
        />
      </AnimatedColorBox>
    </>
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
