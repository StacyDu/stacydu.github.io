"use strict";

const list = document.querySelector('.projects-list--js');

fetch('https://api.github.com/users/stacydu/repos?sort=update&direction=desc')
  .then(resp => resp.json())
  .then(resp => {
    const repos = resp;
    for (const repo of repos) {
      const {html_url, name} = repo;
      list.innerHTML += `
      <li class='projects-list__item'>
        <a class='list__link' href='${html_url}'>${name}</a>
      </li>
      `;
    }
  })
  .catch (err => {
    console.log(err);
  })


