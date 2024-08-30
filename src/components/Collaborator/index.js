import './Collaborator.css'

const Collaborator = ({nome, cargo, imagem, backgroundColor}) => {
    return (
    <div className='collaborator'>
        <div className='cabecalho' style={{backgroundColor: backgroundColor}}>
            <img src={imagem} alt={nome} />
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>

    )
}

export default Collaborator