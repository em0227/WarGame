import Game from "./game";
import { connect } from "react-redux";
import { addCardToDiscard } from "../../actions/discard_pile_actions";
import { drawCard, clearCard } from "../../actions/cards_actions";

const mapStateToProps = (state) => ({
  cardUpP1: state.players.p1.cardFaceUp,
  cardUpP2: state.players.p2.cardFaceUp,
  deck: state.players.p1.deck,
});

const mapDispatchToProps = (dispatch) => ({
  addCardToDiscard: (cards, player) =>
    dispatch(addCardToDiscard(cards, player)),
  drawCard: () => dispatch(drawCard()),
  clearCard: () => dispatch(clearCard()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
