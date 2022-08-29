import React from 'react'

export default function RegisterForm() {



  return (
    <>
<form>
    <div class="form-group">
        <label for="exampleInputName">Nombre</label>
        <input type="text" class="form-control" id="exampleInputName" aria-describedby="nameHelp" placeholder="Nombre" required/>
    </div>
    <div class="form-group">
        <label for="exampleInputLastname">Apellido</label>
        <input type="text" class="form-control" id="exampleInputLastname" aria-describedby="lastnameHelp" placeholder="Apellido" required/>
    </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Correo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPhone">Telefono</label>
    <input type="tel" class="form-control" id="exampleInputPhone" aria-describedby="phoneHelp" placeholder="Telefono" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" required/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword2">Repetir contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword2" placeholder="Password" required/>
  </div>
  <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1" required/>
    <label class="form-check-label" for="exampleCheck1">Aceptar terminos y condiciones</label>
  </div>
  <button type="submit" class="btn btn-primary">Registrarse</button>
</form>
    </>
  )
}
