import css from './Button.module.css';

export const Button = ({ onLoadMore }) => {
  return (
    <button className={css.buttonLoadMore} type="button" onClick={onLoadMore}>
      Load more
    </button>
  );
};
