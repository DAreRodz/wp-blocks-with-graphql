import { commentAuthorName as icon } from "@wordpress/icons";
import { registerBlockType } from '@wordpress/blocks';

import Edit from './edit';

registerBlockType('graphql/comment-author-name', {
	icon,
	edit: Edit,
});
