import { Button, Form, Schema, InputNumber } from "rsuite";
import { Field } from "../../../components/RSUITE components/rsuiteComp";
import { useEffect, useRef, useState } from "react";

const HryhorievForm = () => {
    const { StringType, NumberType } = Schema.Types;
    const formRef = useRef();
    const [formError, setFormError] = useState({});
    const [formValue, setFormValue] = useState({
        name: "Volodia",
        surname: "Hryhoriev",
        age: 19,
    });


    const changeText = () => {
        console.log('dsgdfh');
    }

    const handleSubmit = () => {
        // if (!formRef.current.check()) {
        //     return;
        // }
        // @ts-ignore
        document.querySelector('h1').innerHTML = `${formValue.name} ${formValue.surname} page`;
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
            // @ts-ignore
            ref={formRef}
            formValue={formValue}
            // @ts-ignore
            onChange={setFormValue}
            onCheck={setFormError}
            formError={formError}
            model={model}
        >
            {/*@ts-ignore*/}
            <Field name="name" label="Your name"/>
            {/*@ts-ignore*/}
            <Field name="surname" label="Your surname"/>

            <Form.Group>
                <Button color="violet" appearance="primary" onClick={handleSubmit}>
                    Submit
                </Button>
            </Form.Group>
        </Form>
    );
}

export default HryhorievForm