var lazy;

    function showData(e){
      e.preventDefault();
      data.classList.add("show");
    }
    let btn = document.querySelector(".buy-button"),
         data = document.querySelector(".buy-data");

    if(btn){
      btn.addEventListener("click", showData, false);
    }
      
    
    let bioBtn = document.querySelectorAll(".contact .product-button");
    let arr = Array.from(bioBtn);
    // var closeBtn = document.createElement('a');
    arr.map(function(item){
      item.addEventListener("click",function(e){
        e.preventDefault();
        
        let div = item.parentElement.parentElement;
        // let bio = document.querySelector(".bio-details .");
        let bioDetails=div.querySelector(".bio-details");
        bioDetails.classList.toggle("show-bio");
        let closeBtn = document.createElement('a');
        
        closeBtn.href = "#";
        closeBtn.innerHTML = "Close";
        closeBtn.classList = "product-button";
        closeBtn.addEventListener("click", function(e){
          e.preventDefault();
          this.parentElement.classList.remove("show-bio");
          this.remove();
          console.log(div);

        }, false);
        
        bioDetails.appendChild(closeBtn);

        if(bioDetails.classList.contains("show-bio")){
          console.log(closeBtn);
          closeBtn.remove();
          closeBtn.remove();
        }
        
      }, false);
      // item.addEventListener("click",function(e){
      //   e.preventDefault();
      //   console.log(this);
      //   let closeBtn = document.querySelector(".bio-details .product-button");
      //   if(closeBtn){
      //     closeBtn.remove();
      //   }
          
      // }, false);
    })
    


export default lazy;