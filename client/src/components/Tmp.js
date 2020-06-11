import React, { useState, useEffect } from "react";

const Tmp = () => {
    const [contents, setItems] = useState([]);

    const data = {"Name": "Parasite", "Type": "movie"};

    // fetch('https://example.com/profile', {
    // method: 'POST', // or 'PUT'
    // headers: {
    //     'Content-Type': 'application/json',
    // },
    // body: JSON.stringify(data),
    // })
    // .then(response => response.json())
    // .then(data => {
    // console.log('Success:', data);
    // })
    // .catch((error) => {
    // console.error('Error:', error);
    // });

    const proxyurl = "https://cors-anywhere.herokuapp.com/";
    // const url = "https://example.com"; // site that doesn’t send Access-Control-*
    const url = "https://cx6p5gwi6f.execute-api.eu-west-1.amazonaws.com/dev/items/movies";
    fetch(proxyurl + url, {
        method: 'POST', // or 'PUT'
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
        }) // https://cors-anywhere.herokuapp.com/https://example.com
    .then(response => response.text())
    .then(contents => setItems(contents))
    .catch(() => console.log("Can’t access " + url + " response. Blocked by browser?"))

    console.log({contents});
    return (
        <p>tmp de tmp.js</p>
    );
};

export default Tmp;