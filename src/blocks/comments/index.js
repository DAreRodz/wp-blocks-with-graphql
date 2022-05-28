import { registerBlockType } from "@wordpress/blocks";
import { ApolloProvider } from "@apollo/react-hooks";
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

registerBlockType("graphql/comments-query", {
	edit: Edit,
	save: Save,
});
