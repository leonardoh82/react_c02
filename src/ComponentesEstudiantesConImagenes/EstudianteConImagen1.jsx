import imagenDario from '../img/feliz.jpg';

export const EstudianteConImagen1 = () =>{
    const nombre = 'Dario Dalessio';
    const ocupacion = 'Recurso Humanos'
    return(
        <>
          <div style={{width:200, display: 'block', textAlign:'center'}}>
                <img src={imagenDario} alt="Dario" />
                <p>{nombre}</p>
                <p>{ocupacion}</p>
          </div>
        </>
    )
}