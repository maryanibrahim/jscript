var user = {
    username: 'batman',
    password: 'Alfred1960ROCKS',
    shouldOpenBatCave: function (username, password) { }
};

function shouldOpenBatCave(username, password) {
    if ((user.username === 'batman') && (user.password === 'Alfred1960KPO')) {

        return true;
    } else {

        return false;
    }
};

if (shouldOpenBatCave(user.username === 'batman') && (user.password === 'Alfred1960KPO')) {
    console.log('Welcome back batman!!');
} else {
    console.log("Sorry, you can't enter the Batcave, try again..");
};