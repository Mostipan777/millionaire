import React, { useState } from 'react';
import Border from './ButtonBorder';

interface OutlinedButtonProps {
  option: string;
  text: string;
  isRight: boolean;
  result: any;
  setView: () => void;
  questionNumber: number;
}

const OutlinedButton: React.FC<OutlinedButtonProps> = ({
  option,
  text,
  isRight,
  result,
  setView,
  questionNumber,
}) => {
  const [className, setClassName] = useState('answer-svg');
  const onClickHandler = () => {
    if (isRight) {
      setClassName('answer-svg-true');
    } else {
      setClassName('answer-svg-false');
    }
    setTimeout(() => {
      result(isRight);
      setClassName('answer-svg');
      if (!isRight || questionNumber >= 12) {
        setView();
      }
    }, 5000);
  };

  return (
    <div className="outlined-button" onClick={onClickHandler}>
      <div className="button-text">
        <span className="option">{option}</span>
        <span>{text}</span>
      </div>
      <Border className={className} />
    </div>
  );
};

export default OutlinedButton;
