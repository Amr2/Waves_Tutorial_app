
export default function NavBar(props){
    return( 
        <header className = " Nav-bar" >
            <h1>Waves</h1>
            <button onClick ={()=>{
                console.log("clicked")
            }}>Library</button>
        </header>
    )
}