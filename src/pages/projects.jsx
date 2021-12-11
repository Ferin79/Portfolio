import React, { useRef, useState } from "react";
import ModalMenu from "../components/ModalMenu";
import classnames from "classnames";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "../components/Navbar";
import mifsMock from "../images/mifs.jpg";
import fixxiMock from "../images/fixxi.jpg";
import dockerMock from "../images/dockergen.png";
import TurfMock from "../images/turf.svg";
import ieltsMock from "../images/ielts-mockup.jpg";
import cattleMock from "../images/cattle-stray-mockup.jpg";
import valutionMock from "../images/valution.jpg";
import gravityMock from "../images/gravity-mockup.jpg";
import simulatorMock from "../images/simulator-mockup.jpg";
import techfestMock from "../images/techfest-mockup.jpg";
import covidMock from "../images/covid-mockup.jpg";
import sortingMock from "../images/sorting-mockup.jpg";
import styles from "./projects.module.css";
import Outline from "../components/Outline";
import { Colors } from "../components/colors";

const color = Colors.Yellow;

const Projects = () => {
  const cardRef = useRef([]);

  const [isLoading, setIsLoading] = useState(true);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "linear" }}
    >
      <Navbar color={color} title={"My Projects"} />
      <div className="section">
        <div className="container is-fluid">
          {/* Outline Div */}
          <Outline color={color} setIsLoading={setIsLoading} />

          <div className="columns">
            {/* First Column */}
            {!isLoading && (
              <div className="column">
                {/* Mifs */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img
                      src={mifsMock}
                      alt="Mifs"
                      style={{ objectFit: "cover" }}
                    />
                  </figure>
                  <h1 className="title is-5 mt-2">
                    Mifs: Chat With Soundbytes
                  </h1>
                  <p className="my-3">
                    MIFS is an audio-sharing social platform where users can
                    listen, like, share, and upload audio of not more than 15
                    seconds. Be it a song, speech, or sound.
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">React</span>
                    <span className="tag is-info is-light">
                      Expo / React Native
                    </span>
                    <span className="tag is-info is-light">
                      Nestjs / Nodejs
                    </span>
                    <span className="tag is-info is-light">PostgreSQL</span>
                    <span className="tag is-info is-light">Redis</span>
                    <span className="tag is-info is-light">Docker</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://apps.apple.com/us/app/mifs-chat-with-soundbytes/id1585981882"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      iOS
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=online.mifs"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Android
                    </a>
                    <a
                      href="https://www.mifs.online/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Website
                    </a>
                  </footer>
                </div>

                {/* Fixxi */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={fixxiMock} alt="Fixxi" />
                  </figure>
                  <h1 className="title is-5 mt-2">Fixxi Repair</h1>
                  <p className="my-3">
                    Fixxi is a fix-it-all Mobile repair store located in
                    Phoenix, US. The offline store is now a developed online
                    application with the feature of pick and drop for its
                    customers. I had contributed by developing the Admin Panel
                    of the application.
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">React</span>
                    <span className="tag is-info is-light">
                      Expo / React Native
                    </span>
                    <span className="tag is-info is-light">
                      Nestjs / Nodejs
                    </span>
                    <span className="tag is-info is-light">PostgreSQL</span>
                    <span className="tag is-info is-light">Redis</span>
                    <span className="tag is-info is-light">Docker</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://apps.apple.com/us/app/fixxi-repair/id1584759103"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      iOS
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.app.fixxi.repair"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Android
                    </a>
                    <a
                      href="https://fixxi.repair/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Website
                    </a>
                  </footer>
                </div>

                {/* Valution */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={valutionMock} alt="Fixxi" />
                  </figure>
                  <h1 className="title is-5 mt-2">Valution</h1>
                  <p className="my-3">
                    Valuation is the backend service developed using Node cron
                    jobs scheduler that retrieves stock prices at certain time
                    intervals and updates our databases with latest data.
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">
                      Express / Nodejs
                    </span>
                    <span className="tag is-info is-light">MongoDB</span>
                    <span className="tag is-info is-light">Cron Jobs</span>
                  </div>
                </div>

                {/* IELTS */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={ieltsMock} alt="IELTS PREPS" />
                  </figure>
                  <h1 className="title is-5 mt-2">IELTS PREPS </h1>
                  <p className="my-3">
                    IELTS PREPS allows students to register under any institute
                    and practice all four modules of IELTS exams. The
                    application offers wide range of practice tests for each
                    module of IELTS.
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                    <span className="tag is-info is-light">Firebase</span>
                    <span className="tag is-info is-light">Socket.io</span>
                    <span className="tag is-info is-light">WebRTC</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/IELTS-PREPS"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ielts-video-call.herokuapp.com/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                {/* Stray Cattle */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={cattleMock} alt="Cattle Stray" />
                  </figure>
                  <h1 className="title is-5 mt-2">Cattle Stray</h1>
                  <p className="my-3">
                    This project creates a platform which coalesce the local
                    people with Animal Husbandry,NGOs and Civic Forums
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                    <span className="tag is-info is-light">Firebase</span>
                    <span className="tag is-info is-light">React-Native</span>
                    <span className="tag is-info is-light">Expo</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/Cattle-Stray"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://drive.google.com/file/d/1kkF4HdrfCxnD7RVJFLUjuff9e1jgurEZ/view?usp=sharing"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      APK
                    </a>
                  </footer>
                </div>

                {/* Gravity */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={gravityMock} alt="Gravity Educatin" />
                  </figure>
                  <h1 className="title is-5 mt-2">Gravity Education</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                    <span className="tag is-info is-light">PHP / Laravel</span>
                    <span className="tag is-info is-light">MySQL</span>
                    <span className="tag is-info is-light">React-Native</span>
                    <span className="tag is-info is-light">Expo</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/Online-Exam-MERN"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://play.google.com/store/apps/details?id=com.ferinpatel.OnlineExam"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Play Store
                    </a>
                  </footer>
                </div>
              </div>
            )}

            {/* Menu Placeholder */}
            <div className="column  is-hidden-touch has-text-centered">
              <AnimatePresence>
                {!isLoading && (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, ease: "linear" }}
                    style={{
                      position: "fixed",
                      top: "10%",
                      left: "50%",
                      transform: "translate(-50%,-10%)",
                    }}
                  >
                    <h1 className="is-size-3-desktop">My Projects</h1>
                    <Link to="/" className="is-size-6-desktop ">
                      Back to Home
                    </Link>
                  </motion.div>
                )}
              </AnimatePresence>

              <ModalMenu color={color} />
            </div>

            {/* Third Column */}
            {!isLoading && (
              <div className="column">
                {/* Docker gen */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={dockerMock} alt="Docker Gen" />
                  </figure>
                  <h1 className="title is-5 mt-2">Docker Gen</h1>
                  <p className="my-3">
                    This module allows you to create Docker and Docker Compose
                    files for your project.
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">Nodejs</span>
                    <span className="tag is-info is-light">Docker</span>
                    <span className="tag is-info is-light">Docker Compose</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/docker-gen"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://www.npmjs.com/package/docker-gen"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      NPM
                    </a>
                  </footer>
                </div>

                {/* Rebounce */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={TurfMock} alt="Rebounce Turf" className="p-5" />
                  </figure>
                  <h1 className="title is-5 mt-2">Rebounce Turf</h1>
                  <p className="my-3">
                    Rebounce Turf is the online web app for turf booking that
                    permits users to book their slots, make payments, and keep
                    track of their refunds and previous bookings.
                  </p>
                  <div className="tags">
                    <span className="tag is-info is-light">Reactjs</span>
                    <span className="tag is-info is-light">Nodejs</span>
                    <span className="tag is-info is-light">Stripe Payment</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://turf.rebounce.in/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Website
                    </a>
                  </footer>
                </div>

                {/* TechFest */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={techfestMock} alt="TechFest 2020" />
                  </figure>
                  <h1 className="title is-5 mt-2">TechFest 2020</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">HTML</span>
                    <span className="tag is-info is-light">CSS</span>
                    <span className="tag is-info is-light">JavaScript</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/TechFest2020"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/TechFest2020/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                {/* COVID-19 */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={covidMock} alt="COVID-19" />
                  </figure>
                  <h1 className="title is-5 mt-2">COVID-19 Tracker</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">HTML</span>
                    <span className="tag is-info is-light">CSS</span>
                    <span className="tag is-info is-light">JavaScript</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/COVID-19"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/COVID-19/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                {/* Sorting */}
                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image">
                    <img src={sortingMock} alt="Sorting Visualizer" />
                  </figure>
                  <h1 className="title is-5 mt-2">Sorting Visualizer</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/sorting-visual"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/sorting-visual/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>

                {/* 8085 */}

                <div
                  data-aos="fade-up"
                  data-aos-duration="3000"
                  ref={(element) => {
                    cardRef.current[0] = element;
                  }}
                  className={classnames("box", styles.boxSelector)}
                >
                  <figure className="image ">
                    <img src={simulatorMock} alt="Simulator 8085" />
                  </figure>
                  <h1 className="title is-5 mt-2">Simulator 8085</h1>
                  <div className="tags">
                    <span className="tag is-info is-light">React.js</span>
                  </div>

                  <footer className="card-footer">
                    <a
                      href="https://github.com/Ferin79/Simulate8085"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      View on Github
                    </a>
                    <a
                      href="https://ferin79.github.io/Simulate8085/"
                      target="_blank"
                      rel="noreferrer"
                      className="card-footer-item"
                    >
                      Live Project
                    </a>
                  </footer>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
