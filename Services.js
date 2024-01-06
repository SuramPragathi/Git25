import React from "react";
import { Link } from 'react-router-dom';
import './Services.css';

const Services = () => {
  let K={
textDecoration:'none',
color:'white',
  }
  const cardsData = [
    {
      id: 1,
      imageSrc: "https://i.pinimg.com/originals/e6/46/db/e646dbd96b7eee3b173cf3b269e3394d.jpg",
      content: (
        <>
          <h3>Origin: Hyd</h3>
          <h3>Depart: Delhi</h3>
          <p>Price: $80</p>
        </>
      ),
    },
    {
      id: 2,
      imageSrc: "https://www.travelturtle.world/wp-content/uploads/2021/06/indgo.jpg",
      content: (
        <>
          <h3>Origin: Hyd</h3>
          <h3>Depart: Pune</h3>
          <p>Price: $100</p>
        </>
      ),
    },
    {
      id: 3,
      imageSrc: "https://cdn.airplane-pictures.net/images/uploaded-images/2011/2/6/120843.jpg",
      content: (
        <>
          <h3>Origin: Chennai</h3>
          <h3>Depart: Vizag</h3>
          <p>Price: $120</p>
        </>
      ),
    },
    {
      id: 4,
      imageSrc: "https://thehimalayantimes.com/uploads/imported_images/wp-content/uploads/2020/09/Qatar-Airways.jpg",
      content: (
        <>
          <h3>Origin: Mumbai</h3>
          <h3>Depart: Italy</h3>
          <p>Price: $150</p>
        </>
      ),
    },
    {
      id: 5,
      imageSrc: "https://aviationweek.com/sites/default/files/styles/crop_freeform/public/2021-06/united_airlines_a321neo_2021_order_photo_source_airbus.jpg?itok=BoUiKh0O",
      content: (
        <>
          <h3>Origin: Delhi</h3>
          <h3>Depart: Us</h3>
          <p>Price: $180</p>
        </>
      ),
    },
    {
      id: 6,
      imageSrc: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1c/cc/95/14/alleppey-backwater-tour.jpg?w=1200&h=900&s=1",
      content: (
        <>
          <h3>Fly to Alleppey From $549*OW</h3>
        </>
      ),
    },
    {
      id: 7,
      imageSrc: "http://upload.wikimedia.org/wikipedia/commons/b/bf/Lano_Beach_-_Savai'i,_2007.jpg",
      content: (
        <>
          <h3>Fly to Goa From $549*OW</h3>
        </>
      ),
    },
    {
      id: 8,
      imageSrc: "https://1.bp.blogspot.com/-ic1o1pJdAD0/UxtghGkdleI/AAAAAAAAAjw/gVWnTcHmgwM/s1600/Lonavala-khandala.jpg",
      content: (
        <>
          <h3>Pune to Lonavala From $117 OW</h3>
        </>
      ),
    },
    {
      id: 9,
      imageSrc: "https://www.taleof2backpackers.com/wp-content/uploads/2020/01/Hooghly-Bridge-1024x680.jpg",
      content: (
        <>
          <h3>Kolkata to Howrah From $200* OW</h3>
        </>
      ),
    },
    {
      id: 10,
      imageSrc: "http://amazingindiablog.in/wp-content/uploads/2015/05/ImageReader.jpg",
      content: (
        <>
        <h3>WIN <br />
          A TRIP FOR 2*</h3>
        </>
      ),
    },  
  ];
  return (
    <div className="card-container">
      <div className="upper-cards">
        {cardsData.slice(0, 5).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageSrc} alt={`Card ${card.id}`} />
            <p>{card.content}</p>
           <button > <Link style={K} to="/book">Book Now</Link></button>
          </div>
        ))}
      </div>
      <h2 className="cards-heading">EXPLORE MORE DESTINATIONS</h2>
      <div className="lower-cards">
        {cardsData.slice(5, 10).map((card) => (
          <div key={card.id} className="card">
            <img src={card.imageSrc} alt={`Card ${card.id}`} />
            <p>{card.content}</p>
           <button><Link style={K} to="/book">Book Now</Link></button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;





