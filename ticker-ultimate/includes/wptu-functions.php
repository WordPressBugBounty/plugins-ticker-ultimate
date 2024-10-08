<?php
/**
 * Plugin generic functions file
 *
 * @package Ticker Ultimate
 * @since 1.0.0
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly
}

/**
 * Function to get post external link or permalink
 * 
 * @package Ticker Ultimate
 * @since 1.0.0
 */
function wptu_get_post_link( $post_id = '' ) {

	$post_link = '';

	if( ! empty( $post_id ) ) {

		$prefix = WPTU_META_PREFIX;
		
		$post_link = get_post_meta( $post_id, $prefix.'more_link', true );

		if( empty( $post_link ) ) {
			$post_link = get_the_permalink( $post_id );	
		}
	}
	return $post_link;
}

/**
 * Function to unique number value
 * 
 * @package Ticker Ultimate
 * @since 1.0.0
 */
function wptu_get_unique() {
  static $unique = 0;
  $unique++;

  // For Elementor & Beaver Builder
  if( ( defined('ELEMENTOR_PLUGIN_BASE') && isset( $_POST['action'] ) && $_POST['action'] == 'elementor_ajax' )
  || ( class_exists('FLBuilderModel') && ! empty( $_POST['fl_builder_data']['action'] ) )
  || ( function_exists('vc_is_inline') && vc_is_inline() ) ) {
  	$unique = current_time('timestamp') . '-' . rand();
  }

  return $unique;
}

/**
 * Sanitize URL
 * 
 * @since 2.5
 */
function wptu_clean_url( $url ) {
	return esc_url_raw( trim( $url ) );
}

/**
 * Sanitize Multiple HTML class
 * 
 * @package Ticker Ultimate
 * @since 1.1
 */
function wptu_sanitize_html_classes($classes, $sep = " ") {
	$return = "";

	if( $classes && !is_array($classes) ) {
		$classes = explode($sep, $classes);
	}

	if( !empty($classes) ) {
		foreach($classes as $class){
			$return .= sanitize_html_class($class) . " ";
		}
		$return = trim( $return );
	}

	return $return;
}