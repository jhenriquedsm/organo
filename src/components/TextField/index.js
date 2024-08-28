import './TextField.css'

const TextField = (props) => {

    const placeholderModificada = `${props.placeholder}...`

    return (
         <div className="text-field">
            <label>{props.label}</label>
            <input required={props.mandatory} placeholder={placeholderModificada}/>
         </div>
    )
}

export default TextField