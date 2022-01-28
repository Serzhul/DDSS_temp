import { NextComponentType } from 'next';
import Link from 'next/link';
import classes from './main-navigation.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChartLine,
  faNewspaper,
  faStar,
  faBars,
} from '@fortawesome/free-solid-svg-icons';
import { Fragment } from 'react';

const MainNavigation: NextComponentType = () => {
  return (
    <Fragment>
      <nav className={classes.bottom__nav}>
        <Link href="/market">
          <a className={classes.bottom__nav__icon}>
            <FontAwesomeIcon
              icon={faChartLine}
              className={classes.nav_icon}
            ></FontAwesomeIcon>
            <span>시장</span>
          </a>
        </Link>
        <Link href="/news">
          <a className={classes.bottom__nav__icon}>
            <FontAwesomeIcon
              icon={faNewspaper}
              className={classes.nav_icon}
            ></FontAwesomeIcon>
            <span>뉴스</span>
          </a>
        </Link>

        <Link href="/favorite">
          <a className={classes.bottom__nav__icon}>
            <FontAwesomeIcon
              icon={faStar}
              className={classes.nav_icon}
            ></FontAwesomeIcon>
            <span>관심목록</span>
          </a>
        </Link>

        <Link href="/more">
          <a className={classes.bottom__nav__icon}>
            <FontAwesomeIcon
              icon={faBars}
              className={classes.nav_icon}
            ></FontAwesomeIcon>
            <span>더보기</span>
          </a>
        </Link>
      </nav>
    </Fragment>
  );
};

export default MainNavigation;
