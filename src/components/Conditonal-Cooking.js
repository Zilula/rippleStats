


true;

const trueThing = true;
trueThing;

false;

const falseThing = false;
falseThing;

const someOtherTrueThing = false;
someOtherTrueThing;

const someOtherFalseThing = false;
someOtherFalseThing;

if(trueThing === true) {
    'Hey I`m true!';
}

if(someOtherTrueThing === true) {
    'Wow! someOtherTrueThing is also True';
}
if(falseThing === false) {
    'Shucks, I`m false!';
}

if(someOtherFalseThing === false) {
    'Wow! I`m also false';
}

if(trueThing === someOtherTrueThing) {
    'Both of these things are true!';
}

if(falseThing === someOtherFalseThing) {
    'Both of these things are false!';
}
if(falseThing !== trueThing) {
    'We are not the same human being!';
}

const applesAreGood = true;
applesAreGood;

if(applesAreGood === false) {
    'I guess you dont like apples';
}
else if(applesAreGood === true) {
    'Yay! You must like apples.';
}

applesAreGood;

if(applesAreGood === false) {
    'I guess you dont like apples';
}
else {
    'By default you must like apples!';
}

const didItRain = 'It rained a little.';
didItRain;

if(didItRain === false) {
    'It did not rain today!';
}
else if(didItRain === true) {
    'It rained today!';
} 
else {
    'Wow it only rained a little!';
}

const codeIsCool = true; 
codeIsCool;

if(codeIsCool === true) {
    'Code is cool';
}
if(codeIsCool) {
    'Code is very cool';
}

if(codeIsCool !== false) {
    'Code is VERY cool';
}
if(!codeIsCool) {
    'Code is VERY cool';
}

 



