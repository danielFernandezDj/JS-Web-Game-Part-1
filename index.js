// ••••••••••••••••• STATIC OBJECTS ••••••••••••••••• \\
function newImage(url, left, bottom, radius) {
    let newAsset = document.createElement("img")
    newAsset.src = url
    newAsset.style.position = "fixed"
    newAsset.style.left = left + "px"
    newAsset.style.bottom = bottom + "px"
    document.body.append(newAsset)
}

// green-character
newImage("assets/green-character.gif", 200, 200) 
// pine-tree
newImage("assets/pine-tree.png", 200, 300) 
// pillar
newImage("assets/pillar.png", 350, 100) 
// crate
newImage("assets/crate.png", 150, 200) 
// well
newImage("assets/well.png", 500, 425) 


// ••••••••••••••••• GAMPLAY OBJECTS ••••••••••••••••• \\
function clickImage (url, left, bottom){
    let deletImage = document.createElement ("img")
    deletImage.src = url 
    deletImage.style.position = "fixed"
    deletImage.style.left = left + "px"
    deletImage.style.bottom = bottom + "px"
    document.body.append(deletImage)

    deletImage.addEventListener("click", function(){
        deletImage.remove() 
    })
}

// sword
clickImage ("assets/sword.png", 500, 405)
// shield
clickImage ("assets/shield.png", 165, 185)
// staff
clickImage ("assets/staff.png", 600, 100)