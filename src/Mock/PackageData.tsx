interface datas{
    image:any,
    country:string,
    touristPlace:string,
    reviewsStar:number,
    description:string;
    catogory:string[]
    price:number,
    territory:string,
    days:number,
    guideName?:string,
    position?:string
}

const LastMainDeals:datas[] = [
    {
        image: "destination1",
        country: "Spain",
        touristPlace: "Barcelona City Beach",
        reviewsStar: 5,
        description: "Barcelona City Beach is a stunning beach in the heart of Barcelona, perfect for sunbathing and swimming.",
        catogory:["Last Minute Deals","destination","articles","guide info","left grid"],
        price: 220,
        territory:"England",
        days:15,
        guideName:"Cacics coold",
        position:"Manager"

    },
    {
        image: "destination1",
        country: "Italy",
        touristPlace: "Venice Canals",
        reviewsStar: 4,
        description: "Explore the enchanting canals of Venice, known for its romantic gondola rides.",
        catogory:["Last Minute Deals","offer","destination","guide info","left grid"],
        price: 300,
        territory:"America",
        days:17,
        guideName:"Solden kalos",
        position:"Manager"
    },
    {
        image: "destination1",
        country: "France",
        touristPlace: "Eiffel Tower",
        reviewsStar: 4.5,
        description: "Visit the iconic Eiffel Tower in Paris, a symbol of romance and architectural beauty.",
        catogory:["Last Minute Deals","landing carowsal","related destination","destination","best tour package","guide info","left grid"],
        price: 150,
        territory:"Caspian Valley",
        days:16,
        guideName:"Horke Pels",
        position:"HR"
    },
    {
        image: "../Assets/Images/destination2.jpg",
        country: "USA",
        touristPlace: "Grand Canyon",
        reviewsStar: 4.8,
        description: "Experience the breathtaking beauty of the Grand Canyon in Arizona, USA.",
        catogory:["Last Minute Deals","Long Card","related destination","landing carowsal","guide info","left grid"],
        price: 180,
        territory:"Japan",
        days:13,
        guideName:"Solden kalos",
        position:"Manager"
    },
    {
        image: "destination1",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["landing carowsal","destination","related destination","guide info","left grid"],
        price: 250,
        territory:"Russia",
        days:19,
        guideName:"Solden kalos",
        position:"Manager"
    },
    {
        image: "destination1",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["landing carowsal","destination","related destination","guide info","left grid"],
        price: 250,
        territory:"Japan",
        days:10,
        guideName:"Solden kalos",
        position:"Manager"
    },
    {
        image: "../Assets/Images/destination2.jpg",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["landing carowsal","guide info","related destination","left grid"],
        price: 250,
        territory:"Russia",
        days:19,
        guideName:"Solden kalos",
        position:"Manager"
    },
    {
        image: "../Assets/Images/destination2.jpg",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["offer","landing carowsal","related destination","left grid"],
        price: 250,
        territory:"Russia",
        days:19,
        guideName:"Horke Pels",
        position:"HR"
    },
    {
        image: "../Assets/Images/destination2.jpg",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["Long Card","best tour package","related destination","landing carowsal","offer","articles"],
        price: 250,
        territory:"Russia",
        days:19,
        guideName:"Horke Pels",
        position:"HR"
    },
    {
        image: "../Assets/Images/destination2.jpg",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["Long Card","best tour package","landing carowsal","offer","articles"],
        price: 250,
        territory:"Russia",
        days:19,
        guideName:"Horke Pels",
        position:"HR"
    }
]
export default LastMainDeals;