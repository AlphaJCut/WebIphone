function DeleteProduct(e){
    let p = this.document.querySelector(".products")
    if(confirm("Bạn chắc chắn xóa không?")===true){
        p.removeChild(e.parentElement.parentElement);
        }

}

window.addEventListener("load",function(){
    let p= this.document.querySelector(".products")
    let closes=this.document.getElementsByClassName("close")
    for (let c of closes)
        c.addEventListener("click", function(event){
            if(confirm("Bạn chắc chắn xóa không?")===true){
                event.preventDefault();
                DeleteProduct(this);
            }
        });

    let form=this.document.querySelector(".add-form");
    let insert= this.document.querySelector(".insert");
    insert.addEventListener("click",function(){
        form.classList.toggle("show");
    })
    let btn=this.document.querySelector(".btn");
    btn.addEventListener("click",function(){
        let name =document.getElementById("name").value;
        let price =document.getElementById("price").value;
        let image =document.getElementById("image").value;

        let h=`
            <div class="product">
                <div>
                    <img src="${image}" alt="${name}">
                    <h2>${name}</h2>
                    <div class="price">${price} <sup>đ</sup></div>
                    <a onclick="DeleteProduct(this)" class="close" href="#">&times;</a>
                </div>
            </div>
        `;
        let first=document.querySelector(".product:first-child");
        first.insertAdjacentHTML("beforebegin",h);
    
let body = document.querySelector('body');

let allIamge = document.querySelectorAll('img');
console.log(allIamge[0].src)
for(let i = 0; i < allIamge.length; i++){
allIamge[i].addEventListener('click',function(){
let tmp = `
Phone `
console.log(tmp);
body.insertAdjacentHTML("beforebegin",tmp);
});
}        
    })
 })