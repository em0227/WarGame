import Game from "./game";
import { connect } from "react-redux";
import {
  addCardToDiscard,
  movePileToDeck,
} from "../../actions/discard_pile_actions";
import {
  drawCard,
  clearCard,
  addCardsToFaceDown,
} from "../../actions/cards_actions";
import { winner } from "../../actions/winner_action";
import { war } from "../../actions/war_action";

const mapStateToProps = (state) => ({
  cardUpP1: state.players.p1.cardFaceUp,
  cardUpP2: state.players.p2.cardFaceUp,
  deckP1: state.players.p1.deck,
  deckP2: state.players.p2.deck,
  discardP1: state.players.p1.discardPile,
  discardP2: state.players.p2.discardPile,
  // warStatus: state.war,
  finalWinner: state.winner,
});

const mapDispatchToProps = (dispatch) => ({
  addCardToDiscard: (cards, playerId) =>
    dispatch(addCardToDiscard(cards, playerId)),
  drawCard: () => dispatch(drawCard()),
  clearCard: async () => dispatch(clearCard()),
  movePileToDeck: (playerId) => dispatch(movePileToDeck(playerId)),
  winner: (player) => dispatch(winner(player)),
  // war: (status) => dispatch(war(status)),
  addCardsToFaceDown: () => dispatch(addCardsToFaceDown()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
