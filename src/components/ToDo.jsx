import React from "react";
import { connect, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// import { actionCreators } from "../store";
import { remove } from "../store";

const ToDo = ({ text, id }) => {
  const dispatch = useDispatch();
  const onBtnClick = () => {
    dispatch(remove(id));
  };
  return (
    <li>
      <Link to={`/${id}`}>
        {text}, {id}
      </Link>
      <button onClick={onBtnClick}>DEL</button>
    </li>
  );
};

// const mapDispatchToProps = (dispatch, ownProps) => {
//   console.log(dispatch, ownProps);
//   return {
//     // onBtnClick: () => dispatch(actionCreators.deleteToDo(ownProps.id)),
//     onBtnClick: () => dispatch(remove(ownProps.id)),
//   };
// };

// export default connect(null, mapDispatchToProps)(ToDo);
export default ToDo;
