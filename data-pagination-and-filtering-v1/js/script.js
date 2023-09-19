/*
@author Adeline Ndacyayisenga
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

const itemsPerPage = 9;

/*
This function will create and insert/append the elements needed to display a "page" of nine students
@param list - an array of items to display on the pages
@param page - represents the requested page number
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
Creates and inserts/appends the elements needed for the pagination buttons
@param list - an array of items to display on the pages
*/
const linkList = document.querySelector('.link-list'); //the element we will be adding to the pagination buttons
function addPagination (list) {
   const buttons = Math.ceil(list.length/itemsPerPage);
   
   linkList.innerHTML = ''; //removes any existing pagination buttons that might have been displayed previously

   for (let i = 1; i <= buttons; i ++) {
      const button = `
      <li>
         <button type="button">${i}</button>
      </li>
      `;
      linkList.insertAdjacentHTML('beforeend', button);
      
   }

   linkList.querySelector('button').classList.add('active');

}

/*
Listens for clisks on the buttons and displays the corresponding items on the page
@param e -is the current click event
*/

linkList.addEventListener('click', (e) => {

   const event = e.target;
   const activeButton = document.querySelector('.active');
   const isClicked = event.closest('button');//makes sure user clicked the button

   if(activeButton && isClicked) {
      activeButton.className = ''; //remove active class from any other button
   }
   if(isClicked) {
      isClicked.classList.add('active'); //add the active class to the clicked button
      showPage(data, isClicked.innerHTML);
   }

   //Alternative Solution
   
   // if(event.tagName === 'BUTTON') { //i.e the element is clicked
   //    //first active button
   //    const activeButton = document.querySelector('.active');
   //    activeButton.className = '';
   //    event.className = 'active'; //adds active to the button that was clicked
   //    showPage(data, event.textContent);
   // }
});

// Calls the functions

showPage(data, 1);
addPagination(data);