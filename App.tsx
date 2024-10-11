
import { StyleSheet, Text, View } from 'react-native';
import Login from './components/Login';

export default function App() {
  
  
  return (
    <View style={styles.container}>
      <Login></Login>

    </View>
  
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
