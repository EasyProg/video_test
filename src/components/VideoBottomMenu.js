import React, { Component,PropTypes } from 'react';
import {Button,Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import '../styles/css/main_styles.css';
import  {connect} from 'react-redux';
class VideoBottomMenu extends Component  {
static propTypes = {
    changeSizeContext:PropTypes.func.isRequred,
    changeResContext:PropTypes.func.isRequred
};
    resolutions = ['360р','480р','720р','1080р','1440р'];
    constructor(props) {
        super(props);
        this.state = {
           showResolution:false,
           lock:false,
           resolution:'1080р'
        }
    }
    chooseResolution (res) {
        this.setState({
            showResolution:false,
            resolution:res
        });
        this.props.changeResContext(res.substr(0,res.length-1));
    }
    changeSize(e) {
        e.stopPropagation();
        this.props.changeSizeContext();
    }
    setLock(vl) {
        this.setState (
            {
                lock:!vl,
            }
        )
    }
    render () {
        {if (this.state.showResolution === false) {
            return (
                <div id='vdbottommenu' className={this.props.fullScreen?"divBottomPlayerFull":"divBottomPlayer"}>
                    <div className="playerButtonsBottomDiv">
                        <div className="iconsDiv" onClick={(e)=>this.setLock(this.state.lock)}>
                            <Icon className={this.state.lock?"large inverted lock alternate":"large inverted unlock alternate"}/>
                        </div>
                        <div className="iconsDiv">
                            <Icon className="large inverted bookmark"/>
                        </div>
                        <div className="iconsDiv">
                            <div className="upper_buttons_live">LIVE</div>
                        </div>
                        <div className="iconsDiv" onClick={(e) => this.setState({showResolution: true})}>
                            <div className="upper_buttons_res">
                                {this.state.resolution}
                            </div>
                        </div>
                        <div className="iconsDiv" onClick={(e)=>this.changeSize(e)}>
                            <div className="upper_buttons_square"/>
                        </div>
                    </div>
                </div>
            )
        }
        else {
            return (
                <div className={this.props.fullScreen?'divBottomPlayerFull':'divBottomPlayer'}>
                    <div className="playerButtonsBottomDiv">
                        {
                            this.resolutions.map((elem,i)=>
                                <div key={i} className="iconsDiv" onClick={(e)=>this.chooseResolution(elem)}>{elem}</div>
                            )
                        }
                    </div>
                </div>
            )
        }
        }
    }
}

export default connect(
    state => ({fullScreen:state.videoReducer.fullScreen}),
    ({})
)(VideoBottomMenu);