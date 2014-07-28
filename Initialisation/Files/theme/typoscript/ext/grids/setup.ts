
/** ------------------------------------------------
* Assing grids, config grid header usage
*
*/
# Don't use header
#tt_content.gridelements_pi1.10 >

# Change if gridelements have diffferent IDs.
tt_content.gridelements_pi1.20.10.setup {
    #1 < lib.bootstrap_grids.2cols
    #2 < lib.bootstrap_grids.3cols
    #3 < lib.bootstrap_grids.4cols

    #4 < lib.bootstrap_grids.dynRow
}