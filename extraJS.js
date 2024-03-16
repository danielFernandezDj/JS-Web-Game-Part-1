function newImage(url, left, bottom) {
    let newAsset = document.createElement('img')
    newAsset.src = url
    newAsset.style.position = 'fixed'
    newAsset.style.left = left + "px"
    newAsset.style.bottom = bottom + "px"
    document.body.append(newAsset)
}


newImage("", 200, 300)




// let greenCharacter = document.createElement('img')
// greenCharacter.src = 'assets/green-character.gif'
// greenCharacter.style.position = 'fixed'
// greenCharacter.style.left = '100px'
// greenCharacter.style.bottom = '100px'
// document.body.append(greenCharacter)