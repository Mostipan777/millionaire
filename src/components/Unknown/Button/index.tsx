interface ButtonProps {
  title: string;
  setView: () => void;
  setQuestionNumber: () => void;
}

const Button: React.FC<ButtonProps> = ({
  title,
  setView,
  setQuestionNumber,
}) => {
  const onClickHandler = () => {
    setView();
    setQuestionNumber();
  };
  return (
    <button className="button" onClick={() => onClickHandler()}>
      {title}
    </button>
  );
};

export default Button;
