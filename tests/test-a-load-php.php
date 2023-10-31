<?php

/**
 * @package uk-tides
 * @copyright (C) Copyright Bobbing Wide 2023
 *
 * Unit tests to load all the shared library files for PHP 8.2
 */

class Tests_load_libs extends BW_UnitTestCase
{

	/**
	 * set up logic
	 *
	 * - ensure any database updates are rolled back
	 * - we need oik-googlemap to load the functions we're testing
	 */
	function setUp(): void
	{
		parent::setUp();

	}

	function test_load_libs() {
		$this->load_dir_files( 'libs' );
		$this->assertTrue( true );

	}
	function load_dir_files( $dir ) {
		$files = glob( '$dir/*.php');
		foreach ( $files as $file ) {
			oik_require( $file, 'uk-tides');
		}
	}

	function test_load_plugin() {
		oik_require( 'uk-tides.php', 'uk-tides');
		$this->assertTrue( true );

	}

}
