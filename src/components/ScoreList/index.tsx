import ScoreItem from '../Unknown/ScoreItem';
import config from '../../config.json';
import './styles.css';

interface ScoreListProps {
  questionNumber: number;
}

const ScoreList: React.FC<ScoreListProps> = ({ questionNumber }) => {
  const getItems = () => {
    const prizes = config.prizes.map((prize) => (
      <ScoreItem
        key={prize.id}
        value={prize.value}
        id={prize.id}
        questionNumber={questionNumber}
      />
    ));
    return prizes.reverse();
  };

  return <div className="score-list">{getItems()}</div>;
};

export default ScoreList;
