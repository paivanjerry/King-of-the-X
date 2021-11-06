# King-of-the-X

## Purpose
Make your own King of the Road contest, digitally

## Environment
The app uses Firebase real time database to store the data. Local storage is used for marking the assignments as done. App has only vanillaJS front-end served from public folder. One easy and free way to host the frontend is to use Firebase hosting

## Running the app
Create Firebase real time database and hosting. Copy the config-example.js and rename it to config.js. Set the values from Firebase console to the config file to connect the database. Run firebase hosting setup with Firebase CLI tools. Now you can serve and deplot the app with Firebase CLI tools.

## Changing the status between receiving ideas & contest running
The app has config.js file which has boolean constants contestRunning and receivingIdeas. Change those. Those only affects the front-end. To change the back end, change the read and write permissions. Following is a example of rules when receiving ideas.

```json
{
  "rules": {
    ".read": false,
    ".write": true
  }
}
```

## Moderating the ideas
Use real-time database UI to modify or delete ideas. At least the database have export json feature to preview the ideas on some other platform. However, some kind of an admin panel would be useful...

## Why the app is a spaghetti?
I made it just before the deadline, quickly