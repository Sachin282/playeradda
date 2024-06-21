$(document).ready(function () {
    $('.category-card').each(function () {
        var $card = $(this);
        var $gamesThumb = $card.find('.games-thumb');
        var $cardHover = $card.find('.card-hover');

        // For desktop hover effect
        $gamesThumb.on('mouseenter', function () {
            setTimeout(function () {
                $cardHover.show();
                $gamesThumb.hide();
            }, 100); // Delay to prevent glitch
        });

        $card.on('mouseleave', function () {
            setTimeout(function () {
                $cardHover.hide();
                $gamesThumb.show();
            }, 100); // Delay to prevent glitch
        });

        // For mobile touch effect
        $gamesThumb.on('touchstart', function (e) {
            e.preventDefault();
            if ($cardHover.is(':visible')) {
                $cardHover.hide();
                $gamesThumb.show();
            } else {
                $cardHover.show();
                $gamesThumb.hide();
            }
        });

        // To prevent the hover effect glitch on touch devices
        $card.on('touchstart', function (e) {
            e.stopPropagation();
        });

        // Hide on touch outside the element
        $(document).on('touchstart click', function (e) {
            if (!$card.is(e.target) && $card.has(e.target).length === 0) {
                $cardHover.hide();
                $gamesThumb.show();
            }
        });
    });
});