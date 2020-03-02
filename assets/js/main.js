var images = ['assets/images/cave.jpg', 'assets/images/skelligmichael.jpg', 'assets/images/cliffs.jpg']; // an array of images

var placeNames = ['See at Aillwee', 'Star Wars', 'Cliffs of Moher']; // array of place names

var textContent = [`Flying Displays at our Bird of Prey Centre. Visit our Farm Shop on-site and see where we make our very own Award Winning Gouda style Cheese. A 35-minute guided cave tour. A private 1-hour long walk through our Hazel woodland with an experienced falconer to learn the art of falconry`,
                    `lwts see more of this textlwts see more of this textlwts see more of this text lwts see more of this textlwts see more of this textlwts see more of this text lwts see more of this textlwts see more of this textlwts see more of this textlwts see more of this textlwts see more of extlwts see more of this textlwts see more of `,
                    `if only the fffffffffff fgga gagegqg qgqqqg ggqhqh qt444 tyyyy 3tqtqt qt  qtt tqtq  tqtqt  qtyq yqt tq tqt qt qtqyher  tthhr geq e qgqgrgq  qrg qeg gqgqgqg  qg gq ggge  eghes h egew gw werr ger egwrg wgwegw wgewgg wg we ewrgrgr rgwrg erg ergggw erw gwgrwg wegw wg wgwg e gweerw wrgrwwe gwrggr werggwe `];
   

var index = 0; //decalred the variable 0

function nextImage(){  // created a function called nextImage
     
if(index < images.length -1){  // Checked to see if the index variable is less than the length of the array
    index++; // incremented index by 1 , Skips 0 index in array, but we loaded that image up on index.html
    document.getElementById('imagesrc').src = images[index]; // got the element by id and replaced with image from array
    document.getElementById('place').innerHTML = placeNames[index]; // got the element by id and replaced with place name from array
    document.getElementById('maintext').innerHTML = textContent[index]; // got the element by id and relaced with textcontent from array
} 
}


function previousImage(){ // created a function called previous image
    if(index > 0){ // checked to see if array index is greater than 0
        index--; // decrement array by 1
        document.getElementById('imagesrc').src = images[index]; // got the element by id and replaced with image from array
        document.getElementById('place').innerHTML = placeNames[index]; // got the element by id and replaced with place name from array
        document.getElementById('maintext').innerHTML = textContent[index]; // got the element by id and relaced with textcontent from array
        
    }
}