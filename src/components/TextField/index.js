import './TextField.css'

const TextField = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    const digiting = (event) => {
        props.alteration(event.target.value)
    }

    return (
         <div className="text-field">
            <label>{props.label}</label>
            <input value={props.value} onChange={digiting} required={props.mandatory} placeholder={placeholderModificada}/>
         </div>
    )
}

export default TextField