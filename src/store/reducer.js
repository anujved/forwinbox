const initialState = {
  data: [{
    "userId": 1,
    "id": 1,
    "title": "delectus aut autem",
    "completed": false
  }],
  loading: false,
  firstTime: false,
  error: false,
  message:""
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
  

    default:
      state = { ...state };
      break;
  }
  return state;
};

export default reducer;
