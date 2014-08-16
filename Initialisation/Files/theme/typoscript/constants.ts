/*
 * Definition of custom subcategories
 */
# customsubcategory=domain=Domain(s) of website
# customsubcategory=layout=Layout settings
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
    #shortcut.tables := removeFromList(tt_address)
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

        linkWrap {
            width = 1200
            newWindow = 1
            lightboxEnabled = 1
            lightboxCssClass = prettyPhoto
            lightboxRelAttribute = prettyPhoto[{field:uid}]
        }
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
        # cat=tx_bootstrapcore.website/domain/010; type=string; label=Website domain: Only the domain without the protocol, e.g. www.example.com
        domain = www.example.com
        lang {
            # cat=tx_bootstrapcore.website/language/010; type=string; label=Default locale: Locale key for default language. Default: de_DE.UTF-8
            locale = de_DE.UTF-8
            # cat=tx_bootstrapcore.website/language/011; type=string; label=Default locale, short: Locale 2-letter key for default language. Default: de
            localeShort = de
        }
        metaNav {
            # cat=tx_bootstrapcore.website/layout/010; type=string; label=Meta navigation page id
            pageId = 7
        }
        footer {
            # cat=tx_bootstrapcore.website/layout/010; type=string; label=Page id with footer content (for static footer content)
            pageId = 6

            # cat=tx_bootstrapcore.website/layout/011; type=string; label=Left footer colPos
            leftColPos = 10
            # cat=tx_bootstrapcore.website/layout/012; type=string; label=Center footer colPos
            centerColPos = 11
            # cat=tx_bootstrapcore.website/layout/013; type=string; label=Right footer colPos
            rightColPos = 12
        }
    }
}


