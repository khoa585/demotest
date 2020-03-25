import React, { useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { statecontext } from './../Body';
function Vision() {
    const context = useContext(statecontext);
    return (
        <>
            <div className="vision">
                <div className="visionF">
                    <div className="accordion">
                        <div className="proFile_">
                            <span className="name_V">vision </span>
                            <ExpandMoreIcon className={`ExpandMoreIcon_V ${context.state_.showV === true ? 'showFrofile' : 'closeFrofile'}`} onClick={() => context.dispatchstate({ type: 'showV' })}></ExpandMoreIcon>
                        </div>
                        <div className={`panel_V ${context.state_.showV === true ? 'showPanel' : 'closePanel'}`}>
                            <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                            labore
                            et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                            nisi
                            ut</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
export default React.memo(Vision);