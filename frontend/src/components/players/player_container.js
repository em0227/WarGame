import { connect } from "react-redux";
import Player from "./player";

const mapStateToProps = (state, ownProps) => ({
  ...state.players[ownProps.playerId],
});

export default connect(mapStateToProps)(Player);
