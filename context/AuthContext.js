// import { createContext, useContext } from "react";
import React, {createContext, useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { BASE_URL } from "../config";
import axios from 'axios';

export const AuthContext = createContext();





const AuthProvider = ({ children }) => {
    const [clientInfo, setClientInfo] = useState({});

    const login = (pin) => {
    

        axios
          .post(`${BASE_URL}/login`, {
            pin
          
          })
          .then(res => {
            let clientInfo = res.data;
            console.log(clientInfo);
            setClientInfo(clientInfo);
            AsyncStorage.setItem('clientInfo', JSON.stringify(clientInfo));
            
          })
          .catch(e => {
            console.log(`login error ${e}`);
            
          });
    };
    
    return (
    
        <AuthContext.Provider value={[ login, clientInfo ]}>
            
            {children}


        </AuthContext.Provider>



    );


};

export default AuthProvider; 