import React, { Fragment } from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage, connect, withFormik } from 'formik';
import defaultInputFieldsMapping from './inputFieldsMapping';

function JsonSchemaFields(props) {
  const {
    fieldsSchema,
    group,
    fieldGroupContainer,
    labelContainer,
    fieldContainer,
    formikProps,
    labelClasses,
    fieldClasses,
    inputFieldsMapping
  } = props;

  let filteredFieldsSchema = fieldsSchema;
  if (group) {
    filteredFieldsSchema = fieldsSchema.filter(f => {
      return f.group == group;
    });
  }

  const FieldGroupContainer = fieldGroupContainer ? fieldGroupContainer : DefaultFieldGroup;
  const LabelContainer = labelContainer ? labelContainer : Fragment;
  const FieldContainer = fieldContainer ? fieldContainer : Fragment;
  const LabelClasses = labelClasses ? labelClasses : '';
  const FieldClasses = fieldClasses ? fieldClasses : 'form-control';
  const InputFieldsMapping = inputFieldsMapping ? inputFieldsMapping : defaultInputFieldsMapping;

  return (
    filteredFieldsSchema.map((fieldSchema, fieldSchemaIndex) => {

      let FieldComponent = null;
      FieldComponent = InputFieldsMapping[fieldSchema.type];
      if (!FieldComponent) {
        FieldComponent = () => <div className="text-danger">Field Type [{fieldSchema.type}] is not defined in inputFieldMapping</div>
      }

      return (
        <FieldGroupContainer key={fieldSchemaIndex}>
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
              />
            }
          </FieldContainer>
          {formikProps.errors.email && formikProps.touched.email && formikProps.errors.email}
        </FieldGroupContainer>
      );
    })
  )
}

JsonSchemaFields.propTypes = {
  fieldsSchema: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      initialValue: PropTypes.any,
      validation: PropTypes.array,
      properties: PropTypes.object,
      group: PropTypes.string
    })
  ).isRequired,
  group: PropTypes.string,
  fieldGroupContainer: PropTypes.elementType,
  labelContainer: PropTypes.elementType,
  fieldContainer: PropTypes.elementType,
  labelClasses: PropTypes.string,
  fieldClasses: PropTypes.string,
  inputFieldsMapping: PropTypes.object,
  formikProps: PropTypes.object.isRequired
}

function DefaultFieldGroup(props) {
  return <div className="form-group">
    {props.children}
  </div>
}

export default JsonSchemaFields;

