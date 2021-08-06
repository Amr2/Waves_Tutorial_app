import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faPlay , faAngleDoubleLeft , faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons'

export default function CurrMedia(props){
    return( 
        <div className="media-cont"> 
            <div className="media-info">
                <img src={props.CurrMedia.cover} alt="Media`s img here" />
                <h2>{props.CurrMedia.name}</h2>
                <h4>{props.CurrMedia.artist}</h4>
            </div>
            <div className="contorller-cont">
                <div className="time-controller">
                    <p>start time</p>
                    <input type="range" id="Time_controller"/>
                    <p>ending time</p>
                </div>
                <div className="options-controler">
                    <FontAwesomeIcon  size="2x" icon={faAngleDoubleLeft}/>                    
                    <FontAwesomeIcon  size="2x" icon={faPlay}/>                    
                    <FontAwesomeIcon  size="2x" icon={faAngleDoubleRight}/>                    
                </div>
                    
            </div>
        </div>
    )
}