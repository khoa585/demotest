import React, { useReducer } from 'react';
import Profile from './Profile/Profile';
import Vision from './Vision/Vision';
import Mission from './Mission/Mission';
import Background from '../Background/Background';
export const statecontext = React.createContext();
const initialState = { showF: false, showV: false, showM: false };
function reducer(state, action) {
    console.log(action.type)
    switch (action.type) {
        case 'showF':
            return { showF: !state.showF };
        case 'showV':
            console.log('showV ' + state.showV)
            return { showV: !state.showV };
        case 'showM':
            console.log('showM ' + state.showM)
            return { showM: !state.showM };
        default:
            throw new Error();
    }
}
function Home(props) {
    const [state, dispatch] = useReducer(reducer, initialState);
    const {set_State} = props;
    const clickslides = () => {
        set_State(true)
    }
    return (
        <statecontext.Provider
            value={{ state_: state, dispatchstate: dispatch }}>
            <>
                <div className="row">
                    <div className="col-lg-6 distant">
                        <Profile></Profile>
                        <Vision></Vision>
                        <Mission></Mission>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img onClick={clickslides} className='img-responsive imgR' src='../Image/Clash_Royale.png' alt='' />
                        </div>
                    </div>
                </div>
            </>
        </statecontext.Provider>
    );
}

export default React.memo(Home);