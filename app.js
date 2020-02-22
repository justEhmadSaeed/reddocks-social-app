firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        document.getElementById("username").innerText= user.displayName;
    } else {
      // No user is signed in.
    }
  });