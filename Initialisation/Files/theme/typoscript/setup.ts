/* --------------------
 * Configuration
 */
config {
    # In bootstrap_core defined
    /*
    cache_period = 43200
    sendCacheHeaders = 0
    absRefPrefix = /
    prefixLocalAnchors = all
    extTarget =
    intTarget =
    tx_realurl_enable = 1
    simulateStaticDocuments = 0
    noScaleUp = 1

    spamProtectEmailAddresses = ascii
    # more options, 1 = js encrypted
    #spamProtectEmailAddresses = 1
    #spamProtectEmailAddresses_atSubst = (at)
    #spamProtectEmailAddresses_lastDotSubst = .

    sys_language_uid = 0
    language = {$plugin.tx_bootstrapcore.website.lang.localeShort}
    locale_all = {$plugin.tx_bootstrapcore.website.lang.locale}
    htmlTag_langKey < config.language
    */
    #htmlTag_setParams = lang="de" dir="ltr" class="no-js"

    # Page title before website (tmpl) title
    pageTitleFirst = 1

    # Enable jumpurl
    #jumpurl_enable = 1
    #jumpurl_mailto_disable = 1

    # concatenate css & js
    #concatenateCss = 1
    #concatenateJs = 1

    # multi lang handling
    #sys_language_softMergeIfNotBlank = tx_news_domain_model_news:categories, tt_content:image, sys_file_reference,sys_file

    #headerComment (
    #)
}


/* --------------------
 * Page
*/
page {

    # For fixed header
    #bodyTag = <body class="fixed">

    10 = FLUIDTEMPLATE
    10 {
        /*
        # In bootstrap_core defined
        layoutRootPath = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/Layouts/
        partialRootPath = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/Partials/
        */
        file.cObject = CASE
        file.cObject {
            /*
            # In bootstrap_core defined
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.field = backend_layout
            default = TEXT
            default.value = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_default.html
            */
            # home template
            2 = TEXT
            2.value       = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_home.html

            # empty template
            3 = TEXT
            3.value       = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_empty.html
        }

        # Variables in templates
        variables {
            /*
            # In bootstrap_core defined
            # content main col (colPos=0)
            content < styles.content.get
            */
            # content sidebar
            content_sidebar < styles.content.get
            content_sidebar.select.where = colPos=1

            /*
            # Optional: FLUID layout based on page field 'layout'
            containerWrapClass = CASE
            containerWrapClass {
                key.data = levelfield:-1, layout, slide
                # default template
                default = TEXT
                default.value = default
                1 = TEXT
                1.value = blog
            }
            */
        }
    }

    meta {
        /*
        # In bootstrap_core defined
        X-UA-Compatible = IE=edge,chrome=1
        X-UA-Compatible.httpEquivalent = 1
        viewport = width=device-width, initial-scale=1.0
        description = TEXT
        description.data = field:description // field:abstract // levelfield :-1, description, slide // levelfield :-1, abstract, slide
        */
        author   =
        robots   = noindex,nofollow
        google = notranslate
        apple-mobile-web-app-capable = no
    }

    includeCSS {
        /*
        # In bootstrap_core defined
        # instead of css_styled_content CSS
        bootstrap_core = typo3conf/ext/bootstrap_core/Resources/Public/Css/content.css
        */
        # default bootstrap css
        bootstrap = {$plugin.tx_bootstrapcore.theme.libDir}/bootstrap/3.1/css/bootstrap.min.css
        bootstrap.forceOnTop = 1

        # Optional: prettyPhoto (lightbox)
        lightbox = {$plugin.tx_bootstrapcore.theme.libDir}/jquery/prettyphoto/css/prettyPhoto.min.css
        # Optional: webfont
        /*
        webfont = //fonts.googleapis.com/css?family=Open+Sans:400,600
        webfont {
            excludeFromConcatenation = 1
            external = 1
            forceOnTop = 1
        }
        */

        # Site & theme specific
        custom = {$plugin.tx_bootstrapcore.theme.baseDir}/css/custom.min.css
    }

    headerData {
        # default stuff
        10 = COA
        10 {
            # Favicon/apple touch link rels
            10 = TEXT
            10.value (
                <link rel="shortcut icon" href="fileadmin/favicons/favicon.ico" />
                <link rel="apple-touch-icon-precomposed" sizes="144x144" href="fileadmin/favicons/apple-touch-icon-144x144-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="114x114" href="fileadmin/favicons/apple-touch-icon-114x114-precomposed.png">
                <link rel="apple-touch-icon-precomposed" sizes="72x72" href="fileadmin/favicons/apple-touch-icon-72x72-precomposed.png">
                <link rel="apple-touch-icon-precomposed" href="fileadmin/favicons/apple-touch-icon-precomposed.png">
            )

            # Inline scripts, i.e. for IE conditional includes
            20 = TEXT
            20.value (

<!--[if lt IE 9]>
<script src="{$plugin.tx_bootstrapcore.theme.libDir}/html5shiv/html5shiv.js"></script>
<![endif]-->
            )
        }

        /*
        # Add CSS-file based on layout selection
        20 = CASE
        20 {
            stdWrap.wrap = <link rel="stylesheet" type="text/css" href="fileadmin/bsdist/theme/css/#" media="all">
            stdWrap.splitChar = #
            key.data = levelfield:-1, layout, slide
            # default add-on css
            default = TEXT
            default.value = layout_default.css
            2 = TEXT
            2.value = layout_news.css
        }
        */
    }

    includeJSlibs {
        # default jquery js
        jquery = {$plugin.tx_bootstrapcore.theme.libDir}/jquery/jquery-1.11.0.min.js
    }
    includeJSFooterlibs {
        # default bootstrap js
        bootstrap = {$plugin.tx_bootstrapcore.theme.libDir}/bootstrap/3.1/js/bootstrap.min.js

        # Optional: prettyPhoto (lightbox)
        lightbox = {$plugin.tx_bootstrapcore.theme.libDir}/jquery/prettyphoto/js/jquery.prettyPhoto.js

        # site & theme specific
        custom = {$plugin.tx_bootstrapcore.theme.baseDir}/js/custom.js
    }

    #bodyTagCObject = CASE
    /*
    bodyTagCObject {
        stdWrap.wrap = <body class="|">
        key.field = layout
        #key.data = levelfield:-1, layout, slide
        # default body tag
        default = TEXT
        default.value =
        1 = TEXT
        1.value = layout1
    }
    */

}


