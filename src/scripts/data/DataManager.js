let postCollection = [];

export const usePostCollection = () => {
  //Best practice: we don't want to alter the original state, so
  //make a copy of it and then return it
  //The spread operator makes this quick work
  return [...postCollection];
}



export const getEntries = () => {

    return fetch("http://localhost:8088/entries")
    .then(response => response.json())
    .then(parsedResponse => {
        // do something with response here
        return parsedResponse;
    })
}