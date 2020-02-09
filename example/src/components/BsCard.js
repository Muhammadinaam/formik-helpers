import React from 'react'
import {
    Card, CardHeader, CardBody
} from 'reactstrap';
import { Fragment } from 'react';

export default function BsCard(props) {
    return (
        <Fragment>
            <Card className="mt-3">
                <CardHeader>
                    <b>{props.header}</b>
                </CardHeader>
                <CardBody>
                    {props.body}
                </CardBody>
            </Card>
        </Fragment>
    )
}
