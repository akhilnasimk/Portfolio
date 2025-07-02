function sendMail () {
    const params = {
      name:    document.getElementById("name").value,
      email:   document.getElementById("email").value,
      message: document.getElementById("message").value
    };

    const serviceID  = "service_ilzqy1y";
    const templateID = "template_9o6yt6v";

    emailjs
      .send(serviceID, templateID, params)     
      .then(res => {
        
        ["name", "email", "message"].forEach(id => (document.getElementById(id).value = ""));
        alert("Message has been sent ✅");       
        console.log("EmailJS response:", res);
      })
      .catch(err => {
        console.error("EmailJS error:", err); 
        alert("Oops, failed… check the console");
      });
  }