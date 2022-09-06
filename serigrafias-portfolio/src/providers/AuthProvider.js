import React ,{useState,createContext,useEffect} from 'react';

import {getAccessTokenApi,getRefreshTokenApi,refreshAccessTokenApi,logout} from './../api/auth'
//paquete para decodificar tokens 
import jwtDecode from 'jwt-decode';

export const AuthContext = createContext();

export default function AuthProvider(props){

    //sacamos el hijo que en este caso seran todas las rutas 
    const {children} = props;
    
    //definimos un estado para administrador logeado
    const [user,setUser] = useState({
        user : null ,
        isLoading :true
    })

    //cada vez que se recarge la pagina se chequeara el login
    useEffect(()=>{
        checkAdminLogin(setUser)
       
    },[]);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>

}

function checkAdminLogin(setUser){
    const accessToken = getAccessTokenApi();

    if (!accessToken) {
        //si el accessToken es false o null revisamos el refreshToken
        const refreshToken = getRefreshTokenApi();
            if(!refreshToken) {
                //si esta caducado el refresh deslogueamos y setamos el admin en null
                logout();
                setUser({
                    user: null,
                    isLoading: true
                })
            } else { // si hay refreshToken refrescamos 
                refreshAccessTokenApi(refreshToken);
            }
    } else { //si tenemos token seteamos el admin 
        setUser({
            isLoading: false,
            user:jwtDecode(accessToken)
    })
    }
    

}