/* --------------------
 * lib.stdheader customizations
 */
lib.stdheader {
    /*
    10 {
        # Example (not tested): show subheader different for <h1>
        1 = COA
        1 {
            10 = TEXT
            10 {
                current = 1
                stdWrap.dataWrap = <h1{register:headerClass}>|</h1>
                stdWrap.required = 1
            }
            20 = TEXT
            20 {
                field = subheader
                stdWrap.dataWrap = <p class="subheader>|</p>
                stdWrap.required = 1
            }
            stdWrap.dataWrap = <div class="pagetitle">|</div>
            stdWrap.required = 1
        }

        # Option: Add custom headline
        #6 < .1
        #6.stdWrap.dataWrap = <h3 class="special"><span>|</span></h3>
    }
    */
}


/* --------------------
 * tt_content customizations
 */
tt_content {
    div {
        /*
        override.cObject {
            default.value = <hr>
            1.value = <hr class="style2">
            2.value = <hr class="style3">
        }
        */
    }
    media {
        /*
        # for use with fitvids
        20.mimeConf.swfobject.layout = <div class="embed-container">###SWFOBJECT###</div>
        */
    }

    /* --------------------
     * Image max size (based on backend_layout)
     */
    image.20 {
        maxW >
        maxW.cObject = CASE
        maxW.cObject {
            key.data = levelfield:-1, backend_layout_next_level, slide
            key.override.data = TSFE:page|backend_layout

            # default template, home, fullwidth
            default = TEXT
            default.value = {$styles.content.imgtext.maxW}

            # template with sidebar, based on colPos
            1 = CASE
            1 {
                key.field = colPos
                # col-md-8 (and fullwidth = 1140)
                default = TEXT
                default.value = 750
                # col-md-4 (and fullwidth = 1140)
                1 = TEXT
                1.value = 360
            }

        }
    }

    uploads.20 {
        /*
        linkProc {
            combinedLink = 0
            jumpurl >
        }
        renderObj {
            # preview image
            10 {
                file.width = 100
                stdWrap {
                    wrap = <div class="img" style="width: 140px">|</div>
                }
            }
            # icon
            # change to diff set of custom icons for downloads, default is typo3/gfx/fileicons/
            15.file.import = typo3conf/ext/bootstrap_core/Resources/Public/Icons/fileicons/
            15.file.import.wrap = |.png
            # start text-wrap
            18 = TEXT
            18.value = <div class="text">
            # file name/link
            25 < .20
            25 {
                wrap (
                 <p class="dl-link"><span class="glyphicon glyphicon-download"></span>
                 |</p>
                )
                wrap.override >
            }
            # title of download
            20 {
                # instead of name use title (works only if media object used and title given)
                data = file:current:title
                typolink >
             #   wrap = <h4 class="dl">|</h4>
                wrap = <span class="dl">|</span>
                wrap.override >
                # activate if file extension should be stripped from filename
                #replacement.20 < .replacement._20
                #replacement._20 >
            }
            # description
            30.wrap = <p class="dl-descr">|</p>
            30.wrap = <span class="dl-descr">|</span>

            # close text-wrap
            50 = TEXT
            50.value = </div>

            wrap {
                cObject {
                    10 {
                        oddEvenClass >
                        elementClass = dl-ext-{file:current:extension}
                    }
                    20 {
                        #value = <div class="dl-entry {register:elementClass}">|<div class="clearfix"></div></div>
                        value = <li class="dl-entry {register:elementClass}">|<div class="clearfix"></div></li>
                    }
                }
            }
        }
        */
    }

    /* --------------------
     * Use header fields in gridelements (remove if not used)
     */
    gridelements_pi1 {
        10 =< lib.stdheader
    }
}

