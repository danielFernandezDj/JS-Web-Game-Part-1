function newImage(url, left, bottom) {
    let newAsset = document.createElement("img")
    newAsset.src = url
    newAsset.style.position = "fixed"
    newAsset.style.left = left + "px"
    newAsset.style.bottom = bottom + "px"
    document.body.append(newAsset)
}
// ••••••••••••••••• STATIC OBJECTS •••••••••••••••••
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

// ••••••••••••••••• COLLITION OBJECTS •••••••••••••••••


