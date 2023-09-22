import { UserEvents } from "./ownEvent.mjs";

const userEvent = new UserEvents()


// userEvent.createPost("This is my first post")

// userEvent.addListener("postCreated", (content) => {

// })

// userEvent.addListener("postCreated") 

function saveToDatabase(){
    console.log("Saving post to database");
}

function sendNotifications(){
    console.log("Sending Notifications");
}

function updateTimeline() {
    console.log("Updating timeline")
}

userEvent.addListener('postCreated', saveToDatabase);
userEvent.addListener('postCreated', sendNotifications);
userEvent.addListener('postCreated', updateTimeline);

userEvent.createPost("This is my first post")
