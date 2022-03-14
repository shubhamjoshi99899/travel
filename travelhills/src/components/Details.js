import React from 'react'
import stay from "../background/stay.jpg";
import airplane from "../background/airplane.jpg";
import train from "../background/train.jpg";
import hotel from "../background/hotel.jpg";
import kumaun from "../background/kumaun.jpg";
import weather from "../background/weather.jpg";
import height from "../background/height.jpg";
import trek from "../background/trek.jpg";


const Details = () => {
    return (
        <div>
           <div class=" title-container">
            <h1 className="main-heading text-center fw-bolder">
                 Details
           </h1>   
        </div>     
    <div class="container-service">
        
        <div class="servicebox" style={{backgroundImage:`url(${weather})`}}>
            <div class="icon"  style={{background:"#4eb7ff"}}>
            <ion-icon name="sunny-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    
                    <p>
                    </p>
                </div>
            
        </div>
        <div class="servicebox" style={{backgroundImage:`url(${airplane})` }}>
            <div class="icon" style={{background:"#fd6494"}}>
            <ion-icon name="airplane-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p></p>
                </div>
            
        </div>
        <div class="servicebox" style={{backgroundImage:`url(${train})`}}>
            <div class="icon" style={{background:"#43f390"}}>
            <ion-icon name="train-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p>
                    </p>
                </div>
            
        </div>
        <div class="servicebox" style={{backgroundImage:`url(${kumaun})`}}>
            <div class="icon" style={{background:"#ffb508"}}>
            <ion-icon name="location-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p> </p>
                </div>
            
        </div>
        <div class="servicebox" style={{backgroundImage:`url(${hotel})`}}>
            <div class="icon" style={{background:"#37ba82"}}>
            <ion-icon name="bed-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p>
                    </p>
                </div>
           
        </div>
        <div class="servicebox"  style={{backgroundImage:`url(${height})`}}>
            <div class="icon" style={{background:"#cd57ff"}}>
            <ion-icon name="pulse-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p></p>
                </div>
            
        </div>

        <div class="servicebox"  style={{backgroundImage:`url(${stay})`}}>
            <div class="icon" style={{background:"#000878"}}>
            <ion-icon name="calendar-number-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p></p>
                </div>
            
        </div>

        <div class="servicebox"  style={{backgroundImage:`url(${trek})`, opacity:'0.5'}}>
            <div class="icon" style={{background:"#f700a1"}}>
            <ion-icon name="heart-circle-outline"></ion-icon></div>
                <div class="content">
                    <h2></h2>
                    <p></p>
                </div>
            
        </div>
    </div>
  
        </div>
    )
}

export default Details
