
import {combineReducers} from 'redux';


const initialState = {
        video: {videoStr:'https://cdnua01.hls.tv/hls/79fe07520e89862e02b2d00fecf02ca9/3303/stream.m3u8',
        channelId:51,
        channel: '1+1',
        itemChosen:null},
        isPlaying:true,
        isControlElemsVisible:false,
        fullScreen:false,
        channelCategory:'',
        isControlMenuVisible:false,
                    };
const channelState = {
        category:''
};
function videoReducer(state=initialState,action=null)           {
    switch (action.type) {
        case 'CHANGE':
            return {...state,video:action.video};
        case 'TOGGLE_PLAY':
        return {...state,isPlaying:action.isPlaying};
        case 'TOGGLE_BUTTONS':
            return {...state,isControlElemsVisible:action.isControlElemsVisible};
        case 'TOGGLE_FULLSCREEN':
            return {...state,fullScreen:action.fullScreen};
        // case 'TOGGLE_CATEGORY':
        //     return {...state,channelCategory:action.category};
        default:
            return state;
                        }
                                                                }

function channelReducer (state=channelState,action=null)        {
    switch (action.type) {
        case 'TOGGLE_CATEGORY' :
            return {...state,chosenCategory:action.category};
        default:
            return state;
                        }
                                                                }

const videoApp = combineReducers({
    videoReducer,
    channelReducer
});
export default videoApp;