'use strict';

var deservedHero1;

function deservedHero() {
    deservedHero1 = prompt('Is Andrew Michael Potter (Boy Wonder) the hero Gotham deserves?').toUpperCase();

    if (deservedHero1 === 'Y' || deservedHero1 === 'YES') {
        console.log('No, friend. You are the hero Gotham deserves. You had it in you all along.');
    } else if (deservedHero1 === 'N' || deservedHero1 === 'NO') {
        console.log('Of course not. He is but a fool and a dreamer.');
    } else {
        whileDeservedHero();
        // while (deservedHero !== 'Y' || deservedHero !== 'YES' || deservedHero !== 'N' || deservedHero !== 'NO') {
        //     console.log('Input not recognized, ya dingus. We\'re looking for a y/n or a yes/no, it\'s NOT difficult.');
        // }
        // deservedHero();
    }
}

function whileDeservedHero() {
    while (deservedHero1 !== 'Y' && deservedHero1 !== 'YES' && deservedHero1 !== 'N' && deservedHero1 !== 'NO') {
        console.log('deservedHero While' + deservedHero1);
        console.log('Input not recognized, ya dingus. We\'re looking for a y/n or a yes/no, it\'s NOT difficult.');
        deservedHero();
    }
}

deservedHero();


// var eatenEgg = prompt('Do you believe that Andrew Michael Potter (America\'s Boy) enjoys a nice plate of eggs on a cold winter\'s morn?').toUpperCase();

// if (eatenEgg === ('Y' || 'YES')) {
//     console.log('You\'re as wise as you are brave. Andrew Michael Potter (Humanity\'s Peak) needs more protein than four average hibernating bears.');
// } else if (deservedHero === ('N' || 'NO')) {
//     console.log('You complete nitwit, everybody needs several eggs to stay alive in the harsh cold of the North. Andrew Michael Potter (Really Good Looking) is no exception. It is the sole trait he shares with all of humanity.');
// } else {
//     console.log('Please, I\'m begging you, these are simple yes or no questions.');
// }

