/* eslint-disable */
import * as types from "./graphql";
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 * Learn more about it here: https://the-guild.dev/graphql/codegen/plugins/presets/preset-client#reducing-bundle-size
 */
const documents = {
  "query GetBlackbookSubscriptions {\n  black_book_runner_subscriptionsCollection {\n    edges {\n      node {\n        id\n        horses {\n          name\n          age\n          owners\n          wins\n          seconds\n          thirds\n          races\n          sire\n          dam\n        }\n      }\n    }\n  }\n}":
    types.GetBlackbookSubscriptionsDocument,
  "query GetFormGuideRaces($startDate: Datetime, $endDate: Datetime, $offset: Int) {\n  racesCollection(\n    filter: {start_time: {gte: $startDate, lte: $endDate}}\n    orderBy: {start_time: AscNullsLast}\n    offset: $offset\n  ) {\n    edges {\n      node {\n        id\n        status\n        distance\n        name\n        race_number\n        tracks {\n          id\n          name\n          state\n        }\n        top_4_numbers\n        oddsCollection {\n          edges {\n            node {\n              win_fixed\n              place_fixed\n              source\n              competitor_number\n            }\n          }\n        }\n        competitorsCollection {\n          edges {\n            node {\n              barrier\n              competitor_number\n              horse_id\n              margin\n              weight_total\n              horses {\n                name\n              }\n              jockeys {\n                full_name\n              }\n              trainers {\n                full_name\n                id\n              }\n              final_position\n            }\n          }\n        }\n        start_time\n      }\n    }\n  }\n}":
    types.GetFormGuideRacesDocument,
  "query GetGlobalQuickFireButtons {\n  global_quick_fire_buttonsCollection {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}":
    types.GetGlobalQuickFireButtonsDocument,
  "mutation RemoveBlackbookSubscription($subscriptionId: BigInt) {\n  deleteFromblack_book_runner_subscriptionsCollection(\n    filter: {id: {eq: $subscriptionId}}\n  ) {\n    affectedCount\n  }\n}":
    types.RemoveBlackbookSubscriptionDocument,
  'query GetFormGuideOverview($startDate: Datetime!, $endDate: Datetime!) {\n  meetingsCollection(\n    filter: {tab_indicator: {eq: "T"}, date: {gte: $startDate, lte: $endDate}}\n  ) {\n    edges {\n      node {\n        id\n        date\n        tracks {\n          name\n          state\n        }\n        racesCollection(orderBy: {race_number: AscNullsLast}) {\n          edges {\n            node {\n              id\n              status\n              name\n              race_number\n              top_4_numbers\n              oddsCollection {\n                edges {\n                  node {\n                    win_fixed\n                    place_fixed\n                    source\n                    competitor_number\n                  }\n                }\n              }\n              competitorsCollection(\n                first: 4\n                orderBy: {final_position: AscNullsLast}\n                filter: {final_position: {neq: 0}}\n              ) {\n                edges {\n                  node {\n                    competitor_number\n                    horse_id\n                    margin\n                    weight_total\n                    final_position\n                    horses {\n                      name\n                    }\n                  }\n                }\n              }\n              start_time\n            }\n          }\n        }\n      }\n    }\n  }\n}':
    types.GetFormGuideOverviewDocument,
};


