import './App.css';
import { Estudiante } from './Componets/Estudiante';
import imagenDario from './img/feliz.jpg';
import imagenLeonardo  from './img/feliz2.jpg';
import imagenAby  from './img/feliz3.jpg';

function App() {

  const estudiante1 = {
    nombre: 'Dario Dalesio',
    ocupacion: 'Recursos Humanos',
    imagen : imagenDario
  }
  const estudiante2 = {
    nombre: 'Leonardo Heredia',
    ocupacion: 'Informática',
    imagen : imagenLeonardo
  }
  const estudiante3 = {
    nombre: 'Abigail Heredia',
    ocupacion: 'Laboratorio',
    imagen : imagenAby
  }
  return (
    <div style={{display: 'flex', width: '900px',justifyContent: 'space-between'}}>
      <Estudiante estudiante={estudiante1} />
      <Estudiante estudiante={estudiante2} />
      <Estudiante estudiante={estudiante3} />
    </div>
    
  );
}

export default App;
