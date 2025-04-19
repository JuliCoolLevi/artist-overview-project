import { useEffect, useState } from 'react';
import "./home.css";


const Home = () => {


     useEffect(() => {
        const parallax = () => {
            var floaters1 = document.querySelectorAll(".floater1");
            var floaters2 = document.querySelectorAll(".floater2");
            var yPos = -window.pageYOffset/8;

            floaters1.forEach(el => {
                el.style.top = 20 + yPos + "%";
            });

            floaters2.forEach(el => {
                el.style.top = 50 + yPos + "%";
            });
        };
        
        //the window will always listen to scroll
        window.addEventListener('scroll', parallax);
    
        return () => {
          //once it retreives, it will remove it but it is still there
          window.removeEventListener('scroll', parallax);
        };
      }, []);
    
   
    return (
        <section className='home'>

        <img src="/src/assets/home_background_test.jpeg" alt="background" className="background-img" />


        {/*
        implementing images here like a collage check figma 
        */}

        <img src="/src/assets/pictures/picture1.png" alt="HYBS pic" className="collage-img1 floater1" />

        <img src="/src/assets/pictures/picture2.png" alt="HYBS pic 2" className="collage-img2 floater1"  />

        <img src="/src/assets/pictures/picture3.png" alt="HYBS pic 2" className="collage-img3 floater2" />

        <img src="/src/assets/pictures/picture4.png" alt="HYBS pic 2" className="collage-img4 floater2"  />
        
        <h2 className="heading__middle">Have you been shrimp?</h2>
        


        </section>
    );
}

export default Home