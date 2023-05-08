import { clearPage } from "./menu";

export const renderHomePage = (oldContent) => {
  clearPage(oldContent);

  const mainPic = document.createElement("img");
  mainPic.src = "./images/cinnamonBreadPic.jpg";
  mainPic.setAttribute("id", "mainPic");

  const description = document.createElement("div");
  description.setAttribute("id", "description");
  description.innerText =
    "Brando's Bread Co. was established in 2023 after a passion of cooking, baking, and serving others ignited the desire to open a quaint local shop to fulfill the community with a little taste of home.";

  const content = document.getElementById("content");
  content.appendChild(mainPic);
  content.appendChild(description);
};
