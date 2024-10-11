import { TextInput, SafeAreaView, Button } from "react-native";
import { useState } from "react";
import { StyleSheet } from "react-native";

export default function Login() {
    const [password, onChangeText] = useState('');
    const [username, onChangeUsername] = useState('');

    return(
        <SafeAreaView>
            
            <TextInput 
            style={styles.input} 
            onChangeText={onChangeUsername} 
            value={username}
            placeholder="username"
            />
            <TextInput 
            style={styles.input}
            onChangeText={onChangeText} 
            value={password}
            placeholder="password"
            secureTextEntry={true}
            />
            <Button 
                title='Login'
                onPress={() => {
                    console.log(username)
                    console.log(password)
                }}
                />
            
           
         </SafeAreaView>
    
    );
    
    
}

const styles = StyleSheet.create({
        input: {
          height: 40,
          margin: 12,
          borderWidth: 1,
          padding: 10,
        },
      });