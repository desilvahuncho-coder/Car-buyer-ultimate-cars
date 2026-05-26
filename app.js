function openBox(type){
  const content = document.getElementById("content");

  if(type === "imports"){
    content.innerHTML = `<h1>Premium Imports</h1>`;
  }

  if(type === "auction"){
    content.innerHTML = `<h1>Auction Imports</h1>`;
  }

  if(type === "showroom"){
    content.innerHTML = `
      <h1>Weekly Showrooms</h1>
      <p>Updates every week</p>
    `;
  }

  if(type === "inquiry"){
    content.innerHTML = `
      <h1>Inquiry Form</h1>
      <input placeholder="Name"><br><br>
      <input placeholder="WhatsApp"><br><br>
      <button>Send</button>
    `;
  }

  document.getElementById("modal").classList.remove("hidden");
}

function closeBox(){
  document.getElementById("modal").classList.add("hidden");
}
