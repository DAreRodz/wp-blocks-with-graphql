<?php
/**
 * Callback that renderes the block.
 */
function graphql_comment_author_name_render_callback( $attributes, $content, $block ) {
	if ( ! isset( $block->context['comment'] ))
		return '';

	$author_name = $block->context['comment']['author']['node']['name'];

	return
		<<<HTML
			<div style="color:green">
				{$author_name}
			</div>
		HTML;
}

add_filter( 'graphql-query-fragments-commentFragments', function ( $fragments ) {
	$fragments[] = file_get_contents( __DIR__ . '/comment-author-name.gql' );
	return $fragments;
} );
