$(document).ready(function() {

    function validateForm() {
      var name = $("#txtName").val();
      var username = $("#txtUser").val();
      var phone = $("#txtPhone").val();
      var email = $("#txtEmail").val();
      var password = $("#txtPass").val();
  
      if (name === "" || username === "" || phone === "" || email === "" || password === "") {
        alert("Please fill in complete information");
        return false; 
      }
      return true;
    }
  
    $("#txtEmail").blur(function() {
      var kt = $("#txtEmail").val();
      var regex = /^[a-z0-9._%+-]+@(yahoo|gmail)\.com$/;
      if (!regex.test(kt)) {
        $("#tbEmail").text("Syntax error");
      } else {
        $("#tbEmail").text("ok");
      }
    });
  
    $("#txtName").blur(function() {
      var kt = $("#txtName").val();
      var regex = /^[A-Z][a-z]*(\s[A-Z][a-z]*)*$/;
      if (!regex.test(kt)) {
        $("#tbName").text("Syntax error");
      } else {
        $("#tbName").text("ok");
      }
    });
  
    $("#txtUser").blur(function() {
      var kt = $("#txtUser").val();
      var regex = /^[a-zA-Z][a-zA-Z0-9]*$/;
      if (!regex.test(kt)) {
        $("#tbUser").text("Syntax error");
      } else {
        $("#tbUser").text("ok");
      }
    });
  
  
    $("#txtPhone").blur(function() {
      var kt = $("#txtPhone").val();
      var regex = /^0\d{10}$/;
      if (!regex.test(kt)) {
        $("#tbPhone").text("Syntax error");
      } else {
        $("#tbPhone").text("ok");
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
  