<?php
function utils_render_inner_blocks( $block, $context ) {
	$inner_blocks_content = '';

	foreach ( $block->inner_blocks as $inner_block ) {
		$inner_block = new WP_Block(
			$inner_block->parsed_block,
			$context
		);
		$inner_blocks_content .= $inner_block->render();
	}

	return $inner_blocks_content;
}
