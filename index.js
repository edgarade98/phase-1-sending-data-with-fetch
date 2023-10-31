// Add your code here
  function submitData (userName, userEmail) {

    const formData = {
        name: userName ,
        email: userEmail , 
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
    
  return fetch("http://localhost:3000/users", userData)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    const userId = data.id;

    document.body.innerHTML = userId;
  })
  .catch(function (error) {
    document.body.innerHTML = error.message;
  });

  submitData();


  

