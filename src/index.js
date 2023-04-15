import "./styles.css";
console.log("If you can read this, you're really pretty!");

function pageLoad() {
  const content = document.getElementById("content");

  const menuHeader = document.createElement("menuHeader");
  menuHeader.setAttribute("id", "menuHeader");
  menuHeader.innerText = "Brando's Bread Co.";
  const mainPic = document.createElement("img");
  mainPic.src = "../cinnamonBreadPic.jpg";
  mainPic.setAttribute("id", "mainPic");
  const description = document.createElement("div");
  description.innerText =
    "Brando's Bread Co. was established in 2023 after a passion of cooking, baking, and serving others ignited the desire to open a quaint local shop to fulfill the community with a little taste of home.";
  content.appendChild(menuHeader);
  content.appendChild(mainPic);
  content.appendChild(description);
  return content;
}

document.body.appendChild(pageLoad());
