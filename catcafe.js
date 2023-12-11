"use strict";

var priceArray = [];

priceArray["espresso"] = 1.95;

priceArray["latte"] =a 2.95;

priceArray["cappuccino"] = 3.45;

priceArray["coffee"] = 1.75;

priceArray["biscotti"] = 1.95;

priceArray["scone"] = 2.95;

$(document).ready(function() {

var total = 0;

// adds hover handler, click handler to images in table

$("ul img").each(function() {

// set up event handlers for each image, on hover

$(this).hover(function(event){

var id = event.target.id;

var image = "images/"+id.split("_")[0]+".png";

var jqId = "#"+id;

$(jqId).attr("src",image);

});

$(this).mouseout(function(){

var id = event.target.id;

var image = "images/"+id.split("_")[0]+"_normal.png";

var jqId = "#"+id;

$(jqId).attr("src",image);

});

// set up event handlers for each image, once clicked

$(this).click(function(evt) {

// add selection to textarea, update total
// display order and total
// cancel default event of clicked link

var id = evt.target.id.split("_")[0];

total += priceArray[id];

var prevOrder = $("#order").html();

$("#order").append("<option>$"+priceArray[id]+"-"+id+"</option>")

$("#total").text("Total: $"+total);

evt.preventDefault();

});

});



$("#place_order").click(function() {

$("#order_form").submit();

});


$("#clear_order").click(function() {
$("#total").html("");
total = 0;
$("#order").html("");

});

});