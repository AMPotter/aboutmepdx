'use strict';

var deservedHero = prompt('Is Andrew Michael Potter Boy Wonder the hero Gotham deserves?').toUpperCase()

if (deservedHero === 'Y' || 'YES') {
    console.log('No, friend. You are the hero Gotham deserves. You had it in you all along.');
} else if (deservedHero === 'N' || 'NO') {
    console.log('Of course not. He is but a fool and a dreamer.');
} else {
    console.log('Input not recognized, ya dingus.');
}