/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
// export function graphql(
//   source: "query GetBlackbookSubscriptions($user_id: UUID!) {\n  black_book_runner_subscriptionsCollection(filter: {user_id: {eq: $user_id}}) {\n    edges {\n      node {\n        id\n        horses {\n          name\n          age\n          owners\n          wins\n          seconds\n          thirds\n          races\n          sire\n          dam\n        }\n      }\n    }\n  }\n}",
// ): (typeof documents)["query GetBlackbookSubscriptions($user_id: UUID!) {\n  black_book_runner_subscriptionsCollection(filter: {user_id: {eq: $user_id}}) {\n    edges {\n      node {\n        id\n        horses {\n          name\n          age\n          owners\n          wins\n          seconds\n          thirds\n          races\n          sire\n          dam\n        }\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetFormGuideRaces($startDate: Datetime, $endDate: Datetime, $offset: Int) {\n  racesCollection(\n    filter: {start_time: {gte: $startDate, lte: $endDate}}\n    orderBy: {start_time: AscNullsLast}\n    offset: $offset\n  ) {\n    edges {\n      node {\n        id\n        status\n        distance\n        name\n        race_number\n        tracks {\n          id\n          name\n          state\n        }\n        top_4_numbers\n        oddsCollection {\n          edges {\n            node {\n              win_fixed\n              place_fixed\n              source\n              competitor_number\n            }\n          }\n        }\n        competitorsCollection {\n          edges {\n            node {\n              barrier\n              competitor_number\n              horse_id\n              margin\n              weight_total\n              horses {\n                name\n              }\n              jockeys {\n                full_name\n              }\n              trainers {\n                full_name\n                id\n              }\n              final_position\n            }\n          }\n        }\n        start_time\n      }\n    }\n  }\n}",
): (typeof documents)["query GetFormGuideRaces($startDate: Datetime, $endDate: Datetime, $offset: Int) {\n  racesCollection(\n    filter: {start_time: {gte: $startDate, lte: $endDate}}\n    orderBy: {start_time: AscNullsLast}\n    offset: $offset\n  ) {\n    edges {\n      node {\n        id\n        status\n        distance\n        name\n        race_number\n        tracks {\n          id\n          name\n          state\n        }\n        top_4_numbers\n        oddsCollection {\n          edges {\n            node {\n              win_fixed\n              place_fixed\n              source\n              competitor_number\n            }\n          }\n        }\n        competitorsCollection {\n          edges {\n            node {\n              barrier\n              competitor_number\n              horse_id\n              margin\n              weight_total\n              horses {\n                name\n              }\n              jockeys {\n                full_name\n              }\n              trainers {\n                full_name\n                id\n              }\n              final_position\n            }\n          }\n        }\n        start_time\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "query GetGlobalQuickFireButtons {\n  global_quick_fire_buttonsCollection {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}",
): (typeof documents)["query GetGlobalQuickFireButtons {\n  global_quick_fire_buttonsCollection {\n    edges {\n      node {\n        id\n        name\n      }\n    }\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: "mutation RemoveBlackbookSubscription($subscriptionId: BigInt) {\n  deleteFromblack_book_runner_subscriptionsCollection(\n    filter: {id: {eq: $subscriptionId}}\n  ) {\n    affectedCount\n  }\n}",
): (typeof documents)["mutation RemoveBlackbookSubscription($subscriptionId: BigInt) {\n  deleteFromblack_book_runner_subscriptionsCollection(\n    filter: {id: {eq: $subscriptionId}}\n  ) {\n    affectedCount\n  }\n}"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(
  source: 'query GetFormGuideOverview($startDate: Datetime!, $endDate: Datetime!) {\n  meetingsCollection(\n    filter: {tab_indicator: {eq: "T"}, date: {gte: $startDate, lte: $endDate}}\n  ) {\n    edges {\n      node {\n        id\n        date\n        tracks {\n          name\n          state\n        }\n        racesCollection(orderBy: {race_number: AscNullsLast}) {\n          edges {\n            node {\n              id\n              status\n              name\n              race_number\n              top_4_numbers\n              oddsCollection {\n                edges {\n                  node {\n                    win_fixed\n                    place_fixed\n                    source\n                    competitor_number\n                  }\n                }\n              }\n              competitorsCollection(\n                first: 4\n                orderBy: {final_position: AscNullsLast}\n                filter: {final_position: {neq: 0}}\n              ) {\n                edges {\n                  node {\n                    competitor_number\n                    horse_id\n                    margin\n                    weight_total\n                    final_position\n                    horses {\n                      name\n                    }\n                  }\n                }\n              }\n              start_time\n            }\n          }\n        }\n      }\n    }\n  }\n}',
): (typeof documents)['query GetFormGuideOverview($startDate: Datetime!, $endDate: Datetime!) {\n  meetingsCollection(\n    filter: {tab_indicator: {eq: "T"}, date: {gte: $startDate, lte: $endDate}}\n  ) {\n    edges {\n      node {\n        id\n        date\n        tracks {\n          name\n          state\n        }\n        racesCollection(orderBy: {race_number: AscNullsLast}) {\n          edges {\n            node {\n              id\n              status\n              name\n              race_number\n              top_4_numbers\n              oddsCollection {\n                edges {\n                  node {\n                    win_fixed\n                    place_fixed\n                    source\n                    competitor_number\n                  }\n                }\n              }\n              competitorsCollection(\n                first: 4\n                orderBy: {final_position: AscNullsLast}\n                filter: {final_position: {neq: 0}}\n              ) {\n                edges {\n                  node {\n                    competitor_number\n                    horse_id\n                    margin\n                    weight_total\n                    final_position\n                    horses {\n                      name\n                    }\n                  }\n                }\n              }\n              start_time\n            }\n          }\n        }\n      }\n    }\n  }\n}'];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> =
  TDocumentNode extends DocumentNode<infer TType, any> ? TType : never;
