document.addEventListener("scroll", function() {
    let sections = document.querySelectorAll("section");
    let navLinks = document.querySelectorAll(".navbar-nav .nav-link");
  
    sections.forEach(function(section) {
      let sectionTop = section.offsetTop - 100; 
      let sectionBottom = sectionTop + section.offsetHeight;
  
      if (window.scrollY >= sectionTop && window.scrollY < sectionBottom) {
        let activeSection = section.getAttribute("id");
        
        navLinks.forEach(function(link) {
          link.classList.remove("active");
          link.style.color = "";
        });
        
      let activeLink = document.querySelector(`a[href="#${activeSection}"]`);
      activeLink.classList.add("active");
      activeLink.style.color = "#e6f72f";
      }
    });
  });

  function validateForm() {
    document.getElementById("nameError").innerHTML = "";
    document.getElementById("emailError").innerHTML = "";
    document.getElementById("messageError").innerHTML = "";
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  
    let isValid = true;
  
    if (!name || name.length < 3) {
      document.getElementById("nameError").innerHTML = "Name must be at least 3 characters long.";
      isValid = false;
    }
  
    if (!email || !emailPattern.test(email)) {
      document.getElementById("emailError").innerHTML = "Please enter a valid email address.";
      isValid = false;
    }
  
    if (!message || message.length < 5) {
      document.getElementById("messageError").innerHTML = "Message must be at least 5 characters long.";
      isValid = false;
    }
  
    if (isValid) {
      const successAlert = document.getElementById("successAlert");
      successAlert.style.display = "block";
  
      setTimeout(function() {
        successAlert.style.display = "none";
      }, 2000);
  
      document.getElementById("enquiryForm").reset();
  
      return false;
    }
  
    return false;
  }


  const projects = [
    { id: 1, name: "Project 1", tech: "JavaScript", client: "Client A", duration: "3 months" },
    { id: 2, name: "Project 2", tech: "Python", client: "Client B", duration: "6 months" },
    { id: 3, name: "Project 3", tech: "Java", client: "Client C", duration: "2 months" },
    { id: 4, name: "Project 4", tech: "PHP", client: "Client D", duration: "4 months" },
    { id: 5, name: "Project 5", tech: "Ruby", client: "Client E", duration: "5 months" },
    { id: 6, name: "Project 6", tech: "C#", client: "Client F", duration: "3 months" },
    { id: 7, name: "Project 7", tech: "Node.js", client: "Client G", duration: "6 months" },
    { id: 8, name: "Project 8", tech: "React", client: "Client H", duration: "4 months" },
    { id: 9, name: "Project 9", tech: "Angular", client: "Client I", duration: "2 months" },
    { id: 10, name: "Project 10", tech: "Vue.js", client: "Client J", duration: "3 months" },
    { id: 11, name: "Project 11", tech: "Swift", client: "Client K", duration: "5 months" },
    { id: 12, name: "Project 12", tech: "Kotlin", client: "Client L", duration: "4 months" },
    { id: 13, name: "Project 13", tech: "Go", client: "Client M", duration: "6 months" },
    { id: 14, name: "Project 14", tech: "Django", client: "Client N", duration: "5 months" },
    { id: 15, name: "Project 15", tech: "Flutter", client: "Client O", duration: "2 months" },
    { id: 16, name: "Project 16", tech: "Laravel", client: "Client P", duration: "3 months" },
    { id: 17, name: "Project 17", tech: "WordPress", client: "Client Q", duration: "4 months" },
    { id: 18, name: "Project 18", tech: "React Native", client: "Client R", duration: "6 months" },
    { id: 19, name: "Project 19", tech: "Scala", client: "Client S", duration: "2 months" },
    { id: 20, name: "Project 20", tech: "Elixir", client: "Client T", duration: "5 months" },
    { id: 21, name: "Project 21", tech: "Rust", client: "Client U", duration: "4 months" },
    { id: 22, name: "Project 22", tech: "TypeScript", client: "Client V", duration: "3 months" },
    { id: 23, name: "Project 23", tech: "Spring Boot", client: "Client W", duration: "6 months" },
    { id: 24, name: "Project 24", tech: "Express.js", client: "Client X", duration: "2 months" },
    { id: 25, name: "Project 25", tech: "ASP.NET", client: "Client Y", duration: "5 months" },
    { id: 26, name: "Project 26", tech: "Svelte", client: "Client Z", duration: "3 months" },
    { id: 27, name: "Project 27", tech: "Next.js", client: "Client AA", duration: "4 months" },
    { id: 28, name: "Project 28", tech: "Nuxt.js", client: "Client BB", duration: "2 months" },
    { id: 29, name: "Project 29", tech: "Electron", client: "Client CC", duration: "6 months" },
    { id: 30, name: "Project 30", tech: "Blazor", client: "Client DD", duration: "5 months" }
];

  
let projectsPerPage = 5;
let currentPage = 1;

