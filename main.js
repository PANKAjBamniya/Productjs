let btn = document.querySelector('#btnn');
let img = document.querySelector("#image");
let currentIndex = 0; 
let imagesArray = []; 

btn.addEventListener('click', async () => {
 
        const respo = await fetch('https://dummyjson.com/products/10');
        const data = await respo.json();
        // console.log(data);
        imagesArray = data.images; 

        img.src = imagesArray[currentIndex];
        currentIndex = (currentIndex + 1);
});



