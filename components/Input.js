import { useState } from 'react'
import { View, StyleSheet, TextInput, Button } from 'react-native'

export const Input = ({ handleAdd }) => {
  const [inputValue, setInputValue] = useState('')

  const handleInput = (value) => {
    setInputValue(value)
  }

  const onPress = () => {
    handleAdd(inputValue)
    setInputValue('')
  }

  return (
    <View style={styles.inputContainer}>
      <TextInput
        onChangeText={handleInput}
        style={styles.textInput}
        placeholder='Your course goal'
        value={inputValue}
      />
      <Button onPress={onPress} title='Add Goal' />
    </View>
  )
}

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  textInput: {
    width: '70%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginRight: 8,
    padding: 8,
  },
})
