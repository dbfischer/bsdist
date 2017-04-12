/* --------------------
 * Activate indexed_search
*/
config {
  # Indexed Search
  index_enable = 1
  # index files
  index_externals = 1
  # don't index metatags
  index_metatags = 0
}


/* --------------------
 * Configuration of indexed_search
*/
plugin.tx_indexedsearch {
  # html template for form, results, rules...
  view {
    templateRootPaths.100 = {$plugin.tx_bsdist.theme.baseDir}/tmpl/indexed_search/Templates/
    partialRootPaths.100 = {$plugin.tx_bsdist.theme.baseDir}/tmpl/indexed_search/Partials/
  }

  settings {
    # root page to search from
    rootPidList = {$plugin.tx_bsdist.indexed_search.rootPidList}
    # number of page links shown
    page_links = 8
    # show/hide rules
    displayRules = 0
  }

}