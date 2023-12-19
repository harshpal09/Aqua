import {KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import CustomDropdown from './CustomDropdown';
import {THEME_COLOR, globalStyles, width} from '../utils/Style';
import {DarkTextLarge} from './StyledComponent';
import CustomTextInput from './CustomTextInput';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { useDispatch, useSelector } from 'react-redux';
import { setMaterial } from '../../redux/features/GlobalSlice';


const material_type = [
  {
    id: 967,
    name: '1/4 PIPE',
    price: '0',
  },
  {
    id: 966,
    name: 'T CONNECTOR ',
    price: '0',
  },
  {
    id: 965,
    name: 'STEAM L CONNECTOR ',
    price: '0',
  },
  {
    id: 964,
    name: 'QC BY QC CONNECTOR ',
    price: '0',
  },
  {
    id: 963,
    name: '3/8 CONNECTOR',
    price: '0',
  },
  {
    id: 962,
    name: '1/4 CONNECTOR ',
    price: '0',
  },
  {
    id: 961,
    name: 'REPAIRD SV',
    price: '0',
  },
];

export default function Material({fields,index}) {
  // console.log("dields => ",fields," ",index);
  const material_data = useSelector(state => state.global.material);
  const dispatch = useDispatch();

  const [count, setCount] = useState(1);
    const onHandleDelete = ()=>{

        if(material_data.length > 1){
         
        let arr = [...material_data];
        arr.pop({
          "placeholder": "Material name",
          "name": "electrical_interior_no_power_window_status",
          "type": "material",
          "elements": [],
          "value": ""
        });
        dispatch(setMaterial(arr));
    }
    }

    const onHandleAdd = ()=>{
        let arr = [...material_data];
        arr.push({
          "placeholder": "Material name",
          "name": "electrical_interior_no_power_window_status",
          "type": "material",
          "elements": [],
          "value": ""
        });
        dispatch(setMaterial(arr));
      }
   const  onInputChange = ()=>{

   }  
    
  return (
    <View style={{backgroundColor: 'transparent', width: '100%'}}>
      <CustomDropdown
        onInputChange={() => {}}
        fields={{
          elements: material_type,
          value: '',
          placeholder: 'Select Material type',
        }}
      />
      <View style={[globalStyles.rowContainer, {backgroundColor: 'transparent',justifyContent:'space-around'}]}>
        <View style={{backgroundColor:'transparent'}}>
          <DarkTextLarge>Quantity</DarkTextLarge>
          <View style={globalStyles.cartIncDecContainer}>
            <TouchableOpacity
              style={globalStyles.decBtn}
              onPress={() => setCount(prev => (prev > 2 ? prev - 1 : 1))}>
              <Text style={globalStyles.decButton}>-</Text>
            </TouchableOpacity>
            <Text style={globalStyles.incDecField}>{count}</Text>
            <TouchableOpacity
              style={globalStyles.incBtn}
              onPress={() => setCount(prev => prev + 1)}>
              <Text style={globalStyles.incButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
        <KeyboardAvoidingView style={{backgroundColor:'transparent'}}>
            <CustomTextInput onInputChange={()=>{}} fields={{placeholder:'Price',value:''}} />
        </KeyboardAvoidingView>
      </View>
      <View style={[{width:'100%',backgroundColor:'transparent',justifyContent:'space-between'},globalStyles.rowContainer]}>
        <View style={{height:40,justifyContent:'center',backgroundColor:'transparent'}}><TouchableOpacity onPress={onHandleDelete}><MaterialCommunityIcons  name={'minus-circle'} color={'red'} size={30} /></TouchableOpacity></View>
        <View style={{height:40,justifyContent:'center',backgroundColor:'transparent'}}><TouchableOpacity onPress={onHandleAdd}><MaterialCommunityIcons  name={'plus-circle'} color={THEME_COLOR} size={30} /></TouchableOpacity></View>
      </View>
      
    </View>
  );
}

const styles = StyleSheet.create({});
