import React from "react";
import {Button, Form, InputNumber, Schema} from "rsuite";
import { useEffect, useRef, useState } from "react";
import {Field} from "./FormRsuite";
import s from './ContainerM.module.css'

const ContainerM = () => {


    const {StringType, NumberType} = Schema.Types;
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        age: '',
        name: "",
        position: "",
        email:''
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        console.log("formValue", formValue)
    };
    const model = Schema.Model({
        name: StringType()
            .minLength(2, 'Please select at least 2 types of Skills.')
            .isRequired('This field is required.')
            .minLength(2, 'Please select at least 2 types of Skills.'),
        age: NumberType()
            .min(2, 'Please select at least 2 types of Status.')
            .isRequired('This field is required.'),
        position: StringType()
            .minLength(5, 'This field must be greater than 5')
            .isRequired('This field is required.'),
        email:StringType()
            .isEmail('This field is email.')
            .isRequired('This field is required.')
    });
    return (
        <div className={s.container}>
            <h1> Mariana Form</h1>
            <Form
                ref={formRef}
                formValue={formValue}
                onChange={setFormValue}
                onCheck={setFormError}
                formError={formError}
                model={model}
            >
                <Field name="name" label="Your name"/>
                <Field name="age" label="Your age" accepter={InputNumber}/>
                <Field name="position" label="Your position"/>
                <Field name="email" label="Your email"/>
                <Form.Group>
                    <Button color="green" appearance="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}
export default ContainerM