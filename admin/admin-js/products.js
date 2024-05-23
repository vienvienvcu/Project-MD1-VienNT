const addProducts = document.getElementById("add-products");
const formProductsOpen = document.querySelector(".form-product");
const closeForm = document.getElementById("close-form");

addProducts.addEventListener("click", () => {
  // console.log(addProducts);
  formProductsOpen.classList.add("active");
});
closeForm.addEventListener("click", () => {
  formProductsOpen.classList.remove("active");
});

// mảng chứa dữ liệu sản phẩm
const products = [
  {
    number: "P001",
    name: "pizza",
    image: "/admin/img/seafood-pizza.jpg",
    size: "",
    price: 100,
    quantity: 10,
    description: "That la ngon",
  },
  {
    number: "P002",
    name: "filed chicken",
    image: "/admin/img/spaghetti.jpeg",
    size: "",
    price: 200,
    quantity: 20,
    description: "That la ngon",
  },
];
// ======== C/R/U/D==============

// -----------Initialize the variable and get the value in the html----------

const buttonSubmitForm = document.getElementById("submit-form");
const productNumber = document.getElementById("number");
const productName = document.getElementById("name");
const productImage = document.getElementById("input-image");
const price = document.getElementById("price");
const productSize = document.getElementById("size");
const quantity = document.getElementById("quantity");
const category = document.getElementById("category");
const description = document.getElementById("description");
const tableProduct = document.getElementById("table-product");

// Biến phân biệt action: thêm mới và cập nhật

let action = "action";

// add products from input of form to the table in the html

buttonSubmitForm.addEventListener("click", (event) => {
  event.preventDefault();
  const products = JSON.parse(localStorage.getItem("products")) || [];
  let id = 1;
});

//  Render product on the table in HTML

function render() {
  let stringProject = ``;

  for (let i = 0; i < products.length; i++) {
    stringProject += `
                  <tr>
                    <td>${i + 1}</td>
                    <td>${products[i].number}</td>
                    <td>${products[i].name}</td>
                    <td><img src="${products[i].image}"></td>
                    <td>${products[i].size}</td>
                    <td>${products[i].price}</td>
                    <td>${products[i].quantity}</td>
                    <td>${products[i].description}</td>
                    <td></td>
                    <td>
                      <button id="edit" class="btn">edit</button>
                      <button id="remove" class="btn">delete</button>
                    </td>
                  </tr>
    
    `;
  }
  tableProduct.innerHTML = stringProject;
}
window.load = render();
