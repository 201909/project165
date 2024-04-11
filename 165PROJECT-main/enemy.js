
AFRAME.registerComponent("enemy-fireballs", {
    init: function () {        
        setInterval(this.shootEnemyMonster, 2000)
    },
    shootEnemyMonster: function () {
        var scene = document.querySelector("#scene");
        var monster = document.querySelectorAll(".enemy")
        var gun = document.querySelector("#weapon")

            var livesLeft = document.querySelector("countLives")
            
            var playerLives = parseInt(livesLeft.getAttribute("text").value)
            monster.addEventListener("collide", function (e) {
                if (e.detail.body.el.id === "weapon") {
                    if(playerLives>0){
                        playerLives -= 1
                        lives.setAttribute("text", {value:playerLives})
                    }
                    if (playerLives<=0) {
                        var gameOverTxt = document.querySelector("#over")
                        gameOverTxt.setAttribute("visible", true)
                        for(var i = 0; i<monster.length; i++){
                            scene.removeChild(monster[i])
                        }
                    }
                }})
        for (var i = 0; i < enemyMonster.length; i++) {

       //create fireballs
        var fireball = document.createElement("a-entity");

        fireball.setAttribute("class","fireball")
        fireball.setAttribute("gltf-model", "./models/fireball/scene.gltf");
        fireball.setAttribute("dynamic-body", { mass: 0 });
     
        var pos=enemyMonster[i].getAttribute("position")

        fireball.setAttribute("position", {
            x: pos.x,
            y: pos.y,
            z: pos.z,
        });
        fireball.setAttribute("scale", {
            x: 0.05,
            y: 0.05,
            z: 0.05,
        });

        scene.appendChild(fireball);      
//Finding the direction vector using Three.js objects
      











        /******************************************************************************************* */

        



    }
    },
    

});
