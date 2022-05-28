<?php
/**
 * Callback that renderes the block.
 */
function graphql_comment_content_render_callback( $attributes, $content, $block ) {
	if ( ! isset( $block->context['comment'] ))
		return '';

	$content = $block->context['comment']['content'];

	return
		<<<HTML
			<div style="color:blue">
				{$content}
			</div>
		HTML;
}

add_filter( 'graphql-query-fragments-commentFragments', function ( $fragments ) {
	$fragments[] = file_get_contents( __DIR__ . '/comment-content.gql' );
	return $fragments;
} );
