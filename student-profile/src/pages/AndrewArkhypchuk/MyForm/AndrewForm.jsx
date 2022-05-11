import React from "react";
import classes from "./AndrewForm.module.css";
import {Button, Form, InputNumber, Schema} from "rsuite";

import {Field} from "./FormRsuite";
const { StringType, NumberType } = Schema.Types
const AndrewForm = () => {
    const handleSubmit = () => {
        if (!formRef.current.check()) {

            return;
        }
        console.log(formValue)
    };
    const model = Schema.Model({
        name: StringType()
            .minLength(2, 'Please select at least 2 types of Skills.')
            .isRequired('This field is required.'),
        age: NumberType()
            .isRequired('This field is required.'),
        position:StringType()
            .minLength(5, 'This field must be greater than 5')
        .isRequired('This field is required.'),
        email:StringType()
            .minLength(5, 'This field must be greater than 5')
            .isEmail('Please enter a valid email address.')
            .isRequired('This field is required.')
    });
    const formRef = React.useRef();
    const [formError, setFormError] = React.useState({});
    const [formValue, setFormValue] = React.useState({
        name: "Andrew",
        age: "20",
        position:"Mentor",
        email:'andrewAkfek@ewd.com'
    });
    console.log(formRef)
    return (<div>
        <div className={classes.container}>Andrew Form
<Form formValue={formValue}
      ref={formRef}
      onChange={setFormValue}
      onCheck={setFormError}
      model={model}
      formError={formError}
>
    <Field  name="name" label="Your Name"/>
    <Field  name="age" label="Your Age" accepter={InputNumber}/>
    <Field  name="position" label="Your Position"/>
    <Field  name="email" label="Your Email"/>
    <Form.Group>
        <Button onClick={handleSubmit} color="blue" appearance="ghost" >
            Submit
        </Button>
    </Form.Group>
</Form>
        </div>
    </div>

    )
}
export default AndrewForm;