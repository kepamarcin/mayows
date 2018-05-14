var lazy;

    function showData(e){
      e.preventDefault();
      data.classList.add("show");
    }
    let btn = document.getElementById("buy"),
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
        
        let bioDetailsDiv = item.parentElement.nextElementSibling;

        let open = function(){
          bioDetailsDiv.classList.add("show-bio");
          bgOverlay.classList.add("background-visible");
        }

        let close = function(){
          bioDetailsDiv.classList.remove("show-bio");
          bgOverlay.classList.remove("background-visible");
          setTimeout(function(){
            bioDetailsDiv.scrollTop = 0;
          }, 500)
          bgOverlay.removeEventListener("click", closeFn, false);
          
        }
        function closeFn(){
          close();
        }
        // bgOverlay.classList.add("background-visible");
        let div = item.parentElement.parentElement;
        let bioDetails = div.querySelector(".bio-details");
        let bioWrapper = bioDetails.children[1];
        open();
    
        // bioDetails.classList.toggle("show-bio");

        let closeBtn = document.createElement('span');
        let img = bioDetails.firstElementChild;
        img.setAttribute("src", img.getAttribute("data-src"));

        // closeBtn.href = "#";
        closeBtn.innerHTML = "Close";
        closeBtn.classList = "product-button red";
        closeBtn.addEventListener("click", close, false);

        bgOverlay.addEventListener("click", closeFn, {
          once: true,
          passive: false,
          capture: false
        });

        if(bioWrapper.querySelectorAll(".product-button").length == 0)
          bioWrapper.appendChild(closeBtn);

      }, false);
    })
    


export default lazy;