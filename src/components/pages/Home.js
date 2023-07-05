import React from 'react';
import '../../App.css';
import './home.css'
import HeroSection from '../HeroSection';


function Home() {
  return (
    <><><>
      <HeroSection />

    </><div className="Announcements"><h3><u>Important Announments</u></h3><br />
        <p>-The conference program schedule is now available.</p><br />
        <p>-The NPSC 2020 will be held online during 23 to 29 June 2020.</p></div></>
        <div className="dates"><h3><u>Dates</u></h3><br/>
        <div className="tentative">
        <p><pre>
      Jun 15, 2020<br/>
                         
        Sep 15, 2020<br/>    

        Sep 15, 2020 <br/>        

        Oct 15, 2020 <br/>    

        Dec 17, 2020 <br/>    
        </pre>
       </p>
       </div>

       <div className="events">
        <p><pre>
        Full Paper Submission<br/>
          &nbsp;Acceptance Notification<br/>Registration opens<br/>Camera ready<br/>Conference Date 
        </pre>
       </p>
       </div>

     </div>
        
        <marquee behavior="scroll" direction="left" scrollamount="15">
        <img src="img-2.jpg" width="120" height="80" alt="SponsorImg" />
        </marquee>

        <p class="marquee">
        <span> IEEE -- POWERGRID -- NPHAS -- OPAL-F TECHNOLOGY -- POSOCO -- PES -- IOCL -- HPCL -- &nbsp;</span>
      </p></>
  );
}

export default Home;