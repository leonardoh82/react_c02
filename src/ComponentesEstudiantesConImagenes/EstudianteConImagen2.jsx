import imagenLeonardo from '../img/feliz2.jpg';

export const EstudianteConImagen2 = () =>{
    const nombre = 'Leonardo Heredia';
    const ocupacion = 'Dirección Informática'
    return(
        <>
          <div style={{width:200, display: 'block', textAlign:'center'}}>
                <img src={imagenLeonardo} alt="Leonardo" />
                <p>{nombre}</p>
                <p>{ocupacion}</p>
          </div>
        </>
    )
}