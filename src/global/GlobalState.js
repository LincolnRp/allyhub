import React, { createFactory, useEffect, useState } from "react";
import { GlobalContext } from "./GlobalContext";
import axios from "axios";
import { BASE_URL } from "./../constants/url";

export default function GlobalState(props) {
  
  const Provider = GlobalContext.Provider;
  const [country, setCountry] = useState([])
  const [cities, setCities] = useState([])

  useEffect(() =>{
    getCountry()
    getCities()
  },[])

 const getCountry = async() => {

    await axios
       .get(`${BASE_URL}/country`)
       .then((res) => {

        setCountry(res.data)
   
       })
       .catch((err) => {
   
        console.log(err)
           
       });
   };

   const getCities = async() => {

    await axios
       .get(`${BASE_URL}/city`)
       .then((res) => {

        setCities(res.data)
   
       })
       .catch((err) => {
   
        console.log(err)
           
       });
   };


  const values = {
    country,
    cities
  };

  return <Provider value={values}>{props.children}</Provider>;
}