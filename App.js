import { StyleSheet, Text, View, Button, TextInput } from 'react-native';

export default function App() {
  return (
    <View style={styles.appContainer}>
      <View style={styles.inputContainer}>
        <TextInput 
          style={styles.textInput}
          placeholder='Your course goal!'
        />
        <Button 
          title='Add goal'
        />
      </View>
      <View>
        <Text>List of goals</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    padding: 35
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: 15,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    width: '80%',
    textAlign: 'center',
    borderRadius: 20,
    marginRight: 8
  }
});
