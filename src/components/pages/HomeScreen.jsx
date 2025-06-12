import React from 'react';
import './HomeScreen.css';
import Header from '../Header';
import ContactIcons from '../ContactIcons';

/* icons */
import { PiHockey } from "react-icons/pi";
import { LuCodeXml } from "react-icons/lu";
import { IoIosTrendingUp } from "react-icons/io";
import { TbMath } from "react-icons/tb";

const HomeScreen = () => {
    return (
        <div className='home-container'>
            {/* <Header /> */}
            <Header />

            {/*background vid*/}
            <video autoPlay loop muted playsInline className='background-video'>
                <source src={`${process.env.PUBLIC_URL}/videos/ocean.mp4`} type='video/mp4' media="all" />
                Video tag is not supported by browser.
            </video>

            {/* name overlayed */}
            <div className='name-overlay'>
                <h1>Landon</h1>
                <h1>Zheng</h1>
            </div>

            {/* lower section */}
            <div className='lower-section'>
                {/* ut austin tagline */}
                <div className='tagline'>
                    <h3>
                        Computer Science & Math at UT Austin.
                    </h3>
                    <h4>
                        Current SWE Intern @ Citi.
                    </h4>
               </div>

                {/* description instead */}
                <div className='me-description'>
                    <h5>
                        Hello! I'm Landon, an aspiring Software Engineer, Quant Trader, and Professional Gambler &#40;only in legal places, don't worry&#41;. Hopefully ChatGPT doesn't take my job because for some reason, I like to code.
                    </h5>
                </div>

                <div className='divider'></div>

                {/* descriptions section */}
                <div className='info-grid'>
                    <div className='info-card'>
                        <div className='info-title'>
                            Software Engineer <LuCodeXml />
                        </div>
                        <div className='info-description'>
                            What stems my passion in CS is the field's hunger for innovation like none other, and startup culture resonated with me from the beginning. The idea of building something completely new yet unique in a way the world hasn't seen before has always been one of my dreams, and as a participant in many previous startup-like projects, including Plate'Em, HornsLink, A Myth Studio, and more, startups are the perfect path to achieving this goal. I want to succeed like none other, and I'm looking to found my very own startup soon- changing the world with code, line by line.
                        </div>
                    </div>
                    <div className='info-card'>
                        <div className='info-title'>
                            Quantitative Analyst <IoIosTrendingUp />
                        </div>
                        <div className='info-description'>
                            My love and foundation for Math built my CS career, and with an inerest in Investing & Financial Markets from an early age, one could say I'm "invested" in the Quant Trading field. I'm an active member in Texas Undergraduate Computational Finance, the most prestigious Quant organization in Texas, and I have created and pitched many algorithmic trading models I'm proud of! This includes a VIX strategy, Kelly Criterion investments, and social market analysis. I'm currently working on gaining an edge in Kalshi Markets, and I hope to pursue an opportunity in this sector in the near future!
                        </div>
                    </div>
                    <div className='info-card'>
                        <div className='info-title'>
                            Mathematician <TbMath />
                        </div>
                        <div className='info-description'>
                            Mathematics has always been of interest to me - especially mental arithmetic, number sense, and probability. Since I was 5 years old, I attended JSU Mental Arithmetic School in Dallas, reaching the highest mental artihmetic level in the district as well as becoming president and lead mental math demonstrator of the school. Math resonated with me at a young age, and the subject still does now; I have a keen interest in math brainteaser problems that use a slight sense of logic and math in order to solve them! I firmly believe anything can be solved with math - even Poker.
                        </div>
                    </div>
                    <div className='info-card'>
                        <div className='info-title'>
                            Student Athlete <PiHockey />
                        </div>
                        <div className='info-description'>
                            I'm a big sports guy, especially hockey. When I was 10 years old, I was introduced to the sport, and I loved hockey ever since. I played for the DJHA Dallas Penguins association in Tier II for 6 years, and my time there has shaped me in a way that no other experience could do to me. In fact, many of my morals come from hockey itself, including my work ethic. I'm proud to say I now play for the Texas Longhorns Ice Hockey team- representing Texas in the rink. We won Regionals and made it to Nationals in 2024! (Favorite teams: Dallas Stars, Dallas Cowboys, Dallas Mavs, Texas Rangers.)
                        </div>
                    </div>
                </div>

                <div className='divider'></div>

                {/* contact icons stuff */}
                <ContactIcons />
            </div>
        </div>
    );
};

export default HomeScreen;