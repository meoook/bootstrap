import React from 'react'
import styles from './loader.module.scss'

/**
 * @render react
 * @name LoaderCar component
 * @description Svg loader - animating car
 * @example
 * <LoaderCar />
 */

const LoaderCar = () => (
  <div className={styles.box}>
    <div className={styles.car}>
      <div className={styles.strike}></div>
      <div className={styles.strike2}></div>
      <div className={styles.strike3}></div>
      <div className={styles.strike4}></div>
      <div className={styles.strike5}></div>
      <div className={`${styles.car_detail} ${styles.spoiler}`}></div>
      <div className={`${styles.car_detail} ${styles.back}`}></div>
      <div className={`${styles.car_detail} ${styles.center}`}></div>
      <div className={`${styles.car_detail} ${styles.center1}`}></div>
      <div className={`${styles.car_detail} ${styles.front}`}></div>
      <div className={`${styles.car_detail} ${styles.wheel}`}></div>
      <div className={`${styles.car_detail} ${styles.wheel} ${styles.wheel2}`}></div>
    </div>
    <div className={styles.text}>
      <span>Loading</span>
      <span className={styles.dots}>...</span>
    </div>
  </div>
)

export default LoaderCar
