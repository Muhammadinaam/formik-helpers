export const getInitialValues = (jsonSchema) => {
    let initialValues = {};
    jsonSchema.forEach(jsonObj => {
        initialValues[jsonObj.name] = jsonObj.initialValue;
    });
    return initialValues;
};