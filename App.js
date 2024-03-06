import { useState } from 'react';
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from 'react-native';

export default function App() {

  const [goal, setGoal] = useState("")
  const [goals, setGoals] = useState([])

  const goalInputHandler = (eneteredText) => {
    setGoal(eneteredText)
  }

  const addGoalHandler = () => {
    setGoals( prevGoals => (
      [ ...prevGoals, 
        { text: goal, id: Math.random().toString()} 
      ]))
    setGoal("")
  }

  return (
    <View style={styles.appContainer}>
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
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={goals}
          renderItem={itemData => (
            <View style={styles.goalItem}>
                <Text style={styles.goalText}>{itemData.item.text}</Text>
            </View>
          )}
          keyExtractor={(item, index) => {
            return item.id
          }}
        >
        </FlatList>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 15,
  },
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
  goalsContainer: {
    flex: 5,
  },
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
});
