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
    }
}

function whileDeservedHero() {
    while (deservedHero1 !== 'Y' && deservedHero1 !== 'YES' && deservedHero1 !== 'N' && deservedHero1 !== 'NO') {
        console.log('Input not recognized, ya dingus. We\'re looking for a y/n or a yes/no, it\'s NOT difficult.');
        deservedHero();
    }
}

deservedHero();

var eatenEgg1;

// function eatenEgg() {
    eatenEgg1 = prompt('Do you believe that Andrew Michael Potter (America\'s Boy) enjoys a nice plate of eggs on a cold winter\'s morn?').toUpperCase();

    if (eatenEgg1 === 'Y' || eatenEgg1 === 'YES') {
        console.log('You\'re as wise as you are brave. Andrew Michael Potter (Humanity\'s Peak) needs more protein than four average hibernating bears.');
    } else if (eatenEgg1 === 'N' || eatenEgg1 === 'NO') {
        console.log('This is so wildly incorrect, you simply must try a fried egg on wheat toast with salt and pepper and maybe a touch of hot sauce and/or cheese.');
    } else {
        whileEatenEgg();
    }
// }

function whileEatenEgg() {
    while (eatenEgg1 !== 'Y' && eatenEgg1 !== 'YES' && eatenEgg1 !== 'N' && eatenEgg1 !== 'NO') {
        console.log('You need to decide definitively whether or not AMP (Future Savior) likes eggs, because he has to get an A on this assignment. Y/N only.');
        eatenEgg();
    }
}

// eatenEgg();

var speaksGerman1;

function speaksGerman() {
    speaksGerman1 = prompt('Can Andrew Michael Potter (Mensa VIP) speak the soft and rounded language of German?').toUpperCase();

    if (speaksGerman1 === 'Y' || speaksGerman1 === 'YES') {
        console.log('Ja klar, mein Freund!');
    } else if (speaksGerman1 === 'N' || speaksGerman1 === 'NO') {
        console.log('Na ja, es ist schon ne lange zeit seit ich Deutsch gesprochen habe, aber ich kann es still ein bisschen verstehen.');
    } else {
        whileSpeaksGerman();
    }
}

function whileSpeaksGerman() {
    while (speaksGerman1 !== 'Y' && speaksGerman1 !== 'YES' && speaksGerman1 !== 'N' && speaksGerman1 !== 'NO') {
        console.log('Bitte noch mal, aber mit "Yes" oder "No".');
        speaksGerman();
    }
}

speaksGerman();

var heavyMetal1;

function heavyMetal() {
    heavyMetal1 = prompt('Is Andrew Michael Potter (Prince of Darkness) a purveyor of heavy riffs?').toUpperCase();

    if (heavyMetal1 === 'Y' || heavyMetal1 === 'YES') {
        console.log('Yeah, man. The dude riffs.');
    } else if (heavyMetal1 === 'N' || heavyMetal1 === 'NO') {
        console.log('Nah, dude. The boy can riff.');
    } else {
        whileHeavyMetal();
    }
}

function whileHeavyMetal() {
    while (heavyMetal1 !== 'Y' && heavyMetal1 !== 'YES' && heavyMetal1 !== 'N' && heavyMetal1 !== 'NO') {
        console.log('Try again, this time with a yes or no. Think about this long and hard, don\'t goof it up.');
        heavyMetal();
    }
}

heavyMetal();

var teaBoy1;

function teaBoy() {
    teaBoy1 = prompt('Is Andrew Michael Potter (Endlessly Quoted By Philosophers) an adept hand at making tea?').toUpperCase();

    if (teaBoy1 === 'Y' || teaBoy1 === 'YES') {
        console.log('He knows his oolongs from his pu-ehrs, you\'d best believe.');
    } else if (teaBoy1 === 'N' || teaBoy1 === 'NO') {
        console.log('He used to work at a tea shop until like, two days ago, you idiot. How could you not know this? You know why? Because you never bothered to ask. :(');
    } else {
        whileTeaBoy();
    }
}

function whileTeaBoy() {
    while (teaBoy1 !== 'Y' && teaBoy1 !== 'YES' && teaBoy1 !== 'N' && teaBoy1 !== 'NO') {
        console.log('You need to take a side. Is it a yes, or a no? There\'s no middle ground here, and I ain\'t askin\' again. Unless you put in an answer that is invalid again.');
        teaBoy();
    }
}

teaBoy();

function randomNumber() {
    min = Math.ceil(1);
    max = Math.floor(10);

}