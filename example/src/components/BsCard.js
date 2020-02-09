import React from 'react'
import {
    Card, CardHeader, CardBody, Collapse
} from 'reactstrap';
import { Fragment, useState } from 'react';

export default function BsCard(props) {

    const [isOpen, setIsOpen] = useState(false);

    return (
        <Fragment>
            <Card className="mt-3 shadow-sm">
                <CardHeader className="bg-warning">
                    <b>{props.header}</b>
                    <button className="btn btn-sm btn-info float-right" onClick={() => { setIsOpen(!isOpen) }}>{isOpen ? 'Collapse' : 'Expand'}</button>
                </CardHeader>
                <Collapse isOpen={isOpen}>
                    <CardBody>
                        {props.body}
                    </CardBody>
                </Collapse>
            </Card>
        </Fragment>
    )
}
