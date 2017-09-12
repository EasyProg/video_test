import React, {Component,PropTypes} from 'react';
import '../styles/css/main_styles.css';
import hiddenchannel from '../img/nochannel.png';
import {Button,Icon} from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import * as $ from 'jquery';
var belle = require('belle');
var rateProps = {
    width:'10px',
    height:'10px'
}
export default class Channel extends Component {
    constructor(props) {
        super(props);
    }

    static propTypes = {
        channelId: PropTypes.number.isRequired,
        programName: PropTypes.string.isRequired,
        channelImg: PropTypes.img,
        hiddenChannel: PropTypes.bool.isRequired,
        chosen: PropTypes.bool.isRequired,
        favorite: PropTypes.bool.isRequired,
                       };


    render() {
        var Rate = belle.Rating;
        return (
            <div className={this.props.chosen ? 'menuItemStylefocus' : 'menuItemStyle'} onClick={this.props.onClick}>
                <span className="span">{this.props.channelId}</span>
                {this.props.hiddenChannel ? <img width={40} height={40} src={hiddenchannel} className="tvimg"/> : ''}
                <span className="pname">{this.props.programName}</span>
                {this.props.favorite ?<span className="pname"><Icon className="small orange bookmark"/></span> : ''}
                <Rate defaultValue={3} disabled  character={'✪'}/>
                {!this.props.hiddenChannel ? <img width={40} height={40} src='' className="tvimg"/> : ''}
            </div>
        )
              }
}