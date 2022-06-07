export const reducerAuth = (state = { isLog: false }, action) => {
  if (action.type === "IsLog") {
    return {
      isLog: true,
    };
  } else if (action.type === "Logout") {
    return {
      isLog: false,
    };
  }
  return state;
};
