import { getEntries } from "./data/DataManager.js"
import { EntryList } from "./feed/journalEntryList.js"

const showEntryList = () => {
    const postElement = document.querySelector(".entryLog");
    getEntries()
    .then((allEntries) => {
        postElement.innerHTML = EntryList(allEntries);
    })
}



showEntryList();
