document.getElementById('bookingForm').addEventListener('submit', function(e){
  e.preventDefault();

  var name = this.name.value;
  var phone = this.phone.value;
  var date = this.date.value;

  var whatsappNumber = "+355693994514"; 
  var whatsappText = "Pershendetje! Po rezervoj takim.\nEmri: " + name + "\nTelefon: " + phone + "\nData: " + date;

  var link = "https://wa.me/" + whatsappNumber + "?text=" + encodeURIComponent(whatsappText);
  window.open(link, "_blank");

  document.getElementById('formMessage').innerText = "Kërkesa u dërgua! Shikoni WhatsApp për konfirmim.";
  this.reset();
});