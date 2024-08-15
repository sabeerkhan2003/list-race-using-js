var sections = document.querySelectorAll("section");
var navlinks = document.querySelectorAll(".nav-org nav3 ul li a");

window.onscroll = () => {
    var top = window.scrollY;

    sections.forEach(sec => {
        var offset = sec.offsetTop;
        var height = sec.offsetHeight;
        var id = sec.getAttribute("id");

        if (top >= offset && top < offset + height) {
            navlinks.forEach(link => {
                link.classList.remove("active");
            });

            // Selecting the specific navigation link using template literals
            var activeLink = document.querySelector(`.nav-org nav3 ul li a[href*="${id}"]`);
            if (activeLink) {
                activeLink.classList.add("active");
            }
            
        }
    });
}
