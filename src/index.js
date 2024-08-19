import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { increment, decrement, reset } from '../Redux/counterSlice';
import { useDispatch, useSelector } from 'react-redux';

function AppCounter() {
  const dispatch = useDispatch();
  const count = useSelector((state) => state.counter.count);

  return (
    <View style={styles.container}>
      <Text style={styles.counterText}>{count}</Text>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(increment())}>
        <Text style={styles.buttonText}>Increment</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(decrement())}>
        <Text style={styles.buttonText}>Decrement</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch(reset())}>
        <Text style={styles.buttonText}>Reset</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button} onPress={() => dispatch({ type: 'counters/incrementByAmount', payload: 5 })}>
        <Text style={styles.buttonText}>Increment By Amount</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  counterText: {
    fontSize: 48,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontSize: 18,
  },
});

export default AppCounter;
