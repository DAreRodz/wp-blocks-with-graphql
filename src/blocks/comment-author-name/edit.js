import { __ } from "@wordpress/i18n";
import { useBlockProps } from "@wordpress/block-editor";
import { addFilter} from "@wordpress/hooks";
import commentAuthorNameFragment from "./comment-author-name.gql";

export default function CommentContentEdit({ context }) {
	return (
		<div
			{...useBlockProps()}
			style={{ color: "green" }}
			dangerouslySetInnerHTML={{
				__html: context.comment?.author?.node?.name || "Comment Author Name",
			}}
		/>
	);
}

addFilter(
	"graphql-query-fragments-commentFragments",
	"graphql",
	(fragments) => [...fragments, commentAuthorNameFragment]
);
