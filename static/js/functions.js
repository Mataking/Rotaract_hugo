$(function () {
    smoothScroll(300);
    actionsBelt();
    actionsLoad();
    partenaireStuff();
    trombinoscopeStuff();

    $(".biglink").fitText(2);

    $('textarea').autosize();

    window.onload = function () {
        // Fonction d'initialisation qui s'exécute lorsque le DOM est chargé
        initialize_map();
    };
});


function toggle_div(btn, id_div) {
    btn.innerHTML = (btn.innerHTML == '+') ? '-' : '+';
    btn.title = (btn.title == 'Afficher la suite') ? 'Masquer la suite' : 'Afficher la suite';
    document.getElementById(id_div).style.display = (document.getElementById(id_div).style.display == 'none') ? 'block' : 'none';
}


// smoothScroll function is applied from the document ready function
function smoothScroll(duration) {
    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, duration);
        }
    });
}

/* slide defilement */
var myIndex = 0;
carousel();

function carousel() {
    var i;
    var x = document.getElementsByClassName("mySlides");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex++;
    if (myIndex > x.length) {
        myIndex = 1
    }
    x[myIndex - 1].style.display = "block";
    setTimeout(carousel, 10000);
}

/* text defilement */
var myIndex2 = 0;
carouse2();

function carouse2() {
    var i;
    var x = document.getElementsByClassName("myText");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    myIndex2++;
    if (myIndex2 > x.length) {
        myIndex2 = 1
    }
    x[myIndex2 - 1].style.display = "block";
    setTimeout(carouse2, 10000);
}

function actionsBelt() {

    $(".trigger").remove();
    $(".return").remove();

    $('.thumb-container label').click(function () {
        $('.actions-belt').addClass("slided");
        $('.actions-container').show();
    });

    $('.actions-return').click(function () {
        $('.actions-belt').removeClass("slided");
        $('.actions-container').hide(800);
    });

}


function actionsLoad() {

    $.ajaxSetup({cache: true});

    $('.thumb-container label').click(function () {
        var $this = $(this),
            newTitle = $this.find('strong').text(),
            newfolder = $this.find('.thumb-unit').data('folder'),
            spinner = '<div class="loader">Loading...</div>',
            newHTML = 'actions/' + newfolder;

        $('.project-load').html(spinner).load(newHTML);
        $('.project-title').text(newTitle);
    });

}


function partenaireStuff() {

    $('.partenaire-logo, .partenaires-mobile-nav span').click(function () {
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);

        $('.partenaire-unit').removeClass('active-partenaire').eq(position).addClass('active-partenaire');
        $siblings.removeClass('active-partenaire');
        $this.addClass('active-partenaire');
    });


    $('.partenaire-control-next, .partenaire-control-prev').click(function () {

        var $this = $(this),
            curActiveClient = $('.partenaires-belt').find('.active-partenaire'),
            position = $('.partenaires-belt').children().index(curActiveClient),
            partenaireNum = $('.partenaire-unit').length;

        if ($this.hasClass('partenaire-control-next')) {

            if (position < partenaireNum - 1) {
                $('.active-partenaire').removeClass('active-partenaire').next().addClass('active-partenaire');
            } else {
                $('.partenaire-unit').removeClass('active-partenaire').first().addClass('active-partenaire');
                $('.partenaire-logo').removeClass('active-partenaire').first().addClass('active-partenaire');
            }

        } else {

            if (position === 0) {
                $('.partenaire-unit').removeClass('active-partenaire').last().addClass('active-partenaire');
                $('.partenaire-logo').removeClass('active-partenaire').last().addClass('active-partenaire');
            } else {
                $('.active-partenaire').removeClass('active-partenaire').prev().addClass('active-partenaire');
            }

        }


    });

}

