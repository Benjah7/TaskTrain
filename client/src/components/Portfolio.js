import React from "react";

function Portfolio() {

    return (
        <div className="portfolio">
        <img className="icon" src="https://img.icons8.com/bubbles/256/resume.png"></img>    
        <h1>Portfolio</h1>

            
</div>  

    );
  }


  function Project() {
    return (
      <div className="project-container">
        <div className="project-card">
          <img className="project-img" src="images/photography.jpg" alt="photography" />
          <h3>PHOTOGRAPHY</h3>
          <p className="subtext">this is my project and some text about it.</p>
          <hr/>
          <p className="subtext"><a className="project-link" href="https://pixieset.com/collection/47610886/">view here</a></p>
        </div>
        <div className="project-card"><img className="project-img" src="/images/Delightful_Photo.jpeg" alt="photo"/>
          <h3>CLIENT SPACE</h3>
          <p className="subtext">this is my project and some text about it.</p>
          <hr/>
          <p className="subtext"><a className="project-link" href="https://pixieset.com/collection/47610886/">view here</a></p>
        </div>
        <div id="our-work" className="project-card">
          <img className="project-card" src="images/Lighroom_CB_Editing_Full_HD_Background.jpeg" alt="photo"/>
          <h3>OUR WORK</h3>
          <p className="subtext">this is my project and some text about it.</p>
          <hr/>
          <button id="btn1" type="button">View here</button>
        </div>
      </div>
    );
  }
  const heroSection = document.createElement("section");
  heroSection.classList.add("hero");
  
  const nav = document.createElement("nav");
  
  const logoImg = document.createElement("img");
  logoImg.classList.add("logo");
  logoImg.src = "src/images/cranium 3.PNG";
  logoImg.alt = "logo";
  nav.appendChild(logoImg);
  
  const navList = document.createElement("ul");
  const navItems = ["HOME", "INFO +", "ABOUT", "PORTFOLIO", "CONTACT"];
  for (let i = 0; i < navItems.length; i++) {
    const navItem = document.createElement("li");
    const navLink = document.createElement("a");
    navLink.href = "#" + navItems[i];
    navLink.textContent = navItems[i];
    navItem.appendChild(navLink);
    navList.appendChild(navItem);
  }
  nav.appendChild(navList);
  heroSection.appendChild(nav);
  
  const heroArea = document.createElement("div");
  heroArea.classList.add("hero-area");
  
  const heroText = document.createElement("div");
  heroText.classList.add("hero-text");
  
  const heroTitle = document.createElement("h1");
  heroTitle.textContent = "CRANIUM STUDIO";
  heroText.appendChild(heroTitle);
  
  const heroSubTitle = document.createElement("p");
  heroSubTitle.textContent = "Cinematography | Photograhy | Audio";
  heroText.appendChild(heroSubTitle);
  
  const heroButton = document.createElement("div");
  heroButton.classList.add("button");
  const heroButtonLink = document.createElement("a");
  heroButtonLink.href = "#Home";
  heroButtonLink.textContent = "Home";
  heroButton.appendChild(heroButtonLink);
  heroText.appendChild(heroButton);
  
  heroArea.appendChild(heroText);
  
  const socials = document.createElement("div");
  socials.classList.add("socials");
  
  const socialItems = [
    {
      url: "https://www.twitter.com/kijana ya yule  ",
      icon: "M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"
    },
    {
      url: "https://www.linkedin.com",
    // icon: "M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12
    }
]
  
  
  export default Project;
  