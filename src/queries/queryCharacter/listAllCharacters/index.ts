function listAllCharacters(page: number | null, search: string | null) {
  const query = `
    query {
      characters(page: ${page}, filter: {name: ${search}}) {
        info {
          count
        }
        results {
          id,
          name,
          status,
          species,
          image,   
          location {
            name,
          },
          episode {
            name,
          }
        }
      }
    }
  `
  return query;
};

export default listAllCharacters;