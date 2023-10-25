import img from "../Assets/Images/corrosal1.jpg"
interface LastMainDeals{
    image:any,
    country:string,
    touristPlace:string,
    reviewsStar:number,
    description:string;
    catogory:string[]
    price:number,
    territory:string,
    days:number
}

const LastMainDeals:LastMainDeals[] = [
    {
        image: "carousel1",
        country: "Spain",
        touristPlace: "Barcelona City Beach",
        reviewsStar: 5,
        description: "Barcelona City Beach is a stunning beach in the heart of Barcelona, perfect for sunbathing and swimming.",
        catogory:["Last Minute Deals","destination"],
        price: 220,
        territory:"England",
        days:15
    },
    {
        image: "carousel2",
        country: "Italy",
        touristPlace: "Venice Canals",
        reviewsStar: 4,
        description: "Explore the enchanting canals of Venice, known for its romantic gondola rides.",
        catogory:["Last Minute Deals","offer","destination"],
        price: 300,
        territory:"America",
        days:17
    },
    {
        image: "carousel3",
        country: "France",
        touristPlace: "Eiffel Tower",
        reviewsStar: 4.5,
        description: "Visit the iconic Eiffel Tower in Paris, a symbol of romance and architectural beauty.",
        catogory:["Last Minute Deals","landing carowsal","destination"],
        price: 150,
        territory:"Caspian Valley",
        days:16
    },
    {
        image: "carousel4",
        country: "USA",
        touristPlace: "Grand Canyon",
        reviewsStar: 4.8,
        description: "Experience the breathtaking beauty of the Grand Canyon in Arizona, USA.",
        catogory:["Last Minute Deals","Long Card","best tour package","landing carowsal"],
        price: 180,
        territory:"Japan",
        days:13
    },
    {
        image: "carousel5",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["landing carowsal","destination"],
        price: 250,
        territory:"Russia",
        days:19
    },
    {
        image: "carousel5",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["landing carowsal","destination"],
        price: 250,
        territory:"Japan",
        days:10
    },
    {
        image: "carousel5",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["landing carowsal"],
        price: 250,
        territory:"Russia",
        days:19
    },
    {
        image: "carousel5",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["offer","landing carowsal"],
        price: 250,
        territory:"Russia",
        days:19
    },
    {
        image: "carousel5",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["Long Card","best tour package","landing carowsal","offer"],
        price: 250,
        territory:"Russia",
        days:19
    },
    {
        image: "carousel5",
        country: "Greece",
        touristPlace: "Santorini",
        reviewsStar: 5,
        description: "Santorini offers stunning sunsets and picturesque views of white-washed buildings against the sea.",
        catogory:["Long Card","best tour package","landing carowsal","offer"],
        price: 250,
        territory:"Russia",
        days:19
    }
]
export default LastMainDeals;