function trombinoscopeStuff() {

    $('.trombinoscope-logo, .trombinoscopes-mobile-nav span').click(function () {
        var $this = $(this),
            $siblings = $this.parent().children(),
            position = $siblings.index($this);

        $('.trombinoscope-unit').removeClass('active-trombinoscope').eq(position).addClass('active-trombinoscope');
        $siblings.removeClass('active-trombinoscope');
        $this.addClass('active-trombinoscope');
    });


    $('.trombinoscope-control-next, .trombinoscope-control-prev').click(function () {

        var $this = $(this),
            curActiveClient = $('.trombinoscopes-belt').find('.active-trombinoscope'),
            position = $('.trombinoscopes-belt').children().index(curActiveClient),
            trombinoscopeNum = $('.trombinoscope-unit').length;

        if ($this.hasClass('trombinoscope-control-next')) {

            if (position < trombinoscopeNum - 1) {
                $('.active-trombinoscope').removeClass('active-trombinoscope').next().addClass('active-trombinoscope');
            } else {
                $('.trombinoscope-unit').removeClass('active-trombinoscope').first().addClass('active-trombinoscope');
                $('.trombinoscope-logo').removeClass('active-trombinoscope').first().addClass('active-trombinoscope');
            }

        } else {

            if (position === 0) {
                $('.trombinoscope-unit').removeClass('active-trombinoscope').last().addClass('active-trombinoscope');
                $('.trombinoscope-logo').removeClass('active-trombinoscope').last().addClass('active-trombinoscope');
            } else {
                $('.active-trombinoscope').removeClass('active-trombinoscope').prev().addClass('active-trombinoscope');
            }

        }


    });

}

(function ($) {

    $.fn.fitText = function (kompressor, options) {

        // Setup options
        var compressor = kompressor || 1,
            settings = $.extend({
                'minFontSize': Number.NEGATIVE_INFINITY,
                'maxFontSize': Number.POSITIVE_INFINITY
            }, options);

        return this.each(function () {

            // Store the object
            var $this = $(this);

            // Resizer() resizes items based on the object width divided by the compressor * 10
            var resizer = function () {
                $this.css('font-size', Math.max(Math.min($this.width() / (compressor * 10), parseFloat(settings.maxFontSize)), parseFloat(settings.minFontSize)));
            };

            // Call once to set.
            resizer();

            // Call on resize. Opera debounces their resize by default.
            $(window).on('resize.fittext orientationchange.fittext', resizer);

        });

    };

})(jQuery);

// On initialise la latitude et la longitude de Paris (centre de la carte)
/* OSM & OL example code provided by https://mediarealm.com.au/ */
var map;
var mapLatClipper = 47.58576;
var mapLngClipper = 1.333208;
var mapLatSaintDenis = 47.618788;
var mapLngSaintDenis = 1.374290;
var mapLatHerbault = 47.604399;
var mapLngHerbault = 1.140211;
var mapDefaultZoom = 12;

function initialize_map() {
    map = L.map('map').setView([mapLatClipper, mapLngClipper], mapDefaultZoom);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([mapLatSaintDenis, mapLngSaintDenis]).addTo(map)
        .bindPopup('Rotaract Club de Blois,<br>lieu de rassemblement secondaire')
        .openPopup();
    L.marker([mapLatHerbault, mapLngHerbault]).addTo(map)
        .bindPopup('Rotaract Club de Blois,<br>lieu de rassemblement secondaire')
        .openPopup();
    L.marker([mapLatClipper, mapLngClipper]).addTo(map)
        .bindPopup('Rotaract Club de Blois,<br>lieu de rassemblement principal')
        .openPopup();
}

