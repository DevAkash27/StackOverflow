import React from 'react';
import {View, Image, Text, StyleSheet} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import ReactNativeScreen from '../src/screens/ReactNative';
import ReactScreen from '../src/screens/React';
import NodeScreen from '../src/screens/Node';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,

        tabBarStyle: {
          position: 'absolute',
          bottom: 25,
          left: 20,
          right: 20,
          elevation: 0,
          backgroundColor: '#ffffff',
          borderRadius: 15,
          height: 80,
          zIndex: 1001,

          ...styles.shadow,
        },
      }}>
      <Tab.Screen
        name="ReactScreen"
        component={ReactScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/react.png')}
                  style={{
                    height: 30,
                    width: 30,
                    marginTop: 24,
                    backgroundColor: 'white',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#61DBFB' : 'gray',
                    fontSize: 12,
                    marginTop: 4,
                    fontWeight: focused ? '600' : '500',
                  }}>
                  React
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="ReactNativeScreen"
        component={ReactNativeScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/reactnative.png')}
                  style={{
                    height: 30,
                    width: 30,
                    marginTop: 24,
                    backgroundColor: 'white',
                  }}
                />
                <Text
                  style={{
                    color: focused ? 'black' : 'gray',
                    fontSize: 12,
                    marginTop: 4,
                    fontWeight: focused ? '600' : '500',
                  }}>
                  React Native
                </Text>
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="NodeScreen"
        component={NodeScreen}
        options={{
          headerShown: false,
          unmountOnBlur: true,
          tabBarIcon: ({focused}) => {
            return (
              <View style={{alignItems: 'center', justifyContent: 'center'}}>
                <Image
                  source={require('../assets/node.png')}
                  style={{
                    height: 30,
                    width: 30,
                    marginTop: 24,
                    backgroundColor: 'white',
                  }}
                />
                <Text
                  style={{
                    color: focused ? '#68A063' : 'gray',
                    fontSize: 12,
                    marginTop: 4,
                    fontWeight: focused ? '600' : '500',
                  }}>
                  Node
                </Text>
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
};
const styles = StyleSheet.create({
  shadow: {
    shadowColor: '#7F5DF0',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.35,
    shadowRadius: 4,
    elevation: 5,
  },
});
export default Tabs;
