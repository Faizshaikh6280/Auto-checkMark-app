"use strict";
const episodeContainer = document.querySelector(".episodes");
const episodes = [
  {
    id: 1,
    name: "James Q Quick's Origin Story",
  },
  {
    id: 2,
    name: "Amy Dutton's Origin Story",
  },
  {
    id: 3,
    name: "The Tech Behind Compressed.fm",
  },
  {
    id: 4,
    name: "Starting a New Development Project",
  },
  {
    id: 5,
    name: "How Do you Start a New Design Project?",
  },
  {
    id: 6,
    name: "Freelancing (Part 1)",
  },
  {
    id: 7,
    name: "Freelancing (Part 2)",
  },
  {
    id: 8,
    name: "The Tech Behind jamesqquick.com",
  },
  {
    id: 9,
    name: "Tech Tech Behind SelfTeach.me",
  },
  {
    id: 10,
    name: "Design Fundamentals (Part 1)",
  },
  {
    id: 11,
    name: "Design Fundamentals (Part 2)",
  },
  {
    id: 12,
    name: "Productivity: Tools, Tips, and Workflows",
  },
  {
    id: 13,
    name: "The Future of Code with No Code",
  },
  {
    id: 14,
    name: "Building the Perfect Desk Setup",
  },
  {
    id: 15,
    name: "Everything You Need to Know to Get Started in SvelteKit",
  },
  {
    id: 16,
    name: "Live Streaming for Beginners",
  },
  {
    id: 17,
    name: "All Things Automated",
  },
  {
    id: 18,
    name: "Amy Gives James a Design Consult",
  },
  {
    id: 19,
    name: "Figma for Everyone",
  },
  {
    id: 20,
    name: "Learning and Building in Public",
  },
  {
    id: 21,
    name: "Getting Your First Dev Job",
  },
  {
    id: 22,
    name: "Hiring a Designer or Getting Your First UI / UX Job",
  },
  {
    id: 23,
    name: "IRL Freelance Proposal",
  },
  {
    id: 24,
    name: "Getting Started on YouTube",
  },
  {
    id: 25,
    name: "Starting your own Podcast",
  },
  {
    id: 26,
    name: "How Blogging Can Change Your Career",
  },
  {
    id: 27,
    name: "Talking to Some of Our Favorite Content Creators",
  },
  {
    id: 28,
    name: "Our Favorite Things: A Crossover Episode with Web Dev Weekly",
  },
  {
    id: 29,
    name: "Freelancing IRL: Unveiling a Site Redesign",
  },
  {
    id: 30,
    name: "Wordpress in 2021",
  },
  {
    id: 31,
    name: "Struggle Bus",
  },
  {
    id: 32,
    name: "Getting Started with TypeScript",
  },
  {
    id: 33,
    name: "Small Design Tweaks that Make All the Difference",
  },
  {
    id: 34,
    name: "Getting git",
  },
  {
    id: 35,
    name: "Crossover Episode with Purrfect Dev",
  },
  {
    id: 36,
    name: "SVGs FTW",
  },
  {
    id: 37,
    name: "Building a Course",
  },
];

episodes.forEach((episode) => {
  const markup = `
  <li>
  <label for="episode-${episode.id}">
    <input type="checkbox" name="episode-${episode.id}" id="episode-${episode.id}" />
    <span>${episode.id} || ${episode.name}</span>
    </label>
    </li>
    `;
  episodeContainer.insertAdjacentHTML("beforeend", markup);
});

// To get Number out of string (Helper function)
const findNumberInString = function (str) {
  const strArr = [...str];
  let Number = "";
  for (let i = 0; i < strArr.length; i++) {
    if (+strArr[i] || +strArr[i] === 0) Number += strArr[i];
  }
  return +Number;
};

let selectStart;
let selectEnd;
const listItems = document.querySelectorAll("span");

listItems.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.shiftKey) {
      e.target.previousElementSibling.classList.toggle("checked");
      selectEnd = findNumberInString(e.target.parentNode.firstElementChild.id);
      if (!selectStart || selectEnd < selectStart) {
        selectStart = 0;
      }
      if (selectStart === selectEnd) {
        selectStart = findNumberInString(
          e.target.closest("li").parentElement.querySelector(".checked").id
        );
        console.log(e.target.closest("li").parentElement);
      }
      const itemsNeedsToCheck = Array.from(listItems).slice(
        selectStart,
        selectEnd - 1
      );
      itemsNeedsToCheck.forEach((item) => {
        item.previousElementSibling.checked = true;
      });
    } else {
      e.target.previousElementSibling.classList.toggle("checked");
      selectStart = findNumberInString(
        e.target.parentNode.firstElementChild.id
      );
    }
  });
});
