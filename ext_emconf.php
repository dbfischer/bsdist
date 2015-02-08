<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "bsdist".
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Bootstrap Kickstart Package',
	'description' => 'This distribution package imports an initial page tree for a new website and installs bootstrap_core. A collection of files (typoscript, css, js, tmpl) for the website layout and a few extensions is included. See www.bsdist.ch',
	'category' => 'distribution',
	'author' => 'Pascal Mayer',
	'author_email' => 'typo3@bsdist.ch',
	'author_company' => '',
	'shy' => '',
	'version' => '1.2.0',
	'priority' => '',
	'module' => '',
	'state' => 'beta',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'constraints' => array (
		'depends' => array (
			'typo3' => '6.2.0-6.2.99',
			'bootstrap_core' => '1.2.1-0.0.0',
			// no dependency, only auto install
			'scheduler' => '6.2.0-6.2.99',
			'recycler' => '6.2.0-6.2.99',
		),
		'conflicts' => array (
			'bootstrap_package' => '',
			'introduction' => '',
		),
		'suggests' => array (
			'bootstrap_grids' => '1.1.0-0.0.0',
			'iconfont' => '0.5.0-0.0.0',
			'felogin' => '6.2.0-6.2.99',
			'indexed_search' => '6.2.0-6.2.99',
			'formhandler' => '2.0.0-0.0.0',
			'news' 		  => '3.0.0-0.0.0',
		),
	),
);

?>