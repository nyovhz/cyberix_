'use client'

import Head from 'next/head'
import Script from 'next/script'
import { useRef } from 'react'
import welcomeTitle from '../public/img/welcome_title.png';


export default function Home() {
  const audioRef = useRef(null)

  return (
    <>
      <Head>
        <title>{`{Cyberix}`}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/img/player_favicon.ico" />
        <link href="https://unpkg.com/boxicons@2.0.9/css/boxicons.min.css" rel="stylesheet" />
        <link rel="stylesheet" href="/style.css" />
        <style>{`
          @font-face {
            font-family: 'xxx';
            src: url('/fonts/xxx.otf');
          }
        `}</style>
      </Head>

      {/* Scripts externos (deferidos) */}
      <Script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/0.145.0/three.min.js" strategy="beforeInteractive" />
      <Script src="https://unpkg.com/hydra-synth" strategy="beforeInteractive" />

      {/* Scripts locales */}
      {[
        '/js/analyser.js',
        '/thrjs/OrbitControls.js',
        '/thrjs/GLTFLoader.js',
        '/thrjs/DRACOLoader.js',
        '/thrjs/RGBELoader.js',
        '/js/player.js',
        '/js/media_hydra.js',
        '/js/media.js',
        '/js/load-model.js',
        '/js/raycast.js'
      ].map((src, idx) => (
        <Script key={idx} src={src} strategy="lazyOnload" />
      ))}

      {/* UI principal */}
      <div className="load_page">
        <div className="image_banner" style={{ backgroundImage: `url(${welcomeTitle.src})` }}></div>
        <div className="image_banner_button"></div>
      </div>

      <div className="tracklist_back">
        <ul className="tracklist"></ul>
      </div>

      <div className="tracklist_button"></div>

      <audio ref={audioRef} className="audio" controls />

      <audio src="/audio/e01-1.mp3" className="load_page_audio"></audio>
      <audio src="/audio/e02-1.mp3" className="camera_audio"></audio>

      <div className="player_">
        <div className="media_">
          <div className="buttons_">
            <div className="button play_stop_button">
              <i id="play" className="bx bx-play"></i>
            </div>
            <div className="button pre_track">
              <i className="bx bx-skip-previous"></i>
            </div>
            <div className="button next_track">
              <i className="bx bx-skip-next"></i>
            </div>
            <div className="button reload_track">
              <i className="bx bx-reply"></i>
            </div>
            <div className="button random_track">
              <i className="bx bx-shuffle"></i>
            </div>
            <div className="button toggle_tracklist"></div>
            <div className="button toggle_cam"></div>
            <div className="button toggle_back"></div>
            <div className="button skin_"></div>
            <div className="tracklist_">
              <div className="panel_button">
                <i className="fa-solid fa-bars"></i>
              </div>
            </div>
            <canvas id="hydra_canvas_2"></canvas>
          </div>
        </div>
      </div>

      <div className="timeline_">
        <div className="current-time">00:00</div>
        <div className="timeline_slider">
          <section className="progress"></section>
        </div>
        <div className="total-duration">00:00</div>
      </div>

      <div className="banner">
        <a className="track_name">xxx</a>
      </div>

      <canvas id="hydra_canvas"></canvas>
      <canvas id="three_canvas"></canvas>
      <canvas id="freqMonitor"></canvas>
    </>
  )
}
