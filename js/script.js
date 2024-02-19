const randomFolks = document.querySelector(".random-peeps");
const selectUserNumber = document.querySelector("#users"); //part#2

const getData = async function (numUsers) {
    const usersRequest = await fetch (`https://randomuser.me/api?results=${numUsers}`);//part#2

    const data = await usersRequest.json();

    const userResults = data.results;
    displayUsers(userResults);
};


getData(1);//part#2

const displayUsers = function (userResults) {
    randomFolks.innerHTML = "";

    for (const user of userResults) {
        const country = user.location.country;
        const name = user.name.first;
        const imageUrl = user.picture.medium;
        const userDiv = document.createElement("div");
        userDiv.innerHTML = `
            <h3>${name}</h3>
            <p>${country}</P>
            <img src = ${imageUrl} alt = "user avatar"/>
        `;
        randomFolks.append(userDiv);
    }
};

//part#2

selectUserNumber.addEventListener(`change`, function(e) {
    const numUsers = e.target.value;
    //console.log(numUsers);
    getData(numUsers);
})



