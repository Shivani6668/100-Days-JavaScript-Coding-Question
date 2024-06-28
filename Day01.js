//Question 01 :-  Write a function find longestWord that takes a string as input and returns the largest word in the string. If there are multiple longest word, return the first one encountered.


const findLongestword = (str)=>{
if(str.trim().length === 0){
    return false;
}
let words = str.split(" ")
// first way
// words = words.sort((a,b)=> a.length-b.length)
// return words.at(-1)

//second way
// words = words.sort((a,b)=> b.length-a.length)
// return words[0]


//Third way using reduce method

return words.reduce((acc,curr)=> curr.length > acc.length ? curr : acc, "")
}

console.log(findLongestword("Hello I Am Shivani Parmar I have 2 Years Of Experience As MERN Developer"));