// Replace with your Apps Script web app URL (deployed)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbwts129_wXtH3l6oY3uDGUqK32G5REdTdjQlZyDXkNzIbW7fV8CCVWkqTZ5REEoTWyX/exec";

document.getElementById("orderForm").addEventListener("submit", async function(e){
  e.preventDefault();
  const form = e.target;
  const fd = new FormData(form);

  // POST to Apps Script
  try {
    const res = await fetch(SCRIPT_URL, { method: "POST", body: fd });
    const data = await res.json();
    if (data.error) {
      alert("Terjadi error: " + data.message);
      return;
    }
    // redirect to result page with the row index returned
    window.location.href = `result.html?row=${data.row}`;
  } catch (err) {
    alert("Gagal mengirim order: " + err);
  }
});
