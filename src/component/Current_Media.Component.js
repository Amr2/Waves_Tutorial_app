export default function CurrMedia(props){
    return( 
        <> 
            <div className="media-info">
                <img src="" alt="Media`s img here" />
                <h2>Song Name here</h2>
                <h4>Artist Info</h4>
            </div>
            <div className="controller">
                <p>start time</p>
                <input type="range" id="Time_controller" />
                <p>ending time</p>
            </div>   
        </>
    )
}