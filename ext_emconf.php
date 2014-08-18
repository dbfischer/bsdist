<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "bsdist".
 *
 * Auto generated 23-05-2014 10:41
 *
 * Manual updates:
 * Only the data in the array - everything else is removed by next
 * writing. "version" and "dependencies" must not be touched!
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Bootstrap Kickstart Package',
	'description' => 'This package imports an initial page tree for a new website and installs bootstrap_core. A collection of files (typoscript, css, js, tmpl) for the website layout and a few extensions is included. Ready to start developing.',
	'category' => 'distribution',
	'author' => 'simplicity',
	'author_email' => 'typo3@simple.ch',
	'author_company' => 'Simplicity GmbH',
	'shy' => '',
	'version' => '1.0.1',
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
		'depends' =>  array (
			'typo3' => '6.2.0-6.2.99',
			'bootstrap_core' => '1.0.0-1.0.99',
			// auto install
			'scheduler' => '6.2.0-0.0.0',
			'recycler' => '6.2.0-0.0.0',
		),
		'conflicts' =>  array (
			// other bootstrap packages
			'bootstrap_package' => '',
			// other distributions
			'introduction' => '',
		),
		'suggests' =>  array (
			'bootstrap_grids' => '1.0.0-0.0.0',
			'iconfont' => '0.5.0-0.0.0',

			'felogin' => '6.2.0-0.0.0',
			'indexed_search' => '6.2.0-0.0.0',

			'formhandler' => '2.0.0-0.0.0',
			'news' 		  => '3.0.0-0.0.0',
			'direct_mail' => '4.0.0-0.0.0',
		),
	),
);

?>