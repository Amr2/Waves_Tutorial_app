import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWaveSquare } from '@fortawesome/free-solid-svg-icons'


export default function NavBar(props){
    return( 
        <header className = " Nav-bar" >
            <FontAwesomeIcon size="1x" icon ={faWaveSquare} />
            <button onClick ={()=>{
                console.log("clicked")
            }}>Library</button>
        </header>
    )
}