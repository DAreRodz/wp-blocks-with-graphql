<?php

/**
 * Callback that renderes the block.
 */
function graphql_comments_query_render_callback( $attributes, $content, $block ) {
	[ 'data' => $data ] = GQLUtils::useQueryWithFragments(
		'comments',
		[
			'variables' => [
				'postId' => $block->context['postId'],
				'first'  => 5,
			],
			'include_fragments' => [
				'commentFragments' => 'Comment'
			]
		]
	);

	$comments = $data['comments']['nodes'];

	foreach ( $comments as $comment ) {
		$inner_blocks_content = utils_render_inner_blocks( $block, [ 'comment' => $comment ] );
		$content .=
			<<<HTML
				<li style="color:red" id="comment-{$comment['databaseId']}">
					$inner_blocks_content
				</li>
			HTML;
	}

	return
		<<<HTML
			<ul>$content</ul>
		HTML;

}

add_action( 'init', function () {
	GQLUtils::loadQuery( 'comments', __DIR__ . '/comments.gql' );
} );

