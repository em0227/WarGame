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
import {
  fetchPlayerData,
  updatePlayerData,
  restart,
} from "../../actions/player_actions";
import { winner } from "../../actions/winner_action";
import { createGame } from "../../actions/game_actions";
import { updateGame } from "../../util/game_api_util";

const mapStateToProps = (state) => ({
  cardUpP1: state.players.p1.cardFaceUp,
  cardUpP2: state.players.p2.cardFaceUp,
  deckP1: state.players.p1.deck,
  deckP2: state.players.p2.deck,
  discardP1: state.players.p1.discardPile,
  discardP2: state.players.p2.discardPile,
  finalWinner: state.winner,
  lifetimeWinsP1: state.players.p1.lifetimeWins,
  lifetimeWinsP2: state.players.p2.lifetimeWins,
  gameID: state.game,
});

const mapDispatchToProps = (dispatch) => ({
  addCardToDiscard: (cards, playerId) =>
    dispatch(addCardToDiscard(cards, playerId)),
  drawCard: () => dispatch(drawCard()),
  clearCard: async () => dispatch(clearCard()),
  movePileToDeck: (playerId) => dispatch(movePileToDeck(playerId)),
  winner: (player) => dispatch(winner(player)),
  addCardsToFaceDown: () => dispatch(addCardsToFaceDown()),
  fetchPlayerData: () => dispatch(fetchPlayerData()),
  updatePlayerData: (playerID) => dispatch(updatePlayerData(playerID)),
  createGame: () => dispatch(createGame()),
  updateGame: (gameID) => updateGame(gameID),
  restart: () => dispatch(restart()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Game);
