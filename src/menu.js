export const renderMenu = (oldContent) => {
  // 1.) clear page contents
  clearPage(oldContent);

  // 2.) render menu contents
  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menuContainer");

  const menuHeader = document.createElement("div");
  menuHeader.setAttribute("id", "menuHeader");
  menuHeader.textContent = " Menu ";

  const breadContainer = document.createElement("div");
  breadContainer.setAttribute("class", "sectionContainer");
  const breadHeader = document.createElement("div");
  breadHeader.setAttribute("class", "sectionHeader");
  breadHeader.textContent = "Breads";
  const breadContent = document.createElement("div");
  breadContent.setAttribute("class", "sectionContent");

  const sweetContainer = document.createElement("div");
  sweetContainer.setAttribute("class", "sectionContainer");
  const sweetHeader = document.createElement("div");
  sweetHeader.setAttribute("class", "sectionHeader");
  sweetHeader.textContent = "Sweet Treats";
  const sweetContent = document.createElement("div");
  sweetContent.setAttribute("class", "sectionContent");

  const sandwichContainer = document.createElement("div");
  sandwichContainer.setAttribute("class", "sectionContainer");
  const sandwichHeader = document.createElement("div");
  sandwichHeader.setAttribute("class", "sectionHeader");
  sandwichHeader.textContent = "Sandwiches";
  const sandwichContent = document.createElement("div");
  sandwichContent.setAttribute("class", "sectionContent");

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
    const breadItem = document.createElement("div");
    breadItem.setAttribute("class", "item");
    const nameDiv = document.createElement("p");
    nameDiv.setAttribute("class", "nameDiv");
    nameDiv.textContent = `${currentBread.name}`;
    const priceDiv = document.createElement("p");
    priceDiv.setAttribute("class", "priceDiv");
    priceDiv.textContent = `${currentBread.price}`;

    breadItem.appendChild(nameDiv);
    breadItem.appendChild(priceDiv);
    breadContent.appendChild(breadItem);
  }

  class sweetOption {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
  }

  const sweetOptions = [
    new sweetOption("Keylime Pie", "$4.00"),
    new sweetOption("Sea Salt Brownie", "$3.50"),
    new sweetOption("Brown Butter Toffee Cookie", "$3.00"),
  ];

  // Add new sweet option to sweet section
  for (let i = 0; i < sweetOptions.length; i++) {
    const currentSweet = sweetOptions[i];
    currentSweet.sweetId = `sweet${i}`;

    const sweetItem = document.createElement("div");
    sweetItem.setAttribute("class", "item");
    const nameDiv = document.createElement("p");
    nameDiv.setAttribute("class", "nameDiv");
    nameDiv.textContent = `${currentSweet.name}`;
    const priceDiv = document.createElement("p");
    priceDiv.setAttribute("class", "priceDiv");
    priceDiv.textContent = `${currentSweet.price}`;

    sweetItem.appendChild(nameDiv);
    sweetItem.appendChild(priceDiv);
    sweetContent.appendChild(sweetItem);
  }

  class sandwichOption {
    constructor(name, description, price) {
      this.name = name;
      this.description = description;
      this.price = price;
    }
  }

  const sandwichOptions = [
    new sandwichOption(
      "The Brando",
      "Salami, lettuce, tomato, provolone cheese, banana peppers, and olives served on a fresh baguette with garlic aioli",
      " $9.00"
    ),
    new sandwichOption(
      "The Kenzo",
      "Roast beef served with swiss cheese, lettuce, tomato, roasted red peppers on fresh rye bread with garlic aioli",
      "$10.00"
    ),
    new sandwichOption(
      "The Shrimpo",
      "Chicken meatballs, marinara, mozzerella cheese on a french baguette",
      "$8.00"
    ),
  ];

  // Add new sandwich to sandwich section
  for (let i = 0; i < sandwichOptions.length; i++) {
    const currentSandwich = sandwichOptions[i];
    currentSandwich.sandwichID = `sandwich${i}`;

    const sandwichItem = document.createElement("div");
    sandwichItem.setAttribute("class", "item");
    const nameDiv = document.createElement("p");
    nameDiv.setAttribute("class", "nameDiv");
    nameDiv.textContent = `${currentSandwich.name}`;
    const descriptionDiv = document.createElement("div");
    descriptionDiv.setAttribute("class", "descriptionDiv");
    descriptionDiv.textContent = `${currentSandwich.description}`;
    const priceDiv = document.createElement("p");
    priceDiv.setAttribute("class", "priceDiv");
    priceDiv.textContent = `${currentSandwich.price}`;

    sandwichItem.appendChild(nameDiv);
    sandwichItem.appendChild(descriptionDiv);
    sandwichItem.appendChild(priceDiv);
    sandwichContent.appendChild(sandwichItem);
  }

  const content = document.getElementById("content");
  content.appendChild(menuHeader);
  content.appendChild(menuContainer);
  menuContainer.appendChild(breadContainer);
  breadContainer.appendChild(breadHeader);
  breadContainer.appendChild(breadContent);
  menuContainer.appendChild(sweetContainer);
  sweetContainer.appendChild(sweetHeader);
  sweetContainer.appendChild(sweetContent);
  menuContainer.appendChild(sandwichContainer);
  sandwichContainer.appendChild(sandwichHeader);
  sandwichContainer.appendChild(sandwichContent);
};

export const clearPage = (currentContent) => {
  const oldContent = currentContent;
  while (oldContent.firstChild) {
    currentContent?.removeChild(oldContent.lastChild);
  }
};
