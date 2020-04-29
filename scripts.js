let i = 0

let tree = {
    photo: 'images/tree.png',
    title: 'Lonely Oak Tree',
    description: "The images weren't linked, so I'm using my recreations of them instead."
}
let shroom = {
    photo: 'images/shroom.png',
    title: 'Shroom',
    description: "You don't wanna mess with this guy."
}
let line = {
    photo: 'images/line.png',
    title: 'Line',
    description: "It's supposed to be the Sun behind the Earth."
}
let nebula = {
    photo: 'images/nebula.png',
    title: 'Nebula in Space',
    description: "It's purple and stuff. Moreover, it's in space."
}
let eye = {
    photo: 'images/eye.png',
    title: 'Eye',
    description: "I spy with my little eye something beginning with I... Oh wait."
}
let woman = {
    photo: 'images/woman.png',
    title: 'Woman',
    description: "I can't draw people :."
}
let candle = {
    photo: 'images/candle.png',
    title: 'Candle',
    description: "The flame is blue, thus this picture is really deep. Only well educated people can understand the meaning behind it."
}
let tentorsomething = {
    photo: 'images/tentorsomething.png',
    title: 'Tent or Something',
    description: "What is the purpose of a roof, if noone's living under it?"
}
let arrey = [tree, shroom, line, nebula, eye, woman, candle, tentorsomething]

$('#forward').click(() => {
    if (i < 7) {
        i = i + 1
    } else {
        i = 0
    }
    $('.chosen').toggleClass("chosen");
    $("li:nth-child("+(i+1)+")").toggleClass("chosen");
    $('.picture').css('background-image', "url("+arrey[i].photo+")");
    $('h1').text(arrey[i].title);
    $('.description').text(arrey[i].description);
})

$('#backward').click(() => {
    if (i > 0) {
        i = i - 1
    } else {
        i = 7
    }
    $('.chosen').toggleClass("chosen");
    $("li:nth-child("+(i+1)+")").toggleClass("chosen");
    $('.picture').css('background-image', "url("+arrey[i].photo+")");
    $('h1').text(arrey[i].title);
    $('.description').text(arrey[i].description);
})

$('li').click(() =>{
    i = event.target.value;
    $('.chosen').toggleClass("chosen");
    $("li:nth-child("+(i+1)+")").toggleClass("chosen");
    $('.picture').css('background-image', "url("+arrey[i].photo+")");
    $('h1').text(arrey[i].title);
    $('.description').text(arrey[i].description);
})