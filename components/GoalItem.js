import { View, Text, StyleSheet, Pressable } from "react-native"

const GoalItem = ({ goal, deleteGoal }) => {

  return (
    <Pressable onPress={() => deleteGoal(goal.id)}>
        <View style={styles.goalItem}>
            <Text style={styles.goalText}>{goal.text}</Text>
        </View>
    </Pressable>
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
