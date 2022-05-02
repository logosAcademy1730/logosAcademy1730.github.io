import styles from "./MentorPage.module.scss";

import { Button, Form, Schema, InputNumber } from "rsuite";
import { Field } from "../../components/RSUITE components/rsuiteComp";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
// import ChildOne from "./childComp/ChildOne";
// import ChildTwo from "./childComp/ChildTwo";
// import CustomButton from "./childComp/ChildTwo";
// eslint-disable-next-line import/first


const MentorPage = () => {
  // const [count, setCount] = useState(6);
  // const [formValue, setFormValue] = useState({
  //   name: "",
  //   passwd: ""
  // });
  // // const decreaseCount = (value) => {
  // //   setCount((prevCount) => prevCount - value);
  // // };
  // // const increaseCount = (value) => {
  // //   setCount(count + value);
  // // };
  // // const multiple = (value) => {
  // //   setCount(count * value);
  // // };
  // // const divide = (value) => {
  // //   setCount(count / value);
  // // };
  // // const fruits = ["orange", "apple", "lemon"];
  //
  // const handleChange = (e, name) => {
  //   setFormValue({
  //     ...formValue,
  //     [name]: e.target.value
  //   })
  // }
  //
  // const handleSubmit = (e) => {
  //   console.log(formValue)
  //   e.preventDefault();
  // }
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
    <div className={styles.container}>
      <h1> MentorPage</h1>
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

      {/*<form onSubmit={handleSubmit}>*/}
      {/*  <label>*/}
      {/*    Ім'я:*/}
      {/*    <input type="text" value={formValue.name} name="name" onChange={(e)=> handleChange(e, "name")}/>*/}
      {/*  </label>*/}
      {/*  <label>*/}
      {/*    Password:*/}
      {/*    <input type="text" value={formValue.passwd} name="passwd" onChange={(e)=> handleChange(e, "passwd")}/>*/}
      {/*  </label>*/}
      {/*  <input type="submit" value="Надіслати" />*/}
      {/*</form>*/}

      {/*<ChildOne count={count} increaseCount={() => increaseCount(2)} />*/}
      {/*<ChildOne count={count} increaseCount={() => multiple(10)} />*/}
      {/*<ChildOne count={count} increaseCount={() => decreaseCount(20)} />*/}

      {/*{fruits.map((user, index) => {*/}
      {/*  return <CustomButton key={index} item={user.toUpperCase()} />;*/}
      {/*})}*/}

      {/*<ChildOne*/}
      {/*    count={count}*/}
      {/*    increaseCount={decreaseCount}*/}
      {/*/>*/}
      {/*<ChildOne*/}
      {/*    count={count}*/}
      {/*    increaseCount={multiple}*/}
      {/*/>*/}
      {/*<ChildOne*/}
      {/*    count={count}*/}
      {/*    increaseCount={divide}*/}
      {/*/>*/}

      {/*<ChildTwo*/}
      {/*    count={count}*/}
      {/*    decreaseCount={decreaseCount}*/}
      {/*/>*/}
      {/*<Routes>*/}
      {/*  <Route path={"/ex"} element={<h1>ex</h1>} />*/}
      {/*  <Route path={"/exx"} element={<h1>exx</h1>} />*/}
      {/*  <Route path={"/exxx"} element={<h1>exxx</h1>} />*/}
      {/*  <Route path={"/exxxx"} element={<h1>exxxx</h1>} />*/}
      {/*</Routes>*/}
    </div>
  );
};

export default MentorPage;
