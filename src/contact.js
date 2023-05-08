import { clearPage } from "./menu";

export const renderContact = (oldContent) => {
  // clear page contents
  clearPage(oldContent);

  // render contact information
  const contactContainer = document.createElement("div");
  contactContainer.setAttribute("id", "contactContainer");

  const contactPageHeader = document.createElement("div");
  contactPageHeader.setAttribute("class", "pageHeader");
  contactPageHeader.textContent = "Contact Us!";

  const contactInfo = document.createElement("div");
  contactInfo.setAttribute("class", "sectionContainer");
  const email = document.createElement("a");
  email.setAttribute("class", "infoItem");
  email.setAttribute("id", "email");
  email.textContent = "brandobreadco@gmail.com";
  const address = document.createElement("div");
  address.setAttribute("class", "infoItem");
  address.textContent = "369 Damn You Fine Way, Fort Collins, CO 80524";
  const phoneNumber = document.createElement("div");
  phoneNumber.setAttribute("class", "infoItem");
  phoneNumber.textContent = "555-901-1234";

  contactInfo.appendChild(address);
  contactInfo.appendChild(email);
  contactInfo.appendChild(phoneNumber);

  const hoursContainer = document.createElement("div");
  hoursContainer.setAttribute("class", "sectionContainer");
  const hoursHeader = document.createElement("div");
  hoursHeader.setAttribute("class", "sectionHeader");
  hoursHeader.textContent = "Hours";
  const hoursContent = document.createElement("ul");
  hoursContent.setAttribute("id", "hoursContent");
  const sunHours = document.createElement("li");
  sunHours.textContent = "Sunday 7am - 3pm";
  const monHours = document.createElement("li");
  monHours.textContent = "Monday 8am - 1pm";
  const tuesHours = document.createElement("li");
  tuesHours.textContent = "Tuesday 7am - 3pm";
  const wedHours = document.createElement("li");
  wedHours.textContent = "Wednesday 7am - 3pm";
  const thursHours = document.createElement("li");
  thursHours.textContent = "Thursday 7am - 3pm";
  const friHours = document.createElement("li");
  friHours.textContent = "Friday 7am - 3pm";
  const satHours = document.createElement("li");
  satHours.textContent = "Saturday 7am - 3pm";

  hoursContainer.appendChild(hoursHeader);
  hoursContainer.appendChild(hoursContent);
  hoursContent.appendChild(sunHours);
  hoursContent.appendChild(monHours);
  hoursContent.appendChild(tuesHours);
  hoursContent.appendChild(wedHours);
  hoursContent.appendChild(thursHours);
  hoursContent.appendChild(friHours);
  hoursContent.appendChild(satHours);

  const content = document.getElementById("content");
  content.appendChild(contactContainer);
  contactContainer.appendChild(contactPageHeader);
  contactContainer.appendChild(contactInfo);
  contactContainer.appendChild(hoursContainer);
};
