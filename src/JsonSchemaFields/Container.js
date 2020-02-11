import React from 'react'
import defaultContainersMapping from './containersMapping';
import RenderFieldsRecursively from './RenderFieldsRecursively'

export default function Container(props) {

    const { containersMapping, fieldSchema, schemaArray, ...other } = props

    const ContainersMapping = containersMapping ? containersMapping : defaultContainersMapping;

    let ContainerComponent = null;
    ContainerComponent = ContainersMapping[fieldSchema.component];
    if (!ContainerComponent) {
        ContainerComponent = () => <div className="text-danger">Container Component [{fieldSchema.component}] is not defined in containersMapping</div>

        return <ContainerComponent />
    }

    return (
        <ContainerComponent
            extraProps={fieldSchema.extraProps}
        >
            <RenderFieldsRecursively schemaArray={fieldSchema.children} containersMapping={containersMapping} {...other}
            />
        </ContainerComponent>
    )
}
