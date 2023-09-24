import dom from '../dom.js';
import newTicTacToeHandler from '../handlers/newTicTacToeHandler.js';

const newTicTacToeListener = () => {
    dom.startGame.addEventListener('click', newTicTacToeHandler);
};

export default newTicTacToeListener;
