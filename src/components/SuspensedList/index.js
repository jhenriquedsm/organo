import './SuspensedList.css'

const SuspensedList = (props) => {
    return (
        <div className='suspensed-list'>
            <label>{props.label}</label>
            <select onChange={event => props.alteration(event.target.value)} required={props.mandatory} value={props.value}>
                {props.itens.map(item => <option key={item}>{item}</option>)}
            </select>
        </div>
    )
}

export default SuspensedList