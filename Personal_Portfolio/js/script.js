// Visibilty of navbar when button clicked

const toggleNavbar = document.querySelector(".navbar-toggle");
toggleNavbar.addEventListener("click", function(){
    document.querySelector(".portfolio-navbar").classList.toggle("show");
});

//filter

// const filterContainer = document.querySelector(".portfolio-filter-nav");
// const galleryItems = document.querySelectorAll(".portfolio-item");

// filterContainer.addEventListener("click", (e) => {
//     e.preventDefault();
//     filterContainer.querySelector(".active").classList.remove("active");
//     e.target.classList.add("active");
//     const filterValue = e.target.getAttribute("data-id");
//     galleryItems.forEach((item) => {
//         if(item.classList.contains(filterValue) || filterValue === "all"){
//             item.classList.remove("hide");
//             item.classList.add("show");
//         }
//         else{
//             item.classList.remove("show");
//             item.classList.add("hide");
//         }
//     });
// });

//email logic

const msg = document.querySelector(".form-message");
(function () {
    emailjs.init("rVSQCY_Tf_oO5anen"); //https://dashboard.emailjs.com/admin/account
})();

window.onload = function(){
    document
    .getElementById("contact-form")//contact-form 
    .addEventListener("submit", function(event){
        event.preventDefault();
        document.querySelector(".loader").classList.add("show");
        emailjs.sendForm("service_9pcmlij", "template_bz4yscw", this).then(
            function(){
                document.getElementById("contact-form").reset();
                document.querySelector(".loader").classList.remove("show");
                msg.innerHTML="";
                msg.innerHTML+="<span class='success-msg'>Email Sent</span>";
                msg.classList.add("show");
                setTimeout(() => msg.classList.remove("show"), 2000);
            },
            function(error){
                document.querySelector(".loader").classList.toggle("show");
                msg.classList.add("show");
                msg.innerHTML+="<span class='error-msg'>Email Not Sent</span>";
            }
        );
    });
};

//Resume Tab changing logic

const resumeHeading = document.querySelector(".resume-heading");
const resumeTabs = document.querySelectorAll(".resume-tab");

resumeHeading.onclick = (event) => {
    event.preventDefault();
    const clickedItemId = event.target.dataset.id;
    if(clickedItemId){
        resumeHeading.querySelector(".active").classList.remove("active");
        event.target.classList.add("active");

        resumeTabs.forEach((tab) =>{
            tab.classList.remove("active");
        });
        const correspondingTab = document.getElementById(clickedItemId);
        correspondingTab.classList.add("active");
    }
};

