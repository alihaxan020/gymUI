import React from 'react';
import {StyleSheet, View, Image, Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Setting from '../screens/Setting';
import Diet from '../screens/Diet';
import ProgressScreen from '../screens/ProgressScreen';
import homeIcon from '../../assets/icons/homeIcon.png';
import settingIcon from '../../assets/icons/settingIcon.png';
import progressIcon from '../../assets/icons/progressIcon.png';
import dietIcon from '../../assets/icons/dietIcon.png';

const Tab = createBottomTabNavigator();
const TabStack = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarShowLabel: false,
        headerShown: false,
        tabBarStyle: {
          backgroundColor: 'rgba(255, 255, 255, 1)',
          height: 60,
        },
        tabBarIcon: ({focused}) => {
          switch (route.name) {
            case 'Home':
              return (
                <View
                  style={[
                    styles.iconStyle,
                    focused ? styles.iconFocusedStyle : null,
                  ]}>
                  <Image
                    source={homeIcon}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused
                        ? 'rgba(68, 189, 232, 1)'
                        : 'rgba(155, 155, 155, 1)',
                    }}
                  />
                  <Text
                    style={[
                      styles.labelText,
                      {
                        color: focused
                          ? 'rgba(68, 189, 232, 1)'
                          : 'rgba(155, 155, 155, 1)',
                      },
                    ]}>
                    Home
                  </Text>
                </View>
              );
            case 'Diet':
              return (
                <View
                  style={[
                    styles.iconStyle,
                    focused ? styles.iconFocusedStyle : null,
                  ]}>
                  <Image
                    source={dietIcon}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused
                        ? 'rgba(68, 189, 232, 1)'
                        : 'rgba(155, 155, 155, 1)',
                    }}
                  />
                  <Text
                    style={[
                      styles.labelText,
                      {
                        color: focused
                          ? 'rgba(68, 189, 232, 1)'
                          : 'rgba(155, 155, 155, 1)',
                      },
                    ]}>
                    Diet
                  </Text>
                </View>
              );
            case 'Progress':
              return (
                <View
                  style={[
                    styles.iconStyle,
                    focused ? styles.iconFocusedStyle : null,
                  ]}>
                  <Image
                    source={progressIcon}
                    resizeMode="contain"
                    style={{
                      width: 30,
                      height: 30,
                      tintColor: focused
                        ? 'rgba(68, 189, 232, 1)'
                        : 'rgba(155, 155, 155, 1)',
                    }}
                  />
                  <Text
                    style={[
                      styles.labelText,
                      {
                        color: focused
                          ? 'rgba(68, 189, 232, 1)'
                          : 'rgba(155, 155, 155, 1)',
                      },
                    ]}>
                    Progress
                  </Text>
                </View>
              );
            case 'Setting':
              return (
                <View
                  style={[
                    styles.iconStyle,
                    focused ? styles.iconFocusedStyle : null,
                  ]}>
                  <Image
                    source={settingIcon}
                    resizeMode="contain"
                    style={{
                      width: 25,
                      height: 25,
                      tintColor: focused
                        ? 'rgba(68, 189, 232, 1)'
                        : 'rgba(155, 155, 155, 1)',
                    }}
                  />
                  <Text
                    style={[
                      styles.labelText,
                      {
                        color: focused
                          ? 'rgba(68, 189, 232, 1)'
                          : 'rgba(155, 155, 155, 1)',
                      },
                    ]}>
                    Setting
                  </Text>
                </View>
              );
            default:
              break;
          }
        },
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Diet" component={Diet} />
      <Tab.Screen name="Progress" component={ProgressScreen} />
      <Tab.Screen name="Setting" component={Setting} />
    </Tab.Navigator>
  );
};

export default TabStack;

const styles = StyleSheet.create({
  iconStyle: {
    width: 65,
    height: 65,
    borderRadius: 65 / 2,
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  iconFocusedStyle: {
    top: -10,
    backgroundColor: '#FFFFFF',
    elevation: 7,
    shadowColor: 'rgba(68, 189, 232, 0.3)',
  },
  labelText: {
    fontSize: 16,
    fontWeight: '400',
    lineHeight: 19,
  },
});
