import { StyleSheet,Dimensions } from "react-native";

export const {width,height} = Dimensions.get('screen')

//Monochromatic colors: #1F51FF (base), #5077FF (lighter blue), #0D2E80 (darker blue)
//Split-complementary colors: #1F51FF (base), #FF1F6D (pink/red), #FF1F4E (pinkish-orange)
//Triadic colors: #1F51FF (base), #FF1F69 (pink/red), #69FF1F (green)
//Analogous colors: #1F51FF (base), #3E61FF (lighter blue), #FF691F (orange)
//Complementary color: #FF691F (orange)
export const BASE_URL = "https://aqua.thebharatech.com/"
export const THEME_COLOR = "#1F51FF"
export const LIGHT_BLUE = "#5481ff"
export const LIGHT_BLUE_BACKGROUND = '#d7dffc'
export const ORANGE_COLOR = "#FF691F"


export const globalStyles = StyleSheet.create({
    flexBox: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      },
      flexBoxAlign: {
        // flex:1,
        display: 'flex',
        // justifyContent: 'center',
        alignItems: 'center',
      },
      flexBoxJustify: {
        // flex:1,
        display: 'flex',
        justifyContent: 'center',
        // alignItems: 'center',
      },
      childDetailContainer: {
        backgroundColor: LIGHT_BLUE,
        width: '100%',
        height: 40,
        borderRadius: 10,
      },
      container: {
        width: '100%',
        borderColor: '#ccc',
        // margin: 10,
        // marginTop: -5,
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderTopLeftRadius: 0,
        borderTopWidth: 0,
        overflow: 'hidden',
      },
    
      mainContainer: {
        // flex:1,
        display: 'flex',
        // elevation:19,
        // padding:10,
        width: '100%',
    
        // height: '100%',
      },
      rowContainer: {
        display: 'flex',
        flexDirection: 'row',
      },
      columnContainer: {
        display: 'flex',
        flexDirection: 'column',
      },
      block: {
        width: 'auto',
        backgroundColor: 'green',
      },
      scrollViewContainer: {
        width: '100%',
        padding: 10,
        paddingBottom: 100,
        // backgroundColor:'green'
      },
      contentContainer: {
        backgroundColor: '#FFF',
        width: '100%',
        //  height:300,
        marginVertical: 10,
        borderRadius: 2,
        borderWidth: 0.5,
        borderColor: 'lightgrey',
    
        shadowColor: '#000', // Shadow color
        shadshowOffset: {width: 0, height: 2}, // Shadow offset
        shadowOpacity: 0.3, // Shadow opacity (0 to 1)
        shadowRadius: 4, //
      },
      shadow: {
        shadowColor: '#000', // Shadow color
        shadshowOffset: {width: 0, height: -20}, // Shadow offset
        shadowOpacity: 0.4, // Shadow opacity (0 to 1)
        shadowRadius: 8, //       
      },
      childDetailContainer: {
        // backgroundColor: LIGHT_BLUE,
        width: '100%',
        height: 40,
        borderRadius: 10,
      },
      profileHeadings: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        // width:width-50,
        width: '100%',
        paddingHorizontal: 10,
        padding: 10,
        // borderBottomWidth: 0.5,
        // backgroundColor:'blue',
      },
      profileHeadingText: {
        textAlignVertical: 'center',
        marginLeft: 0,
        color: '#6D6D6D',
        // width:DeviceInfo.isTablet()?Dimensions.get('screen').width/2.4: Dimensions.get('screen').width/2.8,
        fontFamily: 'Baskervville-Regular',
        fontSize: 16,
        // backgroundColor:'red'
      },
      profileIcon: {
        color: 'grey',
      },
      wrapContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginVertical: 10,
        marginVertical: 5,
        // backgroundColor:'yellow'
      },
})

