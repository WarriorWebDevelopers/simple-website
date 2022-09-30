let sendButton = document.getElementById("send-button");
const form = document.getElementById("form");

sendButton.addEventListener('click', function(e) {
  e.preventDefault();
  sendButton.value = 'Sending...';
  const serviceID = 'service_rvdztkk';
  const templateID = 'template_5rnsbpi';
  
   emailjs.sendForm(serviceID, templateID, form)
    .then(() => {
      sendButton.value = 'Send Email';
      alert('Sent!');
    }, (err) => {
      sendButton.value = 'Send Email';
      alert(JSON.stringify(err));
    });
});
