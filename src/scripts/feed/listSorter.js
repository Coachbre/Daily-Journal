export const listSorter = () => {


    // HTML to be returned to daily journal component
    return `
         <div class="sort">
                <div class="sort__item">
                    Posts since 
                    <select id="monthSelection">
                         <option>2020</option>
                         <option>2019</option>
                         <option>2018</option>
                         <option>2017</option>
                    </select>
                   <span id="postCount">0</span>
                </div>
            </div>
    `
}
console.log("HELLO");

