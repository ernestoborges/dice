function rollDice() {
    var x = Math.floor(Math.random() * 6) + 1;
    return x;
}

function alavanca(){

    var P1, P2;

    P1 = rollDice();
    P2 = rollDice();

    if(P1>P2){
        document.querySelector(".dicebox-lampP1").style.backgroundImage = "url('../v2/images/lamp-on.png')";
        document.querySelector(".dicebox-lampP2").style.backgroundImage = "url('../v2/images/lamp-off.png')";
        document.querySelector(".dicebox-label").style.backgroundImage = "url('../v2/images/label1.png')";
    }
    if(P2>P1){
        document.querySelector(".dicebox-lampP2").style.backgroundImage = "url('../v2/images/lamp-on.png')";
        document.querySelector(".dicebox-lampP1").style.backgroundImage = "url('../v2/images/lamp-off.png')";
        document.querySelector(".dicebox-label").style.backgroundImage = "url('../v2/images/label2.png')";
    }
    if(P1===P2){
        document.querySelector(".dicebox-lampP1").style.backgroundImage = "url('../v2/images/lamp-off.png')";
        document.querySelector(".dicebox-lampP2").style.backgroundImage = "url('../v2/images/lamp-off.png')";
        document.querySelector(".dicebox-label").style.backgroundImage = "url('../v2/images/label3.png')";
    }

    document.querySelector(".dicebox-dice1").style.backgroundImage = "url('../v2/images/dice-0"+P1+".png')";
    document.querySelector(".dicebox-dice2").style.backgroundImage = "url('../v2/images/dice-0"+P2+".png')";    

}

function push(){
    document.querySelector(".dicebox-btn").style.backgroundImage = "url('../v2/images/alavanca2.png')"; 
}
function release(){
    document.querySelector(".dicebox-btn").style.backgroundImage = "url('../v2/images/alavanca1.png')"; 
}

