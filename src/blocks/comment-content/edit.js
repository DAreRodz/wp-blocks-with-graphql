import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { addFilter } from "@wordpress/hooks";
import commentContentFragment from "./comment-content.gql";

export default function CommentContentEdit({ context }) {
	return (
		<div
			{...useBlockProps()}
			style={{ color: "blue" }}
			dangerouslySetInnerHTML={{
				__html: context.comment?.content || "Comment Content",
			}}
		/>
	);
}

addFilter(
	"graphql-query-fragments-commentFragments",
	"graphql",
	(fragments) => [...fragments, commentContentFragment]
);
