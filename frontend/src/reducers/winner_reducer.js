const _default_state = "";

export default (state = _default_state, action) => {
  switch (action.type) {
    case "WINNER":
      return action.player;
    default:
      return state;
  }
};
