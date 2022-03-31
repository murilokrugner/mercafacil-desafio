function listAllEpisodes(page: number | null, search: string | null) {
  const query = `
  query {
    episodes(page: ${page}, filter: { name: ${search} }) {
      info {
        count
      }
      results {
        id,
        name,
        air_date,
        episode
        characters {
          id,
          name,
          image,
        }
      },
    }
  }
  `
  return query;
};

export default listAllEpisodes;