import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
import './globals.css'
import React from 'react';

const Home: React.FC = () => {
  return (
 
   
      <body>
        <div id="header"></div>
        <div>
          <div className="slideshow-container">
            <div className="mySlides fade">
              <img
                id="slideImg"
                src="https://static.zara.net/photos///contents/mkt/spots/aw21-sales/subhome-xmedia-launch-man//w/936/IMAGE-large-portrait-513a392e-6ce7-44af-bca7-e8b83a17bf4c-ca_ES@AD_0.jpg?ts=1642192906915"
                alt=""
              />
              <p id="sale">S A L E</p>
              <p id="saleTag">ONLINE AND IN STORES</p>
            </div>

            <div className="mySlides fade">
              <img
                id="slideImg"
                src="https://static.zara.net/photos///contents/mkt/spots/aw21-sales/subhome-xmedia-launch-woman//w/936/IMAGE-large-portrait-ac1f9668-d571-40cd-b8fd-9f5948180cf4-ca_ES@AD_0.jpg?ts=1642192477026"
                alt=""
              />
              <p id="sale">S A L E</p>
              <p id="saleTag">ONLINE AND IN STORES</p>
            </div>

            <div className="mySlides fade">
              <img
                id="slideImg"
                src="https://static.zara.net/photos///contents/mkt/spots/aw21-sales/subhome-xmedia-launch-kids//w/936/IMAGE-large-portrait-fec69357-a451-4502-8063-fd80331ae46e-ca_ES@AD_0.jpg?ts=1642193534887"
                alt=""
              />
              <p id="sale">S A L E</p>
              <p id="saleTag">ONLINE AND IN STORES</p>
            </div>

          </div>
          <video id="bookVdo" width="82%" height="675" autoPlay muted loop>
        <source
          src="https://static.zara.net/video///mkt/2021/12/aw21-happy-new-year-subhomes/subhome-xmedia-video-52-2/w/1808//large-landscape/subhome-xmedia-video-52-2_0.mp4?ts=1640882484837"
          type="video/mp4"
        />
      </video>
      <p id="smallText">INTRODUCING THE FALL/WINTER 2021 COLLECTION</p>
      <div id="audio-control" className="muted">U</div>
      <div id="footer"></div>
      </div>
      </body>
     
  )}

  export default Home