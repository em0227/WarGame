const _default_state = false;

export default (state = _default_state, action) => {
  switch (action.type) {
    case "WAR":
      return action.status;
    default:
      return state;
  }
};
