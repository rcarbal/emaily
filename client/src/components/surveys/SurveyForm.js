// SurveyoForm show a form for user to add input.
import _ from 'lodash';
import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';
import validateEmails from '../../utils/validateEmails';
import formFields from './formFields';

class SurveyForm extends React.Component {
    renderFields() {
        return _.map(formFields, ({ label, name }) => {
            return <Field key={name} component={SurveyField} type="text" label={label} name={name} />
        });
    }

    render() {
        return (
            <div>
                <form
                    onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}
                >
                    {this.renderFields()}
                    <Link to="/surveys" className="red btn-flat white-text">
                        Cancel
                    </Link>
                    <button type="submit" className="teal btn-flat right white-text">
                        Submit
                        <i className="material-icons right">done</i>
                    </button>
                </form>
            </div>
        );
    }
};

function validate(values){ // These values are comming off the form
    const errors ={};

    errors.emails = validateEmails(values.emails || '');

    _.each(formFields, ({name})=>{
        if (!values[name]){
            errors[name] = 'You must provide a value';
        }
    });

    return errors;
}

export default reduxForm({
    validate: validate,
    form: 'surveyForm',  // Tells redux-form how to manage the data. This is the key inside form data
    destroyOnUnmount: false
})(SurveyForm);