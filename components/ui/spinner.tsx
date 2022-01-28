import { NextComponentType } from 'next';
import classes from './spinner.module.scss';

const Spinner: NextComponentType = () => {
  return (
    <div className={classes.spinner}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Spinner;
