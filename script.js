// save info function
function saveInfo() {
    // add element ids to variable
    let txtUsername = document.getElementById("txtUsername");
    let txtSkill = document.getElementById("txtSkill");
    let txtWeapon = document.getElementById("txtWeapon");
    let numHealth = document.getElementById("numHealth");
    let numPoints = document.getElementById("numPoints");

    // format user inputs
    let output = "Username: " + txtUsername.value + "\n\n" +
        "Special Skill: " + txtSkill.value + "\n\n" +
        "Weapon: " + txtWeapon.value + "\n\n" +
        "Health: " + numHealth.value + "\n\n" +
        "Total Points: " + numPoints.value;
    // display inputs
    document.getElementById("textHero").value = output;


    // reset input boxes
    txtUsername.value = "";
    txtSkill.value = "";
    numHealth.value = "";
    numPoints.value = "";
    txtWeapon.value = "";
}