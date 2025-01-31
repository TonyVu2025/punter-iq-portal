// lib/fetchRaceDetails.ts

import graphQLClient from './graphqlClient';
import { gql } from 'graphql-request';

const GET_RACE_DETAILS = gql`
  query getRaceDetails($raceId: BigInt!) {
    racesCollection(filter: { id: { eq: $raceId } }) {
      edges {
        node {
          name
          distance
          class
          start_time
          track_condition
          rail
          weather
          prize_money
          competitor_count
          status
          top_4_numbers
          tracks {
            name
            state
            surface
          }
          competitors: competitorsCollection(orderBy: { competitor_number: AscNullsFirst }) {
            edges {
              node {
                competitor_number
                barrier
                final_position
                weight_total
                scratching_type
                failed_to_finish
                failed_to_finish_reason
                margin
                horses {
                  name
                  age
                  sex
                }
                elapsed_time_ms
              }
            }
          }
        }
      }
    }
  }
`;

export const fetchRaceDetails = async (raceId: number) => {
  try {
    const variables = { raceId };
    const data = await graphQLClient.request(GET_RACE_DETAILS, variables);
    return data;
  } catch (error) {
    throw new Error('Failed to fetch race details');
  }
};
