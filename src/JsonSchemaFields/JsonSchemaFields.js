import React from 'react'
import PropTypes from 'prop-types'
import RenderFieldsRecursively from './RenderFieldsRecursively';

function JsonSchemaFields(props) {
  const {
    fieldsSchema,
    group
  } = props;

  let filteredFieldsSchema = fieldsSchema;
  if (group) {
    filteredFieldsSchema = fieldsSchema.filter(f => {
      return f.group == group;
    });
  }

  return <RenderFieldsRecursively schemaArray={filteredFieldsSchema} {...props} />
}

JsonSchemaFields.propTypes = {
  fieldsSchema: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string,
      name: PropTypes.string,
      type: PropTypes.string.isRequired,
      initialValue: PropTypes.any,
      validation: PropTypes.string,
      extraProps: PropTypes.object,
      group: PropTypes.string,
      component: PropTypes.string
    })
  ).isRequired,
  fieldGroupContainer: PropTypes.elementType,
  labelContainer: PropTypes.elementType,
  fieldContainer: PropTypes.elementType,
  labelClasses: PropTypes.string,
  fieldClasses: PropTypes.string,
  inputFieldsMapping: PropTypes.object,
  containersMapping: PropTypes.object,
  formikProps: PropTypes.object.isRequired
}



export default JsonSchemaFields;

