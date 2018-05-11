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
      

    let bio = document.querySelectorAll(".contact .product-button");
    let arr = Array.from(bio);
    arr.map(function(item){
      item.addEventListener("click",function(e){
        e.preventDefault();
        let div = item.parentElement.parentElement;
        let bioDetails=div.querySelector(".bio-details");
        bioDetails.classList.toggle("show-bio");
      })
    })
    


export default lazy;