import { getEntries } from "./data/DataManager.js"
import { EntryListComponent } from "./feed/journalEntryList.js"


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
    if (event.target.id === "yearSelection") {
      const yearAsNumber = parseInt(event.target.value)
  
      console.log(`User wants to see posts since ${yearAsNumber}`)
    }
  })







// Runnn
const startJournal = () => {
    showEntryList();

}

startJournal();
