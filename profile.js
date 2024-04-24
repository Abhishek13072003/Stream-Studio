// profile.js
const backendUrl = "http://your-backend-url.com";
// Function to fetch user data and update profile page
async function fetchUserProfile() {
    try {
        // Assuming you have a route in your backend to fetch user profile data
        const response = await axios.get(`${backendUrl}/profile`);
        const userData = response.data;
        // Assuming you have a span element with id "username" to display the username
        document.getElementById("username").textContent = userData.username;
        // Update other profile information as needed
    } catch (error) {
        console.error("Error fetching user profile:", error);
    }
}

// Call the fetchUserProfile function when the profile page loads
window.onload = fetchUserProfile;
