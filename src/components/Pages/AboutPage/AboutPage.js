import React from 'react';
import styles from './styles.module.css';

const AboutPage = () => (
  <>
    <h2>INFO ABOUT PETS SITE</h2>
    <div className={styles.wrap}>
      <p className={styles.info}>tel: +380503853767</p>
      <p className={styles.info}>gmail: glievoy.s@gmail.com</p>
      <p className={styles.info}>adress: Kyiv</p>
    </div>
  </>
);

export default AboutPage;
