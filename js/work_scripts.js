function reveal_hidetext(hidden_elem, button_elem) {
    document.getElementById(hidden_elem).style.display = "block";
    document.getElementById(button_elem).innerHTML = "<i>Read less...</i>"
}

function hide_hidetext(hidden_elem, button_elem) {
    document.getElementById(hidden_elem).style.display = "none";
    document.getElementById(button_elem).innerHTML = "<i>Read more...</i>"
}

function handle_click(hidden_elem, button_elem){
    if (document.getElementById(button_elem).innerHTML == "<i>Read more...</i>") {
        reveal_hidetext(hidden_elem, button_elem);
    }
    else {
        hide_hidetext(hidden_elem, button_elem);
    }
}
