import {
  configureStore,
  createAction,
  createReducer,
  createSlice,
} from "@reduxjs/toolkit";

// Redux Toolkit createAction 사용 => 없앤 코드
//
// const ADD = "ADD";
// const DELETE = "DELETE";
// const addToDo = (text) => {
//   return {
//     type: ADD,
//     text,
//   };
// };
// const deleteToDo = (id) => {
//   return {
//     type: DELETE,
//     id: parseInt(id),
//   };
// };

// Redux Toolkit: createAction 사용,
// Redux Toolkit: createSlice 사용 => 없앤 코드
// const addToDo = createAction("ADD");
// const deleteToDo = createAction("DELETE");

// Redux Toolkit의 createReducer 사용 => 없앤 코드
//
// const reducer = (state = [], action) => {
//   switch (action.type) {
//     // case ADD:
//     case addToDo.type:
//       console.log(action.payload);
//       // action.text -> action.payload (createAction의 프로퍼티)
//       return [{ text: action.payload, id: Date.now() }, ...state];
//     case deleteToDo.type:
//       // action.id -> action.payload (createAction의 프로퍼티)
//       return state.filter((toDo) => toDo.id !== action.payload);
//     default:
//       return state;
//   }
// };

// Redux Toolkit: createReducer,
// Redux Toolkit: createSlice 사용 => 없앤 코드
// const reducer = createReducer([], {
//   [addToDo]: (state, action) => {
//     // Redux Toolkit이 뒤에서 알아서 return [{ text: action.payload, id: Date.now() }, ...state]; 와 같이 수행함. (Redux Toolkit + Immer)
//     // 즉, Redux의 3원칙의 'mutate 하면 안됨'을 위반한 것처럼 보이지만 실제로는 그렇지 않음
//     // mutate -> 아무것도 리턴하지 않음
//     state.push({ text: action.payload, id: Date.now() });
//   },
//   [deleteToDo]: (state, action) =>
//     // return이 바로 이루어짐 => mutate 일어나지 않음
//     state.filter((toDo) => toDo.id !== action.payload),
// });

const toDos = createSlice({
  name: "toDosReducer",
  initialState: [],
  reducers: {
    add: (state, action) => {
      state.push({ text: action.payload, id: Date.now() });
    },
    remove: (state, action) => {
      state.filter((toDo) => toDo.id !== action.payload);
    },
  },
});

// Redux Toolkit: createSlice 사용 => 없앤 코드
// const store = configureStore({ reducer });
const store = configureStore({ reducer: toDos.reducer });
// Redux Toolkit: createSlice 사용 => 없앤 코드
// export const actionCreators = {
//   addToDo,
//   deleteToDo,
// };
export const { add, remove } = toDos.actions;

export default store;
