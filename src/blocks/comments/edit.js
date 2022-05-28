import { __ } from "@wordpress/i18n";
import {
	useBlockProps,
	InnerBlocks,
	BlockContextProvider,
} from "@wordpress/block-editor";
import { useQueryWithFragments } from "../../utils";
import queryComments from "./comments.gql";

export default function CommentsQueryEdit({ context }) {
	const { data } = useQueryWithFragments(queryComments, {
		variables: {
			postId: context.postId,
			first: 5,
		},
		includeFragments: {
			commentFragments: "Comment",
		},
	});

	const comments = data?.comments?.nodes;

	return (
		<ul {...useBlockProps()}>
			<p>Comments Query Edit</p>
			{comments?.map((comment) => (
				<BlockContextProvider key={comment.databaseId} value={{ comment }}>
					<li style={{ color: "red" }}>
						<InnerBlocks />
					</li>
				</BlockContextProvider>
			))}
		</ul>
	);
}
