import React from "react";
import {Button, Form, InputNumber, Schema} from "rsuite";
import { useEffect, useRef, useState } from "react";
import styles from "./Lipinska_form.module.css";
import {Field} from "../../../components/RSUITE components/rsuiteComp";

const LipinskaForm = () => {
    const {StringType, NumberType} = Schema.Types;
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        age: '',
        name: "",
        surname:"",
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
            .minLength(3, 'Please, enter at least 3 letters.')
            .isRequired('This field is required.'),
        surname: StringType()
            .minLength(3, 'Please, enter at least 3 letters.')
            .isRequired('This field is required.'),
        age: NumberType()
            .min(2, 'Please select at least 2 numbers.')
            .isRequired('This field is required.'),
        position: StringType()
            .minLength(5, 'This field must be greater than 5')
            .isRequired('This field is required.'),
        email:StringType()
            .isEmail('This field is email.')
    });
    return (
        <div className={styles.container}>
            <h1> Sign up </h1>
            <Form
                ref={formRef}
                formValue={formValue}
                onChange={setFormValue}
                onCheck={setFormError}
                formError={formError}
                model={model}
            >
                <Field name="name" label="Your name"/>
                <Field name="surname" label="Your surname"/>
                <Field name="age" label="Your age" accepter={InputNumber}/>
                <Field name="position" label="Your position"/>
                <Field name="email" label="Your email"/>
                <Form.Group>
                    <Button color="white" appearance="ghost" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Group>
            </Form>
        </div>
    );
}

export default LipinskaForm
