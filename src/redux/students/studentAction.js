export const BOOK_ROOM = "BOOK_ROOM";
export const STUDENT_LOGIN = "STUDENT_LOGIN";
export const STUDENT_SIGNUP = "STUDENT_SIGNUP";
export const ADMIN_LOGIN = "ADMIN_LOGIN";

export const bookRoom = () => {
  return {
    type: BOOK_ROOM,
  };
};

export const studentLogin = () => {
  return {
    type: STUDENT_LOGIN,
    // payload: "check",
  };
};

export const studentSignup = () => {
  return {
    type: STUDENT_SIGNUP,
    // payload: "check",
  };
};

// export const adminLogin = (admin) => {
//   return {
//     type: ADMIN_LOGIN,
//     payload: admin,
//   };
// };
