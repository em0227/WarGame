import Game from "./game";
import { connect } from "react-redux";
import { addCardToDiscard } from "../../actions/discard_pile_actions";
import { drawCard } from "../../actions/cards_actions";

const mapStateToProps = (state) => ({
  cardUpP1: state.players.p1.cardFaceUp,
  cardUpP2: state.players.p2.cardFaceUp,
});

const mapDispatchToProps = (dispatch) => ({
  addCardToDiscard: (cards, player) =>
    dispatch(addCardToDiscard(cards, player)),
  drawCard: () => dispatch(drawCard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
