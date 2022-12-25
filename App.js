import { useState } from 'react'
import { StyleSheet, View, FlatList } from 'react-native'
import { Input } from './components/Input'
import { Goal } from './components/Goal'

export default function App() {
  const [goals, setGoals] = useState([])

  const handleAdd = (inputValue) => {
    setGoals((prev) => [
      ...prev,
      { text: inputValue, id: Math.random().toString() },
    ])
  }

  const onPressDelete = (id) => {
    setGoals((prev) => {
      return prev.filter((goal) => goal.id !== id)
    })
  }

  return (
    <View style={styles.container}>
      <Input handleAdd={handleAdd} />
      <View style={styles.goalsContainer}>
        <FlatList
          keyExtractor={(item) => item.id}
          data={goals}
          renderItem={(goal) => {
            return (
              <Goal
                onPress={onPressDelete}
                text={goal.item.text}
                id={goal.item.id}
              />
            )
          }}
          alwaysBounceVertical={false}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
})