const recordsPerPageSelect = document.getElementById("recordsPerPage");
recordsPerPageSelect.addEventListener("change", () => {
  projectsPerPage = parseInt(recordsPerPageSelect.value, 10);
  currentPage = 1;
  renderTable(currentPage);
  renderPagination();
});

function renderTable(page) {
  const startIndex = (page - 1) * projectsPerPage;
  const endIndex = page * projectsPerPage;
  const pageProjects = projects.slice(startIndex, endIndex);
  const tableBody = document.getElementById("projectTableBody");
  tableBody.innerHTML = "";

  pageProjects.forEach((project, index) => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${startIndex + index + 1}</td>
      <td>${project.name}</td>
      <td>${project.tech}</td>
      <td>${project.client}</td>
      <td>${project.duration}</td>
    `;
    tableBody.appendChild(row);
  });
}

function renderPagination() {
  const totalPages = Math.ceil(projects.length / projectsPerPage);
  const pagination = document.getElementById("pagination");
  const prevButton = document.getElementById("prevButton");
  const nextButton = document.getElementById("nextButton");

  pagination.querySelectorAll(".page-item:not(#prevButton):not(#nextButton)").forEach(el => el.remove());

  let startPage = Math.max(currentPage - 1, 1);
  let endPage = Math.min(startPage + 2, totalPages);

  if (endPage - startPage < 2) {
    startPage = Math.max(endPage - 2, 1);
  }

  for (let i = startPage; i <= endPage; i++) {
    const pageItem = document.createElement("li");
    pageItem.classList.add("page-item");
    if (i === currentPage) pageItem.classList.add("active");

    const pageLink = document.createElement("a");
    pageLink.classList.add("page-link");
    pageLink.href = "#";
    pageLink.textContent = i;

    pageLink.addEventListener("click", (e) => {
      e.preventDefault();
      currentPage = i;
      renderTable(currentPage);
      renderPagination();
    });

    pageItem.appendChild(pageLink);
    pagination.insertBefore(pageItem, nextButton);
  }

  prevButton.classList.toggle("disabled", currentPage === 1);
  nextButton.classList.toggle("disabled", currentPage === totalPages);

  prevButton.onclick = function (e) {
    e.preventDefault();
    if (currentPage > 1) {
      currentPage--;
      renderTable(currentPage);
      renderPagination();
    }
  };

  nextButton.onclick = function (e) {
    e.preventDefault();
    if (currentPage < totalPages) {
      currentPage++;
      renderTable(currentPage);
      renderPagination();
    }
  };
}

renderTable(currentPage);
renderPagination();


function showCurrent(type) {
  const modal = new bootstrap.Modal(document.getElementById('availabilityModal'));
  const content = document.getElementById('availabilityContent');

  if (type === 'date') {
    const currentDate = new Date().toLocaleDateString();
    content.textContent = `Current Date: ${currentDate}`;
  } else if (type === 'time') {
    const currentTime = new Date().toLocaleTimeString();
    content.textContent = `Current Time: ${currentTime}`;
  }

  modal.show();
}
function getTomorrowDateTime() {
  let today = new Date();
  let tomorrow = new Date(today);
  tomorrow.setDate(today.getDate() + 1);
  let options = { 
      weekday: 'long', 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit', 
      second: '2-digit' 
  };
  return tomorrow.toLocaleDateString('en-US', options);
}
