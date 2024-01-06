
import React from 'react';
import { useNavigate } from 'react-router-dom';
const Card = ({ title, content, imageUrl }) => {
  let cardStyle = {
   flex: '1',
    border: '1px solid #ddd',
    borderRadius: '8px',
    padding: '8px',
    marginTop: '8px',
    marginLeft: '20px',
    marginRight: '20px',
    marginBottom: '8px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    transition: 'transform 0.3s ease-in-out',
    cursor: 'pointer',
  };

  let titleStyle = {
    fontFamily: 'sans-serif',
    fontSize: '14px',
    fontWeight: 'bold',
    marginBottom: '8px',
    paddingTop:'12px',
  };

  let contentStyle = {
    fontFamily: 'sans-serif',
    fontSize: '12px',
  };

  let imageStyle = {
   
    width:"100%",
    height:'100%',
   
  };

  cardStyle[':hover'] = {
    transform: 'scale(1.05)',
  };

  return (
    <div style={cardStyle}>
      <img src={imageUrl} alt={title} style={imageStyle} />
      <div style={titleStyle}>{title}</div>
      <div style={contentStyle}>{content}</div>
    </div>
  );
};

const Home = () => {
  let containerStyle = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    paddingBottom: '110px',
  };

  let imageStyle = {
    width: '100%',
    height:'100%',
    marginBottom: '8px',
    
    
  };

  let textStyle = {
    position: 'absolute',
    top: '30px',
    left: '300px',
    fontFamily: 'bold',
    fontSize: '25px',
    color: 'White',
    marginTop:'80px',
    marginLeft:'210px',
  };

  let cardContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '100%',
    gap: '5px',  
  };
  let A={
    color:'white',
    backgroundColor:'coral',
    position:"absolute",
    marginTop:"110px",

  };

  let cardData = [
    {
      title: 'CONSTANT IMPROVEMENT',
      content: 'Airlines can enhance  passenger airplanes that are used to transport cargo Vacation packages . ',
      imageUrl: 'https://c8.alamy.com/comp/B5MA5A/passengers-in-business-class-cabin-transatlantic-flight-lufthasna-B5MA5A.jpg',
    },
    {
      title: 'EXPERIENCED STAFF ',
      content: 'United Airlines flight attendants are taking matters into their own hands Vacation packages',
      imageUrl: 'http://img-cdn.brainberries.co/wp-content/uploads/2017/04/hottest-flight-attendants-stewardesses-1-emirates.jpg',
    },
    {
      title: 'AIR TRANSPORTATION',
      content: 'The worldwide air transportation network is responsible for the mobility Vacation packages .',
      imageUrl: 'http://1.bp.blogspot.com/-iWZuTbn7f5E/UA5zW7ra8iI/AAAAAAAAH4s/AYDd7Euys8I/s1600/Airplane_aeroplane_aircraft_jet_wallpapers+(54).jpg',
    },
    {
      title: 'AIRLINES',
      content: 'The worldwide air transportation network is responsible for the mobility Vacation packages .',
      imageUrl: 'https://www.bookotrip.com/sights-and-shores/wp-content/uploads/2017/09/World-map-with-infographic-airplane-route-concept-shutterstock_145341472-Converted.png',
    },
  ];
  const navigate =useNavigate();
const handleJoinnowClick=()=>{
  navigate('/services')
}

  return (
    <div style={containerStyle}>
      <img
        src="https://s1.1zoom.me/b5248/804/Passenger_Airplanes_Evening_Sky_Flight_520132_2560x1440.jpg"
        style={imageStyle}
        alt="Flight image"
      />
      <button style={A} onClick={handleJoinnowClick}>Join Now</button>
      <p style={textStyle}>JOIN EMIRATES <br/> TO WIN A TRIP FOR 2*</p>

      <div style={cardContainerStyle}>
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            content={card.content}
            imageUrl={card.imageUrl}
          />
        ))}
        </div>
       
    </div>
  );
        };

export default Home;
