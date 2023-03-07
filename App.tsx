import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Checkbox, Provider as PaperProvider} from 'react-native-paper';

function App() {
  const [agree, setAgree] = useState(false);

  const handlePress = () => {
    console.log('Clicked');
  };

  return (
    <PaperProvider>
      <SafeAreaView style={styles.mainContainer}>
        <Text style={styles.mainHeader} onPress={handlePress}>
          Sign in
        </Text>
        <View style={styles.inputContainer}>
          <TextInput
            placeholderTextColor="gray"
            placeholder="Email"
            style={styles.inputStyle}
            autoCorrect={false}
          />
          <TextInput
            placeholderTextColor="gray"
            placeholder="Password"
            style={styles.inputStyle}
            autoCorrect={false}
            secureTextEntry={true}
          />
        </View>

        {/* Footer */}
        <View style={styles.footer}>
          {/* <Checkbox status="checked" /> */}
          <Text>I accept the Terms of Use and Private Policy</Text>
          <TouchableOpacity style={styles.btn}>
            <Text
              style={{color: '#fff'}}
              onPress={() => console.log('Button clicked')}>
              Continue
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    height: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingTop: 30,
    alignItems: 'center',
  },
  mainHeader: {
    fontSize: 20,
    color: '#344055',
    fontWeight: '800',
    paddingTop: 20,
  },
  inputContainer: {
    marginTop: 15,
    width: '95%',
  },
  inputStyle: {
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    borderColor: 'gray',
    marginBottom: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#0080FF',
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 10,
  },
});

export default App;
