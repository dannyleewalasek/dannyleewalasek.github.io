const navigationButtons = document.querySelectorAll(".link");

navigationButtons.forEach((link) => {
  link.addEventListener("click", (el) => {
    link.classList += " selectedlink";
    const associatedDiv = document.querySelector(link.id);
    associatedDiv.scrollIntoView();
    associatedDiv.classList.remove("scroll");
    associatedDiv.classList.add("scrolled");
    navigationButtons.forEach((link2) => {
      link === link2 ? null : (link2.className = "link");
    });
  });
});

const MakeActive = (event) => {
  console.log(event);
};

languageIcons = [
  "adobe.svg",
  "es6.svg",
  "git.svg",
  "html.svg",
  "javascript.svg",
  "node.svg",
  "npm.svg",
  "react.svg",
  "redux.svg",
  "typescript.svg",
  "vscode.svg",
];

let languagesString = "";

languageIcons.forEach(
  (link) =>
    (languagesString = languagesString.concat(
      `<object class="language" data="./prog/svg/${link}" alt="programming language logo"></object>`
    ))
);

document
  .querySelector(".programmingLanguages")
  .insertAdjacentHTML("afterbegin", languagesString);

const contactIconSVG = [
  "github.svg",
  "insta.svg",
  "linkedin.svg",
  "twitter.svg",
  "whatsapp.svg",
];

contactString = "";

contactIconSVG.forEach(
  (link) =>
    (contactString = contactString.concat(
      `<object type="image/svg+xml" class="contactIcon" data="./contact_svg/${link}" alt="${link.slice(
        0,
        link.length - 3
      )}"></object>`
    ))
);

document
  .querySelector(".footer")
  .insertAdjacentHTML("afterbegin", contactString);

const contactIcons = document.querySelectorAll(".contactIcon");

document.querySelector(".contactLink").addEventListener("click", () => {
  contactIcons.forEach((icon) => {
    icon.className = "contactIcon contactHighlight";
    setTimeout(function () {
      icon.className = "contactIcon";
    }, 2000);
  });
});

const RenderProjects = () => {
  const TEST = {
    title: "hey",
    description: "yes",
    tech: ["./", "dd"],
  };

  const projectTemplate = ({ title, description, tech }) => {
    return (
      `<div class="mediumProject">
  <div class="projectOverlay">
    <h1>${title}</h1>
    <p>
    ${description}
    </p>
    <div class="projectTechnologies">` +
      tech.forEach((tech) => console.log("rr")) +
      `</div>
    <div>
      <div class="projectLink">CODE</div>
      <div class="projectLink">LIVE</div>
    </div>
  </div>
</div>`
    );
  };

  console.log(projectTemplate(TEST));
};

RenderProjects();
