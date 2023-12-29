import { useNavigate } from 'react-router-dom';
import './HomePage.css' ;

export default function HomePage () {
  const navigate = useNavigate();


  const nextPage = () => {
    navigate("/journal/new")
   }


    return (
      <>
 <section classname="header">
   <h1>BLESSDAY</h1>
 </section>

< div className='homepage-container'>
      <section className="header-verse">
        <p style={{ fontStyle: 'italic' }}>"Consider it pure joy, my brothers and sisters, whenever you face trials of many kinds because
           you know that the testing of your faith produces perseverance. Let perseverance finish its work
           so that you may be mature and complete, not lacking anything." <br /> James 1:2-4 </p>
           
      </section>
      <img src = "./branches.jpg" alt="flowers"></img>
     

      {/* <section classname="about-app-container">
        <h1>Welcome to Blessday! We're thrilled to have you here. This is a safe and supportive space where you can freely express your thoughts and feelings.
           Thank you for joining our community.</h1>
    </section> */}
</div>
  
    <div classname="button">
        <button onClick={nextPage}>CLICK HERE</button>
    </div>
    </>
  )
}  