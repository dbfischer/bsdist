/*
 * Definition of custom subcategories
 */
# customsubcategory=domain=Domain(s) of website
# customsubcategory=language=Language settings
# customsubcategory=extension=Extension settings
# customsubcategory=video=Video settings


/* ----------------------------------------
 * site & theme specific constants for TYPO3
 */
content {
    # default header type h2 instead of h1
    defaultHeaderType = 2

    # remove tt_address (if not used for direct_mail)
    # direct mail does not require tt_address (in 4.0.0), but creates the table columns anyway
    shortcut.tables := removeFromList(tt_address)
}
styles.content {
    imgtext {
        maxW = 1140
        # 50% col, margin between 30px
        maxWInText = 555
        maxWInText = 750
        textMargin = 20
        colSpace = 30
        rowSpace = 30

        # click-enlarge
        linkWrap {
            width = 1200
            # open new window for each click-enlarge
            newWindow = 1

            # use prettyphoto for lightbox feature
            lightboxEnabled = 1
            lightboxCssClass = prettyPhoto
            lightboxRelAttribute = prettyPhoto[{field:uid}]
        }

        # border style
        borderThick = 1
        borderSpace = 10
    }

    uploads {
        filesizeBytesLabels = " | Kb| Mb| Gb"
    }

    media {
        defaultVideoWidth = 370
        defaultVideoHeight = 208

        defaultAudioWidth = 370
        defaultAudioHeight = 30
    }
}


/* ----------------------------------------
 * theme specific constants for bootstrap core
 */
plugin.tx_bootstrapcore {
    website {
        # cat=tx_bootstrapcore.website/domain/010; type=string; label=Website domain: Only the domain without the protocol, e.g. www.simple.ch
        domain = t3bdev.simpledev.ch
        lang {
            # cat=tx_bootstrapcore.website/language/010; type=string; label=Default locale: Locale key for default language. Default: de_DE.UTF-8
            locale = de_DE.UTF-8
            # cat=tx_bootstrapcore.website/language/011; type=string; label=Default locale, short: Locale 2-letter key for default language. Default: de
            localeShort = de
        }
        metaNav {
            pageId = 7
        }
        footer {
            # used for static footer from dedicated page
            pageId = 6

            # slot colPos
            leftColPos = 10
            centerColPos = 11
            rightColPos = 12
        }
    }
}


