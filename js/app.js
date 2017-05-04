'use strict';


//First five questions
var deservedHero1;

deservedHero1 = prompt('Is Andrew Michael Potter (Boy Wonder) the hero Gotham deserves?').toUpperCase();

if (deservedHero1 === 'Y' || deservedHero1 === 'YES') {
    alert('No, friend. You are the hero Gotham deserves. You had it in you all along.');
} else if (deservedHero1 === 'N' || deservedHero1 === 'NO') {
    alert('Of course not. He is but a fool and a dreamer.');
} else {
    alert('That\'s not even a real word.');
}

var eatenEgg1;

eatenEgg1 = prompt('Do you believe that Andrew Michael Potter (America\'s Boy) enjoys a nice plate of eggs on a cold winter\'s morn?').toUpperCase();

if (eatenEgg1 === 'Y' || eatenEgg1 === 'YES') {
    alert('You\'re as wise as you are brave. Andrew Michael Potter (Humanity\'s Peak) needs more protein than four average hibernating bears.');
} else if (eatenEgg1 === 'N' || eatenEgg1 === 'NO') {
    alert('This is so wildly incorrect, you simply must try a fried egg on wheat toast with salt and pepper and maybe a touch of hot sauce and/or cheese.');
} else {
    alert('That\'s not even a real word.');
}

var speaksGerman1;

speaksGerman1 = prompt('Can Andrew Michael Potter (Mensa VIP) speak the soft and rounded language of German?').toUpperCase();

if (speaksGerman1 === 'Y' || speaksGerman1 === 'YES') {
    alert('Ja klar, mein Freund!');
} else if (speaksGerman1 === 'N' || speaksGerman1 === 'NO') {
    alert('Na ja, es ist schon ne lange zeit seit ich Deutsch gesprochen habe, aber ich kann es still ein bisschen verstehen.');
} else {
    alert('That\'s not even a real word.');
}

var heavyMetal1;

heavyMetal1 = prompt('Is Andrew Michael Potter (Prince of Darkness) a purveyor of heavy riffs?').toUpperCase();

if (heavyMetal1 === 'Y' || heavyMetal1 === 'YES') {
    alert('Yeah, man. The dude riffs.');
} else if (heavyMetal1 === 'N' || heavyMetal1 === 'NO') {
    alert('Nah, dude. The boy can riff.');
} else {
    alert('That\'s not even a real word.');
}

var teaBoy1;

teaBoy1 = prompt('Is Andrew Michael Potter (Endlessly Quoted By Philosophers) an adept hand at making tea?').toUpperCase();

if (teaBoy1 === 'Y' || teaBoy1 === 'YES') {
    alert('He knows his oolongs from his pu-ehrs, you\'d best believe.');
} else if (teaBoy1 === 'N' || teaBoy1 === 'NO') {
    alert('He used to work at a tea shop until like, two days ago, you idiot. How could you not know this? You know why? Because you never bothered to ask. :(');
} else {
    alert('That\'s not even a real word.');
}

// Sixth question: Guess the number. You get four tries. Too high and too low indications.

var pursuers = 3;

for (var attempts = 0; attempts < 4; attempts ++) {
    var pursuersGuess = parseInt(prompt('A number of strange men have chased me across the country. I know not why, but they pursue me still. If you can guess how many men are chasing me, I will grant you one wish.'));

    if (pursuersGuess === pursuers) {
        alert('Yes, correct. Three men, armed to the teeth. I\'ll be in touch later about that wish. Don\'t call me, I\'ll call you.');
        break;
    } else if (pursuersGuess > pursuers) {
        alert('If it were that many, I wouldn\'t have evaded them this long.');
    } else if (pursuersGuess < pursuers) {
        alert('The situation is more dire than that. There\'s at least one more than what you just said.');
    } else {
        alert('Maybe I wasn\'t clear, but we\'re just looking for a numeral here. In fact, I hate to be picky, but don\'t write out the number, it will only confuse me.');
    }

    if (attempts === 3) {
        alert('I don\'t have all day to sit here and let you guess. 3! I was looking for 3! And with every wrong guess you make, they get closer and closer. We should move on while I still have time.');
    }
}

