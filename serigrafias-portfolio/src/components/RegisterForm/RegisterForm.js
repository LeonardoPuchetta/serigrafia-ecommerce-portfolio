import React , {useState} from 'react';
import "./RegisterForm.css";


import { signUpApi } from '../../api/user';


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

// // estado para validar formulario 
// const [formValid , setFormValid] = useState ({
//   // ESTADO INICIAL 
//   name:false,
//   lastname:false,
//   phone:false,
//   email:false,
//   password: false,
//   repeatPassword:false ,
//   privacyPolicy: false


// });

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

//     // funcion para hacer validacion

// const inputValidation = e => {

//       const {type , name} = e.target;

//       if (type === 'email'){
        
//        setFormValid({...formValid,[name] : emailValidation(e.target)} )
   
//    }
//       if (type === 'password'){

//        setFormValid({...formValid,[name] : minLengthValidation(e.target , 6 )})
//    }
//       if (type === 'checkbox'){
          
//        setFormValid({...formValid,[name] : e.target.checked})
//    }
// } 

// const register = async e => {   // funcion que realiza el registro de usuario 

//   e.preventDefault();  // supuestamente para evitar redireccionamiento de la pagina 

//   //const {email,password , repeatPassword,privacyPolicy} = formValid;

//   // traemos los valores ingresados sin usar destructuring 
//   const nameVal = inputs.name;
//   const lastnameVal = inputs.lastname;
//   const phoneVal = inputs.phone;
//   const emailVal = inputs.email;
//   const passwordVal = inputs.password;
//   const repeatPasswordVal = inputs.repeatPassword;
//   const privacyPolicyVal = inputs.privacyPolicy;

//   if (!emailVal || !passwordVal || !repeatPasswordVal || !privacyPolicyVal|| !nameVal|| !lastnameVal|| !phoneVal) {

//     return (<Alert key='primary' variant='primary'>
//         'Todos los campos son obligatorios' 
//     </Alert>)
     

//       } else {
//           if ( passwordVal !== repeatPasswordVal){

//             return (<Alert key='primary' variant='primary'>
//             'Todos los campos son obligatorios' 
//         </Alert>)

//            } else {
              
//               // le pasamos como data los inputs de usuario 
//               // suponemos que aqui todos los datos estan correctos 
//           const result = await signUpApi(inputs);
          
//           if (!result.ok){
//             return (<Alert key='primary' variant='primary'>
//             'Todos los campos son obligatorios' 
//         </Alert>)
//               }
//           else {
//             // reseteo del formulario 
//               resetForm(); 
//               return (<Alert key='primary' variant='primary'>
//               'Todos los campos son obligatorios' 
//                </Alert>)   
//           }

//           }

  
//       }

//   console.log(formValid) ; 

// } ; 

// funcion de reseteo , se usa en register 
  // seleccionamos todos los inputs 
const resetForm = () => {   
  
  //const input = document.getElementsByName('input');


    // reset de inputs 
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
    //console.log(inputs);

    signUpApi(inputs);

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

