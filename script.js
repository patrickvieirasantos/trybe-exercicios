 let whereAreYou = document.getElementById('where-are-you');

let parent = whereAreYou.parentElement;

parent.style.color = 'grey';

let firstChild = parent.firstElementChild;

let firstChild2 = whereAreYou.previousElementSibling;

let text = whereAreYou.nextSibling;

let thirdChild = whereAreYou.nextElementSibling;

let thirdChild2 = parent.lastElementChild.previousElementSibling;