
export const scrollAnimation = () => {
    // Sticky Header
    let new_scroll_position = 0;
    let last_scroll_position;
    const header = document.getElementById("stickyHeader");
    const scrollTopButton = document.getElementById('scrollTop');
    const timeline = document.querySelector(".timeline .fill");
    
    window.addEventListener('scroll', function(e) {
        let last_scroll_position = window.scrollY;
        
        // Scrolling down
        if (new_scroll_position < last_scroll_position && last_scroll_position > 100) {
            header.classList.remove("slideDown");
            header.classList.add("slideUp");
        }
        else if (last_scroll_position < 100) {
            header.classList.remove("slideDown");
        } 
        else if (new_scroll_position > last_scroll_position) {
            header.classList.remove("slideUp");
            header.classList.add("slideDown");
        }

        new_scroll_position = last_scroll_position;

        // Scroll Top  +  Timeline
        if ( last_scroll_position >= 160 ){
            scrollTopButton.classList.add('active');
        }
        else {
            scrollTopButton.classList.remove('active');
        }

        if ( timeline != undefined ) {
            let timelineTop = timeline.offsetTop;
            timeline.style.height = (last_scroll_position-timelineTop-200)+'px';
        }
    });

    // Just add #scrollTop to the footer
    if ( scrollTopButton != undefined ) {
        scrollTopButton.addEventListener('click', function(){
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        });
    }
}