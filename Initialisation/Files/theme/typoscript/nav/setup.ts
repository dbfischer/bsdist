/* ---------------------------------------------------------------
 * Twitter bootstrap style navbar dropdown (with responsive mode)
 */
lib.navbar = COA
lib.navbar.wrap = <nav class="navbar navbar-default" role="navigation">|</nav>
lib.navbar {

  # Responsive Navbar Part 1
  #
  10 = TEXT
  # fontawesome
  #10.value = <span class="fa fa-bars"></span>
  # glyphicon from bootstrap
  10.value = <span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
  10.wrap = <div class="navbar-header"><button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#mainnavbar">|</button></div>

  # Responsive Navbar Part 2: Place all navbar contents you want collapsed withing .navbar-collapse.collapse.
  #
  20 = HMENU
  20.wrap = <div class="collapse navbar-collapse" id="mainnavbar"><ul class="nav navbar-nav">|</ul></div>
  20 {
    entryLevel = 0
    #excludeUidList = 11,12
    1 = TMENU
    1 {
      wrap = |
      expAll = 1

      NO = 1
      NO.allWrap >
      NO.wrapItemAndSub = <li>|</li>
      CUR = 1
      CUR < .NO
      CUR.wrapItemAndSub = <li class="active">|</li>
      ACT = 1
      ACT < .CUR

      # Dropdown menu
      IFSUB = 1
      IFSUB < .NO
      IFSUB.wrapItemAndSub = <li class="dropdown">|</li>
      IFSUB.ATagParams = class="dropdown-toggle" role="button" data-toggle="dropdown" data-target="#"
      IFSUB.ATagBeforeWrap = 1
      IFSUB.stdWrap.wrap = |<b class="caret"></b>

      ACTIFSUB = 1
      ACTIFSUB < .IFSUB
      ACTIFSUB.wrapItemAndSub = <li class="dropdown active">|</li>
    }


    2 = TMENU
    2 {
      wrap = <ul class="dropdown-menu" role="menu">|</ul>
      expAll = 1

      NO = 1
      NO.allWrap >
      NO.wrapItemAndSub = <li>|</li>
      CUR = 1
      CUR < .NO
      CUR.wrapItemAndSub = <li class="active">|</li>
      ACT = 1
      ACT < .CUR

      SPC = 1
      SPC.doNotLinkIt = 1
      SPC.doNotShowLink = 1
      SPC.allWrap = <li class="divider"></li>
    }
  }
}


/* ---------------------------------------------------------------
 * Additional navigations
 */

lib.breadcrumb = COA
lib.breadcrumb {
  20 = HMENU
  20 {
    special = rootline
    special.range = 0|-1
    #wrap = <ul class="subnav">|</ul>
    wrap = &gt; |

    1 = TMENU
    1 {
      wrap = |
      expAll = 1

      NO = 1
      NO.linkWrap = &nbsp;| /
      CUR = 1
      CUR < .NO
      CUR.linkWrap = &nbsp;<strong>|</strong>
    }
  }
}

lib.subnav = COA
lib.subnav {

}

lib.metanav = COA
lib.metanav {
    20 = HMENU
    20.special = directory
    20.special.value = {$plugin.tx_bootstrapcore.website.metaNav.pageId}
    20.wrap = |
    20 {
        entryLevel = 0
        #excludeUidList = 33
        1 = TMENU
        1 {
            wrap = |
            expAll = 1
            NO = 1
            NO.allWrap >
            NO.wrapItemAndSub = |&nbsp;-&nbsp; |*| |&nbsp;-&nbsp; |*| |
        }
    }
}
