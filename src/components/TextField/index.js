import './TextField.css'

const TextField = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    let value = ''

    const digiting = (event) => {
        value = event.target.value
        console.log(value)
    }

    return (
         <div className="text-field">
            <label>{props.label}</label>
            <input value={value} onChange={digiting} required={props.mandatory} placeholder={placeholderModificada}/>
         </div>
    )
}

export default TextField