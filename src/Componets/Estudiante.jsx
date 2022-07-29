import  '../estudiante.css';

export const Estudiante = (props) =>{
    return(
        <>
          <div  style={{width:'200', display: 'block', textAlign:'center', border:'2px solid rgb(255, 130, 80)'}}>
                <img src={props.estudiante.imagen} style={{width:'100%', height:'100'}} />
                <h2 className="nom">{props.estudiante.nombre}</h2>
                <p className="pro">{props.estudiante.ocupacion}</p>
          </div>
        </>
    )
}