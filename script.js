// references
var biographyContent = document.getElementById("biographyContent");
var photosContent = document.getElementById("photosContent");
var discographyContent = document.getElementById("discographyContent");
var linksContent = document.getElementById("linksContent");
var managementContent = document.getElementById("managementContent");

// Function Αναλογα με την επιλογη
function showContent(contentType) {
    // Κρυβει το περιεχομενο
    biographyContent.style.display = "none";
    photosContent.style.display = "none";
    discographyContent.style.display = "none";
    linksContent.style.display = "none";
    managementContent.style.display = "none";

    // Διχνει το περιεχόμενο
    if (contentType === 'biography') {
        biographyContent.style.display = "block";
    } else if (contentType === 'photos') {
        photosContent.style.display = "block";
    } else if (contentType === 'discography') {
        discographyContent.style.display = "block";
    } else if (contentType === 'links') {
        linksContent.style.display = "block";
    } else if (contentType === 'management') {
        managementContent.style.display = "block";
    }
}
// login
function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    
    if (username === "admin" && password === "password") {
        
        localStorage.setItem("loggedInUser", username);

       
        var savedBiography = localStorage.getItem("biography");
        document.getElementById("biography").value = savedBiography || "";

        // κρυβει το login
        document.getElementById("loginForm").style.display = "none";
       
        document.getElementById("editContent").style.display = "block";

        
        document.getElementById("loggedInUser").innerText = username;
        
      
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("logoutLink").style.display = "inline";
    } else {
        alert("Invalid credentials. Please try again.");
    }
}

// logout
function logout() {
    
    localStorage.removeItem("loggedInUser");

    document.getElementById("editContent").style.display = "none";
    // δειχνει το login
    document.getElementById("loginForm").style.display = "block";

    // krybei to λογοθτ
    document.getElementById("logoutButton").style.display = "none";
    document.getElementById("logoutLink").style.display = "none";
}

// Ελέγχει αν εχει γινει login
window.onload = function () {
    var loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
        
        document.getElementById("editContent").style.display = "block";
        document.getElementById("loggedInUser").innerText = loggedInUser;

        
        document.getElementById("logoutButton").style.display = "block";
        document.getElementById("logoutLink").style.display = "inline";
    }
};
