const user = {
    username: 'batman',
    password:'Alfred1960ROCKS!'
  };
  
  console.log(user);
  console.log(user.username);

  const nameCap = user.username.charAt(0).toUpperCase()+ user.username.substring(1);
  console.log(nameCap);

   const password2 = user.password.replace(1960,"    ");
  console.log(password2);

