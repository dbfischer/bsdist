<?php

/***************************************************************
 * Extension Manager/Repository config file for ext "bsdist".
 ***************************************************************/

$EM_CONF[$_EXTKEY] = [
	'title' => 'Bootstrap Kickstart Package',
	'description' => 'Kickstart package to create a new TYPO3 website. Delivers a simple page tree for a new website based on the bootstrap framework. Ads bootstrap layout features to some of the content elements.',
	'category' => 'distribution',
	'author' => 'Pascal Mayer',
	'author_email' => 'typo3@bsdist.ch',
	'author_company' => '',
	'state' => 'beta',
	'version' => '2.0.0',
	'uploadfolder' => 0,
	'createDirs' => '',
	'modify_tables' => 'tt_content',
	'clearCacheOnLoad' => 1,
	'constraints' => [
		'depends' => [
			'typo3' => '8.7.0-8.7.99',
            'fluid_styled_content' => '8.7.0-8.7.99',
			'scheduler' => '8.7.0-8.7.99', // activate on installation
			'recycler' => '8.7.0-8.7.99',  // activate on installation
        ],
		'conflicts' => [
			'css_styled_content' => '*',
			'bootstrap_package' => '*',
        ],
	],
    'autoload' => [
        'psr-4' => ['Laxap\\Bsdist\\' => 'Classes']
    ],
];

?>