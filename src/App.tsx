import { useState } from 'react';
import QuestionView from './components/QuestionView';
import ScoreList from './components/ScoreList';
import StartGame from './components/StartGame';
import EndGame from './components/EndGame';
import { slide as Menu } from 'react-burger-menu';
import BurgerIcon from './images/BurgerIcon';
import CrossIcon from './images/CrossIcon';

function App() {
  const [view, setView] = useState('start');
  const [questionNumber, setQuestionNumber] = useState(1);

  const getView = () => {
    if (view === 'start') {
      return (
        <StartGame
          setView={() => setView('game')}
          setQuestionNumber={() => setQuestionNumber(1)}
        />
      );
    }
    if (view === 'game') {
      return (
        <>
          <Menu
            right
            width="320px"
            customBurgerIcon={<BurgerIcon />}
            customCrossIcon={<CrossIcon />}
            className="burger-menu"
          >
            <div className="score">
              <ScoreList questionNumber={questionNumber - 1} />
            </div>
          </Menu>
          <QuestionView
            questionNumber={questionNumber}
            setQuestionNumber={setQuestionNumber}
            setView={() => setView('end')}
          />
          <div className="score">
            <ScoreList questionNumber={questionNumber - 1} />
          </div>
        </>
      );
    }
    if (view === 'end') {
      return (
        <EndGame
          setView={() => setView('game')}
          questionNumber={questionNumber}
          setQuestionNumber={() => setQuestionNumber(1)}
        />
      );
    }
  };

  return <div className="App">{getView()}</div>;
}

export default App;
