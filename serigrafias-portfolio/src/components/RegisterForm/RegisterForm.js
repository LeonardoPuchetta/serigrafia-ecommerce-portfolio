import React , {useState} from 'react';
import "./RegisterForm.css";


import { signUpApi } from '../../api/user';
import { newCartApi } from '../../api/cart';


export default function RegisterForm(props) {

  const {handleHideRegister} = props;


 // estado para guardar datos 
 const [inputs , setInputs] = useState ({
  name:"",
  lastname:"",
  phone:"",
  email: "",
  password: "",
  repeatPassword:"",
  privacyPolicy: false
});


// // funcion onChange para poder actualizar el formulario 
const changeForm = e => {
        
  if (e.target.name === 'privacyPolicy'){
      setInputs ({
          ...inputs,
          [e.target.name]: e.target.checked 
      }) } 

      else {   // en este caso son inputs normales accedemos a value 
          setInputs ({
              ...inputs,
              [e.target.name]: e.target.value
          }) } 

      };



// funcion de reseteo , se usa en register  
const resetForm = () => {   
  
  setInputs({
    name:"",
    lastname:"",
    phone:"",
    email: "",
    password: "",
    repeatPassword:"",
    privacyPolicy: false
    });


}   

const register = async e =>{

    e.preventDefault();  
    
    //registramos el usuario
    signUpApi(inputs);
    //creamos el carrito 
    newCartApi(inputs.email);


    resetForm();

    setTimeout(()=>{
      handleHideRegister();
    },1500)
    
}


  return (
    <>
<form  onSubmit= {register} >
    <div className="form-group">
        <label htmlFor="name">Nombre</label>
        <input type="text" className="form-control" id="name" 
            placeholder="Nombre" required
            value= {inputs.name} name='name' onChange={changeForm}/>
    </div>
    <div className="form-group">
        <label htmlFor="lastname">Apellido</label>
        <input type="text" className="form-control" id="lastname" 
        placeholder="Apellido" required
        value= {inputs.lastname} name='lastname' onChange={changeForm}/>
    </div>
  <div className="form-group">
    <label htmlFor="email">Correo</label>
    <input type="email" className="form-control" id="email" 
     placeholder="Enter email" required
    value= {inputs.email} name='email' onChange={changeForm}/>
  </div>
  <div className="form-group">
    <label htmlFor="phone">Telefono</label>
    <input type="tel" className="form-control" id="phone" 
    aria-describedby="phoneHelp" placeholder="Telefono" required
    value= {inputs.phone} name='phone' onChange={changeForm}/>
  </div>
  <div className="form-group">
    <label htmlFor="password">Contraseña</label>
    <input type="password" className="form-control" id="password" placeholder="Password" required
    value= {inputs.password} name='password' onChange={changeForm}/>
  </div>
  <div className="form-group">
    <label htmlFor="repeatPassword">Repetir contraseña</label>
    <input type="password" className="form-control" id="repeatPassword" placeholder="Repeat Password" required
    value= {inputs.repeatPassword} name='repeatPassword' onChange={changeForm}/>
  </div>
  <div className="form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1" required name='privacyPolicy'
     checked={inputs.privacyPolicy} onChange={changeForm}/>
    <label className="form-check-label" htmlFor="privacyPolicy">Aceptar terminos y condiciones</label>
  </div>
  <button type="submit" className="btn btn-primary">Registrarse</button>
</form>
    
     </>
  )
}

