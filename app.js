

function toggle_prices() {
    var checkBox = document.getElementById("monthly_annual_checkbox");
    var monthly_price = document.getElementsByClassName("monthly_price");
    var annual_price = document.getElementsByClassName("annual_price");
  
    for (var i = 0; i < monthly_price.length; i++) {
      if (checkBox.checked == true) {
        monthly_price[i].style.display = "block";
        annual_price[i].style.display = "none";
      } else if (checkBox.checked == false) {
        monthly_price[i].style.display = "none";
        annual_price[i].style.display = "block";
      }
    }
  }
  toggle_prices();                  
                    
   