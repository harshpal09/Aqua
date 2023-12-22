import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import axios from 'axios'
export  const login = async({email,password}) => {
    console.log("agya")

    let response ={
        error:'',
        data:{},
    };
    try{
         response.data = await axios.post(
            'https://aqua.thebharatech.com/api/login',
            {
                mobile:email,
                password:password,
            }
          );
          // console.log('data =>',response.data)
          return response;
    }
    catch(error){
      // console.log('data =>',error)
        response.error = error
        return response;
    }
  
}

export  const allInspection = async({id ,status}) => {
console.log("agya")
  let response ={
      error:'',
      data:{},
  };
  try{
       response.data = await axios.post(
          'https://aqua.thebharatech.com/api/appointment-listing',
          {
              user_id:id,
              status:status,
          }
        );
        // console.log("res > ",response)
      return response;
     
  }
  catch(error){
    console.log("err > ",error)
      response.error = error
      return response;
  }
}
export  const getAllotedInventory = async({id}) => {
  // console.log("agya")
    let response ={
        error:'',
        data:{},
    };
    try{
         response.data = await axios.post(
            'https://aqua.thebharatech.com/api/allotedinventory',
            {
                tech_id:id,
            }
          );
          // console.log("res > ",response.data.data)
        return response;
       
    }
    catch(error){
      console.log("err > ",error)
        response.error = error
        return response;
    }
  }
export  const documentsForm = async({leadId}) => {
  // console.log("agya")
    let response ={
        error:'',
        data:{},
    };
    try{
         response.data = await axios.post(
            'https://crm.unificars.com/api/cjinspection',
            {
              lead_id:leadId
            }
          );
          console.log("res from api call =>",response.data.data)
        return response;
       
    }
    catch(error){
        response.error = error
        return response;
    }
  }
export  const getAMC = async({id ,status}) => {

  let response ={
      error:'',
      data:{},
  };
  try{
       response.data = await axios.post(
          'https://aqua.thebharatech.com/api/amc',
          {
            user_id:id,
            status:status,
          }
        );
      // console.log('get AMC  =>',response.data)
      return response;
     
  }
  catch(error){
    response.error = error
      return response;
  }
}
export  const submitForm = async({data:data}) => {

  let response ={
      error:'',
      data:{},
  };
  try{
       response.data = await axios.post(
          'https://aqua.thebharatech.com/api/step3',
          data
        );
      console.log('get response api  =>',response.data.data)
      return response;
     
  }
  catch(error){
    console.log("error  =>",error)
    response.error = error
      return response;
  }
}



