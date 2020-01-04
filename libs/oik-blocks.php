<?php
namespace oik\oik_blocks;

if ( ! defined( 'OIK_BLOCKS_INCLUDED' ) ) {
	define( 'OIK_BLOCKS_INCLUDED', '1.0.0' );
	define( 'OIK_BLOCKS_FILE', __FILE__ );

	/**
	 * The oik-blocks shared library for Gutenberg blocks.
	 *
	 * @copyright (C) Bobbing Wide 2019
	 * Library: oik-blocks
	 * Depends: oik_boot, bobbfunc
	 * Provides: oik-blocks
	 */

	/**
	 * Registers the frontend block styles for a plugin
	 *
	 * We expect the CSS for all blocks to be combined into one file in the $stylepath file.
	 *
	 * @param  string $plugin plugin slug.
	 */
	function oik_blocks_register_block_styles( $plugin ) {
		$style_path = 'blocks/build/css/blocks.style.css';
		wp_enqueue_style(
			$plugin . '-blocks-css',
			oik_url( $style_path, $plugin ),
			[],
			filemtime( oik_path( $style_path, $plugin ) )
		);
	}

	/**
	 * Checks if the server function is available
	 *
	 * Returns null if everything is OK, HTML if there's a problem.
	 *
	 * @TODO Check if the implementing plugin is actually activated!
	 *
	 * @param string $filename - relative path for the file to load.
	 * @param string $plugin - plugin slug.
	 * @param string $funcname - required function name.
	 *
	 * @return string| null
	 */
	function oik_blocks_check_server_func( $filename, $plugin, $funcname ) {
		$html = null;
		if ( is_callable( $funcname ) ) {
			return $html;
		}
		if ( $filename && $plugin ) {
			$path = oik_path( $filename, $plugin );
			if ( file_exists( $path ) ) {
				require_once $path;
			}
		}
		if ( ! is_callable( $funcname ) ) {
			$html = "Server function $funcname not available. <br />Check $plugin is installed and activated.";
		}
		return $html;
	}

	/**
	 * Registers the scripts we'll need for the editor
	 *
	 * Not sure why we'll need Gutenberg scripts for the front-end.
	 * But we might need Javascript stuff for some things, so these can be registered here.
	 *
	 * Dependencies were initially
	 * `[ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components', 'wp-api' ]`
	 *
	 * why do we need the dependencies?
	 *
	 * @param string $plugin plugin slug.
	 * @param string $domain plugin's domain path.
	 */
	function oik_blocks_register_editor_scripts( $plugin, $domain ) {
		$scripts = array( $plugin . '-blocks-js' => 'blocks/build/js/editor.blocks.js' );
		foreach ( $scripts as $name => $block_path ) {
			wp_register_script(
				$name,
				oik_url( $block_path, $plugin ),
				[ 'wp-blocks', 'wp-element', 'wp-components', 'wp-editor', 'wp-i18n', 'wp-data' ],
				filemtime( oik_path( $block_path, $plugin ) )
			);
			wp_set_script_translations( $name, $domain );
		}
	}
}






