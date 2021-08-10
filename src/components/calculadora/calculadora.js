import {useState} from 'react';
import Button from '@material-ui/core/Button';
import './calculadora.css'

function Calculadora() {

  var [resultado,setResultado] = useState(0);
  var [a,setA] = useState(0);
  var [b,setB] = useState(0);


  var calcular = () => {
    var aa = parseInt(a,10);
    var bb = parseInt(b,10);
    setResultado(aa + bb);
  }

  return (
    <div className="centrar">

      <p> numero A</p>
      <input onChange={ (a) => { setA(a.target.value) } }/>

      <p> numero b</p>
      <input onChange={ (a) => { setB(a.target.value) } }/>

      <br/>

      <Button 
      variant="contained" 
      color="secondary" 
      onClick={() => { calcular() }}>
       Calcular 
      </Button>
      <p>  Resultado= {resultado}</p>

    </div>
  );
}


export default Calculadora;
