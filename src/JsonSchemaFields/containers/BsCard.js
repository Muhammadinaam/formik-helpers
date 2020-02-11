import React from 'react'

export default function BsCard(props) {
    return (
        <div className="card">
            <div className="card-header">
                {props.extraProps.header_text}
            </div>
            <div className="card-body">
                {props.children}
            </div>
        </div>
    )
}
