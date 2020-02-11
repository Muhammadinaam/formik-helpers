export const getInitialValues = (jsonSchema) => {
    let initialValues = {};

    getInitialValuesRecursively(jsonSchema, initialValues);
    
    return initialValues;
};

function getInitialValuesRecursively(jsonSchema, initialValues) {
    jsonSchema.forEach(jsonObj => {
        if(jsonObj.name) {
            initialValues[jsonObj.name] = jsonObj.initialValue ? jsonObj.initialValue : '';
        }

        if(jsonObj.children) 
        {
            getInitialValuesRecursively(jsonObj.children, initialValues)
        }
    });
}

export const validateValues = (jsonSchema, values, group = null) => {
    
}