import { Button, Form, Schema, InputNumber } from "rsuite";
import { Field } from "../../components/RSUITE components/rsuiteComp";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const HryhorievForm = () => {
    const { StringType, NumberType } = Schema.Types;
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        name: "Ihor",
        age: 35,
        position: "mentor",
    });

    const handleSubmit = () => {
        if (!formRef.current.check()) {
            return;
        }
        console.log("formValue", formValue)
    };

    const model = Schema.Model({
        name: StringType()
            // .minLength(2, 'Please select at least 2 types of Skills.')
            .isRequired('This field is required.')
            .minLength(2, 'Please select at least 2 types of Skills.'),
        age: StringType()
            // .minLength(2, 'Please select at least 2 types of Status.')
            .isRequired('This field is required.'),
        position: StringType()
            // .min(5, 'This field must be greater than 5')
            .isRequired('This field is required.')
            .isEmail("NEEED EMAIL")
    });
    return (
        <Form
            ref={formRef}
            formValue={formValue}
            onChange={setFormValue}
            onCheck={setFormError}
            formError={formError}
            model={model}
        >
            <Field name="name" label="Your name"/>
            <Field name="age" label="Your age" accepter={InputNumber} />
            <Field name="position" label="Your position"/>
            <Form.Group>
                <Button color="violet" appearance="ghost" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}

export default HryhorievForm