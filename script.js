// Home js Start here

const roles = ["Web Developer", "QA enthusiast"];
    let currentRoleIndex = 0;
    let currentCharIndex = 0;
    const dynamicText = document.getElementById("dynamic-text");

    function type() {
        if (currentCharIndex < roles[currentRoleIndex].length) {
            dynamicText.textContent += roles[currentRoleIndex].charAt(currentCharIndex);
            currentCharIndex++;
            setTimeout(type, 150);
        } else {
            setTimeout(erase, 1000);
        }
    }

    function erase() {
        if (currentCharIndex > 0) {
            dynamicText.textContent = roles[currentRoleIndex].substring(0, currentCharIndex - 1);
            currentCharIndex--;
            setTimeout(erase, 100);
        } else {
            currentRoleIndex = (currentRoleIndex + 1) % roles.length;
            setTimeout(type, 500);
        }
    }

    document.addEventListener("DOMContentLoaded", function() {
        setTimeout(type, 500);
    });

// Resume js start here
function showSection(sectionId) {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        if (section.id === sectionId) {
            section.classList.remove('hidden');
        } else {
            section.classList.add('hidden');
        }
    });

    const buttons = document.querySelectorAll('.nav-button');
    buttons.forEach(btn => btn.classList.remove('border', 'border-green-500', 'text-green-500'));
    document.getElementById(sectionId + '-btn').classList.add('border', 'border-green-500', 'text-green-500');
}

// function showSection(sectionId) {
//   const sections = document.querySelectorAll(".section");
//   sections.forEach((section) => {
//     section.classList.add("hidden");
//     section.classList.remove("absolute", "top-0", "w-full");
//   });

//   const activeSection = document.getElementById(sectionId);
//   activeSection.classList.remove("hidden");
//   activeSection.classList.add("absolute", "top-0", "w-full");

//   // Update button styles
//   const buttons = document.querySelectorAll(".nav-button");
//   buttons.forEach((btn) =>
//     btn.classList.remove("border", "border-green-500", "text-green-500")
//   );
//   document
//     .getElementById(sectionId + "-btn")
//     .classList.add("border", "border-green-500", "text-green-500");
// }

// Resume js end here

// Portfolio js start here

const projects = [
  {
    number: "01",
    title: "Alumni Association of Leading University",
    description:
      "The Alumni Association of Leading University offers easy sign-up, alumni programs, career opportunities, and giving options. Future enhancements include updating personal info, searching the directory, community engagement, news updates, mentorship programs, and reunion planning.",
    tech: "React.js, Express.js, MongoDB",
    image: "./assets/project_003.webp",
  },
  {
    number: "02",
    title: "DryShades",
    description:
      "An android based application which built using cross platform like Flutter with Dart language and Firebase that allows users to browse houses, buy and rent houses online.",
    tech: "Dart, Flutter, Firebase",
    image: "./assets/project_0001.webp",
  },
  {
    number: "03",
    title: "E-Shop",
    description:
      "An android based clothing application which built using cross platform like Flutter with Dart language and Firebase that allows users to browse and purchase cloths online.",
    tech: "Dart, Flutter, Firebase",
    image: "./assets/project_0002.webp",
  },
];

let currentProjectIndex = 0;

function updateProjectDetails(index) {
  const project = projects[index];
  document.getElementById("project-number").textContent = project.number;
  document.getElementById("project-title").textContent = project.title;
  document.getElementById("project-description").textContent =
    project.description;
  document.getElementById("project-tech").textContent = project.tech;
  document.getElementById("project-image").src = project.image;
  document.getElementById(
    "project-image"
  ).alt = `Screenshot of the ${project.title.toLowerCase()} showing a ${project.description.toLowerCase()}`;

  // Enable/Disable buttons based on the current index
  const prevBtn = document.getElementById("prev-button");
  const nextBtn = document.getElementById("next-button");

  prevBtn.disabled = index === 0;
  nextBtn.disabled = index === projects.length - 1;

  prevBtn.classList.toggle("opacity-25", index === 0);
  prevBtn.classList.toggle("cursor-not-allowed", index === 0);
  nextBtn.classList.toggle("opacity-25", index === projects.length - 1);
  nextBtn.classList.toggle("cursor-not-allowed", index === projects.length - 1);
}

function previousProject() {
  if (currentProjectIndex > 0) {
    // Added condition to prevent going below 0
    currentProjectIndex--;
    updateProjectDetails(currentProjectIndex);
  }
}

function nextProject() {
  if (currentProjectIndex < projects.length - 1) {
    // Added condition to prevent going above the last index
    currentProjectIndex++;
    updateProjectDetails(currentProjectIndex);
  }
}

// Initialize the project details on page load
updateProjectDetails(currentProjectIndex);

// Portfolio js end here
