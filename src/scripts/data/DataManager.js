 bk-postmanPractice
  
=======
 main
export const getEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}