import "./styles.css";
import { renderMenu } from "./menu";

function homePageLoad() {
  const header = document.getElementById("header");
  const content = document.getElementById("content");

  const homepageHeader = document.createElement("div");
  homepageHeader.setAttribute("id", "homepageHeader");
  homepageHeader.innerText = "Brando's Bread Co.";

  const tabsContainer = document.createElement("div");
  tabsContainer.setAttribute("id", "tabsContainer");
  const homeTab = document.createElement("button");
  homeTab.setAttribute("class", "tab");
  homeTab.setAttribute("id", "homeTab");
  homeTab.textContent = "Home";
  const menuTab = document.createElement("button");
  menuTab.setAttribute("class", "tab");
  menuTab.setAttribute("id", "menuTab");
  menuTab.textContent = "Menu";
  menuTab.addEventListener("click", () => renderMenu(content));
  const contactTab = document.createElement("button");
  contactTab.setAttribute("class", "tab");
  contactTab.setAttribute("id", "contactTab");
  contactTab.innerText = "Contact";
  tabsContainer.appendChild(homeTab);
  tabsContainer.appendChild(menuTab);
  tabsContainer.appendChild(contactTab);

  const mainPic = document.createElement("img");
  mainPic.src = "../cinnamonBreadPic.jpg";
  mainPic.setAttribute("id", "mainPic");

  const description = document.createElement("div");
  description.setAttribute("id", "description");
  description.innerText =
    "Brando's Bread Co. was established in 2023 after a passion of cooking, baking, and serving others ignited the desire to open a quaint local shop to fulfill the community with a little taste of home.";

  header.appendChild(homepageHeader);
  header.appendChild(tabsContainer);
  content.appendChild(mainPic);
  content.appendChild(description);

  return content;
}

document.body.appendChild(homePageLoad());
