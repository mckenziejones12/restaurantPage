export const renderMenu = (oldContent) => {
  // 1.) clear page contents
  clearPage(oldContent);

  // 2.) render menu contents
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuContainer");

  const menuHeader = document.createElement("div");
  menuHeader.setAttribute("id", "menuHeader");
  menuHeader.textContent = "~ Menu ~";

  class BreadOption {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const breadOptions = [
    new BreadOption("Rustic French", "$6.00"),
    new BreadOption("Potato", "$5.00"),
    new BreadOption("Sourdough", "$7.00"),
  ];

  // Add new bread to bread section
  for (let i = 0; i < breadOptions.length; i++) {
    const currentBread = breadOptions[i];
    currentBread.breadId = `bread${i}`;

    // create div for each item
    const breadSection = document.createElement("div");
    breadSection.setAttribute("id", "breadSection");
    const nameDiv = document.createElement("p");
    nameDiv.setAttribute("class", "nameDiv");
    nameDiv.textContent = `${currentBread.name}`;
    const priceDiv = document.createElement("p");
    priceDiv.setAttribute("class", "priceDiv");
    priceDiv.textContent = `${currentBread.price}`;

    breadSection.appendChild(nameDiv);
    breadSection.appendChild(priceDiv);
    menuContainer.appendChild(breadSection);
  }

  const content = document.getElementById("content");
  content.appendChild(menuHeader);
  content.appendChild(menuContainer);
};

export const clearPage = (currentContent) => {
  const oldContent = currentContent;
  while (oldContent.firstChild) {
    currentContent?.removeChild(oldContent.lastChild);
  }
};
