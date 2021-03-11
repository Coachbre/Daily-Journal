import { getEntries } from "./data/DataManager.js"
import { EntryListComponent } from "./feed/journalEntryList.js"
import { listSorter } from "./feed/listSorter.js"

const applicationElement = document.querySelector(".dailyJournal");


// shows journal entry logs in list form
const showEntryList = () => {
    const postElement = document.querySelector(".entryLog");
    getEntries()
    .then((allEntries) => {
        postElement.innerHTML = EntryListComponent(allEntries);
    })
}


// event listener- list sort (by month)
applicationElement.addEventListener("change", event => {
    if (event.target.id === "monthSelection") {
      const monthAsNumber = parseInt(event.target.value)
  

      listSorter(monthAsNumber);
    }
  })


  







// Runnn
const startJournal = () => {
    showEntryList();
 

}

startJournal();
