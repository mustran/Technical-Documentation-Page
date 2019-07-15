let navItems = document.querySelectorAll(".navItem");

// navItems.forEach(element => {
//     element.addEventListener('click', function(){
//         this.children[1].classList.toggle("show");
//     })
// })

let title = document.querySelectorAll(".title");

title.forEach(element => {
    element.addEventListener('click', function(){
        this.parentElement.parentElement.children[1].classList.toggle("show");
        // console.log(this.parentElement.parentElement);
    })
})

