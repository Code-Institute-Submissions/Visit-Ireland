var images = ['assets/images/cave.jpg', 'assets/images/skelligmichael.jpg', 'assets/images/cliffs.jpg']; // an array of images

var placeNames = ['See at Aillwee', 'Star Wars', 'Cliffs of Moher']; // array of place names

var textContent = [`Flying Displays at our Bird of Prey Centre. Visit our Farm Shop on-site and see where we make our very own Award Winning Gouda style Cheese. A 35-minute guided cave tour. A private 1-hour long walk through our Hazel woodland with an experienced falconer to learn the art of falconry`,
                    `Skellig Michael is a rugged, remote island located just off the western coast of Ireland. ... And now, with the lure of seeing where Star Wars: A Force Awakens and The Last Jedi are filmed, visitors are arriving by the hundreds to this island, Contact us below for info about tours`,
                    `The Cliffs of Moher (/ˈmoʊ(h)ər/; Irish: Aillte an Mhothair) are sea cliffs located at the southwestern edge of the Burren region in County Clare, Ireland. From the cliffs, and from atop the tower, visitors can see the Aran Islands in Galway Bay,the Maumturks and Twelve Pins mountains`];
   

var index = 0; //decalred the variable 0

function nextImage(){  // created a function called nextImage
     
if(index < images.length -1){  // Checked to see if the index variable is less than the length of the array
    index++; // incremented index by 1 , Skips 0 index in array, but we loaded that image up on index.html
    document.getElementById('imagesrc').src = images[index]; // got the element by id and replaced with image from array index postion
    document.getElementById('place').innerHTML = placeNames[index]; // got the element by id and replaced with place name from array index postion
    document.getElementById('maintext').innerHTML = textContent[index]; // got the element by id and relaced with textcontent from array index position
} 
}


function previousImage(){ // created a function called previous image
    if(index > 0){ // checked to see if array index is greater than 0
        index--; // decrement array by 1
        document.getElementById('imagesrc').src = images[index]; // got the element by id and replaced with image from array position
        document.getElementById('place').innerHTML = placeNames[index]; // got the element by id and replaced with place name from array position
        document.getElementById('maintext').innerHTML = textContent[index]; // got the element by id and relaced with textcontent from array position
        
    }
}