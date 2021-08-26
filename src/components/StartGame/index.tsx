import Hand from '../../images/Hand';
import Button from '../Unknown/Button';

interface StartGameProps {
  setView: () => void;
  setQuestionNumber: () => void;
}

const StartGame: React.FC<StartGameProps> = ({
  setView,
  setQuestionNumber,
}) => {
  return (
    <div className="start-game">
      <div className="hand">
        <Hand />
      </div>
      <div className="start-title">
        <div>Who wants to be a millionaire?</div>
        <div>
          <Button
            title="Start"
            setView={setView}
            setQuestionNumber={setQuestionNumber}
          />
        </div>
      </div>
    </div>
  );
};

export default StartGame;
