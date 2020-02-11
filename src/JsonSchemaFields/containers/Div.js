import React from 'react'

export default function Div(props) {
    return (
        <div className={props.extraProps.className ? props.extraProps.className : ''}>
            {props.children}
        </div>
    )
}
