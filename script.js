"use strict";
const input = document.querySelector(".textinput");
let reset = "0";

const btnOne = document.querySelector(".btnOne");
const btnTwo = document.querySelector(".btnTwo");
const btnThree = document.querySelector(".btnThree");
const btnFour = document.querySelector(".btnFour");
const btnFive = document.querySelector(".btnFive");
const btnSix = document.querySelector(".btnSix");
const btnSeven = document.querySelector(".btnSeven");
const btnEight = document.querySelector(".btnEight");
const btnNine = document.querySelector(".btnNine");

const btnDblZero = document.querySelector(".btnDblZero");
const btnZero = document.querySelector(".btnZero");
const btnPoint = document.querySelector(".btnPoint");

const btnAC = document.querySelector(".btnAC");
const btnDel = document.querySelector(".btnDel");
const btnEqual = document.querySelector(".btnEqual");

const btnPlus = document.querySelector(".btnPlus");
const btnMin = document.querySelector(".btnMin");
const btnMul = document.querySelector(".btnMul");
const btnDiv = document.querySelector(".btnDiv");
const btnMod = document.querySelector(".btnMod");

btnOne.addEventListener("click", function () {
  input.value += "1";
});
btnTwo.addEventListener("click", function () {
  input.value += "2";
});
btnThree.addEventListener("click", function () {
  input.value += "3";
});
btnFour.addEventListener("click", function () {
  input.value += "4";
});
btnFive.addEventListener("click", function () {
  input.value += "5";
});
btnSix.addEventListener("click", function () {
  input.value += "6";
});
btnSeven.addEventListener("click", function () {
  input.value += "7";
});
btnEight.addEventListener("click", function () {
  input.value += "8";
});
btnNine.addEventListener("click", function () {
  input.value += "9";
});
btnZero.addEventListener("click", function () {
  input.value += "0";
});
btnDblZero.addEventListener("click", function () {
  input.value += "00";
});

btnPlus.addEventListener("click", function () {
  input.value += "+";
});
btnMin.addEventListener("click", function () {
  input.value += "-";
});
btnMul.addEventListener("click", function () {
  input.value += "*";
});
btnDiv.addEventListener("click", function () {
  input.value += "/";
});
btnMod.addEventListener("click", function () {
  input.value += "%";
});
btnEqual.addEventListener("click", function () {
  input.value = eval(input.value);
});

btnAC.addEventListener("click", function () {
  input.value = "";
});
btnDel.addEventListener("click", function () {
  input.value = String(input.value).slice(0, -1);
});
