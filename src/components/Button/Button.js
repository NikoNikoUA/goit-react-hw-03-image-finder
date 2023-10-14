import './Button.css';

export const Button = ({ onLoadMore }) => {
  return (
    <button className="buttonLoadMore" type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};
