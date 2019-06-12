import React from 'react';

import './Input.css';

const Input = (props) => {
    let inputElement = null;
    let inputClasses = 'InputElement';

    if (props.invalid && props.shouldValidate && props.touched) {
        inputClasses += ' Invalid';
    }

    switch (props.elementType) {
        case ('input'):
            inputElement = <input className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('textarea'):
            inputElement = <textarea className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
            break;
        case ('select'):
            inputElement = (
                <select 
                    className={inputClasses}
                    value={props.value}
                    onChange={props.changed}
                >
                    {props.elementConfig.options.map(option => (
                        <option key={option.value} value={option.value}>
                            {option.displayValue}
                        </option>
                    ))}
                </select>
            );
            break;
        default:
            inputElement = <input className={inputClasses} {...props.elementConfig} value={props.value} onChange={props.changed}/>;
    }

    let fileInput = (
        <React.Fragment>
            <label htmlFor={props.idName} className="Label">{props.label}</label>
            {inputElement}
        </React.Fragment>
    );
    if (props.elementConfig.type === 'file') {
        fileInput = (
            <React.Fragment>
                {inputElement}
                <label htmlFor={props.idName} className="Label">{props.label}</label>
            </React.Fragment>
        ); 
    }

    return (
        <div className="Input">
            {fileInput}            
        </div>
    );
}

export default Input;