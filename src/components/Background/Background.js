import React from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group';
export default function Background(props) {
    const {goToSlide} = props;
    let Bgs = [
        {
            key: 0,
            img: "../Image/PT_Clash_of_clans.jpeg"
        },
        {
            key: 1,
            img: "../Image/Brawl_Stars.jpg"
        },
        {
            key: 2,
            img: "../Image/Clash_Royale.jpg"
        }
    ]
    return (
        <>
            <TransitionGroup>
                <CSSTransition
                    key={Bgs[goToSlide].key}
                    timeout={2000}
                    classNames="my-node">
                    <div className="bgImg">
                        <img src={`${goToSlide === Bgs[goToSlide].key ? Bgs[goToSlide].img : ''}`} alt='' />
                    </div>
                </CSSTransition>
            </TransitionGroup>
        </>
    )
}
