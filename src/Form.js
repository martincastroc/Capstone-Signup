import { useState } from 'react';
import './styles/Form.css'

function Form() {

  const [inputs,setInputs] = useState({});
  
  const handleChange = (event) => {
    const {name,value} = event.target
    setInputs(values => {return {...values,[name]:value}})
  }

  // TODO: Post form data to supabase
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputs);
  }

  return(
    <form onSubmit={handleSubmit}>
      <label> Nombre Completo:
        <input 
          type="text" 
          name = "full_name"
          placeholder='Tu Nombre'
          value={inputs.full_name || ""}
          onChange={handleChange}/>
      </label> 
      <br></br>
      <label> Correo electrónico:
        <input 
          type="email"
          name='email'
          placeholder='ejemplo@ejemplo.com'
          value={inputs.email || ""}
          onChange={handleChange}/>
      </label>
      <br></br>
      <label> Teléfono: (+56 9)
        <input 
          type='number'
          name='phone_number'
          placeholder='12345678'
          value={inputs.phone_number || ""}
          onChange={handleChange}
          />
      </label>
      <br></br>
      <label> Comuna:
        <select name='commune' value={inputs.commune} onChange={handleChange}>
          <option value=''>--Elegir--</option>
          <option value="Cerrillos">Cerrillos</option>
          <option value="Cerro Navia">Cerro Navia</option>
          <option value="Conchalí">Conchalí</option>
          <option value="El Bosque">El Bosque</option>
          <option value="Estación Central">Estación Central</option>
          <option value="Huechuraba">Huechuraba</option>
          <option value="Independencia">Independencia</option>
          <option value="La Cisterna">La Cisterna</option>
          <option value="La Florida">La Florida</option>
          <option value="La Granja">La Granja</option>
          <option value="La Pintana">La Pintana</option>
          <option value="La Reina">La Reina</option>
          <option value="Las Condes">Las Condes</option>
          <option value="Lo Barnechea">Lo Barnechea</option>
          <option value="Lo Espejo">Lo Espejo</option>
          <option value="Lo Prado">Lo Prado</option>
          <option value="Macul">Macul</option>
          <option value="Maipú">Maipú</option>
          <option value="Ñuñoa">Ñuñoa</option>
          <option value="Pedro Aguirre Cerda">Pedro Aguirre Cerda</option>
          <option value="Peñalolén">Peñalolén</option>
          <option value="Providencia">Providencia</option>
          <option value="Pudahuel">Pudahuel</option>
          <option value="Quilicura">Quilicura</option>
          <option value="Quinta Normal">Quinta Normal</option>
          <option value="Recoleta">Recoleta</option>
          <option value="Renca">Renca</option>
          <option value="San Joaquín">San Joaquín</option>
          <option value="San Miguel">San Miguel</option>
          <option value="San Ramón">San Ramón</option>
          <option value="Santiago">Santiago</option>
          <option value="Vitacura">Vitacura</option>
        </select>
      </label>
      <br></br>
      <label> Rango de Ingresos (CLP):
        <select name='income_range' value={inputs.income_range} onChange={handleChange}>
          <option value=''>--Elegir--</option>
          <option value='<400.000'>Menor que 400.000</option>
          <option value='400.000 - 600.000'>Entre 400.000 y 600.000</option>
          <option value='600.000 - 800.000'>Entre 600.000 y 800.000</option>
          <option value='800.000 - 1.000.000'>Entre 800.000 y 1.000.000</option>
          <option value='1.000.000 - 1.200.000'>Entre 1.000.000 y 1.200.000</option>
          <option value='1.200.000 - 1.400.000'>Entre 1.200.000 y 1.400.000</option>
          <option value='1.400.000 - 1.600.000'>Entre 1.400.000 y 1.600.000</option>
          <option value='1.600.000 - 1.800.000'>Entre 1.600.000 y 1.800.000</option>
          <option value='1.800.000 - 2.000.000'>Entre 1.800.000 y 2.000.000</option>
          <option value='>2.000.000'>Mayor a 2.000.000</option>
        </select>
      </label>
      <br></br>
      <label>Numero de Personas en tu casa:
        <input 
        type="number"
        name='family_members'
        placeholder='1'
        value={inputs.family_members}
        onChange={handleChange}
        />
      </label>
      <br></br>
      <input type='submit' value='Listo'/>
    </form>
  )
}

export default Form;