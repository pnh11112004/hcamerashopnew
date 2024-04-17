$(document).ready(function() {

    function validateForm() {
      var username = $("#txtUser").val();
      var password = $("#txtPass").val();
  
      if (username === "" || password === "") {
        alert("Please fill in complete information");
        return false; 
      }
      return true;
    }
  
  
    $("#txtUser").blur(function() {
      var kt = $("#txtUser").val();
      var regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
      if (!regex.test(kt)) {
        $("#tbUser").text("Syntax error");
      } else {
        $("#tbUser").text("ok");
      }
    });
  
  
  
    $("#txtPass").blur(function() {
      var kt = $("#txtPass").val();
      var regex = /^(?=.*[a-zA-Z0-9])\S{6,}$/;
      if (!regex.test(kt)) {
        $("#tbPass").text("Syntax error");
      } else {
        $("#tbPass").text("ok");
      }
    });
  
    $("#btnlogin a").click(function(event) {
      if (!validateForm()) {
        event.preventDefault(); 
      }
    });
  
    });
  