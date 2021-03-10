export const listSorter = () => {

    // HTML to be returned to Entry list component
    return `
        <div class="selector">
            <div class="selector__item">
                Posts since <select id="monthSelection">
                    <option>10</option>
                    <option>07</option>
                    <option>03</option>
                    <option>01</option>
                </select>
                <span id="postCount">0</span>
            </div>
        </div>
    `
}