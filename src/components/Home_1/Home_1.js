import React, { useState } from 'react'
import Carousel from 'react-spring-3d-carousel';
import { config } from "react-spring";
import { CSSTransition, TransitionGroup } from 'react-transition-group';
const Home_1 = (props) => {
    let zezo = 0;
    let one = 1;
    let two = 2;
    let {set_count} = props;
    let [state, setState] = useState({
        slide: '',
        goToSlide: 0,
        offsetRadius: 5,
        config: config.slow,
    })
    let slides = [
        {
            key: 0,
            content: <img className='img-responsive' src="../Image/Logo.png" alt="1" />,
        },
        {
            key: 1,
            content: <img className='img-responsive' src="../Image/Clash-of-Clans-Logo.jpg" alt="2" />
        },
        {
            content: <img className='img-responsive' src="../Image/Brawstars-logo.png" alt="3" />
        },
    ].map((slide, index) => {
        return { ...slide, onClick: () => setImg(index)  }
    });
    let text = [
        {
            key: 0,
            title: "Clash Royale",
            value: "Answer the call of the mustache! Join the information fray that is Clash of clans. Customize your village, build an army and crush your opponent. like using friendship to strike fear into your enemies? Join a clan, or establish a clashing legacy by creating your own. The choice is yours in the millions-strong community of barbarians. Download for free and clash on, chief!"
        },
        {
            key: 1,
            title: "Clash of clasns",
            value: "Answer the call of the mustache! Join the information fray that is Clash of clans. Customize your village, build an army and crush your opponent. like using friendship to strike fear into your enemies? Join a clan, or establish a clashing legacy by creating your own. The choice is yours in the millions-strong community of barbarians. Download for free and clash on, chief!"
        },
        {
            key: 2,
            title: "Brawl Stars",
            value: "Answer the call of the mustache! Join the information fray that is Clash of clans. Customize your village, build an army and crush your opponent. like using friendship to strike fear into your enemies? Join a clan, or establish a clashing legacy by creating your own. The choice is yours in the millions-strong community of barbarians. Download for free and clash on, chief!"
        }
    ]
    const setImg = (index) =>{
        set_count(state.goToSlide)
        setState({ slide: state.slide === '' ? true : !state.slide, goToSlide: index, config: config.slow })
    }
    const slide_PN = () => {
        set_count(state.goToSlide)
        setState({ slide: state.slide === '' ? true : !state.slide, goToSlide: state.goToSlide === two ? zezo : state.goToSlide + one, config: config.slow })
    }
    return (
        <>
            <div className="container distant">
                <div className='row'>
                    <div className="col-lg-6">
                        <div style={{ position: "relative", height: '200px' }}>
                            <TransitionGroup>
                                <CSSTransition
                                    key={text[state.goToSlide].key}
                                    timeout={2000}
                                    classNames="fade"
                                >
                                    <>
                                        {text.map(index => {
                                            if (state.goToSlide === index.key) {
                                                return <>
                                                    <div className="customF" key={index}><h3 className={state.slide ? 'fontSlide' : state.slide === false ? 'font_Slide' : ''}>{index.title}</h3><span>{index.value}</span>
                                                    </div>
                                                </>
                                            }
                                        })}
                                    </>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                        <TransitionGroup>
                            <CSSTransition
                                key={text[state.goToSlide].key}
                                timeout={2000}
                                classNames="ic"
                            >
                                <div className='Icon'>
                                    <img src="../Icons/App_store.png" class="img-responsive iconS" alt="" />
                                    <img src="../Icons/G_Play.png" class="img-responsive iconS" alt="" />
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                    <div className="col-lg-6">
                        <div className="Carousel">
                            <Carousel
                                slides={slides}
                                goToSlide={state.goToSlide}
                                offsetRadius={state.offsetRadius}
                                animationConfig={state.config}
                            /><br></br>
                            <div className="icon_">
                                <div className="back">
                                    <img  onClick={() => slide_PN()} className="img-responsive ArrowBackIosIcon" src="../Icons/Left.png" alt=""/>                                </div>
                                <div className="next">
                                <img  onClick={() => slide_PN()} className="ArrowForwardIosIcon img-responsive" src="../Icons/Right.png" alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </>
    )
}
export default React.memo(Home_1);