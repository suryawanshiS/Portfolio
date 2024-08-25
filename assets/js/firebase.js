const firebaseConfig = {
    //   copy your firebase config informations

    apiKey: "AIzaSyCjGKNPWRTADWy7RlgYDdo_lTlyBTvQ8Xg",
    authDomain: "contactform-cf3cc.firebaseapp.com",
    databaseURL: "https://contactform-cf3cc-default-rtdb.firebaseio.com",
    projectId: "contactform-cf3cc",
    storageBucket: "contactform-cf3cc.appspot.com",
    messagingSenderId: "295851738145",
    appId: "1:295851738145:web:b946671c90467b96a90f60"
  };
  
  // initialize firebase
  firebase.initializeApp(firebaseConfig);
  
  // reference your database
  var contactFormDB = firebase.database().ref("contactForm");
  
  document.getElementById("contactForm").addEventListener("submit", submitForm);
  
  function submitForm(e) {
    e.preventDefault();
  
    var name = getElementVal("name");
    var emailid = getElementVal("emailid");
    var msgContent = getElementVal("msgContent");
  
    saveMessages(name, emailid, msgContent);
  
    //   enable alert
    document.querySelector(".alert").style.display = "block";
  
    //   remove the alert
    setTimeout(() => {
      document.querySelector(".alert").style.display = "none";
    }, 3000);
  
    //   reset the form
    document.getElementById("contactForm").reset();
  }
  
  const saveMessages = (name, emailid, msgContent) => {
    var newContactForm = contactFormDB.push();
  
    newContactForm.set({
      name: name,
      emailid: emailid,
      msgContent: msgContent,
    });
  };
  
  const getElementVal = (id) => {
    return document.getElementById(id).value;
  };
  