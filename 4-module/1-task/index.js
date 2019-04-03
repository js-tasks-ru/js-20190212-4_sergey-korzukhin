'use strict';

/**
 * Генерация HTML списка друзей
 * @param {Friend[]} friends
 * @return {HTMLUListElement}
 */
function makeFriendsList (friends) {

    let ul = document.createElement('ul');
    for (let friend in friends){
        let li = document.createElement('li');
        li.innerText = friends[friend].firstName + ' ' + friends[friend].lastName;
        ul.appendChild(li);
    }

    return ul;

}

