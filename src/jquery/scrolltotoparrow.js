import $ from 'jquery';
import { useEffect } from 'react';

export const ScrollToTopArrow = () => {
    useEffect(() => {
        const handleScroll = () => {
            if ($(window).scrollTop() > 100) {
                $('.scroll-top-wrapper').addClass('show');
            } else {
                $('.scroll-top-wrapper').removeClass('show');
            }
        };

        const handleButtonClick = () => {
            $('html, body').animate({ scrollTop: 0 }, 0);
        };

        $(document).on('scroll', handleScroll);
        $('.scroll-top-wrapper').on('click', handleButtonClick);

        // Retournez une fonction de nettoyage si nécessaire
        return () => {
            $(document).off('scroll', handleScroll);
            $('.scroll-top-wrapper').off('click', handleButtonClick);
        };
    }, []); // Assurez-vous de fournir un tableau vide de dépendances pour useEffect
};
