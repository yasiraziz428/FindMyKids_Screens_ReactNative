import React, {useState} from 'react';
import {Text} from 'react-native-paper';
import {
  View,
  Image,
  StyleSheet,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import Feather from 'react-native-vector-icons/Feather';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

function SelectDeviceScreen() {
  return (
    <SafeAreaView style={style.mainContainer}>
      <ImageBackground
        source={require('../assets/bg.png')}
        resizeMode={'cover'}
        style={{
          width: '100%',
          height: '100%',
        }}>
        {/* Start of Content */}

        <View style={style.contentContainer}>
          <Text style={style.header}>
            Choose your child's device to see it on the map
          </Text>
          <View style={style.selectButton}>
            <Feather
              name="smartphone"
              color="#0080FF"
              size={20}
              style={style.leftIcon}
            />
            <Text style={style.selectButtonText}>Connect your kid's phone</Text>
            <MaterialIcons
              name="arrow-forward-ios"
              size={20}
              style={style.rightIcon}
            />
          </View>
        </View>

        {/* End of Content */}
      </ImageBackground>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    height: '100%',
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 50,
  },
  header: {
    fontWeight: 'bold',
    fontSize: 15,
  },
  selectButton: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: 15,
    width: '85%',
    backgroundColor: '#fff',
    borderRadius: 5,
    paddingVertical: 15,
    paddingHorizontal: 15,
    // alignItems: 'center',
  },
  selectButtonText: {
    fontWeight: 'bold',
    marginLeft: 15,
    fontSize: 15,
  },
  leftIcon: {
    marginRight: 0,
  },
  rightIcon: {
    marginLeft: 80,
  },
});

export default SelectDeviceScreen;
