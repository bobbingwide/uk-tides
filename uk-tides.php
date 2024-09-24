<?php
/*
Plugin Name: UK tides - heights and times
Plugin URI: https://www.oik-plugins.com/oik-plugins/uk-tides-times-and-heights/
Description: uk-tides block and [bw_tides] shortcode for UK tide times and heights
Version: 3.3.1
Author: bobbingwide
Author URI: https://bobbingwide.com/about-bobbing-wide
License: GPL2

    Copyright 2011-2024 Bobbing Wide (email : herb@bobbingwide.com )

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
 * Function to invoke when UK tides plugin is loaded
 */
function uk_tides_plugin_loaded() {
	add_action( "oik_add_shortcodes", "uk_tides_init" );
	add_action( 'init', 'uk_tides_init_blocks', 100 );
}

/**
 * Initialises the UK tides block.
 *
 * This logic is expected to run independent of oik and oik-blocks
 */
function uk_tides_init_blocks() {
	uk_tides_plugins_loaded();
	$library_file = oik_require_lib( 'oik-blocks' );
	//oik\oik_blocks\oik_blocks_register_editor_scripts(  'uk-tides', 'uk-tides');
	uk_tides_register_dynamic_blocks();
}



/**
 * Registers UK tides's dynamic blocks
 *
 * We have to do this during init, which comes after _enqueue_ stuff
 *
 * script, style, editor_script, and editor_style
 */
function uk_tides_register_dynamic_blocks() {
	$args = [ 'render_callback' => 'uk_tides_dynamic_block_tides'];
	$registered = register_block_type_from_metadata( __DIR__ . '/src/oik-uk-tides', $args );
	//bw_trace2( $registered, "registered", false );
	/**
	 * Localise the script by loading the required strings for the build/entry-point.js files
	 * from the locale specific .json file in the languages folder.
	 */
	$ok = wp_set_script_translations( 'uk-tides-uk-tides-editor-script', 'uk-tides' , __DIR__ .'/languages' );
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
		$html = uk_tides_server_side_wrapper( $attributes, $html );
	}
	return $html;
}

function uk_tides_server_side_wrapper( $attributes, $html ) {
	$align_class_name=empty( $attributes['textAlign'] ) ? '' : "has-text-align-{$attributes['textAlign']}";
	$extra_attributes  =[ 'class'=>$align_class_name ];
	$wrapper_attributes = get_block_wrapper_attributes( $extra_attributes );

	$html=sprintf(
		'<div %1$s>%2$s</div>',
		$wrapper_attributes,
		$html
	);

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
	//bw_trace2( );
	$site = bw_array_get( $attributes, "site", null );
	$port = bw_array_get( $attributes, "port", 'chichester-harbour-entrance' );

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
 * Implements 'init' action for uk-tides
 *
 * Prepares use of shared libraries if this has not already been done.
 */
function uk_tides_plugins_loaded() {
	uk_tides_boot_libs();
	oik_require_lib( 'bwtrace' );
	oik_require_lib( 'bobbfunc' );
	if ( !function_exists( 'bw_add_shortcode' ) ) {
		$oik_shortcodes_path = oik_path( 'oik-add-shortcodes.php' );
		if ( file_exists( $oik_shortcodes_path ) ) {
			/* Don't load oik-shortcodes library */
			require_once $oik_shortcodes_path;
		} else {
			oik_require_lib( 'oik-shortcodes' );
		}
	}
	bw_load_plugin_textdomain( "uk-tides");
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
