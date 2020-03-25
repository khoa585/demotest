import React, { useContext } from 'react';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {statecontext} from './../Body';
    function Profile() {
        const context = useContext(statecontext);
        return (
            <>
                <div className="profile">
                    <div className="proF">
                        <div className="accordion">
                            <div className="proFile_">
                                <span className="nameP">profile</span>
                                <ExpandMoreIcon className={`ExpandMoreIcon ${context.state_.showF === true ? 'showFrofile' : 'closeFrofile'}`} onClick={() => context.dispatchstate({type : 'showF'})}></ExpandMoreIcon>
                            </div>
                            <div className={`panel ${context.state_.showF === true ? 'showPanel' : 'closePanel'}`}>
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
export default React.memo(Profile);