import requests

GITHUB_API_URL = "https://api.github.com/search/{search_type}?q={query}"

def githubSearch(search_type, query):

    response = requests.get(GITHUB_API_URL.format(search_type=search_type, query=query))
    response.raise_for_status()

    results = response.json()

    return results
