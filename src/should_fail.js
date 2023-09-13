import fetch from "node-fetch";
import * as https from "https";

const response = await fetch("https://127.0.0.1:8080/")
    .then(response => {
        if (response.ok) {
            return response.text();
        }
        throw new Error(`Network response was not ok.  ${response.statusText}`);
    })
    .catch(error => {
        console.log(error);
        return { error: error.message };
    });

console.log(response);
