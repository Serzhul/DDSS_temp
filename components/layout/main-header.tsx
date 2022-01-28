import { NextComponentType } from 'next';
import { Fragment } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import classes from './main-header.module.scss';

const MainHeader: NextComponentType = () => {
  return (
    <Fragment>
      <div className={classes.top__header__container}>
        <header className={classes.top__header}>
          <h2 className={classes.top__header__category}>뉴스</h2>
          <FontAwesomeIcon
            icon={faSearch}
            className={classes.top__header__icon}
          ></FontAwesomeIcon>
        </header>
        <nav className={classes.news__category__navbar}>
          <a href="#" className={classes.news__category__item}>
            <span className="active">암호 화폐</span>
          </a>
          <a href="#" className={classes.news__category__item}>
            <span>상품</span>
          </a>
          <a href="#" className={classes.news__category__item}>
            <span>주식시장</span>
          </a>
          <a href="#" className={classes.news__category__item}>
            <span>경제지표</span>
          </a>
          <a href="#" className={classes.news__category__item}>
            <span>경제뉴스</span>
          </a>
        </nav>
      </div>
    </Fragment>
  );
};

export default MainHeader;
