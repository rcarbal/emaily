// SurveryField contains logic to render a single lable and text input
import React from 'react';

export default ({input, label, meta: {error, touched}}) => {
    return(
        <div>
            <label>{label}</label>
            <input {...input} />
            {touched && error}
        </div>
    );
};