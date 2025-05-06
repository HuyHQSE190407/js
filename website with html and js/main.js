const firstLink = document.querySelector("a");
console.log(firstLink); // Log the first link element to the console
if(firstLink) {
    const linkHref = firstLink.getAttribute("href");
    console.log(linkHref);
}

firstLink.setAttribute("target", "_blank"); 

const links = document.querySelectorAll("ul a");

console.log(links); // Log all link elements to the console

links.forEach((singleLink) => {
    singleLink.setAttribute("target", "_blank"); // Set target attribute to open in a new tab
});

document.querySelector("#heading_title").setAttribute("style", "color: red; font-size: 30px;");
//check if the element has a style attribute
const item2 = document.querySelector("#heading_title");
console.log(item2.hasAttribute("style")); // Check if the element has a style attribute

item2.removeAttribute("style"); // Remove the style attribute
console.log(item2.hasAttribute("style")); // Check if the element has a style attribute after removal