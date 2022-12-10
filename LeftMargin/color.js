function change() {
    let x = String(Math.floor((Math.random() * 1000000)));
    document.body.style.backgroundColor = "#" + x;
  }
  
  
  setTimeout(change, 5000);