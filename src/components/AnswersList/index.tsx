import OutlinedButton from '../Unknown/OutlinedButton';
import './styles.css';

interface AnswersListProps {
  result: any;
  answers: any[] | null | 0;
  setView: () => void;
  questionNumber: number;
}

const AnswersList: React.FC<AnswersListProps> = ({
  result,
  answers,
  setView,
  questionNumber,
}) => {
  const getAnswers = () => {
    return (
      answers &&
      answers.map((answer, index) => (
        <OutlinedButton
          key={index}
          option={answer.option}
          text={answer.text}
          isRight={answer.is_right}
          result={result}
          setView={setView}
          questionNumber={questionNumber}
        />
      ))
    );
  };

  return <div className="answers-list">{getAnswers()}</div>;
};

export default AnswersList;
