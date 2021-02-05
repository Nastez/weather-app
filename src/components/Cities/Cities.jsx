import React from 'react';
import {Field, Form, Formik} from 'formik';

const Cities = (props) => {

    let sendCity = (values) => {
        props.sendCity(values.city)

    }
    return (
        <div>
            <CitiesForm onSubmit={sendCity}/>
        </div>
    )
}

const CitiesForm = (props) => {
    return (
        <Formik initialValues={{city: ''}} onSubmit={props.onSubmit}>
            <Form>
                <label htmlFor='city'>Cities</label>
                <Field name='city' type='text'/>
                <button type='submit'>Submit</button>
            </Form>
        </Formik>
    )
}

export default Cities;