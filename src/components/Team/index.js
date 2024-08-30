import Collaborator from '../Collaborator'
import './Team.css'

const Team = (props) => {
    const css = { backgroundColor: props.secondColor}
    
    return (
        <section className='team' style={css}>
            <h3 style={{borderColor: props.primaryColor}}>{props.name}</h3>
            <div className='collaborators'>
                {props.collaborators.map( collaborator => <Collaborator nome={collaborator.nome} cargo={collaborator.cargo} imagem={collaborator.imagem}/> )}
            </div>
        </section>
    )
}

export default Team