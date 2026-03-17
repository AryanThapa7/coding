const img = document.getElementById("myImage");


img.addEventListener("mouseenter", () => {
    img.src = "Unknown.jpeg";
});


img.addEventListener("mouseleave", () => {
    img.src = "DWITCollege.jpeg";
});