(function ($) {
    var
        defaults = {
            className: 'autosizejs',
            id: 'autosizejs',
            append: '\n',
            callback: false,
            resizeDelay: 10,
            placeholder: true
        },

        // border:0 is unnecessary, but avoids a bug in Firefox on OSX
        copy = '<textarea tabindex="-1" style="position:absolute; top:-999px; left:0; right:auto; bottom:auto; border:0; padding: 0; -moz-box-sizing:content-box; -webkit-box-sizing:content-box; box-sizing:content-box; word-wrap:break-word; height:0 !important; min-height:0 !important; overflow:hidden; transition:none; -webkit-transition:none; -moz-transition:none;"/>',

        // line-height is conditionally included because IE7/IE8/old Opera do not return the correct value.
        typographyStyles = [
            'fontFamily',
            'fontSize',
            'fontWeight',
            'fontStyle',
            'letterSpacing',
            'textTransform',
            'wordSpacing',
            'textIndent',
            'whiteSpace'
        ],

        // to keep track which textarea is being mirrored when adjust() is called.
        mirrored,

        // the mirror element, which is used to calculate what size the mirrored element should be.
        mirror = $(copy).data('autosize', true)[0];

    // test that line-height can be accurately copied.
    mirror.style.lineHeight = '99px';
    if ($(mirror).css('lineHeight') === '99px') {
        typographyStyles.push('lineHeight');
    }
    mirror.style.lineHeight = '';

    $.fn.autosize = function (options) {
        if (!this.length) {
            return this;
        }

        options = $.extend({}, defaults, options || {});

        if (mirror.parentNode !== document.body) {
            $(document.body).append(mirror);
        }

        return this.each(function () {
            var
                ta = this,
                $ta = $(ta),
                maxHeight,
                minHeight,
                boxOffset = 0,
                callback = $.isFunction(options.callback),
                originalStyles = {
                    height: ta.style.height,
                    overflow: ta.style.overflow,
                    overflowY: ta.style.overflowY,
                    wordWrap: ta.style.wordWrap,
                    resize: ta.style.resize
                },
                timeout,
                width = $ta.width(),
                taResize = $ta.css('resize');

            if ($ta.data('autosize')) {
                // exit if autosize has already been applied, or if the textarea is the mirror element.
                return;
            }
            $ta.data('autosize', true);

            if ($ta.css('box-sizing') === 'border-box' || $ta.css('-moz-box-sizing') === 'border-box' || $ta.css('-webkit-box-sizing') === 'border-box') {
                boxOffset = $ta.outerHeight() - $ta.height();
            }

            // IE8 and lower return 'auto', which parses to NaN, if no min-height is set.
            minHeight = Math.max(parseInt($ta.css('minHeight'), 10) - boxOffset || 0, $ta.height());

            $ta.css({
                overflow: 'hidden',
                overflowY: 'hidden',
                wordWrap: 'break-word' // horizontal overflow is hidden, so break-word is necessary for handling words longer than the textarea width
            });

            if (taResize === 'vertical') {
                $ta.css('resize', 'none');
            } else if (taResize === 'both') {
                $ta.css('resize', 'horizontal');
            }

            // The mirror width must exactly match the textarea width, so using getBoundingClientRect because it doesn't round the sub-pixel value.
            // window.getComputedStyle, getBoundingClientRect returning a width are unsupported, but also unneeded in IE8 and lower.
            function setWidth() {
                var width;
                var style = window.getComputedStyle ? window.getComputedStyle(ta, null) : false;

                if (style) {

                    width = ta.getBoundingClientRect().width;

                    if (width === 0 || typeof width !== 'number') {
                        width = parseInt(style.width, 10);
                    }

                    $.each(['paddingLeft', 'paddingRight', 'borderLeftWidth', 'borderRightWidth'], function (i, val) {
                        width -= parseInt(style[val], 10);
                    });
                } else {
                    width = $ta.width();
                }

                mirror.style.width = Math.max(width, 0) + 'px';
            }

            function initMirror() {
                var styles = {};

                mirrored = ta;
                mirror.className = options.className;
                mirror.id = options.id;
                maxHeight = parseInt($ta.css('maxHeight'), 10);

                // mirror is a duplicate textarea located off-screen that
                // is automatically updated to contain the same text as the
                // original textarea.  mirror always has a height of 0.
                // This gives a cross-browser supported way getting the actual
                // height of the text, through the scrollTop property.
                $.each(typographyStyles, function (i, val) {
                    styles[val] = $ta.css(val);
                });

                $(mirror).css(styles).attr('wrap', $ta.attr('wrap'));

                setWidth();

                // Chrome-specific fix:
                // When the textarea y-overflow is hidden, Chrome doesn't reflow the text to account for the space
                // made available by removing the scrollbar. This workaround triggers the reflow for Chrome.
                if (window.chrome) {
                    var width = ta.style.width;
                    ta.style.width = '0px';
                    var ignore = ta.offsetWidth;
                    ta.style.width = width;
                }
            }

            // Using mainly bare JS in this function because it is going
            // to fire very often while typing, and needs to very efficient.
            function adjust() {
                var height, original;

                if (mirrored !== ta) {
                    initMirror();
                } else {
                    setWidth();
                }

                if (!ta.value && options.placeholder) {
                    // If the textarea is empty, copy the placeholder text into
                    // the mirror control and use that for sizing so that we
                    // don't end up with placeholder getting trimmed.
                    mirror.value = ($ta.attr("placeholder") || '') + options.append;
                } else {
                    mirror.value = ta.value + options.append;
                }

                mirror.style.overflowY = ta.style.overflowY;
                original = parseInt(ta.style.height, 10);

                // Setting scrollTop to zero is needed in IE8 and lower for the next step to be accurately applied
                mirror.scrollTop = 0;

                mirror.scrollTop = 9e4;

                // Using scrollTop rather than scrollHeight because scrollHeight is non-standard and includes padding.
                height = mirror.scrollTop;

                if (maxHeight && height > maxHeight) {
                    ta.style.overflowY = 'scroll';
                    height = maxHeight;
                } else {
                    ta.style.overflowY = 'hidden';
                    if (height < minHeight) {
                        height = minHeight;
                    }
                }

                height += boxOffset;

                if (original !== height) {
                    ta.style.height = height + 'px';
                    if (callback) {
                        options.callback.call(ta, ta);
                    }
                    $ta.trigger('autosize.resized');
                }
            }

            function resize() {
                clearTimeout(timeout);
                timeout = setTimeout(function () {
                    var newWidth = $ta.width();

                    if (newWidth !== width) {
                        width = newWidth;
                        adjust();
                    }
                }, parseInt(options.resizeDelay, 10));
            }

            if ('onpropertychange' in ta) {
                if ('oninput' in ta) {
                    // Detects IE9.  IE9 does not fire onpropertychange or oninput for deletions,
                    // so binding to onkeyup to catch most of those occasions.  There is no way that I
                    // know of to detect something like 'cut' in IE9.
                    $ta.on('input.autosize keyup.autosize', adjust);
                } else {
                    // IE7 / IE8
                    $ta.on('propertychange.autosize', function () {
                        if (event.propertyName === 'value') {
                            adjust();
                        }
                    });
                }
            } else {
                // Modern Browsers
                $ta.on('input.autosize', adjust);
            }

            // Set options.resizeDelay to false if using fixed-width textarea elements.
            // Uses a timeout and width check to reduce the amount of times adjust needs to be called after window resize.

            if (options.resizeDelay !== false) {
                $(window).on('resize.autosize', resize);
            }

            // Event for manual triggering if needed.
            // Should only be needed when the value of the textarea is changed through JavaScript rather than user input.
            $ta.on('autosize.resize', adjust);

            // Event for manual triggering that also forces the styles to update as well.
            // Should only be needed if one of typography styles of the textarea change, and the textarea is already the target of the adjust method.
            $ta.on('autosize.resizeIncludeStyle', function () {
                mirrored = null;
                adjust();
            });

            $ta.on('autosize.destroy', function () {
                mirrored = null;
                clearTimeout(timeout);
                $(window).off('resize', resize);
                $ta
                    .off('autosize')
                    .off('.autosize')
                    .css(originalStyles)
                    .removeData('autosize');
            });

            // Call adjust in case the textarea already contains text.
            adjust();
        });
    };

    //Call button to go at top of the page
    var btn = $('#button');

    $(window).scroll(function () {
        if ($(window).scrollTop() > 300) {
            btn.addClass('show');
        } else {
            btn.removeClass('show');
        }
    });

    btn.on('click', function (e) {
        e.preventDefault();
        $('html, body').animate({scrollTop: 0}, '300');
    });
}(jQuery || $)); // jQuery or jQuery-like library, such as Zepto


