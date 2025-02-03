/*
 * This is index.js
 * Open index.html in your browser to check what
 * you have to do, adding functions to the end of this
 * file as necessary.
 *
 * NB: all code you write this year should use strict mode, so
 * we've enabled that by default with the first line of code.
 */

'use strict';

// add your functions here

function replaceText(elem, str) {
    elem.textContent = str;
}

function addTextTo(elem, str) {
    elem.append(str);
}

function moreBears() {
    const image = document.querySelector("#animals");
    image.src = "http://placebear.com/400/200";
    image.alt = "A bear.";
    image.title = "A BEAR!";
}

function setId(elem, str) {
    elem.id = str;
    return elem;
}

function setClass(elem, str) {
    elem.className = str;
    return elem;
}

function addAClass(elem, str) {
    elem.classList.add(str);
    return elem;
}

function removeAClass(elem, str) {
    elem.classList.remove(str);
    return elem;
}

function newElement(name) {
    const elem = document.createElement(name);
    return elem;
}

function findElementById(id) {
    const elem = document.querySelector("#"+id);
    return elem;
}

function findElementsByQuery(query) {
    const elems = document.querySelectorAll(query);
    return elems;
}

function reverseList(query) {
    let elems = document.querySelector(query);
    let items = Array.from(elems.children);
    items.reverse();
    elems.innerHTML = "";
    items.forEach(item => elems.appendChild(item));
    return elems;
}

function mover(moveThis, appendToThis) {
    const moveFrom = document.querySelector(moveThis);
    const moveTo = document.querySelector(appendToThis);
    moveTo.append(moveFrom);
}

function filler(list, candidates) {
    candidates.forEach(candidate => {
        let li = document.createElement("li");
        li.textContent = candidate;
        list.appendChild(li);
    })
}

function dupe(selector) {
    let elem = document.querySelector(selector);
    let clonedElem = elem.cloneNode(true);
    elem.parentNode.appendChild(clonedElem);
}

function removeAll(selector) {
    document.querySelectorAll(selector).forEach(elem => elem.remove());
}

function getUserData(){
    let name = document.querySelector("#username").value;
    let speed = document.querySelector("#speed").value;
    let student = document.querySelector("#student").checked;

    return {
        name: name,
        speed: parseInt(speed),
        student: student
    };
}