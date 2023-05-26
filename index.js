// Add your code here
// 1) makes a POST request to /users with a name and email
// 2) handles the POST request response, retrieves the new id value and appends it to the DOM
// 3) handles a failed POST request using catch, appends the error message to the DOM
function submitData(name, email){
    return fetch("http://localhost:3000/users", {
        method:"POST",
        headers: {
            "Content-Type":"application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify({
            name: name,
            email: email
        }),
    }).then(response =>response.json())
    .then(newUser =>{
        //Get ID of newly created user.
        const id= newUser.id;
        //Append the user ID to the DOM.
        const heading = document.createElement("h2");
        heading.textContent = id;
        document.body.append(heading);
    })
    .catch(error =>{
        alert("Error!");
        document.body.append(error)
    })
}