/**
 *  Read More JS
 *  truncates text via specfied character length with more/less actions.
 *  Maintains original format of pre truncated text.
 *  @author stephen scaff
 *  @todo   Add destroy method for ajaxed content support.
 *
 */
const ReadMore = (() => {
    let s;

    return {

        settings() {
            return {
                content: document.querySelectorAll('.js-read-more'),
                originalContentArr: [],
                truncatedContentArr: [],
                moreLink: "Lire ...",
                lessLink: "Réduire ...",
            }
        },

        init() {
            s = this.settings();
            this.bindEvents();
        },

        bindEvents() {
            ReadMore.truncateText();
        },

        /**
         * Count Words
         * Helper to handle word count.
         * @param {string} str - Target content string.
         */
        countWords(str) {
            return str.split(/\s+/).length;
        },

        /**
         * Ellpise Content
         * @param {string} str - content string.
         * @param {number} wordsNum - Number of words to show before truncation.
         */
        ellipseContent(str, wordsNum) {
            return str.split(/\s+/).slice(0, wordsNum).join(' ') + '...';
        },

        /**
         * Truncate Text
         * Truncate and ellipses contented content
         * based on specified word count.
         * Calls createLink() and handleClick() methods.
         */
        truncateText() {

            for (let i = 0; i < s.content.length; i++) {
                //console.log(s.content)
                const originalContent = s.content[i].innerHTML;
                const numberOfWords = s.content[i].dataset.rmWords;
                const truncateContent = ReadMore.ellipseContent(originalContent, numberOfWords);
                const originalContentWords = ReadMore.countWords(originalContent);

                s.originalContentArr.push(originalContent);
                s.truncatedContentArr.push(truncateContent);

                if (numberOfWords < originalContentWords) {
                    s.content[i].innerHTML = s.truncatedContentArr[i];
                    let self = i;
                    ReadMore.createLink(self)
                }
            }
            ReadMore.handleClick(s.content);
        },

        /**
         * Create Link
         * Creates and Inserts Read More Link
         * @param {number} index - index reference of looped item
         */
        createLink(index) {
            const linkWrap = document.createElement('span');

            linkWrap.className = 'read-more__link-wrap';

            linkWrap.innerHTML = `<a id="read-more_${index}"
                                class="read-more__link"
                                style="cursor:pointer;">
                                ${s.moreLink}
                            </a>`;

            // Inset created link
            s.content[index].parentNode.insertBefore(linkWrap, s.content[index].nextSibling);

        },

        /**
         * Handle Click
         * Toggle Click eve
         */
        handleClick(el) {
            const readMoreLink = document.querySelectorAll('.read-more__link');

            for (let j = 0, l = readMoreLink.length; j < l; j++) {

                readMoreLink[j].addEventListener('click', function () {

                    const moreLinkID = this.getAttribute('id');
                    let index = moreLinkID.split('_')[1];

                    el[index].classList.toggle('is-expanded');

                    if (this.dataset.clicked !== 'true') {
                        el[index].innerHTML = s.originalContentArr[index];
                        this.innerHTML = s.lessLink;
                        this.dataset.clicked = true;
                    } else {
                        el[index].innerHTML = s.truncatedContentArr[index];
                        this.innerHTML = s.moreLink;
                        this.dataset.clicked = false;
                    }
                });
            }
        },

        /**
         * Open All
         * Method to expand all instances on the page.
         * Will probably be useful with a destroy method.
         */
        openAll() {
            const instances = document.querySelectorAll('.read-more__link');
            for (let i = 0; i < instances.length; i++) {
                content[i].innerHTML = s.truncatedContentArr[i];
                instances[i].innerHTML = s.moreLink;
            }
        }
    }
})();


//export default ReadMore;

ReadMore.init();
