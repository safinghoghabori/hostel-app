import { BOOK_ROOM, STUDENT_LOGIN, STUDENT_SIGNUP } from "./studentAction";

export const initialState = {
  isLogin: false,
  isBooked: false,
  //   studentDetails: [],
};
// console.log(initialState);
export const studentReducer = (state = initialState, action) => {
  switch (action.type) {
    case BOOK_ROOM:
      return {
        ...state,
        isBooked: true,
      };
    case STUDENT_LOGIN:
      return {
        ...state,
        isLogin: true,
      };
    case STUDENT_SIGNUP:
      return {
        ...state,
        isLogin: true,
        // studentDetails: action.payload,
      };
    // case ADMIN_LOGIN:
    //   return {
    //     ...state,
    //   };
    default:
      return state;
  }
};
