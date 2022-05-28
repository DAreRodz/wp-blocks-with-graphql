<?php
/**
 * Plugin Name:       Graphql Comments Query
 * Description:       Example static block scaffolded with Create Block tool.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           0.1.0
 * Author:            The WordPress Contributors
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       graphql-comments-query
 *
 * @package           create-block
 */

require_once( __DIR__ . '/src/utils/index.php' );
require_once( __DIR__ . '/src/utils/class-gql-utils.php' );
require_once( __DIR__ . '/src/blocks/comments/index.php' );
require_once( __DIR__ . '/src/blocks/comment-content/index.php' );
require_once( __DIR__ . '/src/blocks/comment-author-name/index.php' );

function register_graphql_comment_blocks_init() {
	register_block_type( __DIR__ . '/build/blocks/comments', [
		'render_callback' => 'graphql_comments_query_render_callback'
	] );

	register_block_type( __DIR__ . '/build/blocks/comment-content', [
		'render_callback' => 'graphql_comment_content_render_callback'
	] );

	register_block_type( __DIR__ . '/build/blocks/comment-author-name', [
		'render_callback' => 'graphql_comment_author_name_render_callback'
	] );
}

add_action( 'init', 'register_graphql_comment_blocks_init' );
