import { applyFilters } from "@wordpress/hooks";
import { ApolloClient, InMemoryCache, useQuery, gql } from "@apollo/client";

export const client = new ApolloClient({
	uri: "/graphql",
	cache: new InMemoryCache(),
});

export const generateFragmentNames = (fragments) => {
	const names = fragments.map((doc) => {
		const [FragmentDefinition] = doc.definitions;
		return FragmentDefinition.name.value;
	});
	return names.map((name) => `...${name}`).join("\n");
}

export const concatFragments = (fragments) => fragments.reduce(
	(acc, fragment) => gql`
		${acc}
		${fragment}
	`,
	""
)

export const useQueryWithFragments = (query, options) => {
	const { includeFragments, variables, ...otherOptions } = options;

	const fragmentsToInclude = {};

	const queryWithFragments = Object.entries(includeFragments).reduce((acc, [name, type]) => {
		const fragments = applyFilters(
			`graphql-query-fragments-${name}`,
			[]
		);

		const hasFragments = fragments.length;
		let processedFragments;

		if (hasFragments) {
			fragmentsToInclude[name] = true;
			processedFragments = gql`
				fragment ${name} on ${type} {
					${generateFragmentNames(fragments)}
				}

				${concatFragments(fragments)}
			`;
		} else {
			fragmentsToInclude[name] = false;
			processedFragments = gql`
				fragment ${name} on ${type} {
					ID
				}
			`;
		}

		return gql`
			${acc}
			${processedFragments}
		`;
	}, query);

	return useQuery(queryWithFragments, {
		variables: {
			...fragmentsToInclude,
			...variables,
		},
		...otherOptions,
	});
}