export const data = [
  {
      "description": {
          "icon": "file",
          "title": "Description",
          "subfeilds": [
                      {
                  "placeholder": "Describe the problem",
                  "name": "km_driven",
                  "type": "textarea",
                  "elements": [],
                  "value": ''
              },
             
          ]
      },
      "material": {
        "icon": "file",
        "title": "Material",
        "subfeilds": [
          {
            "placeholder": "Material name",
            "name": "electrical_interior_no_power_window_status",
            "type": "text",
            "elements": [],
            "value": ""
        },
        {
            "placeholder": "No. Of Power Windows Condition",
            "name": "electrical_interior_no_power_window_condition",
            "type": "multipleselect",
            "elements": [
                "Not Available",
                "Not Working",
                "Switch Broken",
                "Working"
            ],
            "value": ""
        },
        {
            "placeholder": "No. Of Airbags ",
            "name": "electrical_interior_airbags_status",
            "type": "multipleselect",
            "elements": [
                "Air Bag Deployed",
                "Air Bag Light On",
                "Air Bag Light Off",
                "Ok"
            ],
            "value": ""
        },
        {
            "placeholder": "Electrical",
            "name": "electrical_interior_electrical_status",
            "type": "dropdown",
            "elements": [
                "Ok",
                "Not Ok"
            ],
            "value": ""
        },
           
        ]
    },
      "payment": [
          {
              "icon": "car-child-seat",
              "title": "Interior",
              "feilds": [
                  {
                      "name": "Interior  + Electrical",
                      "subfeilds": [
                          {
                              "placeholder": "No. Of Power Windows",
                              "name": "electrical_interior_no_power_window_status",
                              "type": "text",
                              "elements": [],
                              "value": ""
                          },
                          {
                              "placeholder": "No. Of Power Windows Condition",
                              "name": "electrical_interior_no_power_window_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Not Available",
                                  "Not Working",
                                  "Switch Broken",
                                  "Working"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "No. Of Airbags ",
                              "name": "electrical_interior_airbags_status",
                              "type": "multipleselect",
                              "elements": [
                                  "Air Bag Deployed",
                                  "Air Bag Light On",
                                  "Air Bag Light Off",
                                  "Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Electrical",
                              "name": "electrical_interior_electrical_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Electrical Condition",
                              "name": "electrical_interior_electrical_condition",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Damage"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Interior Dashboard ",
                              "name": "electrical_interior_interior_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Interior Dashboard  Conditon",
                              "name": "electrical_interior_interior_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Ok",
                                  "Broken",
                                  "Scratched"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Airbag Feature  ",
                              "name": "electrical_interior_interior_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Airbag Feature  Condition ",
                              "name": "electrical_interior_airbags_feature_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Availale",
                                  "Not Availale",
                                  "Working",
                                  "Not Working"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Music System",
                              "name": "electrical_interior_music_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Music System Condition ",
                              "name": "electrical_interior_music_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Availale",
                                  "Not Availale",
                                  "Working",
                                  "Not Working"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Leather Seat",
                              "name": "electrical_interior_leather_seat_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Leather Seat Condition ",
                              "name": "electrical_interior_leather_seat_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "NA",
                                  "Torn",
                                  "Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Fabric Seat",
                              "name": "electrical_interior_fabric_seat_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Fabric Seat Condition ",
                              "name": "electrical_interior_fabric_seat_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "NA",
                                  "Torn",
                                  "Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Sunroof",
                              "name": "electrical_interior_sunroof_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Sunroof Condition ",
                              "name": "electrical_interior_sunroof_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Available",
                                  "Available",
                                  "Working",
                                  "Not Working",
                                  "Noise",
                                  "Damage"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Steering Mounted Audio Control",
                              "name": "electrical_interior_steering_mounted_audio_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Steering Mounted Audio Control Condition ",
                              "name": "electrical_interior_steering_mounted_audio_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Broken",
                                  "OK",
                                  "Working",
                                  "Not Working",
                                  "NA"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "ABS",
                              "name": "electrical_interior_abs_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "ABS Condition ",
                              "name": "electrical_interior_abs_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "ABS Light On",
                                  "ABS Light Off",
                                  "Available",
                                  "Not Available"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Rear Defogger",
                              "name": "electrical_interior_rear_deforgger_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Rear Defogger Condition ",
                              "name": "electrical_interior_rear_deforgger_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Working",
                                  "Not Working",
                                  "Available",
                                  "Not Available"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Reverse Camera",
                              "name": "electrical_interior_reverse_camera_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Reverse Camera Condition ",
                              "name": "electrical_interior_reverse_camera_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Working",
                                  "Not Working",
                                  "Available",
                                  "Not Available"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Parking Sensor ",
                              "name": "electrical_interior_parking_sensor_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Parking Sensor Condition ",
                              "name": "electrical_interior_parking_sensor_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Working",
                                  "Not Working",
                                  "Available",
                                  "Not Available"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "TPMS ",
                              "name": "tpms_light",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "NA",
                                  "Light Glowing"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Odometer",
                              "name": "odometer",
                              "type": "file",
                              "elements": [],
                              "value": []
                          },
                          {
                              "placeholder": "Interior From Back Seat ",
                              "name": "interior_back_seat",
                              "type": "file",
                              "elements": [],
                              "value": []
                          },
                          {
                              "placeholder": "Interior From  Right ",
                              "name": "interior_from_right",
                              "type": "file",
                              "elements": [],
                              "value": []
                          },
                          {
                              "placeholder": "Interior From Rear Right ",
                              "name": "interior_from_rear_right",
                              "type": "file",
                              "elements": [],
                              "value": []
                          },
                          {
                              "placeholder": "AC Cooling",
                              "name": "air_coditioning_ac_cooling_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "AC Cooling Condition ",
                              "name": "air_coditioning_ac_cooling_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Ac fan Noise",
                                  "Blower noise",
                                  "Compressor Noise",
                                  "Effective",
                                  "Not Effective"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Heater ",
                              "name": "air_coditioning_heater_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "AC Cooling Condition ",
                              "name": "air_coditioning_heater_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Effective",
                                  "Not Effective"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Climate Control AC  ",
                              "name": "air_coditioning_climate_control_ac_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Climate Control AC  Condition ",
                              "name": "air_coditioning_climate_control_ac_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Available",
                                  "Not Available"
                              ],
                              "value": ""
                          }
                      ]
                  },
                  {
                      "name": "Steering/Suspension + Brakes",
                      "subfeilds": [
                          {
                              "placeholder": "Steering",
                              "name": "steering_suspension_brakes_steering_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Steering Condition",
                              "name": "steering_suspension_brakes_steering_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Good",
                                  "Hard",
                                  "Noise"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Heater",
                              "name": "air_coditioning_heater_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Heater Condition",
                              "name": "air_coditioning_heater_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Effective",
                                  "Not Effective"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Suspension ",
                              "name": "steering_suspension_brakes_suspension_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Suspension Condition",
                              "name": "steering_suspension_brakes_suspension_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Abnormal Noise",
                                  "Good"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Brake ",
                              "name": "steering_suspension_brakes_braks_status",
                              "type": "dropdown",
                              "elements": [
                                  "Ok",
                                  "Not Ok"
                              ],
                              "value": ""
                          },
                          {
                              "placeholder": "Brake Condition",
                              "name": "steering_suspension_brakes_braks_condition",
                              "type": "multipleselect",
                              "elements": [
                                  "Effective",
                                  "Not Effective",
                                  "Noise"
                              ],
                              "value": ""
                          }
                      ]
                  }
              ]
          }
      ],
  }
]