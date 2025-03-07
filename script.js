function showFollowers() {
   const followerCount = parseInt(document.getElementById("followerCount").value);
   const display = document.getElementById("followerDisplay");
   const message = document.getElementById("message");

   // Clear previous display
   display.innerHTML = "";
   message.textContent = "";

   // Check input
   if (isNaN(followerCount) || followerCount < 1) {
       message.textContent = "Please enter a valid number!";
       return;
   }

   // Warning for very large numbers
   if (followerCount > 1000000) {
       message.textContent = "The number is huge! It might slow your browser, but I'll show it all.";
   }

   // Generate follower squares
   for (let i = 0; i < followerCount; i++) {
       const follower = document.createElement("div");
       follower.className = "follower";
       display.appendChild(follower);
   }

   // Final message
   if (followerCount >= 1000000000) {
       message.textContent += ` This is ${followerCount} followers—like Ronaldo's total across all platforms!`;
   } else {
       message.textContent += ` This is ${followerCount} followers!`;
   }
}