//toggleBtn script
        //get open and close toggleBtns
        
        const toggleBtn = document.getElementById("toggle-btn");
        const closeToggleBtn = document.querySelector(".close-toggle-btn");
        const navbarContainer = document.querySelector(".navbar-container");


        console.log(toggleBtn)
        console.log(closeToggleBtn)
        console.log(navbarContainer)
        toggleBtn.addEventListener("click",(e)=>{
        if(navbarContainer.classList.contains('close-toggle-menu')){
        navbarContainer.classList.remove("close-toggle-menu")
        }
        navbarContainer.classList.add("show-toggle-menu")
        console.log(e.target)
        })

        //disable scroll option
        /*toggleBtn.addEventListener("scroll",(e)=>{
         navbarContainer.classList.add("disable-scroll");
         e.preventDefault()
        })*/

        // close the toggle menu
        closeToggleBtn.addEventListener("click",()=>{
        navbarContainer.classList.add("close-toggle-menu");
        })