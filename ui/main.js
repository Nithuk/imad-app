console.log('Loaded!');

//Change the text of the main-text div
var element = document.getElementById('main-text');
element.innerHTML = 'New value';

//Move the Image
var img = document.getElementById('madi');
img.onClick = function () {
    img.style.marginLeft = '100px';  
    
};
 