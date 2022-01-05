import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  Dimensions,
  Image,
  ImageBackground,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from 'react-native';
import proIcon from '../../assets/icons/proIcon.png';
import energyIcon from '../../assets/icons/energyIcon.png';
import playIcon from '../../assets/icons/playIcon.png';

import workoutbg from '../../assets/images/workoutbg.png';
import Progress from '../components/Progress';
import dietPlan from '../../assets/images/dietPlan.png';
import shapeMind from '../../assets/icons/shapeMind.png';
import mindPower from '../../assets/images/mindPower.png';
import {data} from '../../data';
import SystemNavigationBar from 'react-native-system-navigation-bar';

SystemNavigationBar.navigationHide();
const Home = () => {
  const array = [1, 2, 3, 4, 5];
  const renderItem = ({index, item}) => {
    return (
      <ImageBackground
        source={item.poster}
        style={{
          flex: 1,
          borderRadius: 15,
          width: width * 0.65,
          height: '100%',
          marginRight: 20,
          elevation: 15,
          overflow: 'hidden',
        }}
        resizeMode="cover">
        <View
          style={{
            flex: 1,
            backgroundColor: 'rgba(16, 70, 87, 0.5)',
            paddingTop: 10,
            paddingLeft: 5,
          }}>
          <Text
            style={{
              fontSize: 14,
              fontWeight: '500',
              lineHeight: 17,
              color: 'white',
            }}>
            {item.title}
          </Text>
          <View
            style={{
              width: '100%',
              height: '100%',
              position: 'absolute',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={playIcon}
              style={{
                width: 30,
                height: 30,
                tintColor: '#FFFFFF',
              }}
            />
          </View>
        </View>
      </ImageBackground>
    );
  };
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.headerTopContainer}>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 19,
              letterSpacing: 0.03,
              lineHeight: 22,
              fontStyle: 'normal',
              color: 'white',
            }}>
            YOUR PERSONALIZED PLAN
          </Text>
          <View style={styles.proContainer}>
            <Image
              source={proIcon}
              style={{
                width: 30,
                height: 30,
                overflow: 'hidden',
                resizeMode: 'contain',
              }}
            />
            <Text style={styles.proText}>PRO</Text>
          </View>
        </View>
        <View style={styles.headerCenterContainer}>
          <View style={styles.headerCenterLeft}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={energyIcon}
                style={{
                  width: 25,
                  height: 25,
                  overflow: 'hidden',
                  resizeMode: 'contain',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  lineHeight: 24,
                  color: '#00B2E3',
                }}>
                30
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 12.89,
                color: '#797B7B',
                marginTop: 5,
              }}>
              WORKOUT DAYS
            </Text>
          </View>
          <View style={styles.verticleLine}></View>
          <View style={styles.headerCenterRight}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Image
                source={energyIcon}
                style={{
                  width: 25,
                  height: 25,
                  overflow: 'hidden',
                  resizeMode: 'contain',
                  marginRight: 5,
                }}
              />
              <Text
                style={{
                  fontSize: 25,
                  fontWeight: '500',
                  lineHeight: 24,
                  color: '#00B2E3',
                }}>
                30
              </Text>
            </View>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '400',
                lineHeight: 12.89,
                color: '#797B7B',
                marginTop: 5,
              }}>
              DIET DAYS
            </Text>
          </View>
        </View>
      </View>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          top: '-4%',
        }}>
        <View style={styles.workOutCard}>
          <View
            style={{
              width: '100%',
              height: '100%',
              borderTopLeftRadius: 20,
              borderBottomLeftRadius: 20,
              zIndex: 2,
              position: 'absolute',
              paddingTop: 15,
              paddingLeft: 15,
              flexDirection: 'column',
              justifyContent: 'space-evenly',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 19,
                color: 'rgba(0, 0, 0, 1)',
              }}>
              30 DAYS WORKOUT
            </Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                width: '40%',
                justifyContent: 'space-between',
              }}>
              <View style={{flexDirection: 'row'}}>
                <Image
                  source={energyIcon}
                  style={{
                    width: 20,
                    height: 25,
                    overflow: 'hidden',
                    resizeMode: 'contain',
                    tintColor: 'rgba(0, 0, 0, 1)',
                  }}
                />
                <Image
                  source={energyIcon}
                  style={{
                    width: 20,
                    height: 25,
                    overflow: 'hidden',
                    resizeMode: 'contain',
                    tintColor: 'rgba(0, 0, 0, 0.27)',
                  }}
                />
                <Image
                  source={energyIcon}
                  style={{
                    width: 20,
                    height: 25,
                    overflow: 'hidden',
                    resizeMode: 'contain',
                    tintColor: 'rgba(0, 0, 0, 0.27)',
                  }}
                />
                <Image
                  source={energyIcon}
                  style={{
                    width: 20,
                    height: 25,
                    overflow: 'hidden',
                    resizeMode: 'contain',
                    tintColor: 'rgba(0, 0, 0, 0.27)',
                  }}
                />
              </View>
              <Text
                style={{
                  fontSize: 15,
                  fontWeight: '500',
                  lineHeight: 15,
                  color: 'rgba(0, 0, 0, 1)',
                }}>
                Unfit
              </Text>
            </View>
            <Text
              style={{
                fontSize: 20,
                fontWeight: '400',
                // lineHeight: 15,
                color: 'rgba(0, 0, 0, 1)',
              }}>
              10%
            </Text>
            <View style={{width: '40%'}}>
              <Progress step={2} steps={10} height={5} />
            </View>
            <TouchableOpacity
              onPress={() => console.log('GO button pressed!')}
              style={{
                width: '30%',
                height: '25%',
                backgroundColor: 'rgba(68, 189, 232, 1)',
                borderRadius: 30,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                elevation: 6,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: '500',
                  lineHeight: 19,
                }}>
                GO!
              </Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              width: '70%',
              height: '100%',
              zIndex: 1,
              flexDirection: 'row',
              marginVertical: 5,
            }}>
            <ImageBackground
              source={workoutbg}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                resizeMode: 'cover',
                borderTopRightRadius: 30,
                borderBottomRightRadius: 30,
                zIndex: 1,
              }}></ImageBackground>
          </View>
        </View>
      </View>
      <View
        style={{
          top: '-4%',
          alignItems: 'center',
        }}>
        <View style={styles.videoContainer}>
          <Text
            style={{
              fontSize: 16,
              fontWeight: '500',
              lineHeight: 19,
              paddingVertical: 10,
              paddingLeft: 5,
              color: 'rgba(9, 16, 17, 1)',
            }}>
            CHALLENGES
          </Text>
          <View
            style={{
              flex: 1,
            }}>
            <FlatList
              data={data}
              renderItem={renderItem}
              horizontal
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={item => item.id}
              decelerationRate={'normal'}
            />
          </View>
        </View>
      </View>
      <ScrollView
        style={{
          flex: 1,
        }}
        contentContainerStyle={{
          alignItems: 'center',
          paddingBottom: 20,
        }}
        showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={dietPlan}
          style={[
            styles.dietContainer,
            {elevation: 10, overflow: 'hidden', borderRadius: 15},
          ]}
          resizeMode="cover">
          <View
            style={{
              width: '80%',
              height: '100%',
              paddingVertical: 15,
              paddingLeft: 15,
              flexDirection: 'column',
              justifyContent: 'space-between',
            }}>
            <Text
              style={{
                fontSize: 16,
                fontWeight: '500',
                lineHeight: 19,
                color: 'rgba(9, 16, 17, 1)',
              }}>
              YOUR DIET PLAN IS READY
            </Text>
            <TouchableOpacity
              onPress={() => console.log('GO button pressed!')}
              style={{
                width: '30%',
                height: '25%',
                backgroundColor: 'rgba(68, 189, 232, 1)',
                borderRadius: 30,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'center',
                elevation: 3,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  color: 'white',
                  fontWeight: '500',
                  lineHeight: 19,
                }}>
                GO!
              </Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <ImageBackground
          source={mindPower}
          style={[
            styles.dietContainer,
            {elevation: 10, overflow: 'hidden', borderRadius: 15},
          ]}
          resizeMode="cover">
          <ImageBackground
            source={shapeMind}
            style={{
              width: '80%',
              height: '100%',
            }}
            resizeMode="cover">
            <View
              style={{
                flexDirection: 'column',
                justifyContent: 'space-between',
                width: '100%',
                height: '100%',
                padding: 20,
              }}>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: '500',
                  lineHeight: 19,
                  color: 'rgba(9, 16, 17, 1)',
                }}>
                MIND POWER
              </Text>
              <TouchableOpacity
                onPress={() => console.log('GO button pressed!')}
                style={{
                  width: '30%',
                  height: '25%',
                  backgroundColor: 'rgba(68, 189, 232, 1)',
                  borderRadius: 30,
                  alignItems: 'center',
                  flexDirection: 'row',
                  justifyContent: 'center',
                  elevation: 6,
                }}>
                <Text
                  style={{
                    fontSize: 16,
                    color: 'white',
                    fontWeight: '500',
                    lineHeight: 19,
                  }}>
                  GO!
                </Text>
              </TouchableOpacity>
            </View>
          </ImageBackground>
        </ImageBackground>
      </ScrollView>

      <StatusBar backgroundColor={'#00B2E3'} />
    </View>
  );
};

