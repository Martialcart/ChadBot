const space = " ";
const line_brake = "\n";
let bot_name = "";
let sentences = [];
let words = {};

function learn_logic() {
    const brain = document.getElementById("brain");
    let message = brain.value;
    let end_of_message = message.length;
    let pointer = 0;
    let c = '';
    let key_word_mode = true;
    let sentence_index = 0;

    for (i = 0; i < end_of_message; i++){
        char = message[i];
        if(key_word_mode) {
            if(char === space) {
                
            }
        } else {

        }
        if(char === space || char === line_brake) pointer = i + 1;

        else console.log(message[i]);
    }
}

function send_message() {
    const message = document.getElementById("chat_input")
    say("you", message.value);
    respond(message.value);
    message.value = "";
    
}

function say(sender, message) {
    if(message === "") return "";
    const log = document.getElementById("chat_log");
    const para = document.createElement("P");
    const tekst = document.createTextNode(sender + ": " + message);
    para.append(tekst);
    log.appendChild(para);
}

function respond() {

}

