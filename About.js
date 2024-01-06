
import React from 'react';
import './About.css';

const About = () => {
  const T = {
    width: '1200px',
    height: '500px',
    borderRadius:'5px',
    //marginRight:'20px',
  };
  const S = {
   marginRight:'20px',
   color:'darkblue',
   fontFamily:'bold',
  };
  const D={
    display:'inline-block',
    marginLeft:'-5px',
    fontFamily:'cursive',
    color:'darkblue',
  };
   const Q={
    width:'250px',
    height:'250px',
    marginTop:'20px',
    marginBottom:'80px',
    borderRadius:'10px',
   };
   const C={
    width:'250px',
    height:'250px',
    marginTop:'20px',
    marginLeft:'10px',
    marginBottom:'80px',
    borderRadius:'10px',
   };
   const J={
    width:'250px',
    height:'250px',
    marginTop:'20px',
    marginLeft:'10px',
    marginBottom:'80px',
    borderRadius:'10px',
   };
   const G={
   // marginTop:'20px',
    color:'Purple',
    fontFamily:'Cursive',
    marginLeft:'12px',
    marginBottom:'8px',
   };
   const Stiv={
    color:'darkblue',
    marginTop:'-35px',
    fontFamily:'bold',
   };
   const Div={
    color:'darkblue',
   };
   const Gle={
    color:'darkblue',
    fontFamily:'bold',
   };
  const cardsData = [
    {
      id: 1,
      title: 'Henry',
      image: 'http://4.bp.blogspot.com/-WHerB3OaCD4/U2XnSEUg1CI/AAAAAAAAIaY/MJR-wwes5ho/s1600/Rupert+Penry+Jones-classic-Images.jpg',
      paragraph: 'I just want to thank you for your help. I was so pleased work and grateful. Keep up the excellent work. Your site.',
    },
    {
      id: 2,
      title: 'Jenny',
      image: 'https://media-manager.starsinsider.com/gallery/1080/na_5a05d719e18b9.jpg',
      paragraph: 'I am so impressed that you would do such a thing as lower my ticket price when the fare dropped,when I have paid  it.',
    },
    {
      id: 3,
      title: 'Crystal',
      image: 'https://i.pinimg.com/originals/8e/58/f4/8e58f4f96254dad3ba892315df407944.jpg',
      paragraph: 'hank you for making it so easy. I really love the way I can view the itinerary and put payment info on the same page!',
    },
  ];

  return (
    <div className="about-page">
      <div className="additional-content">
        <img style={T} src="https://wallpaperaccess.com/full/1968255.jpg" alt="Airport"></img>
        <p style={D}>Airline reservation systems are systems that allow an airline to sell their inventory. It contains information on schedules and fares and contains a database of reservations and of tickets issued. ARSs are part of passenger service systems (PSS), which are applications supporting direct contact with the passenger.
        The first airline was the German airship company DELAG, founded on November 16, 1909.[1] The four oldest non-airship airlines that still exist are the Netherlands'.</p>
      <h1 style={Gle}>What People Say</h1>
      </div>

      <div className="cards-container">
        {cardsData.map((card) => (
          <div key={card.id} className="card">
            <img className="card-image" src={card.image} alt={card.title} />
            <div className="card-title">{card.title}</div>
            <div className="card-paragraph">{card.paragraph}</div>
          </div>
        ))}
      </div>
      <div >
        <h1 style={Stiv}>History</h1>
        <h3 style={Div}>A Few Words About Us</h3>
       <p style={G}>*Cheapflights is the worlds first inspirational travel search service that focuses on what’s really important: your Interests and your Budget!</p>
       <p style={G}>Carl Icahn told me to stay away from airlines. In good times, the unions take away the profits, and in bad times, the cost of oil kills you.</p>
       <img style={Q} src="https://images.pexels.com/photos/804463/pexels-photo-804463.jpeg?cs=srgb&dl=airport-indoors-people-804463.jpg&fm=jpg"></img>
      <img  style={C} src="http://www.aviationtoday.com/wp-content/uploads/2014/09/Full20Airplane20Cabin.jpg"></img>
      <img style={J} src="http://wonderfulengineering.com/wp-content/uploads/2014/05/airplane-wallpaper-1.jpg"></img>
      </div>
    </div>
    
  );
};

export default About;



