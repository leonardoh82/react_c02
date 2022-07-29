import imagenAby from '../img/feliz3.jpg';

export const EstudianteConImagen3 = () =>{
    const nombre = 'Abigail';
    const ocupacion = 'Laboratorio'
    return(
        <>
          <div style={{width:200, display: 'block', textAlign:'center'}}>
                <img src={imagenAby} alt="Abigail" />
                <p>{nombre}</p>
                <p>{ocupacion}</p>
          </div>
        </>
    )
}