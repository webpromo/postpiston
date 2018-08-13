
function grabAndProcessALLthoseWords(oldText) {  

    var _ = require ('lodash');  // calls the package lodash

    // clean text of code-breaking apostrophes
    const text = oldText.replace(/[.,\/#!$%?\^&\*;:{}=_`~'()]/g," ")
    // text = text.replace("'s"," ");
    // text = text.replace("'"," ");

    // Use split operator to get array of words
     let textWords = text.split(" ");
              
    // Sort Text by length
        let newTextWords = textWords.sort(function(a, b) {
            return b.length - a.length
            }).filter(word => {  // get rid of smaller words
            return word.length > 5});
    // de-dupe
         newTextWords=_.uniq(newTextWords);  // lodash rocks!

         console.log(newTextWords);
         
             // return the sorted word lists
        return newTextWords;
}

export {
    grabAndProcessALLthoseWords
}