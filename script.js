// Replace with your Apps Script web app URL (deployed)
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbxJ_deaRCzIkUyu7K3dlAPn6DKoI1_fC21Kpt7DFeKM36khsKb7iaimu1FNH3-Uo-6h/exec";

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

