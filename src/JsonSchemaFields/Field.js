import React, {Fragment} from 'react'
import defaultInputFieldsMapping from './inputFieldsMapping';

export default function Field(props) {

    const {
        fieldGroupContainer,
        labelContainer,
        fieldContainer,
        labelClasses,
        fieldClasses,
        inputFieldsMapping,
        fieldSchema,
        formikProps
    } = props;

    const FieldGroupContainer = fieldGroupContainer ? fieldGroupContainer : DefaultFieldGroup;
    const LabelContainer = labelContainer ? labelContainer : Fragment;
    const FieldContainer = fieldContainer ? fieldContainer : Fragment;
    const LabelClasses = labelClasses ? labelClasses : '';
    const FieldClasses = fieldClasses ? fieldClasses : 'form-control';
    const InputFieldsMapping = inputFieldsMapping ? inputFieldsMapping : defaultInputFieldsMapping;

    let FieldComponent = null;
    FieldComponent = InputFieldsMapping[fieldSchema.type];
    if (!FieldComponent) {
        FieldComponent = () => <div className="text-danger">Field Type [{fieldSchema.type}] is not defined in inputFieldMapping</div>
    }

    return (
        <FieldGroupContainer>
            <LabelContainer>
                <label className={LabelClasses} htmlFor={fieldSchema.name}>{fieldSchema.label}</label>
            </LabelContainer>
            <FieldContainer>
                {
                    <FieldComponent
                        fieldClasses={FieldClasses}
                        type={fieldSchema.type}
                        name={fieldSchema.name}
                        id={fieldSchema.name}
                        onChange={formikProps.handleChange}
                        onBlur={formikProps.handleBlur}
                        value={formikProps.values[fieldSchema.name]}
                        props={fieldSchema.extraProps}
                    />
                }
            </FieldContainer>
            {formikProps.errors.email && formikProps.touched.email && formikProps.errors.email}
        </FieldGroupContainer>
    )
}

function DefaultFieldGroup(props) {
    return <div className="form-group">
        {props.children}
    </div>
}
