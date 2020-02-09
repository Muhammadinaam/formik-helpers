import * as yup from 'yup';

export const getInitialValues = (jsonSchema) => {
    let initialValues = {};

    jsonSchema.forEach(jsonObj => {
        initialValues[jsonObj.name] = jsonObj.initialValue ? jsonObj.initialValue : '';
    });
    return initialValues;
};

export const validateValues = (jsonSchema, values, group = null) => {
    let shapeObject = {};
    let filteredJsonSchema = jsonSchema.filter(j => {
        return j.group == group;
    })
    filteredJsonSchema.forEach(jsonObj => {
        if (jsonObj.validation) {
            shapeObject[jsonObj.name] = transformAll(jsonObj.validation);
        }
    });
    let schema = yup.object().shape(shapeObject);

    schema
        .isValid(values)
        .then(function (valid) {
            console.log(valid);
        });
}