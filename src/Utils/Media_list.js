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