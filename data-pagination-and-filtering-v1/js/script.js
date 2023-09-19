/*
@author Adeline Ndacyayisenga
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

function showPage (list, page) {
   const startIndex = (page * itemsPerPage) - itemsPerPage;
   const endIndex = (page * itemsPerPage) - 1;

   const studentList = document.querySelector('.student-list');
   studentList.innerHTML = ''; //removes any previously displayed students

   for(let i = 0; i < list.length; i ++) {
      if (i >= startIndex && i <= endIndex) {
         const html = `
         <li class="student-item cf">
         <div class="student-details">
           <img class="avatar" src="${list[i].picture.medium}" alt="Profile Picture">
           <h3>${list[i].name.first} ${list[i].name.last}</h3>
           <span class="email">${list[i].email}</span>
         </div>
         <div class="joined-details">
           <span class="date">${list[i].registered.date}</span>
         </div>
       </li>
         `;

         studentList.insertAdjacentHTML('beforeend', html);
      }
   }
   
}

/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

function addPagination () {
   
}

// Call functions
showPage(data, 1);