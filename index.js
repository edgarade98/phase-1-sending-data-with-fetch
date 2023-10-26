// Add your code here
  function submitData (userName, userEmail) {

    const formData = {
        userName: "Dan",
        userEmail: "Poodle@gmail.com",
      };

      const userData = {
        method: 'POST', 
        headers: {
          'Content-Type': 'application/json', 
          Accept: 'application/json',
        },
        body: JSON.stringify(formData),
    };
  }
    
fetch("http://localhost:3000/users", submitData)

.then(function (response) {
    return response.json();
  })
  .then(function (object) {
    console.log(object);
  })
  .catch(function (error) {
    alert("Not Good!");
    console.log(error.message);
  });

  

