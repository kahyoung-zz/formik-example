import React from 'react';
import { withFormik } from 'formik';
import * as yup from 'yup';
import { Form, Input, Label, Button } from 'reactstrap';

export const BasicForm = ({ handleBlur, handleChange, handleFocus, touched, errors, isValid }) => {
    return (
        <Form className="p-5" action="/test" method="post">
            <div>
                <div className="text-left">
                    <Label for="name">Name:</Label>
                </div>
                <div>
                    <Input 
                        id="name" 
                        type="text" 
                        name="name" 
                        placeholder="Ryan" 
                        onBlur={handleBlur}
                        onChange={handleChange}
                        onFocus={handleFocus}
                        invalid={touched.name && errors.name}
                    />
                </div>
                <div className="mt-3">
                    <Button color="primary" type="submit" block  disabled={!isValid}>Submit</Button>
                </div>
            </div>
        </Form>
    );
};

export default withFormik({
    mapPropsToValues: props => ({ name: '' }),
    validationSchema: yup.object().shape({
        name: yup.string().required()
    })
})(BasicForm);