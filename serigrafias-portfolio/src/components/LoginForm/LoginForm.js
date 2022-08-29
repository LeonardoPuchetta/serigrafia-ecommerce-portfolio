import React ,{useState}from 'react';
import Button from 'react-bootstrap/Button';
import RegisterForm from '../RegisterForm';
import OffCanvasComponent from '../OffCanvasComponent';




export default function LoginForm() {

  const [showCanvasRegister, setShowCanvasRegister] = useState(false);
  const handleShowRegister = () => setShowCanvasRegister(true);


  return (
    <>
<form>
  <div class="form-group">
    <label for="exampleInputEmail1">Correo</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Contraseña</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
  </div>
  {/* <div class="form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div> */}
  <button type="submit" class="btn btn-primary">Entrar</button>
</form>

    <hr/>
    <h6>Aun no tienes cuenta ?</h6>
    <Button variant='secondary' onClick={handleShowRegister}>Registrate</Button>
      <OffCanvasComponent show={showCanvasRegister} title='Registro de usuario' 
            setShowCanvas={setShowCanvasRegister} componentCanvas = {<RegisterForm/>}>
      </OffCanvasComponent>


    </>
  )
}
