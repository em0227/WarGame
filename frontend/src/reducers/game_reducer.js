export default (state = false, action) => {
  switch (action.type) {
    case "START_GAME":
      state = true;
    default:
      return state;
  }
};
