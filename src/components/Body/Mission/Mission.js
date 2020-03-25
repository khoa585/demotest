import React, { useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { statecontext } from './../Body';
function Mission() {
    const context = useContext(statecontext);
    console.log(context)
    return (
        <div className="Mission">
            <div className="MissionM">
                <div className="accordion">
                    <div className="proFile_">
                        <span className="name_M">Mission </span>
                        <ExpandMoreIcon className={`ExpandMoreIcon_M ${context.state_.showM === true ? 'showFrofile' : 'closeFrofile'}`} onClick={() => context.dispatchstate({ type: 'showM' })}></ExpandMoreIcon>
                    </div>
                    <div className={`panel_M ${context.state_.showM === true ? 'showPanel' : 'closePanel'}`}>
                        <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                        labore
                        et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                        nisi
                            ut</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default React.memo(Mission);