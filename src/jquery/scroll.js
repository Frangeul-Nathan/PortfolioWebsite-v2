import $ from 'jquery';

export const Scroll = () => {
    $(document).ready(function () {
        // On scroll, check if the user has scrolled past the header height
        $(window).scroll(function () {
            if ($(window).scrollTop() >= $(".navContainer").height()) {
                // If yes, add a class to make the navigation bar fixed
                $(".navContainer").addClass("fixedNav");
            } else {
                // If no, remove the class
                $(".navContainer").removeClass("fixedNav");
            }
        });

        // Utiliser jQuery pour un défilement en douceur
        $('a').on('click', function (event) {
            if (this.hash !== '') {
                event.preventDefault();

                const hash = this.hash;
                const offset = $('.navContainer').height(); // Hauteur de la barre de navigation fixe
                const targetOffset = $(hash).offset().top - offset;

                $('html, body').animate(
                    {
                        scrollTop: targetOffset
                    },
                    0, // Durée de l'animation en millisecondes
                    function () {
                        window.location.hash = hash;
                    }
                );
            }
        });
    });
}

