import React from 'react'
import PropTypes from 'prop-types'
import { Field, ErrorMessage, connect, withFormik } from 'formik';

function JsonSchemaFieldsA(props) {
  const { fieldsSchema, group, fieldGroupContainer, labelContainer, fieldContainer } = props;

  let filteredFieldsSchema = fieldsSchema;
  if (group) {
    filteredFieldsSchema = fieldsSchema.filter(f => {
      return f.group == group;
    });
  }

  const FieldGroupContainer = fieldGroupContainer ? fieldGroupContainer : DefaultFieldGroup;

  return (
    filteredFieldsSchema.map((fieldSchema, fieldSchemaIndex) => {
      return (
        // <FieldGroupContainer key={fieldSchemaIndex}>
        //   <Field type="email" name="email" />
        //   <ErrorMessage name="email" component="div" />
        // </FieldGroupContainer>

<Field type="email" name="email" />
      );
    })
  )
}

JsonSchemaFieldsA.propTypes = {
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
  fieldContainer: PropTypes.elementType
}

function DefaultFieldGroup(props) {
  return <div className="form-group">
    {props.children}
  </div>
}

export default JsonSchemaFieldsA;

