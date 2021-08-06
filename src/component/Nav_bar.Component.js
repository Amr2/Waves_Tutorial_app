
export default function Nav_bar(){
    return(
        <header>
            <h1>Waves</h1>
            <button onClick ={()=>{
                console.log("clicked")
            }}>Library</button>
        </header>
    )
}