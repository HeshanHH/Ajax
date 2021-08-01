var animalContainer = document.getElementById("animal-info");
var btn = document.getElementById("btn"); // Select Element

// add button click event listner
//  wheren ever you clicked button this code will runs.
btn.addEventListener("click", function() {
var ourRequest = new XMLHttpRequest(); // create the obeject in order to use its functionalies.
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

     // To use Our data inside the function renderHTML , we have to pass it in to function
    renderHTML(ourData);
}

// you have to send the request. This is a must do step because if we do not send the requet we will not get a response.

// think this is like sending message to some one
// 1 you add phone number 
// 2 you fill the message body
// 3 you send the message
// then the massege reciever will send a response to your message.
ourRequest.send();
});

// to organize our code we can use functions.
function renderHTML(data) {
    var htmlString = "";
    for (i = 0; i < data.length; i++) {
        htmlString += "<p>" + data[i].name + " is a " + data[i].species + " .";
    }
    // This is javascrip method to add data to a element before the end
    // https://developer.mozilla.org/en-US/docs/Web/API/Element/insertAdjacentHTML
    animalContainer.insertAdjacentHTML('beforeend', htmlString);
}  