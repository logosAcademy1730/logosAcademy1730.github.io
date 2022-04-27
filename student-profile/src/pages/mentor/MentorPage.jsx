import styles from "./MentorPage.module.scss";
import { Routes, Route, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import ChildOne from "./childComp/ChildOne";
import ChildTwo from "./childComp/ChildTwo";
import CustomButton from "./childComp/ChildTwo";

const MentorPage = () => {
  const [count, setCount] = useState(6);

  const decreaseCount = (value) => {
    setCount((prevCount) => prevCount - value);
  };
  const increaseCount = (value) => {
    setCount(count + value);
  };
  const multiple = (value) => {
    setCount(count * value);
  };
  const divide = (value) => {
    setCount(count / value);
  };
  const fruits = ["orange", "apple", "lemon"];
  return (
    <div className={styles.container}>
      <h1> MentorPage</h1>
      <ChildOne count={count} increaseCount={() => increaseCount(2)} />
      <ChildOne count={count} increaseCount={() => multiple(10)} />
      <ChildOne count={count} increaseCount={() => decreaseCount(20)} />

      {fruits.map((user, index) => {
        return <CustomButton key={index} item={user.toUpperCase()} />;
      })}

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
