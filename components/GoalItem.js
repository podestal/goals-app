import { View, Text, StyleSheet } from "react-native"

const GoalItem = ({ text }) => {
  return (
    <View style={styles.goalItem}>
        <Text style={styles.goalText}>{text}</Text>
    </View>
  )
}

export default GoalItem

const styles = StyleSheet.create({

    goalItem: {
        padding: 10,
        margin: 8,
        borderRadius: 20,
        backgroundColor: '#3498db'
      },
      goalText: {
        color: '#fff',
        fontWeight: 'bold'
      }
    
})
