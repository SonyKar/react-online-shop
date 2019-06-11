export const updateObject = (oldObject, updatedProperties) => {
    return {
        ...oldObject,
        ...updatedProperties
    };
};

export const checkValidatity = (value, rules) => {
    let isValid = true;

    if (rules.required) {
        isValid = value.trim() !== '' && isValid;
    }

    if (rules.minLenght) {
        isValid = value.length >= rules.minLenght && isValid;
    }

    if (rules.maxLenght) {
        isValid = value.length <= rules.maxLenght && isValid;
    }

    if (rules.isNumber) {
        isValid = /^[0-9]+([.][0-9]+)?$/.test(value) && isValid;
    }

    if (rules.isEmail) {
        isValid = /^[A-Za-z0-9+_.-]+@(.+)$/.test(value) && isValid;
    }

    return isValid;
}