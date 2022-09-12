import React ,{useState}from 'react';


import { ACCESS_TOKEN,REFRESH_TOKEN } from '../../utils/constants'

import { signInApi } from '../../api/user';


export default function LoginForm() {

    // estado para guardar datos 
    const [inputs , setInputs] = useState ({

      email: "",
      password: "",
    
    });
  
    const changeForm = e => {

      setInputs ({...inputs,[e.target.name]: e.target.value}) 
    
    } 

    // funcion para realizar el login 
    const login = async event => {

         event.preventDefault();
         const result = await signInApi(inputs);
            if (result.message) {
                    alert(`${result.message}`)
                    return  
            } else {
                const {accessToken ,refreshToken } = result // destructuring para traer los token 
                //guardamos en el localStorage los token 
                localStorage.setItem(ACCESS_TOKEN,accessToken);
                localStorage.setItem(REFRESH_TOKEN,refreshToken);

                
                //redireccionamiento una vez hecho el login 
                window.location.href = "/";
            }
        

}    
    




  return (
    <>
<form onSubmit={login}>
      <div className="form-group">
        <label htmlFor="email">Correo</label>
        <input type="email" className="form-control" name="email" 
            placeholder="Ingresa tu correo electronico" value= {inputs.email} onChange={changeForm} required/>
      </div>
      <div className="form-group">
        <label htmlFor="password">Contraseña</label>
        <input type="password" className="form-control" name="password"
            placeholder="Password" value= {inputs.password} onChange={changeForm} required/>
      </div>

      <button type="submit" className="btn btn-primary">Entrar</button>
</form>

    </>
  )
}
