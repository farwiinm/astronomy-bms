import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import aries from "../assets/img/aries.png";
import taurus from "../assets/img/taurus.png";
import virgo from "../assets/img/virgo.png";
import scorpius from "../assets/img/scorpio.png";
import libra from "../assets/img/libra.png";
import sagittarius from "../assets/img/sagittarius.png";
import capricornus from "../assets/img/capricorn.png";
import pisces from "../assets/img/pisces.png";
import aquarius from "../assets/img/aquarius.png";
import gemini from "../assets/img/gemini.png";
import leo from "../assets/img/leo.png";
import cancer from "../assets/img/cancer.png";
import orbit from "../assets/img/orbit-3.gif";
import stars from "../assets/img/stars.jpg";
import ReactPanZoom from 'react-image-pan-zoom-rotate';
import 'animate.css';
import { useState } from 'react';
import TrackVisibility from 'react-on-screen';
import YouTube from 'react-youtube';

export const Projects = () => {

  const projects = [
    {
      title: "Aries",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Aries is a small but prominent constellation in the northern hemisphere</li><li style={{ listStyleType: "none" }}>The brightest star in Aries, Hamal, is one of the closest stars to Earth at only 66 light-years away</li></ul>,
      imgUrl: aries,
    },
    {
      title: "Taurus",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Taurus is easily recognizable for its V-shaped cluster of stars known as the Hyades</li><li style={{ listStyleType: "none" }}>At the center of the Hyades lies Aldebaran, a bright red giant star that is over 40 times the size of our Sun</li></ul>,
      imgUrl: taurus,
    },
    {
      title: "Gemini",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Gemini is known for its two bright stars, Castor and Pollux, which represent the twin brothers of Greek mythology</li><li style={{ listStyleType: "none" }}>The constellation also contains a large open star cluster known as M35, which is visible with binoculars or a small telescope</li></ul>,
      imgUrl: gemini,
    },
    {
      title: "Cancer",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Cancer is a relatively dim constellation that is located between Gemini and Leo</li><li style={{ listStyleType: "none" }}>The Beehive Cluster, a group of stars that resembles a beehive, is located in the center of the constellation and can be seen with binoculars or a telescope</li></ul>,
      imgUrl: cancer,
    },
    {
      title: "Leo",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Leo is one of the most recognizable constellations in the sky and contains several bright stars, including Regulus and Denebola</li><li style={{ listStyleType: "none" }}>The Leo Triplet is a group of three galaxies located about 35 million light-years away from Earth that can be seen with a telescope</li></ul>,
      imgUrl: leo,
    },
    {
      title: "Virgo",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Virgo is the second-largest constellation in the sky and contains the bright star Spica</li><li style={{ listStyleType: "none" }}>The constellation is also home to the Virgo Cluster, a group of galaxies that is one of the closest large galaxy clusters to Earth</li></ul>,
      imgUrl: virgo,
    },
    {
      title: "Scorpius",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Scorpius is one of the brightest and most easily recognizable constellations in the sky</li><li style={{ listStyleType: "none" }}>The constellation contains several notable objects, including the red supergiant star Antares and the globular cluster Messier 4</li></ul>,
      imgUrl: scorpius,
    },
    {
      title: "Libra",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Libra is a small, faint constellation located between Virgo and Scorpius</li><li style={{ listStyleType: "none" }}>The constellation contains a pair of binary stars known as Alpha Librae, or Zubenelgenubi and Zubeneschamali, which are visible with a small telescope</li></ul>,
      imgUrl: libra,
    },
    {
      title: "Sagittarius",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Sagittarius is a large constellation located in the southern hemisphere and contains the center of our Milky Way galaxy</li><li style={{ listStyleType: "none" }}>The constellation also contains several notable objects, including the Lagoon Nebula and the Trifid Nebula</li></ul>,
      imgUrl: sagittarius,
    },
    {
      title: "Capricornus",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Capricornus is a small, faint constellation located in the southern hemisphere</li><li style={{ listStyleType: "none" }}>The constellation contains a bright open cluster known as Messier 30, which is visible with binoculars or a small telescope</li></ul>,
      imgUrl: capricornus,
    },
    {
      title: "Aquarius",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Aquarius is a large constellation that is home to several bright stars, including Sadalsuud and Skat</li><li style={{ listStyleType: "none" }}>The constellation also contains the Helix Nebula, a planetary nebula that is one of the closest to Earth</li></ul>,
      imgUrl: aquarius,
    },
    {
      title: "Pisces",
      description: <ul><li style={{ listStyleType: "none", marginBottom: 20 }}>Pisces is a faint constellation located in the northern hemisphere that is known for its pair of bright stars, Alrescha and Fumalsamakah</li><li style={{ listStyleType: "none" }}>The constellation also contains the Pisces Dwarf Galaxy, a small galaxy located about 3 million light-years away from Earth</li></ul>,
      imgUrl: pisces,
    },
  ];

  const questions = [
    {
      question: "What is the main difference between astronomy and astrology?",
      answers: ["Astronomy is a science that studies celestial objects, while astrology is a pseudoscience that studies the supposed influence of celestial objects on human affairs", "Astronomy and astrology are the same thing", "Astronomy studies the positions and movements of planets, while astrology studies the positions and movements of stars"],
      correctAnswer: "Astronomy is a science that studies celestial objects, while astrology is a pseudoscience that studies the supposed influence of celestial objects on human affairs"
    },
    {
      question: "Which of the following is an example of an astronomical event?",
      answers: ["A full moon", "Mercury retrograde", "A solar eclipse"],
      correctAnswer: "A solar eclipse"
    },
    {
      question: "Why is astrology considered a pseudoscience?",
      answers: ["Because it has been proven to be false by scientific experiments", "Because it does not rely on empirical evidence or the scientific method", "Because it is a form of religious belief"],
      correctAnswer: "Because it does not rely on empirical evidence or the scientific method"
    },
    {
      question: "If someone claims that your personality is influenced by the position of the planets at your birth, which field are they using?",
      answers: ["Astronomy", "Astrology", "None"],
      correctAnswer: "Astrology"
    },
    {
      question: "Which field of study would be more likely to use a telescope?",
      answers: ["Astronomy", "Astrology", "None"],
      correctAnswer: "Astronomy"
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleAnswerOptionClick = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>What is Astronomy?</h2>
                  <p>Astronomy is the study of everything in the universe beyond Earth’s atmosphere. That includes objects we can see with our naked eyes, like the Sun , the Moon , the planets, and the stars . It also includes objects we can only see with telescopes or other instruments, like faraway galaxies and tiny particles. And it even includes questions about things we can't see at all, like dark matter and dark energy.</p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Wonders of the Night Sky</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Vastness of the universe</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">Movements in Space</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <p>Have you ever looked up at the night sky and noticed the patterns of stars that seem to form a shape? These patterns are called constellations, and they have been used for centuries as a way to navigate and understand the sky. Each constellation has a story or myth behind it that has been passed down through generations. We'll take a closer look at some of the most well-known constellations and learn about them.</p>
                        <p>There are 88 officially recognized constellations, each with its own unique story and history. Some of the most well-known constellations include:</p>
                        <Row>
                          {
                            projects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                        <h2>Astronomy vs. Astrology?</h2>
                        <p>Students often confuse between Astronomy and Astrology so let's explore that with a quick quiz!</p>
                        <div className="quiz">
                          {showScore ? (
                            <div className="score-section">
                              You scored {score} out of {questions.length}
                            </div>
                          ) : (
                            <>
                              <div className="question-section">
                                <div className="question-count">
                                  <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className="question-text">{questions[currentQuestion].question}</div>
                              </div>
                              <div className="answer-section">
                                {questions[currentQuestion].answers.map((answerOption) => (
                                  <button onClick={() => handleAnswerOptionClick(answerOption === questions[currentQuestion].correctAnswer)}>{answerOption}</button>
                                ))}
                              </div>
                            </>
                          )}
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <p>Stars are like distant suns that emit light, and they're scattered throughout the vastness of the universe. Some stars are very bright, while others are very faint. But did you know that the brightness of a star is related to its distance from Earth?</p>
                        <p>Imagine you're standing in a dark room with a single lightbulb. If you move closer to the lightbulb, it will appear brighter to you, and if you move farther away, it will appear dimmer. This same principle applies to stars in the night sky. The closer a star is to Earth, the brighter it appears, and the farther away it is, the dimmer it appears.</p>
                        <p>Zoom in and out of this image to know what we are talkin' about</p>
                        <div className="stars">
                        <ReactPanZoom
                        class="stars"
                          image={stars}
                        />
                        </div>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>As we gaze up at the sky, it might seem like everything is standing still, but in reality, the objects in space are in constant motion.</p>
                        <p>Click on the GIF below to learn about the movements of the earth and sun while you attack some meteors!</p>
                        <a href="https://zty.pe/?text=97da4dcd7c4de741" target="_blank"><img src={orbit} className="orbit" /></a>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