/* --------------------
 * Layout blocks, libs
 */
lib {
	logo = COA
	logo.wrap = <div class="logo">|</div>
	logo {
		10 = TEXT
		10.value = <img src="{$plugin.tx_bootstrapcore.theme.baseDir}/img/logo.png" class="logo" />
		10.typolink.parameter = 1
		#10.typolink.ATagParams = class="logo"
        /*
		20 = TEXT
		20.value = something goes in here
		20.wrap = <p class="claim">|</p>
		*/
	}

	#pageHeading = COA
	/*
	#pageHeading.wrap = <div class="page-header">|</div>
	pageHeading {
	  10 = TEXT
	  10.data = page:title
	  10.wrap = <h1>|</h1>

	  20 = TEXT
	  20.data = page:subtitle
	  20.wrap = <h4>|&nbsp;</h4>
	  20.required = 1
	  #20.noTrimWrap = | <small>|</small>|
	}
    */

    footerContent = COA
	footerContent.wrap = <div class="container"><div class="row">|</div></div>
	footerContent {
	    # left footer col
        10 < styles.content.get
        10 {
            # either-or
            # v1: from dedicated page
            select.pidInList = {$plugin.tx_bootstrapcore.website.footer.pageId}
            # v2: on each page slots, slide
            #slide = -1

            # colPos (same for v1 and v2)
            select.where = colPos={$plugin.tx_bootstrapcore.website.footer.leftColPos}
            stdWrap.wrap = <div class="col-md-4 col-sm-6">|</div>
        }
        # center footer col
        20 < .10
        20.select.where = colPos={$plugin.tx_bootstrapcore.website.footer.centerColPos}
        20.stdWrap.wrap = <div class="col-md-4 col-sm-12 text-center">|</div>
        # right footer col
        30 < .10
        30.select.where = colPos={$plugin.tx_bootstrapcore.website.footer.rightColPos}
        30.stdWrap.wrap = <div class="col-md-4 col-sm-12 text-right">|</div>
	}

	copyright = COA
	copyright {
		# copyright text
		10 = TEXT
		10.data = date:U
		10.strftime = %Y
		10.wrap =  &copy; Copyright&nbsp;|&nbsp;Firma AG

		# simple bottom nav
		20 = HMENU
		20.wrap = &nbsp; &#124; &nbsp;|
		20 {
			entryLevel = 0
			#excludeUidList = 11
			1 = TMENU
			1 {
				wrap = |
				expAll = 1
				NO = 1
				NO.allWrap >
				NO.wrapItemAndSub = | |*| &nbsp;-&nbsp;| |*| &nbsp;-&nbsp;|
			}
		}
	}

    # for dynamic content inherit slots, e.g. Partials/FooterSlide (from Ext:bootstrap_package)
    /*
    contentSlide = COA
    contentSlide {
        5 = LOAD_REGISTER
        5  {
            colPos.cObject = TEXT
            colPos.cObject {
                value.current = 1
                ifEmpty = 0
            }
        }
        20 < styles.content.get
        20.select.where = colPos={register:colPos}
        20.select.where.insertData = 1
        20.slide = -1
    }
    */
}


# Conditional stuff
/*
# On home
[globalVar = TSFE:id = 1]
  # change site/page title order
  config.pageTitleFirst = 0
[global]
*/


