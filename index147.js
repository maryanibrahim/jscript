var user = {
    username: 'batman',
    password: 'Alfred1960KPO',
    shouldOpenBatCave: function (username) { }
};

function shouldOpenBatCave(username) {
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