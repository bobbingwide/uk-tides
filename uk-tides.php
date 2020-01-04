<?php 
/*
Plugin Name: UK tides - heights and times
Plugin URI: https://www.oik-plugins.com/oik-plugins/uk-tides-times-and-heights/
Description: shortcode for UK tide times and heights [bw_tides]
Version: 2.0.0-alpha-20200104
Author: bobbingwide
Author URI: https://bobbingwide.com/about-bobbing-wide
License: GPL2

    Copyright 2011-2020 Bobbing Wide (email : herb@bobbingwide.com )

    This program is free software; you can redistribute it and/or modify
    it under the terms of the GNU General Public License version 2,
    as published by the Free Software Foundation.

    You may NOT assume that you can use any other version of the GPL.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    The license for this software can likely be found here:
    http://www.gnu.org/licenses/gpl-2.0.html

*/

uk_tides_plugin_loaded();  

/**
 * Implement "oik_add_shortcodes" action for UK tides
 *
 * Defers the registration of the [bw_tides] shortcode until it's been determined that shortcodes are being used
 * The code for the shortcode is not loaded until actually required.
 */
function uk_tides_init() {
	if ( function_exists( "bw_add_shortcode" ) ) {
		bw_add_shortcode( 'bw_tides', 'bw_tides', oik_path( "shortcodes/uk-tides.php", "uk-tides"), false );
	}
}

/**
 * Implement "admin_notices" action for UK tides
 *
 * 2014/11/25 - Now dependent upon oik v2.3
 * 2015/12/15 - Now dependent upon oik v2.5
 * 2017/04/10 - Now dependent upon oik v3.1
 * 2018/12/12 - Now dependent upon oik v3.2.8
 */ 
function uk_tides_activation() {
  static $plugin_basename = null;
  if ( !$plugin_basename ) {
    $plugin_basename = plugin_basename(__FILE__);
    add_action( "after_plugin_row_uk-tides/uk-tides.php", "uk_tides_activation" );   
    if ( !function_exists( "oik_plugin_lazy_activation" ) ) { 
      require_once( "admin/oik-activation.php" );
    }
  }  
  $depends = "oik:3.2.8";
  oik_plugin_lazy_activation( __FILE__, $depends, "oik_plugin_plugin_inactive" );
}

/**
 * Function to invoke when UK tides plugin is loaded
 */  
function uk_tides_plugin_loaded() {
  add_action( "oik_add_shortcodes", "uk_tides_init" );
  //add_action( "admin_notices", "uk_tides_activation" );
	add_action( 'init', 'uk_tides_init_blocks');
//add_action( 'plugins_loaded', 'uk_tides_plugins_loaded' );
	//add_action( 'parse_request', 'uk_tides_plugins_loaded' );
}

/**
 * Initialises the UK tides block.
 *
 * This logic is expected to run independent of oik and oik-blocks
 */
function uk_tides_init_blocks() {
	uk_tides_plugins_loaded();
	$library_file = oik_require_lib( 'oik-blocks' );
	//bw_trace2( $library_file, "library_file", false );
	oik\oik_blocks\oik_blocks_register_editor_scripts(  'uk-tides', 'uk-tides');
	//oik\oik_blocks\oik_blocks_register_block_styles( 'uk-tides' );
	uk_tides_register_dynamic_blocks();
}



/**
 * Registers action/filter hooks for uk-tides's dynamic blocks
 *
 * We have to do this during init, which comes after _enqueue_ stuff
 *
 * script, style, editor_script, and editor_style
 */
function uk_tides_register_dynamic_blocks() {
	if ( function_exists( 'register_block_type' ) ) {
		register_block_type( 'uk-tides/uk-tides',
			[
				'render_callback'=>'uk_tides_dynamic_block_tides',
				'attributes'     =>[
					'site' =>[ 'type'=>'string' ],
					'port'=>[ 'type'=>'string' ]
				]
				, 'editor_script' => 'uk-tides-blocks-js'
				, 'editor_style' => null
				, 'script' => null
				, 'style' => 'uk-tides-blocks-css'
			] );
	}
}

/**
 * Server rendering dynamic UK-tides block with content
 *
 * @param array $attributes array of block attributes.
 * @return string generated HTML
 */
function uk_tides_dynamic_block_tides( $attributes ) {
	$html = \oik\oik_blocks\oik_blocks_check_server_func( 'shortcodes/uk-tides.php', 'uk-tides', 'bw_tides' );
	if ( ! $html ) {
		$attributes = uk_tides_attributes( $attributes );
		$html = bw_tides( $attributes, null, null );
	}
	return $html;
}

/**
 * Sets parameters for bw_tides from the blocks attributes
 * * domain | format
 * ------ | -----------------------------------
 * tidetimes.org.uk | domain/port-tide-times.rss
 * tidetimes.co.uk  | domain/rss/port-tide-times
 *
 * @param $attributes site, port
 * @return array with tideurl and store set from site and port
 */
function uk_tides_attributes( $attributes ) {
	bw_trace2( $attributes );
	$site = bw_array_get( $attributes, "site", null );
	$port = bw_array_get( $attributes, "port", null );
	switch ( $site ) {
		case "couk":
			$tideurl = "https://tidetimes.co.uk/rss/$port-tide-times";
			break;
		default:
			$tideurl = "https://www.tidetimes.org.uk/$port-tide-times.rss";
	}
	$attributes[ 'tideurl'] = $tideurl;
	$attributes[ 'store'] = $tideurl;

	return $attributes;
}

/**
 * Implements 'parse_request' action for oik-blocks
 *
 * Prepares use of shared libraries if this has not already been done.
 */
function uk_tides_plugins_loaded() {
	uk_tides_boot_libs();
	oik_require_lib( 'bwtrace' );
	oik_require_lib( 'bobbfunc' );
}

/**
 * Boot up process for shared libraries
 *
 * ... if not already performed
 */
function uk_tides_boot_libs() {
	if ( ! function_exists( 'oik_require' ) ) {
		$oik_boot_file = __DIR__ . '/libs/oik_boot.php';
		$loaded        = include_once( $oik_boot_file );
	}
	oik_lib_fallback( __DIR__ . '/libs' );
}
