function openSection(type) {
  const content = document.getElementById("content");

  if (type === "imports") {
    content.innerHTML = `
      <h2>Premium Imports</h2>
      <div class="card">Import car listings will appear here</div>
    `;
  }

  if (type === "auction") {
    content.innerHTML = `
      <h2>Auction Imports</h2>
      <div class="card">Japan auction feed goes here</div>
    `;
  }

  if (type === "showroom") {
    content.innerHTML = `
      <h2>Weekly Showrooms</h2>
      <p>Updates refresh every week</p>
    `;
  }

  if (type === "inquiry") {
    content.innerHTML = `
      <h2>Inquiry Form</h2>

      <input placeholder="Full Name"/>
      <input placeholder="WhatsApp Number"/>
      <textarea placeholder="Car request"></textarea>

      <button onclick="sendInquiry()">Send</button>
    `;
  }

  document.getElementById("modal").classList.remove("hidden");
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

function sendInquiry() {
  alert("Inquiry sent (connect backend later)");
}
