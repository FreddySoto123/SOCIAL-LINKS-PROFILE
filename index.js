const createCard = () => {
    const cardContainer = document.createElement("div");
    cardContainer.className = "card"; 
  
    const profilePicture = document.createElement("img");
    profilePicture.src = "./assets/images/avatar-jessica.jpeg";
    profilePicture.className = "card-image"; 
  
    const cardName = document.createElement("h2");
    cardName.textContent = "Jessica Randall";
  
    const location = document.createElement("h4");
    location.textContent = "London, United Kingdom";
  
    const bio = document.createElement("h5");
    bio.textContent = "Front-end developer and avid reader.";
  
    const buttonsContainer = document.createElement("div");
    buttonsContainer.className = "contenedor"; 
  
    const socialLinks = ["GitHub", "Frontend Mentor", "LinkedIn", "Twitter", "Instagram"];
  
    socialLinks.forEach((link) => {
      const button = document.createElement("button");
      button.textContent = link;
      buttonsContainer.appendChild(button);
    });
  
    cardContainer.appendChild(profilePicture);
    cardContainer.appendChild(cardName);
    cardContainer.appendChild(location);
    cardContainer.appendChild(bio);
    cardContainer.appendChild(buttonsContainer);
  
    return cardContainer;
  };
  
  const mountPoint = document.querySelector("#app"); 
  const addCardButton = document.querySelector("#addCardButton"); 
  
  const addCard = () => {
    mountPoint.appendChild(createCard());
  };
  
  addCardButton.addEventListener("click", addCard);