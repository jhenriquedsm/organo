import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondColor}
    
    return (
        (props.collaborators.length > 0) ? <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator backgroundColor={props.primaryColor} key={collaborator.nome} nome={collaborator.nome} cargo={collaborator.cargo} imagem={collaborator.imagem}/> )}
            </div>
        </section>
        : ''
    )
}

export default Team