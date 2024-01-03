import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import rt from '../assets/img/reactt.svg'
import js from '../assets/img/JavaScript-logo.png'
import py from '../assets/img/python.svg'
import tail from '../assets/img/tail.svg'
import css from '../assets/img/css.svg'
import html from '../assets/img/html.svg'
import bs from '../assets/img/bss.svg'
import sql from '../assets/img/mysql.svg'
import dsa from '../assets/img/DSA.jpg'
import next from '../assets/img/nextt.png'

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 7
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
                            <h2>Skills</h2>
                            <p>I have  a keen interest in web development, a solid foundation in data structures and algorithms, and a love for building seamless user experiences with React.js.</p>
                            <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                                <div className="item">
                                    <img src={js} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>Javascript</h5>
                                </div>
                                <div className="item">
                                    <img src={rt} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                    <img src={next} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5> Next Js</h5>
                                </div>
                                <div className="item">
                                    <img src={py} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                    <img src={dsa} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>DSA</h5>
                                </div>
                                <div className="item">
                                    <img src={sql} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                    <img src={html} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>HTML5</h5>
                                </div>

                                <div className="item">
                                    <img src={css} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5> CSS3</h5>
                                </div>
                                <div className="item">
                                    <img src={tail} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5>TailWind CSS</h5>
                                </div>
                                <div className="item">
                                    <img src={bs} style={{ width: "204", height: "204", overflow: 'hidden', borderRadius: '50%' }} alt="Image" />
                                    <h5> BootStrap</h5>
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