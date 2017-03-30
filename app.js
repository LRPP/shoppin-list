"use strict";

// Single state object
var state = {
    items: []
};

// State modification functions
function addItem(state, item) {
    state.items.push(item);
};

function deleteItem(state, itemIndex){
    state.items.splice(itemIndex, 1);
}

// Render functions
function renderList(state, element) {
    var itemsHTML = state.items.map(function(item) {
        return '<li> <span class="shopping-item">' + item + '</span> <div class="shopping-item-controls"> <button class="shopping-item-toggle"> <span class="button-label">check</span> </button> <button class="shopping-item-delete"> <span class="button-label">delete</span> </button> </div> </li>';
    });
    element.html(itemsHTML);
};

// DOM manipulation
function newItem() {
$("#js-shopping-list-form").submit(function(event) {
    event.preventDefault();
    addItem(state, $("#shopping-list-entry").val());
    renderList(state, $(".shopping-list"));
    this.reset();
});
}

function itemMod() {
$(".shopping-list").on("click", "button", function(event) {
    event.preventDefault();
	if($(this).is(".shopping-item-toggle")){	
        $(event.target).closest("li").find(".shopping-item").toggleClass("shopping-item__checked");
	}
    if($(this).is(".shopping-item-delete")){
        $(event.target).closest("li").remove();
    }
});
}


$(function() {
    itemMod();
});

$(function() {
    newItem();
});


