<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "bsdist".
 ***************************************************************/

$EM_CONF[$_EXTKEY] = array (
	'title' => 'Bootstrap Kickstart Package',
	'description' => 'Starter package to create a new website with the bootstrap framework. Imports a basic page tree and includes a collection of files (html, scss, js, typoscript, bower.json, package.json...) to start developing.',
	'category' => 'distribution',
	'author' => 'Pascal Mayer',
	'author_email' => 'typo3@bsdist.ch',
	'author_company' => '',
	'state' => 'beta',
	'shy' => '',
	'version' => '2.0.0-dev',
	'priority' => '',
	'module' => '',
	'internal' => '',
	'uploadfolder' => '0',
	'createDirs' => '',
	'modify_tables' => '',
	'clearCacheOnLoad' => 1,
	'lockType' => '',
	'constraints' => array (
		'depends' => array (
			'typo3' => '8.7.0-8.7.99',
			'scheduler' => '8.7.0-8.7.99',
			'recycler' => '8.7.0-8.7.99',
		),
		'conflicts' => array (
			'bootstrap_package' => '',
			'introduction' => '',
		),
	),
    'autoload' => array(
        'psr-4' => array('Laxap\\Bsdist\\' => 'Classes/')
    ),
);

?>