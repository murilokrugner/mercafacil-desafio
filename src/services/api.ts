import {client} from '../config/client-graphql';
import {gql} from '@apollo/client';

async function api(query: string) {
  const response = await client
    .query({
      query: gql`
        ${query}
      `,
    })
    .then(res => {
      return res;
    });

  return response;
}

export default api;
