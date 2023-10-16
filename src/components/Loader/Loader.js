import { Hourglass } from 'react-loader-spinner';
import css from './Loader.module.css';

export const Loader = () => {
  return (
    <div className={css.loaderContainer}>
      <Hourglass
        visible={true}
        height="60"
        width="60"
        ariaLabel="hourglass-loading"
        wrapperStyle={{}}
        wrapperClass=""
        colors={['#306cce', '#72a1ed']}
        position="fixed"
        top="50%"
        left="50%"
        transform="translate(-50%, -50%)"
      />
    </div>
  );
};
