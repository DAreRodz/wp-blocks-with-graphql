import { registerBlockType } from '@wordpress/blocks';
import Edit from './edit';

registerBlockType('graphql/comment-content', {
	edit: Edit,
	save: () => null,
});
