import React from 'react';
import {Field, Form, Formik} from 'formik';
import s from './Cities.module.css';

const Cities = (props) => {

    let sendCity = (values) => {
        props.sendCity(values.city)

    }
    return (
        <div >
            <CitiesForm onSubmit={sendCity} />
        </div>
    )
}

const CitiesForm = (props) => {
    return (
        <Formik initialValues={{city: ''}} onSubmit={props.onSubmit}>
            <Form className={s.cityForm}>
                <label htmlFor='city' className={s.cityFormText}>City</label>
                <Field className={s.cityFormField} name='city' type='text' />
                <button type='submit' className={s.cityFormButton}>Submit</button>
            </Form>
        </Formik>
    )
}

export default Cities;