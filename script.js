// Contact Form
document.getElementById("contactForm").addEventListener("submit", function(event){
event.preventDefault();
alert("Thank you! Your message has been sent.");
});
// Dark Mode
function toggleMode(){
document.body.classList.toggle("darkmode");
}
// Back To Top Button
function topFunction(){
window.scrollTo({
top:0,
behavior:"smooth"
});
}