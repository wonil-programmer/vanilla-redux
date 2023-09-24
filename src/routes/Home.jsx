import { useState } from "react";
import ToDo from "../components/ToDo";
// import { actionCreators } from "../store";
import { add } from "../store";
// import { connect } from "react-redux";
import { useSelector, useDispatch } from "react-redux";

const Home = () => {
  // const [text, setText] = useState("");
  // const onChange = (e) => {
  //   setText(e.target.value);
  // };
  // const onSubmit = (e) => {
  //   e.preventDefault();
  //   addToDo(text);
  //   setText("");
  // };
  const [text, setText] = useState("");
  const onChange = (event) => {
    setText(event.target.value);
  };
  const toDos = useSelector((state) => state);
  const dispatch = useDispatch();
  const onSubmit = (event) => {
    event.preventDefault();
    dispatch(add(text));
    setText("");
  };

  return (
    <>
      <h1>To DO</h1>
      <form onSubmit={onSubmit}>
        <input type="text" value={text} onChange={onChange} />
        <button>Add</button>
      </form>
      <ul>
        {toDos.map((toDo) => (
          <ToDo {...toDo} key={toDo.id} />
        ))}
      </ul>
    </>
  );
};

// // state를 component의 props로
// const mapStateToProps = (state) => {
//   return { toDos: state };
//   // return { state }; // 컴포넌트의 prop에 추가됨
// };
// // dispatch를 component의 props로
// const mapDispatchToProps = (dispatch) => {
//   // return { addToDo: (text) => dispatch(actionCreators.addToDo(text) };
//   return { addToDo: (text) => dispatch(add(text)) };
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Home);
export default Home;

// const Home = () => {
//   const [text, setText] = useState("");
//   const onChange = (event) => {
//   setText(event.target.value);
//   };
//   const toDo = useSelector(state => state);
//   const dispatch = useDispatch();
//   const onSubmit = (event) => {
//   event.preventDefault();
//   dispatch(addToDo(text));
//   setText("");
//   }
//   };
