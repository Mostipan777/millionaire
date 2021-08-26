import { useState, SetStateAction, Dispatch } from 'react';
import config from '../../config.json';
import AnswersList from '../AnswersList';

interface QuestionViewProps {
  questionNumber: number;
  setQuestionNumber: Dispatch<SetStateAction<number>>;
  setView: () => void;
}

const shuffleArray = (array: number[]) => {
  return array.sort(() => Math.random() - 0.5);
};

const shuffledNumbersArray = shuffleArray([0, 1, 2, 3]);
const QuestionView: React.FC<QuestionViewProps> = ({
  questionNumber,
  setQuestionNumber,
  setView,
}) => {
  const [index, setIndex] = useState(1);
  const [question, setQuestion] = useState(shuffledNumbersArray[0]);
  console.log(shuffledNumbersArray);
  const getSelectedQuestion = () => {
    if (questionNumber <= 4) return config.easy_questions[question];
    if (questionNumber <= 8) return config.medium_questions[question];
    return config.hard_questions[question];
  };

  const result = (isRight: boolean) => {
    if (index === 3 || !isRight) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
    if (isRight) {
      setQuestionNumber(questionNumber + 1);
      setQuestion(shuffledNumbersArray[index]);
    }
  };

  return (
    <div className="main">
      <div className="question">{getSelectedQuestion().question}</div>
      <AnswersList
        result={result}
        answers={getSelectedQuestion().answers}
        setView={setView}
        questionNumber={questionNumber}
      />
    </div>
  );
};

export default QuestionView;
