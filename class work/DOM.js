let newheading =document.getElementById("heading");
newheading.textContent="DOM manipulation to javascript";
newheading.style.color="blue";
newheading.style.fontSize="50px";

let paragraphs=document.getElementsByClassName("paragraph");
paragraphs[0].textContent="this is paragraph has been updated";
paragraphs[0].style.color="green";
paragraphs[0].style.fontSize="30px";