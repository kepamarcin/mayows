var lazy;

    function showData(e){
      e.preventDefault();
      data.classList.add("show");
    }
    let btn = document.querySelector(".buy-button"),
         data = document.querySelector(".buy-data");
    btn.addEventListener("click", showData, false);



export default lazy;