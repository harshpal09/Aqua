import {
  StyleSheet,
  Text,
  View,
  Button,
  SafeAreaView,
  Image,
  FlatList,
  Linking,
  TouchableOpacity,
  ActivityIndicator,
  RefreshControl,
  ImageBackground,
  ScrollView,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {
  isLoggedIn,
  setAMCBadge,
  setBadges,
  setComplaintsBadge,
  setProfileDetails,
  setSendData,
} from '../../redux/features/GlobalSlice';
import {THEME_COLOR, globalStyles, height, width} from '../utils/Style';
import {
  DarkTextLarge,
  DarkTextMedium,
  DarkTextSmall,
  FadeTextMedium,
  FadeTextSmall,
  FloatingButton,
  ItemContainer,
  MainContainer,
} from '../components/StyledComponent';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {allInspection} from '../services/Api';
import { useNavigation,useFocusEffect } from '@react-navigation/native';
export default function HomeScreen({navigation}) {
  const complaint = useSelector(s => s.global.complaint);
  const amc = useSelector(s => s.global.AMC);

  const user_data = useSelector(s => s.global.userDetails);
  const api_send_data = useSelector(state => state.global.send_data);

  var val = typeof user_data === 'object' ? user_data : JSON.parse(user_data);
  const dispatch = useDispatch();
  const navigation_diff = useNavigation();

  const [containerHeight, setContainerHeight] = useState(0);
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  useFocusEffect(
    React.useCallback(() => {
      setRedux(); // You may want to check if this needs to be called on focus as well
      getData();
    }, [])
  );

  useEffect(() => {
    setRedux();
    getData();
  }, []);

  // console.log("type => ",api_send_data.type)
  const setRedux= () =>{
    let newobj = {...api_send_data};
    newobj.type = 1;
    dispatch(setSendData(newobj));
  }

  const openPhoneDialer = number => {
    Linking.openURL(`tel:${number}`);
  };
  // console.log("user details ====>",val.id)
  const getData = async () => {
    // console.log('aerrrrr => ', val.id);
    try {
      setLoading(true);
      const response = await allInspection({id: val.id, status: 'total'});
      // console.log('data =>', response.data);

      if (response.data.data.code != undefined && response.data.data.code) {
       
        

        dispatch(setComplaintsBadge(response.data.data.data.length));
        setData(response.data.data.data);
      } else {
      }
    } catch (error) {
      console.log('error ', error);
    } finally {
      // console.log('finally...............');
      setLoading(false);
      setRefreshing(false);
    }
  };


  console.log("data =>",data);
  return (
    <MainContainer
    //  style={{ flex: 1,padding:10 }}
    >
      <ImageBackground
        source={require('../assets/images/MUMBAI.png')}
        style={{flex: 1}}>
        {loading ? (
          <View style={[{flex:1,width:width,height:height,},globalStyles.flexBox]}>
          <ActivityIndicator size={'large'} color={THEME_COLOR} />
          </View>
        ) : (
          <>
            {data.length > 0 ? (
              <FlatList
                style={{paddingHorizontal: 10, flexGrow: 1}}
                data={data}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={getData} />
                }
                ListEmptyComponent={() => (
                  <View
                    style={{
                      flex: 1,
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}>
                    <ActivityIndicator size="large" color={THEME_COLOR} />
                  </View>
                )}
                renderItem={item => (
                  <ItemContainer
                    onPress={() => {
                      // console.log("type home  =====>",item.item.type)
                      let obj = {...api_send_data};
                      obj.id = item.item.id
                      obj.type = item.item.type,
                      dispatch(setSendData(obj))
                      navigation.navigate('Step_1', {id: item.item.id});
                      dispatch(setProfileDetails(item.item));
                    }}
                    style={{width: '100%'}}>
                    <View style={[globalStyles.rowContainer]}>
                      <View
                        style={[
                          {
                            width: '100%',
                            backgroundColor: 'transparent',
                            paddingHorizontal: 10,
                          },
                        ]}>
                        {/* <DarkTextSmall style={[{padding: 5}]}>
                  Inspection Report
                </DarkTextSmall> */}
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Unique ID:
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.unique_id}
                            </DarkTextMedium>
                          </View>
                        </View>
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Customer Name :
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.account}
                            </DarkTextMedium>
                          </View>
                        </View>
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Appointment Date:
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.appointment_date}
                            </DarkTextMedium>
                          </View>
                        </View>
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Case No. :
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '50%', padding: 5}}>
                              {item.item.sr_number}
                            </DarkTextMedium>
                          </View>
                        </View>
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Warranty Status :
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.warranty_status}
                            </DarkTextMedium>
                          </View>
                        </View>
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Status :
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.status}
                            </DarkTextMedium>
                          </View>
                        </View>

                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Issue
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.issue}
                            </DarkTextMedium>
                          </View>
                        </View>
                        {/* <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Package :
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '70%', padding: 5}}>
                              {item.item.package}
                            </DarkTextMedium>
                          </View>
                        </View> */}
                        <View
                          style={[
                            {width: '100%', backgroundColor: 'transparent'},
                            globalStyles.rowContainer,
                            globalStyles.flexBox,
                          ]}>
                          <View
                            style={[
                              {width: '100%', backgroundColor: 'transparent'},
                              globalStyles.rowContainer,
                            ]}>
                            <FadeTextMedium style={{padding: 5}}>
                              Address :
                            </FadeTextMedium>
                            <DarkTextMedium style={{width: '80%', padding: 5}}>
                              {item.item.address}
                            </DarkTextMedium>
                          </View>
                        </View>
                      </View>
                    </View>
                    <View style={[{paddingTop: 10}]}>
                      <TouchableOpacity
                        style={[
                          {
                            width: '100%',
                            // padding:10,
                            height: 30,
                            backgroundColor: THEME_COLOR,
                            borderRadius: 10,
                          },
                          globalStyles.flexBox,
                        ]}
                        onPress={() =>
                          openPhoneDialer(item.item.registered_phone)
                        }>
                        <MaterialCommunityIcons
                          name={'phone'}
                          size={20}
                          color={'white'}
                        />
                      </TouchableOpacity>
                    </View>
                  </ItemContainer>
                )}
              />
            ) : (
              <ScrollView
                style={{
                  backgroundColor: 'transparent',
                  width: width,
                  height: height,
                }}
                showsVerticalScrollIndicator={false}
                refreshControl={
                  <RefreshControl refreshing={refreshing} onRefresh={getData} />
                }>
                <View
                  style={[
                    {
                      flex: 1,
                      backgroundColor: 'transparent',
                      height: height - 200,
                    },
                    globalStyles.flexBox,
                  ]}>
                  <DarkTextMedium>No Lead Assign yet</DarkTextMedium>
                </View>
              </ScrollView>
            )}
          </>
        )}
      </ImageBackground>
    </MainContainer>
  );
}
