import neil from '../assets/img/neil.png';
import hawking from '../assets/img/hawking.png';
import carolyn from '../assets/img/carolyn.png';
import bill from '../assets/img/bill.png';
import carl from '../assets/img/carl.png';
import nancy from '../assets/img/nancy.png';
import alyssa from '../assets/img/alyssa.png';
import jocelyn from '../assets/img/jocelyn.png';
import wernher from '../assets/img/wernher.png';
import john from '../assets/img/john.png';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Discover the next milestone</h2>
                        <p>Astronomy is a field of study that focuses on the universe beyond Earth, including the study of celestial objects such as planets, stars, galaxies, and other phenomena. Careers in astronomy can involve a wide range of activities, including conducting research, using observational and computational tools to analyze data, designing and building astronomical instruments, communicating scientific findings to the public, and developing policies related to space exploration and scientific research.</p>
                        <p>Check out the top careers in Astronomy!</p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={neil} alt="Image" />
                                <h5>Astronomer</h5>
                            </div>
                            <div className="item">
                                <img src={hawking} alt="Image" />
                                <h5>Astrophysicist</h5>
                            </div>
                            <div className="item">
                                <img src={carolyn} alt="Image" />
                                <h5>Planetary Scientist</h5>
                            </div>
                            <div className="item">
                                <img src={bill} alt="Image" />
                                <h5>Science Educator</h5>
                            </div>
                            <div className="item">
                                <img src={nancy} alt="Image" />
                                <h5>Telescope Engineer</h5>
                            </div>
                            <div className="item">
                                <img src={alyssa} alt="Image" />
                                <h5>Data Scientist</h5>
                            </div>
                            <div className="item">
                                <img src={jocelyn} alt="Image" />
                                <h5>Observatory Director</h5>
                            </div>
                            <div className="item">
                                <img src={wernher} alt="Image" />
                                <h5>Aerospace Engineer</h5>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
