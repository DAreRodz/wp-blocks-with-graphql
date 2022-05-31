import { commentContent as icon } from "@wordpress/icons";
import { registerBlockType } from "@wordpress/blocks";
import Edit from './edit';

registerBlockType('graphql/comment-content', {
	icon,
	edit: Edit,
});
