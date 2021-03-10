import { getEntries } from "./data/DataManager.js"
import { EntryListComponent } from "./feed/journalEntryList.js"

const showEntryList = () => {
    const postElement = document.querySelector(".entryLog");
    getEntries()
    .then((allEntries) => {
        postElement.innerHTML = EntryListComponent(allEntries);
    })
}



showEntryList();
