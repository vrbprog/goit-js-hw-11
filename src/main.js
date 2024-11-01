// import * as css from "file.css";

fetch("https://pixabay.com/api/videos/?key=46844494-ff9f555a2e638e0a9d57299e3&q=yellow+flowers&per_page=3&pretty=true")
    .then((response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    })
    .then((users) => {
			// Дані від бекенда
			console.log(users);
		})
    .catch((error) => console.log(error));