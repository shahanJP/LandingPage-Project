
const navList = document.getElementById("navbar__list");
const sections = document.querySelectorAll("section");

// build the nav

const createNavMenu = () => {
  // make ul list items for each sections by iteration//
  const sections = document.querySelectorAll("section");
  sections.forEach((section) => {
    const li = document.createElement("li");

    li.innerHTML = `<a href="#${section.id}" data-nav="${section.id}" class="menu__link" >${section.dataset.nav}</a>`;

    navList.appendChild(li);
    //console.log(navList)
  });
};
createNavMenu();


const SkewedOne = document.querySelector('.SkewedOne')
const SkewedTwo = document.querySelector('.SkewedTwo');
window.addEventListener('scroll', ()=>{
    const value1= -15+window.scrollY/45;
    const value2= 15+window.scrollY/-45;
    SkewedOne.style.transform="skewY("+ value1 + "deg)";
    SkewedTwo.style.transform="skewY("+ value2 + "deg)"
})
// Adding class 'active' to section when near top of viewport//
//Adding and removing active to section links and view port//
const navBarLink = document.querySelectorAll(".navbar__menu a");

const options = {
  threshold: "0.5",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((e) => {
    //console.log(e.target.id)
    e.target.classList.remove("your-active-class");
    if (e.isIntersecting) {
      e.target.classList.add("your-active-class");
      navBarLink.forEach((link) => {
        link.classList.remove("active-link");
        if (e.target.id === link.dataset.nav) {
          link.classList.add("active-link");
        }
      });
    }
  });
}, options);

sections.forEach((section) => {
  observer.observe(section);
});

// Scroll to section on link click

navBarLink.forEach((li) => {
  li.addEventListener("click", (e) => {
    e.preventDefault();
    const sectionId = e.target.attributes.href.value;
    //console.log(sectionId)
    const section = document.querySelector(sectionId);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  });
});

//Header hide out after 3 sec while not scrolling
const header = document.querySelector(".page__header");

let checkScroll;
let prevScrollY = window.pageYOffset;
window.addEventListener("scroll", () => {
  clearTimeout(checkScroll);
  if (prevScrollY < window.pageYOffset) {
    checkScroll = setTimeout(() => {
      header.style.opacity = "0";
    }, 3000);
  } else {
    header.style.opacity = "1";
  }
  prevScrollY = window.pageYOffset;
});

// scroll to top icon

const TopPage = document.querySelector("#TopPage");
// toggle active class to hide and show icon after 600 px
window.addEventListener("scroll", () => {
  TopPage.classList.toggle("active", window.scrollY > 600);
});

// scroll to top by clicking icon on bottom page
TopPage.addEventListener("click", () => {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
});
