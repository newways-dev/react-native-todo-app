import { StyleSheet, View, Text, Pressable } from 'react-native'

export const Goal = ({ text, onPress, id }) => {
  return (
    <View style={styles.inputContainer}>
      <Pressable
        android_ripple={{ color: '#555' }}
        style={({ pressed }) => pressed && styles.pressed}
        onPress={onPress.bind(this, id)}
      >
        <View style={styles.goal}>
          <Text style={styles.goalText}>{text}</Text>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  goal: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: '#5e0acc',
  },
  goalText: {
    padding: 8,
    color: '#fff',
    fontSize: 18,
  },
  pressed: {
    color: '#555',
  },
})
