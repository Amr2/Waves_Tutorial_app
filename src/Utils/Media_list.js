import { v4 as uuid4 } from "uuid";

export default function List() {
    return[
        {
            name    : "Run & Hide",
            artist  : "Shiah Maisel, Zeus X Crona",
            colors  : ["#9c404f", "#8b58ae"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/985/run-hide-1627650036-OcV78sQM47.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/985/325x325/run-hide-1627650033-y0torEshi4.jpg",
            id      : uuid4(),
            active  : true
        },
    
        {
            name    : "Done",
            artist  : "Halvorsen, Clarx",
            colors  : ["#5d3d32", "#5a578c"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/987/done-1628164834-3ITLd7Ittj.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/987/325x325/done-1628164832-GKubJ2Y0tb.jpg",
            id      : uuid4(),
            active  : false
        },
    
        {
            name    : "Daydream",
            artist  : "Romi, Cream Blade",
            colors  : ["#454c56", "#87624f"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/972/daydream-1625749236-Tum3XCVtRr.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/972/325x325/daydream-1625749232-JZfwnSfGyq.jpg",
            id      : uuid4(),
            active  : false
        },
        {
            name    : "Crazy",
            artist  : "Frizzy The Streetz, Simbai",
            colors  : ["#c7bd27", "#030303"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/989/crazy-1628499636-F933qiPFG2.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/989/325x325/crazy-1628499632-VOIryHX8Vp.jpg",
            id      : uuid4(),
            active  : false
        },
        {
            name    : "On",
            artist  : "Alisky",
            colors  : ["#fbf4f5", "#ad7eac"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/988/on-1628236834-VhfCgH80f1.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/988/325x325/on-1628236830-thIoL6gSQZ.jpg",
            id      : uuid4(),
            active  : false
        },

        {
            name    : "Throne (Lost Identities Remix)",
            artist  : "Lost Identites, Rival",
            colors  : ["#0f171a", "#bbc0ba"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/978/throne-lost-identities-remix-1626440435-Ptftvq3VPE.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/978/325x325/throne-lost-identities-remix-1626440432-uuKxda3Brb.jpg",
            id      : uuid4(),
            active  : false
        },
        {
            name    : "How To Love",
            artist  : "Highlnd, Rachel Lorin",
            colors  : ["#9c1e25", "#010101"],
            audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/979/how-to-love-1626782433-0wh3281IzZ.mp3",
            cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/979/325x325/how-to-love-1626782429-axYFgOliEn.jpg",
            id      : uuid4(),
            active  : false
        },


    ]
};

// const List = [
//     {
//         name    :"",
//         artist  :"",
//         colors  :["color1", "color2"],
//         audio   : "",
//         cover   :"",
//         id      :uuid4(),
//         active  :Boolean
//     }
// ];



// online 
// [
//     {
//         name    : "Run & Hide",
//         artist  : "Shiah Maisel, Zeus X Crona",
//         colors  : ["#9c404f", "#8b58ae"],
//         audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/985/run-hide-1627650036-OcV78sQM47.mp3",
//         cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/985/325x325/run-hide-1627650033-y0torEshi4.jpg",
//         id      : uuid4(),
//         active  : true
//     },

//     {
//         name    : "Done",
//         artist  : "Halvorsen, Clarx",
//         colors  : ["#5d3d32", "#5a578c"],
//         audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/987/done-1628164834-3ITLd7Ittj.mp3",
//         cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/987/325x325/done-1628164832-GKubJ2Y0tb.jpg",
//         id      : uuid4(),
//         active  : false
//     },

//     {
//         name    : "Daydream",
//         artist  : "Romi, Cream Blade",
//         colors  : ["#454c56", "#87624f"],
//         audio   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/972/daydream-1625749236-Tum3XCVtRr.mp3",
//         cover   : "https://ncsmusic.s3.eu-west-1.amazonaws.com/tracks/000/000/972/325x325/daydream-1625749232-JZfwnSfGyq.jpg",
//         id      : uuid4(),
//         active  : false
//     },
// ]



// offline
// [
//     {
//         name    : "Run & Hide",
//         artist  : "Shiah Maisel, Zeus X Crona",
//         colors  : ["#9c404f", "#8b58ae"],
//         audio   : `${process.env.PUBLIC_URL}/offline/Midea/run-hide-1627650036-OcV78sQM47.mp3`,
//         cover   : `${process.env.PUBLIC_URL}/offline/Img/run-hide-1627650033-y0torEshi4.jpg`,
//         id      : uuid4(),
//         active  : true
//     },

//     {
//         name    : "Done",
//         artist  : "Halvorsen, Clarx",
//         colors  : ["#5d3d32", "#5a578c"],
//         audio   : `${process.env.PUBLIC_URL}/offline/Midea/done-1628164834-3ITLd7Ittj.mp3`,
//         cover   : `${process.env.PUBLIC_URL}/offline/Img/done-1628164832-GKubJ2Y0tb.jpg`,
//         id      : uuid4(),
//         active  : false
//     },

//     {
//         name    : "Daydream",
//         artist  : "Romi, Cream Blade",
//         colors  : ["#454c56", "#87624f"],
//         audio   : `${process.env.PUBLIC_URL}/offline/Midea/daydream-1625749236-Tum3XCVtRr.mp3`,
//         cover   : `${process.env.PUBLIC_URL}/offline/Img/daydream-1625749232-JZfwnSfGyq.jpg`,
//         id      : uuid4(),
//         active  : false
//     },
// ]