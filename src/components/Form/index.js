import Button from '../Button'
import SuspensedList from '../SuspensedList'
import TextField from '../TextField'
import './Form.css'

const Form = () => {

    const times = [
        'Governança de TI',
        'Inovação e Gestão',
        'Parcerias'
    ]

    const saving = (event) => {
        event.preventDefault()
        console.log('Form submetido')
    }

    return (
        <section className='form'>
            <form onSubmit={saving}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField mandatory={true} label="Nome" placeholder="Digite seu nome" />
                <TextField mandatory={true} label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <SuspensedList mandatory={true} label='Time' itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form