import { drawCard } from "../../actions/cards_actions";
import Deck from "./deck";

const mapStateToProps = (state, ownProps) => ({
  deck: ownProps.playerObj.deck,
  cardFaceUp: ownProps.playerObj.cardFaceUp,
  cardFaceDown: ownProps.playerObj.cardFaceDown,
  discardPile: ownProps.playerObj.discardPile,
});
