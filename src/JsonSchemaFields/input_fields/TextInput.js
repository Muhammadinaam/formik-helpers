import React from 'react'

export default function TextInput(props) {
    return (
        <input className={props.fieldClasses}
            type={props.type}
            name={props.name}
            id={props.name}
            onChange={props.onChange}
            onBlur={props.onBlur}
            value={props.value}
            {...props.inputProps}
        />
    )
}
