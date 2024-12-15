const sender = 'Matt';

function sendTo(from, to) {
    console.log(`From ${from} to ${to}`);
}

sendTo(sender, 'Sarah'); // *error
sendTo(null); // **

//-----------------------------------------//


function sendTo(to, from = 'CC') {
    console.log(`From ${from} to ${to}`);
}

sendTo('Max'); // *** From Max to CC
sendTo('Ben', 'Jay'); // **** From Jay to Ben