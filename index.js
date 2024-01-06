const usersContainer = document.querySelector(".users-container");

// Mock data
const userData = [
    {
        id: 0,
        profilePic: "./assets/user1.svg",
        name: "Jane Doe",
        email: null,
        age: "30 years old",
        info: "Alice is a skilled software developer with expertise in designing and implementing robust applications. Her passion for coding and problem-solving contributes to creating efficient and innovative solutions in the software development landscape.",
    },
    {
        id: 1,
        profilePic: "./assets/user2.svg",
        name: "John Smith",
        email: "john@example.com",
        age: null,
        info: "John is an experienced front-end developer with a strong background in creating interactive and user-friendly web interfaces. He is dedicated to staying updated with the latest web technologies.",
    },
    {
        id: 2,
        profilePic: null,
        name: "Bob Johnson",
        email: "bob@example.com",
        age: "28 years old",
        info: "Bob is a passionate back-end developer specializing in building scalable and secure server-side applications.",
    },
    {
        id: 3,
        profilePic: "./assets/user3.svg",
        name: "James Williams",
        email: "eva@example.com",
        age: "32 years old",
        info: "Eva is a full-stack developer known for her versatility in both front-end and back-end technologies. She enjoys collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    {
        id: 4,
        profilePic: null,
        name: "Eva Brown",
        email: null,
        age: "27 years old",
        info: null,
    },
];

//functions

const handleDisplayPicture = (image) => {
    if (image === null) {
        return "./assets/noUser.svg";
    } else {
        return image;
    }
};

const handleEmail = (email) => {
    if (email === null) {
        return "--";
    } else {
        return email;
    }
};

const handleAge = (age) => {
    if (age === null) {
        return "--";
    } else {
        return age;
    }
};

const handleDescription = (desc) => {
    if (desc === null) {
        return "--";
    } else {
        return desc;
    }
};

const handleDeleteCard = (id, cardDiv) => {
    const cardIndex = userData.findIndex((card) => card.id === id);
    console.log("id", id);
    console.log("cardIndex", cardIndex);

    if (cardIndex !== -1) {
        cardDiv.style.opacity = 0;

        userData.splice(cardIndex, 1);
        renderData(userData);
    }
};

const renderData = (data) => {
    usersContainer.innerHTML = "";

    //map the data
    data.map((user) => {
        const userDiv = document.createElement("div");
        userDiv.classList.add("user-container");
        userDiv.dataset.id = user.id;

        const profilePic = document.createElement("img");
        profilePic.classList.add("user-image");
        profilePic.src = handleDisplayPicture(user.profilePic);
        profilePic.height = 90;

        const userName = document.createElement("h2");
        userName.classList.add("user-name");
        userName.textContent = user.name;

        const userEmail = document.createElement("p");
        userEmail.classList.add("user-email");
        userEmail.textContent = handleEmail(user.email);

        const userAge = document.createElement("p");
        userAge.classList.add("user-age");
        userAge.textContent = handleAge(user.age);

        const userInfo = document.createElement("p");
        userInfo.classList.add("user-info");
        userInfo.textContent = handleDescription(user.info);

        const closeBtn = document.createElement("a");
        closeBtn.classList.add("btn-close");
        closeBtn.setAttribute("onclick", `handleDeleteCard(${user.id}, this.parentNode)`);
        const icon = document.createElement("img");

        icon.src = "./assets/close.svg";
        icon.height = 20;
        closeBtn.appendChild(icon);

        // Append elements to the card
        userDiv.appendChild(profilePic);
        userDiv.appendChild(userName);
        userDiv.appendChild(userEmail);
        userDiv.appendChild(userAge);
        userDiv.appendChild(userInfo);
        userDiv.appendChild(closeBtn);

        //append the card to the main container
        usersContainer.appendChild(userDiv);
    });
};

renderData(userData);
