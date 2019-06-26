// SurveyoForm show a form for user to add input.
import React from 'react';
import { reduxForm } from 'redux-form';

class SurveyForm extends React.Component{
    render(){
        return(
            <div>
                SurveryForm!
            </div>
        );
    }
};

export default reduxForm({
    form: 'surveyForm'
})(SurveyForm);