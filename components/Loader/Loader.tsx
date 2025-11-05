import { PropagateLoader } from 'react-spinners';

import css from './Loader.module.css';

const Loader = () => {
  return (
    <div className={css.loaderBackdrop}>
      <PropagateLoader color="#60147eff" />
    </div>
  );
};

export default Loader;
