import { postComments as icon } from "@wordpress/icons";
import { registerBlockType } from "@wordpress/blocks";
import { ApolloProvider } from "@apollo/client";
import { client } from "../../utils";
import CommentsQueryEdit from "./edit";
import Save from "./save";

const Edit = (props) => {
	return (
		<ApolloProvider client={client}>
			<CommentsQueryEdit {...props} />
		</ApolloProvider>
	);
};

registerBlockType("graphql/comments", {
	icon,
	edit: Edit,
	save: Save,
});
