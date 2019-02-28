## GraphQL Example Project


Use that link after the server as started to have some basic queries and mutations


http://localhost:5000/graphql?query=%0Aquery%20Products%20%7B%0A%20%20product(id%3A%20%221%22)%20%7B%0A%20%20%20%20name%0A%20%20%20%20price%0A%20%20%7D%0A%20%20%0A%20%20products%20%7B%0A%20%20%20%20name%0A%20%20%20%20id%0A%20%20%7D%0A%7D%0A%0Amutation%20Pizza%20%7B%0A%20%20createProduct(name%3A%20%22Pizza%22%2C%20price%3A%204.78)%20%7B%0A%20%20%20%20id%0A%20%20%7D%0A%7D&operationName=Products