import React from 'react';
import ScoreBorder from './ScoreBorder';
import './styles.css';

interface ScoreItemProps {
  id: number;
  value: number;
  questionNumber: number;
}

const ScoreItem: React.FC<ScoreItemProps> = ({ value, id, questionNumber }) => {
  const formatedValue = () => {
    const newValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return `$${newValue}`;
  };

  const getScoreValueStyle = () => {
    if (questionNumber > id) return 'score-value-past';
    if (questionNumber < id) return 'score-value-next';
    return 'score-value-active';
  };

  const isActive = () => {
    if (questionNumber === id) return 'score-border-active';
    return 'score-border';
  };

  return (
    <div className="score-item">
      <div className={getScoreValueStyle()}>
        <span>{formatedValue()}</span>
      </div>
      <ScoreBorder className={isActive()} />
    </div>
  );
};

export default ScoreItem;
