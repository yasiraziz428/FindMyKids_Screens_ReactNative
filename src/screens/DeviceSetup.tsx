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
import AntDesign from 'react-native-vector-icons/AntDesign';

function DeviceSetupScreen() {
  return (
    <SafeAreaView>
      <ImageBackground
        source={require('../assets/bg.png')}
        resizeMode={'cover'}
        style={style.mainContainer}>
        <View style={style.contentContainer}>
          <View style={style.topContainer}>
            <Image source={require('../assets/logo.jpg')} style={style.logo} />
            <AntDesign name="plus" size={40} style={style.plusIcon} />
            <Image source={require('../assets/pingo.jpg')} style={style.logo} />
          </View>
          <View style={style.bottomContainer}>
            <ImageBackground
              style={style.bottomImage}
              //   resizeMode="center"
              source={require('../assets/bottomImage.png')}
            />
          </View>
        </View>
        <View style={style.footer}>
          <TouchableOpacity style={style.btn}>
            <Text
              style={{color: '#fff'}}
              onPress={() => console.log('Button clicked')}>
              Set up kid's phone
            </Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const style = StyleSheet.create({
  mainContainer: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#fff',
    marginTop: 40,
    width: '90%',
    height: '50%',
    borderRadius: 25,
  },
  topContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: '50%',
  },
  plusIcon: {
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
    borderRadius: 20,
  },
  bottomContainer: {
    // display: 'flex',
    width: '100%',
    height: '65%',
  },
  bottomImage: {
    width: '100%',
    height: '65%',
  },
  btn: {
    marginTop: 15,
    backgroundColor: '#0080FF',
    paddingHorizontal: 140,
    paddingVertical: 10,
    borderRadius: 10,
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    marginBottom: 20,
  },
});

export default DeviceSetupScreen;
