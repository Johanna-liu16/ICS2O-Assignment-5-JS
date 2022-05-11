// Copyright (c) 2020 Johanna Liu All rights reserved
//
// Created by: Johanna Liu
// Created on: Mar 2022
// This file contains the JS functions for index.html

/**
 * Check servie worker.
 */
if (navigator.serviceWorker) {
  navigator.serviceWorker.register("/ICS2O-PWA-Test/sw.js", {
    scope: "/ICS2O-PWA-Test/",
  })
}

;("use strict")

/**
 * Input
 */
function myButtonClicked() {
  const count = parseInt(document.getElementById("count").value);
  let answer = 0;
  var num = 0;
  var denominator = 1;
  var counter = 0;
    
    while ( num <= count) {
      denominator = denominator + 2;
      answer = (4 / denominator) * -1;
      counter = num + 1;
    }

            
  document.getElementById("answer").innerHTML = 
    "The sum is: " + answer;
}