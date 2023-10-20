/**
 * Fetch repository data based on query.
 * @param query - The search query.
 * @returns A promise with the fetched data.
 */
export const searchRepo = async (query: string) => {
    
    const data = {
        "search_text": query,
        "search_type": "repositories"
    }
    return fetch(`http://localhost:8000/api/search/`,{
        method: "POST", 
        headers: {
            'Content-Type' : "application/json"
        },
        body: JSON.stringify(data)
    }).then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      });
  };