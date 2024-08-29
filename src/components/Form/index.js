import { useState } from 'react'
import Button from '../Button'
import SuspensedList from '../SuspensedList'
import TextField from '../TextField'
import './Form.css'

const Form = (props) => {

    const times = [
        'Governança de TI',
        'Inovação e Gestão',
        'Parcerias'
    ]

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const saving = (event) => {
        event.preventDefault()
        props.registeredCollaborator({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField 
                    mandatory={true}
                    label="Nome" 
                    placeholder="Digite seu nome" 
                    value={nome}
                    alteration={value => setNome(value)}
                />
                <TextField 
                    mandatory={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    value={cargo}
                    alteration={value => setCargo(value)}
                />
                <TextField 
                    label="Imagem" 
                    placeholder="Digite o endereço da imagem" 
                    value={imagem}
                    alteration={value => setImagem(value)}
                />
                <SuspensedList 
                    mandatory={true} 
                    label='Time' 
                    itens={times} 
                    value={time}
                    alteration={value => setTime(value)}
                />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form