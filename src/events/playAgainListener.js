import dom from '../dom.js';
import playAgainHandler from '../handlers/playAgainHandler.js';

const playAgainListener = () => {
    dom.repeatGame.addEventListener('click', playAgainHandler);
}

export default playAgainListener;