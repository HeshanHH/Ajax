var ourRequest = new XMLHttpRequest(); // create the obeject in order to use its functionalies.
var paragraph = document.getElementById("pgh"); // select paragraph by id
var text = "";
// Go to URL and Get the data from it.
ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-1.json'); // with that we can say what we want to do.

// GET - Getting data / recieving data
// POST - Send data

// Now We can do something with that data. Comming from the requet.
ourRequest.onload = function() {
    // we can do anything we like to do with the recieved data. 
    // Try console loging.
    console.log(ourRequest.responseText);
    console.log(JSON.parse(ourRequest.responseText));

    // it is better to store those recieved data in a variable.\
    // JSON.parse() is browser build in methode to convert string to JSON (mostly stringfy Json data)
    var ourData = JSON.parse(ourRequest.responseText);
    
    text = document.createTextNode(ourRequest.responseText); // assign text to with data
    paragraph.appendChild(text); // append text to paraghraph
}

// you have to send the request. This is a must do step because if we do not send the requet we will not get a response.

// think this is like sending message to some one
// 1 you add phone number 
// 2 you fill the message body
// 3 you send the message
// then the massege reciever will send a response to your message.
ourRequest.send();