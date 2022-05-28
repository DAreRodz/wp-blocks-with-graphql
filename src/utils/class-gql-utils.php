<?php
class GQLUtils {
	static private $queries = [];

	static public function loadQuery( $name, $path ) {
		self::$queries[ $name ] = file_get_contents( $path );
	}

	static public function generateFragmentNames( $fragments ) {
		$names = '';

		foreach ( $fragments as $fragment ) {
			$matches     = [];
			$has_matched = preg_match(
				'/fragment (?<name>\w+) on (?<type>\w+)/',
				$fragment,
				$matches
			);

			if ( $has_matched) {
				$names .= "...{$matches['name']}\n";
			}
		}

		return $names;
	}

	static public function concatFragments( $fragments ) {
		return implode( "\n", $fragments );
	}

	static public function useQueryWithFragments( $query_name, $options ) {
		$include_fragments = $options['include_fragments'];

		$fragments_to_include = [];
		$processed_fragments  = '';

		foreach ( $include_fragments as $name => $type ) {
			$fragments = apply_filters(
				"graphql-query-fragments-$name",
				[]
			);

			$has_fragments = ! empty( $fragments );

			if ( $has_fragments ) {
				$fragments_to_include[ $name ] = true;

				$fragment_names         = self::generateFragmentNames( $fragments );
				$concatenated_fragments = self::concatFragments( $fragments );

				$processed_fragments .=
					<<<GQL
						fragment {$name} on {$type} {
							{$fragment_names}
						}

						{$concatenated_fragments}
					GQL;
			} else {
				$fragments_to_include[ $name ] = false;

				$processed_fragments .=
					<<<GQL
						fragment {$name} on {$type} {
							id
						}
					GQL;
			}
		}

		$query = self::$queries[ $query_name ];

		$query_with_fragments =
			<<<GQL
				$query
				$processed_fragments
			GQL;

		return graphql(
			array_merge(
				$options,
				[
					'query' => $query_with_fragments,
					'variables' => array_merge(
						$options['variables'],
						$fragments_to_include
					)
				]
			)
		);
	}
}
