let dashboard = () => {
    let itemname = document.getElementById("itemname");
    let price = document.getElementById("price");
    let category = document.getElementById("category");
    // let category2 = document.getElementById("category2");
    // let imgName = document.getElementById("imgName");
    let typdel = document.getElementById("typdel");
    var key=firebase.database().ref('items').push().key;
    let food = {
        itemname: itemname.value,
        price: price.value,
        category:category.value,
        // category2:category2.value,
        // imgName: imgName.value,
        typdel:typdel.value,
        key:key
    }
    firebase.database().ref(`items/${key}`).set(food);
    itemname.value="";
    price.value="";
    category.value="";  
    // category2.value="";
    // imgName.value="";
    Free_Paid.value=""
console.log(food)





}
const dash = () => {
   
    firebase.database().ref(`items`).on('child_added', (data) => {
        let list = document.getElementById("list");
        let li= document.createElement("li");
        li.setAttribute("class","lidash")
        // let li = document.getElementById("li");
        li.innerHTML = `<div class="contaner">
      <div class="row justify-content-center">
          <div class="col-md-6 justify-content-center">
              <div class="card-body">
                  <h4>${data.val().itemname}</h4><br>
                  <h4>${data.val().price}</h4><br>
                  <li class="nav-item dropdown">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        ${data.val().category}
                      </a>
                      <div class="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item dropdown" href="#">${data.val().firstcat}</a>
                        <a class="dropdown-item dropdown" href="#">${data.val().seccat}</a>
                      </div>
                    </li>
                    
                    <li class="nav-item dropdown">
                      <a class="nav-link  dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      ${data.val().typdel}
                      </a>
                      <div class="dropdown-menu dropdown" aria-labelledby="navbarDropdown">
                        <a class="dropdown-item dropdown" href="#">${data.val().free}</a>
                        <a class="dropdown-item dropdown" href="#">${data.val().paid}</a>
                      </div>
                    </li>
              </div>
          </div>
      </div>`
      list.appendChild(li);
            console.log(data.val())
    })


    
}