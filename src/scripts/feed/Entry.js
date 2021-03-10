/*
 *  Purpose: To render a single journal entry as an
 *           HTML representation of the data
 */
export const Entry = (entryObj) => {
    return `
        <section id="entry--${entryObj.id}" class="journalEntry">
            ${entryObj.date}
        </section>
    `
}