         const form = document.getElementById("enrollForm");
         const tableBody = document.querySelector("#participantsTable tbody");
   
         // Load participants from localStorage
         function loadParticipants() {
           const participants =
             JSON.parse(localStorage.getItem("participants")) || [];
           tableBody.innerHTML = "";
           participants.forEach((p) => {
             const row = `<tr>
             <td>${p.name}</td>
             <td>${p.email}</td>
             <td>${p.phone}</td>
           </tr>`;
             tableBody.innerHTML += row;
           });
         }
   
         // Add new participant
         form.addEventListener("submit", (e) => {
           e.preventDefault();
           const name = document.getElementById("name").value;
           const email = document.getElementById("email").value;
           const phone = document.getElementById("phone").value;
   
           const participants =
             JSON.parse(localStorage.getItem("participants")) || [];
           participants.push({ name, email, phone });
           localStorage.setItem("participants", JSON.stringify(participants));
   
           alert("Enrolled successfully!");
           form.reset();
           loadParticipants();
         });
   
         // Initial load
         loadParticipants();