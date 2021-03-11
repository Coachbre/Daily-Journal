/*
 *  Purpose:
 *    To render as many journal entry components as
 *    there are items in the collection exposed by the
 *    data module component
 */
import { getEntries } from "../data/DataManager.js"
import { JournalEntryComponent } from "./journalEntry.js"

// DOM reference to where all entries will be rendered
const entryLog = document.querySelector(".entryLog")

export const EntryListComponent = () => {
   
    // Use the journal entry data from the data module component
     getEntries()
     .then(entries => {

        console.log(entries);

        let entryHTMLRepresentations = "";
        for (const entry of entries) {
            entryHTMLRepresentations += JournalEntryComponent(entry);
    
       
        }
        entryLog.innerHTML += entryHTMLRepresentations;
     })

    // console.log(entries);

    // let entryHTMLRepresentations = "";
    // for (const entry of entries) {
    //     entryHTMLRepresentations += JournalEntryComponent(entry);

   
    // }
    // entryLog.innerHTML += entryHTMLRepresentations;
}
