import $ from 'jquery';

export const Scroll = () => {
    $(document).ready(function () {
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(".navContainer").height()) {
                $(".navContainer").addClass("fixedNav");
            } else {
                $(".navContainer").removeClass("fixedNav");
            }
        });

        $('a').on('click', function (event) {
            if (this.hash !== '') {
                event.preventDefault();

                const hash = this.hash;
                const offset = $('.navContainer').height(); 
                const targetOffset = $(hash).offset().top - offset;

                $('html, body').animate(
                    {
                        scrollTop: targetOffset
                    },
                    0, 
                    function () {
                        window.location.hash = hash;
                    }
                );
            }
        });
    });
}

