const firebaseConfig = {
    apiKey: "AIzaSyDV84Hp0-Xwwxq_FTEoXdvNU5U1f33osNI",
    authDomain: "chat-94a76.firebaseapp.com",
    databaseURL: "https://chat-94a76-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "chat-94a76",
    storageBucket: "chat-94a76.firebasestorage.app",
    messagingSenderId: "1004321153878",
    appId: "1:1004321153878:web:06c4a6b2ba1ad5f9a5acf7",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore(); 
function createUser(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
}

function signIn(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
}

function signOutUser() {
    return auth.signOut();
}

function updateUserProfile(user, data) {
    return user.updateProfile(data);
}

function addMessage(message) {
    return db.collection('messages').add(message);
}

function getMessages(callback) {
    return db.collection('messages').orderBy('timestamp', 'asc').onSnapshot(callback);
}

function addUser(userData) {
    return db.collection('users').doc(userData.uid).set(userData);
}