export default Home;
const {width, height} = Dimensions.get('screen');
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#C5EAF9',
  },
  headerContainer: {
    width: width,
    height: height * 0.25,
    backgroundColor: '#00B2E3',
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    flexDirection: 'column',
    alignItems: 'center',
  },
  headerTopContainer: {
    marginBottom: 10,
    width: '90%',
    height: '15%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: StatusBar.currentHeight,
  },
  proContainer: {
    width: width * 0.2,
    height: height * 0.035,
    borderRadius: 30,
    backgroundColor: '#FFFFFF',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    elevation: 9,
    shadowColor: 'rgba(0, 178, 227, 1)',
  },
  headerCenterContainer: {
    width: '90%',
    height: '30%',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    elevation: 18,
    shadowColor: 'rgba(0, 178, 227, 0.4)',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterLeft: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerCenterRight: {
    width: '50%',
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  proText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#00B2E3',
    lineHeight: 14,
  },
  verticleLine: {
    height: '40%',
    width: 0.5,
    backgroundColor: '#909090',
  },
  workOutCard: {
    width: width * 0.9,
    height: height * 0.22,
    borderRadius: 20,
    backgroundColor: 'rgba(255, 255, 255, 1)',
    elevation: 10,
    shadowColor: 'rgba(0, 0, 0, 0.39)',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  videoContainer: {
    width: '90%',
    height: height * 0.18,
  },
  dietContainer: {
    width: width * 0.9,
    height: height * 0.2,
    marginVertical: 15,
    borderRadius: 15,
  },
});
