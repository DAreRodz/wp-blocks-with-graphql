import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

registerBlockType('graphql/comment-author-name', {
	edit: Edit,
});
