import React from 'react'
import Field from './Field';
import Container from './Container';

export default function RenderFieldsRecursively(props) {
    const {schemaArray} = props;
    
    return schemaArray.map((fieldSchema, fieldSchemaIndex) => {
        return fieldSchema.type == 'container' ?
            <Container key={fieldSchemaIndex}
                {...props}
                fieldSchema={fieldSchema} /> :
            <Field key={fieldSchemaIndex}
                {...props}
                fieldSchema={fieldSchema}
            />
    })
}