import React from 'react'
interface LandingPageCorousal{
    image:any,
    location:string,
    place:string,
    star:number,
    ratingMembers:number;
    price:number,
    days:number


}

const LandingPageCorousal:LandingPageCorousal[] =  
   [
        {
            image: "carousel1",
            location: "Location 1",
            place: "Place 1",
            star: 4,
            ratingMembers: 100,
            price: 150,
            days: 7
        },
        {
            image: "carousel2",
            location: "Location 2",
            place: "Place 2",
            star: 5,
            ratingMembers: 200,
            price: 200,
            days: 5
        },
        {
            image: "carousel3",
            location: "Location 3",
            place: "Place 3",
            star: 4.5,
            ratingMembers: 150,
            price: 180,
            days: 6
        },
        {
            image: "carousel4",
            location: "Location 4",
            place: "Place 4",
            star: 3.5,
            ratingMembers: 120,
            price: 130,
            days: 8
        },
        {
            image: "carousel5",
            location: "Location 5",
            place: "Place 5",
            star: 4.8,
            ratingMembers: 180,
            price: 220,
            days: 4
        }
    ];


export default LandingPageCorousal