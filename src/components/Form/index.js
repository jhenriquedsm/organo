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

    return (
        <section className='form'>
            <form>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <TextField label="Nome" placeholder="Digite seu nome" />
                <TextField label="Cargo" placeholder="Digite seu cargo" />
                <TextField label="Imagem" placeholder="Digite o endereço da imagem" />
                <SuspensedList label='Time' itens={times} />
                <Button>
                    Criar Card
                </Button>
            </form>
        </section>
    )
}

export default Form