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
      
    const bgOverlay = document.querySelector(".background-overlay");
    let bioBtn = document.querySelectorAll(".contact .product-button");
    let arr = Array.from(bioBtn);

    arr.map(function(item){
      item.addEventListener("click",function(e){
        e.preventDefault();
        
        bgOverlay.classList.add("background-visible");
        let div = item.parentElement.parentElement;
        let bioDetails = div.querySelector(".bio-details");
        let bioWrapper = bioDetails.children[1];

    
        bioDetails.classList.toggle("show-bio");
        let closeBtn = document.createElement('a');
        let img = bioDetails.firstElementChild;
        img.setAttribute("src", img.getAttribute("data-src"));
        // img.src = "https://picsum.photos/450/450";
        // bioDetails.insertBefore(img, bioWrapper);
        closeBtn.href = "#";
        closeBtn.innerHTML = "Close";
        closeBtn.classList = "product-button red";
        closeBtn.addEventListener("click", function(e){
          e.preventDefault();
          this.parentElement.parentElement.classList.remove("show-bio");
          bgOverlay.classList.remove("background-visible");
        }, false);
        
        if(bioWrapper.querySelectorAll(".product-button").length == 0)
          bioWrapper.appendChild(closeBtn);

      }, false);
    })
    


export default lazy;