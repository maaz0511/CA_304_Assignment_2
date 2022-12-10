

function validate() {
  var nome = document.getElementById("eman").value;
  const age = document.getElementById("age").value;
  const movie = document.getElementById("mov").value;
  const address = document.getElementById("add").value;
  const subject = document.getElementById("sub").value;
  const singer = document.getElementById("sin").value;
  const password = document.getElementById("passwd").value;
  var form = document.getElementById("form");
  if (nome == "" || password == "" || singer == "" || subject == "" || address == "" || movie == "" || age == "") {
    alert("THERE CAN'T BE EMPTY INPUTS !");
    // window.location.assign="index.html";
    form.action="fail.html";

  } else {
      alert("SUCCESSFULLY SUBMITTED");
      form.action="success.html";

  }
}
