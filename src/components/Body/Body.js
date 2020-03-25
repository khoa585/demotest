import React, { useReducer } from 'react';
import Profile from './Profile/Profile';
import Vision from './Vision/Vision';
import Mission from './Mission/Mission';
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
            console.log( 'showM ' + state.showM)
            return { showM: !state.showM };
        default:
            throw new Error();
    }
}
function Body() {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <statecontext.Provider
            value={{ state_: state, dispatchstate: dispatch }}>
            <>
                <div className="row">
                    <div className="col-lg-6">
                        <Profile></Profile>
                        <Vision></Vision>
                        <Mission></Mission>
                    </div>
                    <div className="col-lg-6">
                        <div>
                            <img className='img-responsive' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/i/9de2d237-bfdf-4e16-a73e-a5f42b904bdf/danuzdv-6d597d4c-772d-4a18-bc4f-1d861cf652e4.png/v1/fill/w_500,h_500,strp/clash_of_clans_hack_tool___coc_logo_vectorel_by_clashofclanshackz_danuzdv-fullview.png' alt='' />
                        </div>
                    </div>
                </div>
            </>
        </statecontext.Provider>
    );
}

export default Body;