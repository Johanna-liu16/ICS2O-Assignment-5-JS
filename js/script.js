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
  var count = parseInt(document.getElementById("count").value);
  var pi;
  var denominator = 1;
  var sign = "minus"

  pi = 4 / denominator;
  while (count > 1) {
    if (sign == "minus") {
      denominator = denominator + 2;
      pi = pi - 4 / denominator;
      sign = "plus";
    } else if (sign == "plus") {
      denominator = denominator + 2;
      pi = pi + 4 / denominator;
      sign = "minus";
    }
    count = count - 1;
  }
  sign = "minus";
  denominator = 1;
  document.getElementById("answer").innerHTML = "The answer is: " + pi;
}