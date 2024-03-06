import { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([])

  const addGoalHandler = (goal) => {
    setGoals( prevGoals => (
      [ ...prevGoals, 
        { text: goal, id: Math.random().toString()} 
      ]))
  }

  const deleteGoalHandler = (id) => {
    setGoals(prevGoals => {
      return prevGoals.filter( goal => id !== goal.id)
    })
  }

  return (
    <View style={styles.appContainer}>
      <GoalInput 
      addGoalHandler={addGoalHandler} 
      />
      <View style={styles.goalsContainer}>
        <FlatList 
          alwaysBounceVertical={false}
          data={goals}
          renderItem={itemData => (
            <GoalItem 
              goal={itemData.item}
              deleteGoal={deleteGoalHandler}
            />
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
  goalsContainer: {
    flex: 5,
  },

});
