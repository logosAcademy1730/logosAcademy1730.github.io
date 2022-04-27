
const ChildOne = ({count, increaseCount}) => {
return(
    <h1 onClick={increaseCount}>{count}</h1>
)
}
export default ChildOne;