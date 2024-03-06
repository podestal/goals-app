import { View, TextInput, Button, StyleSheet } from "react-native"
import { useState } from "react"

const GoalInput = (props) => {

    const [goal, setGoal] = useState("")

    const goalInputHandler = (eneteredText) => {
        setGoal(eneteredText)
    }

    const addGoalHandler = () => {
        props.addGoalHandler(goal)
        setGoal('')
    }

  return (
    <View style={styles.inputContainer}>
        <TextInput 
        style={styles.textInput}
        placeholder='Your course goal!'
        onChangeText={goalInputHandler}
        value={goal}
        />
        <Button 
        title='Add goal'
        onPress={addGoalHandler}
        />
    </View>
  )
}

const styles = StyleSheet.create({

    inputContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: "center",
        marginVertical: 15,
        paddingBottom: 20,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc'
      },
    textInput: {
        borderWidth: 1,
        borderColor: "#ccc",
        width: '65%',
        textAlign: 'center',
        borderRadius: 20,
        marginRight: 8,
        paddingVertical: 10,
    },    
})

export default GoalInput

