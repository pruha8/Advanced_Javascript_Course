class ProductList{
    constructor(container='.products'){
        this.container = container;
        this.goods = [];
        this._fetchProducts();//рекомендация, чтобы метод был вызван в текущем классе
        this.render();//вывод товаров на страницу
    }
    _fetchProducts(){
        this.goods = [
            {id: 1, title: 'Notebook', price: 2000, image: 'img/notebook.jpg'},
            {id: 2, title: 'Mouse', price: 20, image: 'img/mouse.jpg'},
            {id: 3, title: 'Keyboard', price: 200, image: 'img/keyboard.jpg'},
            {id: 4, title: 'Gamepad', price: 50, image: 'img/gamepad.jpeg'},
        ];
    }
    
    render(){
        const block = document.querySelector(this.container);
        for(let product of this.goods){
             const item = new ProductItem(product);
             block.insertAdjacentHTML("beforeend",item.render());
//           block.innerHTML += item.render();
        }
    }

    getSum() {
        let sum = 0;
        this.goods.forEach(item => {
            sum += item.price;
        });
        alert(sum);
    }
}

class ProductItem{
    constructor(product){
        this.title = product.title;
        this.id = product.id;
        this.price = product.price;
        this.image = product.image;
    }
    render(){
           return `<div class="product-item">
                <img src="${this.image}">
                <h3>${this.title}</h3>
                <p>${this.price}</p>
                <button class="buy-btn">Купить</button>
            </div>`
    }
}

let list = new ProductList();
list.render();
list.getSum();

class Basket {
    addGood() {

    }
    removeGood() {

    }
    changeGood() {

    }
    
    render(){
        
    }
}

class ElemBasket {
    render(){}

}




/*const products = [
    {id: 1, title: 'Notebook', price: 2000, image: 'img/notebook.jpg'},
    {id: 2, title: 'Mouse', price: 20, image: 'img/mouse.jpg'},
    {id: 3, title: 'Keyboard', price: 200, image: 'img/keyboard.jpg'},
    {id: 4, title: 'Gamepad', price: 50, image: 'img/gamepad.jpeg'},
];



//Функция для формирования верстки каждого товара
//Добавить в выводе изображение
const renderProduct = product => {
    return `
        <div class="product-item">
            <h3>${product.title}</h3>
            <img src="${product.image}" alt="">
            <p>${product.price} y.e. </p>
            <button class="buy-btn">Купить</button>
            </div>`
};

const renderPage = list => {
    const productsList = list.map(product => renderProduct(product));
    console.log(productsList);
    document.querySelector('.products').innerHTML = productsList.join('');
};

renderPage(products);
*/
/*
При присваивании массива свойству .innerHTML, у него автоматически вызывается 
метод .toString, который эквивалентен вызову метода .join(','). Чтобы убрать 
запятую, необходимо дописать .join('').
*/