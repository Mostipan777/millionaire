import Hand from '../../images/Hand';
import Button from '../Unknown/Button';
import config from '../../config.json';
import { formatedValue } from '../../common/formatedScore';

interface StartGameProps {
  setView: () => void;
  questionNumber: number;
  setQuestionNumber: () => void;
}

const StartGame: React.FC<StartGameProps> = ({
  setView,
  questionNumber,
  setQuestionNumber,
}) => {
  const prize = () => {
    if (questionNumber > 1)
      return `${formatedValue(config.prizes[questionNumber - 2].value)} earned`;
    return '$0 earned'
  };

  return (
    <div className="end-game">
      <div className="hand">
        <Hand />
      </div>
      <div className="start-title">
        <div>
          <div className="end-title">Total score:</div>
          <div>{prize()}</div>
        </div>
        <div>
          <Button
            title="Try again"
            setView={setView}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default StartGame;
