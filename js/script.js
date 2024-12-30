let navbar = document.querySelector('.header .navbar');
let searchForm = document.querySelector('.header .search-form');
let contactInfo = document.querySelector('.contact-info');

// Menu button toggle
document.querySelector('#menu-btn').onclick = () => {
  navbar.classList.toggle('active');
  searchForm.classList.remove('active');
};

// Search functionality
// Search functionality
document.querySelector('#search-btn').onclick = () => {
  searchForm.classList.toggle('active');
  navbar.classList.remove('active');
};

// Handle search on Enter key and search button
const searchBox = searchForm.querySelector('input[type="search"]');
const performSearch = () => {
  const query = searchBox.value.toLowerCase(); // Get search value
  const matchingElement = document.querySelector(`.${query}`); // Find matching element

  if (matchingElement) {
    matchingElement.scrollIntoView({ behavior: 'smooth', block: 'center' }); // Scroll to element
  }
};

searchBox.addEventListener('keypress', (e) => {
  if (e.key === 'Enter') {
    e.preventDefault(); // Prevent form submission
    performSearch();
  }
});

searchForm.querySelector('label').onclick = (e) => {
  e.preventDefault(); // Prevent default label action
  performSearch();
};


document.querySelector('#info-btn').onclick = () => {
  contactInfo.classList.add('active');
};

// Close contact info
document.querySelector('#close-contact-info').onclick = () => {
  contactInfo.classList.remove('active');
};

// Reset active states on scroll
window.onscroll = () => {
  navbar.classList.remove('active');
  searchForm.classList.remove('active');
  contactInfo.classList.remove('active');
};

// Swiper sliders
var swiper = new Swiper(".home-slider", {
  loop: true,
  grabCursor: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".reviews-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".blogs-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    640: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    991: {
      slidesPerView: 3,
    },
  },
});

var swiper = new Swiper(".logo-slider", {
  loop: true,
  grabCursor: true,
  spaceBetween: 20,
  breakpoints: {
    450: {
      slidesPerView: 2,
    },
    640: {
      slidesPerView: 3,
    },
    768: {
      slidesPerView: 4,
    },
    1000: {
      slidesPerView: 5,
    },
  },
});
