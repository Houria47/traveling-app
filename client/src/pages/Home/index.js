import React from 'react'

import VideoSlider from '../../components/VideoSlider/VideoSlider'

import { img1, img2, img3, img4, img5 } from '../../assets/home-media'
import classes from './Home.module.css'

const Home = () => {
  return (
    <>
      <section className={classes.header}>
        <div className={classes.content}>
          <h3>start planning your dream trip today</h3>
          <p>Discover New Places With Us</p>
        </div>
        <VideoSlider />
      </section>
      <section className={classes.main}>
        <p>explor the world</p>
        <h1>enjoy your trip with us as in your dreams</h1>
        <div className={classes.row}>
          <img src={img1} alt="" />
          <p>
            Choose your favorite seat. If you are traveling with loved ones,
            choose a window, aisle or extra legroom seat to ensure you are both
            seated and travel in comfort.
          </p>
        </div>
        <div className={classes.row}>
          <p>
            Choose your favorite seat. If you are traveling with loved ones,
            choose a window, aisle or extra legroom seat to ensure you are both
            seated and travel in comfort.
          </p>
          <img src={img2} alt="" />
        </div>
        <div className={classes.row}>
          <img src={img3} alt="" />
          <p>
            Choose your favorite seat. If you are traveling with loved ones,
            choose a window, aisle or extra legroom seat to ensure you are both
            seated and travel in comfort.
          </p>
        </div>
        <div className={classes.row}>
          <p>
            Choose your favorite seat. If you are traveling with loved ones,
            choose a window, aisle or extra legroom seat to ensure you are both
            seated and travel in comfort.
          </p>
          <img src={img4} alt="" />
        </div>
        <div className={classes.row}>
          <img src={img5} alt="" />
          <p>
            Choose your favorite seat. If you are traveling with loved ones,
            choose a window, aisle or extra legroom seat to ensure you are both
            seated and travel in comfort.
          </p>
        </div>
      </section>
    </>
  )
}

export default Home
