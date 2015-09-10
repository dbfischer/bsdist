/* --------------------
 * Configuration
 */
config {
    #htmlTag_setParams = lang="en" dir="ltr"
    pageTitleFirst = 1
}


/* --------------------
 * Page
*/
page {
    #bodyTag = <body class="fixed">
    10 = FLUIDTEMPLATE
    10 {
        file.cObject = CASE
        file.cObject {
            # home template
            2 = TEXT
            2.value       = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_home.html
            # empty template
            3 = TEXT
            3.value       = {$plugin.tx_bootstrapcore.theme.baseDir}/tmpl/backend_layout/tmpl_empty.html
        }

        variables {
            content_sidebar < styles.content.get
            content_sidebar.select.where = colPos=1
        }
    }

    meta {
        author   =
        robots   = noindex,nofollow
    }

    includeCSS {
        # In bootstrap_core set
		bootstrap >
		#bootstrap_core
		lightbox >
		# Site & theme specific
		all = {$plugin.tx_bootstrapcore.theme.baseDir}/css/all.min.css
    }
	includeJSlibs {
		jquery = {$plugin.tx_bootstrapcore.theme.baseDir}/js/jquery.min.js
	}
    includeJSFooterlibs {
		# In bootstrap_core set
		bootstrap >
		lightbox >
        # Site & theme specific
		footer = {$plugin.tx_bootstrapcore.theme.baseDir}/js/footer.min.js
    }

}



/* --------------------
 * tt_content customizations
 */
tt_content {

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

            # template with sidebar: value based on colPos
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
		10.value = <img src="{$plugin.tx_bootstrapcore.theme.baseDir}/img/logo.png" class="logo img-responsive" />
		10.typolink.parameter = 1
	}

    footerContent = COA
	footerContent.wrap = <div class="container"><div class="row">|</div></div>
	footerContent {
	    # left footer col
        10 < styles.content.get
        10 {
            select.pidInList = {$plugin.tx_bootstrapcore.website.footer.pageId}
            #slide = -1
            select.where = colPos={$plugin.tx_bootstrapcore.website.footer.leftColPos}
            stdWrap.wrap = <div class="col-md-4 col-sm-4">|</div>
        }
        # center
        20 < .10
        20.select.where = colPos={$plugin.tx_bootstrapcore.website.footer.centerColPos}
        20.stdWrap.wrap = <div class="col-md-4 col-sm-4 text-center">|</div>
        # right
        30 < .10
        30.select.where = colPos={$plugin.tx_bootstrapcore.website.footer.rightColPos}
        30.stdWrap.wrap = <div class="col-md-4 col-sm-4 text-right">|</div>
	}

	copyright = COA
	copyright {
		10 = TEXT
		10.data = date:U
		10.strftime = %Y
		10.wrap =  &copy; Copyright&nbsp;|&nbsp;Firma AG

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
}


/* --------------------
* Conditional stuff
*/
# Production settings
[applicationContext = Production*]
	config {
		concatenateCss = 1
		concatenateJs = 1
	}
	page {
		meta {
			robots   = index,follow
		}
	}
[global]

/*
# On home
[globalVar = TSFE:id = 1]
  # change site/page title order
  config.pageTitleFirst = 0
[global]
*/


/* --------------------
 * More configurations
 */
<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/nav/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/lang/multilang.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/lang/langnav.ts">


# --- Additional extension setups (see constants.ts) ---
#
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/ext/indexed_search/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/ext/felogin/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/ext/grids/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/ext/iconfont/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/ext/formhandler/setup.ts">
#<INCLUDE_TYPOSCRIPT: source="FILE:fileadmin/bsdist/theme/typoscript/ext/sr_freecap/setup.ts">
