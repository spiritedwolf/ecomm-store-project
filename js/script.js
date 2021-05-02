const productsAr = [
    {
        id: 1,
        image: `brazil-single-origin-coffee.png`,
        rating: 4,
        name: `Brazil Single Origin`,
        orignalPrice: 40,
        salePrice:  35,
        size: [`Small`, `Medium`, `Large`],
        roast: 5,
        description: `It has a nutty and full bodied taste, which is incredible as a single origin and a staple for most blends. There complete focus on quality, high scoring, incomparable coffees really shows in the flavour.`
    },
    {
        id: 2,
        image: `peru-single-origin-coffee.png`,
        rating: 4,
        name: `Peru Single Origin`,
        orignalPrice: 55,
        salePrice:  25,
        size: [`Small`, `Large`],
        roast: 5,
        description: `As an origin, Peru has all the conditions necessary to produce world-class coffee: Its high elevation; prominence of good varieties like Typica, Bourbon, and Caturra. The small farm holders and cooperatives are operating in a quality focused movement especially its organic practises and farming techniques.`
    },
    {
        id: 3,
        image: `blend-coffee.png`,
        rating: 5,
        name: `Escapada Blend`,
        orignalPrice: 20,
        salePrice:  18,
        size: [`Small`, `Medium`],
        roast: 4,
        description: `Made for the adventures!! Whether you are hiking up a mountain, early morning fishing on the river or exploring new lands, adventurers should drink great coffee. So begin your escapada right with a coffee made for you!`
    },
    {
        id: 4,
        image: `one-tree-blend-coffee.png`,
        rating: 4.4,
        name: `One Tree Blend`,
        orignalPrice: 50,
        salePrice:  48,
        size: [`Medium`, `Large`],
        roast: 5,
        description: `One For One! We have partnered with one tree planted, an organisation on a mission to tackle reforestation at all levels and have planted over 4 million trees and counting so far.`
    },
    {
        id: 5,
        image: `moana-coffee.png`,
        rating: 4.8,
        name: `MOANA Speciality Blend`,
        orignalPrice: 75,
        salePrice:  59,
        size: [`Small`, `Medium`, `Large`],
        roast: 5,
        description: `The Ocean couldn't express this enough, she is beautiful, mysterious, awe inspiring and free and we hope to encompass this spirit and deliver it through this amazing specialty blend MOANA.`
    },
    {
        id: 6,
        image: `brazil-single-origin-coffee.png`,
        rating: 4,
        name: `Ultra Brazil Single Origin`,
        orignalPrice: 40,
        salePrice:  35,
        size: [`Medium`, `Large`],
        roast: 5,
        description: `It has a nutty and full bodied taste, which is incredible as a single origin and a staple for most blends. There complete focus on quality, high scoring, incomparable coffees really shows in the flavour.`
    },
    {
        id: 7,
        image: `peru-single-origin-coffee.png`,
        rating: 4,
        name: `Ultra Peru Single Origin  II`,
        orignalPrice: 55,
        salePrice:  25,
        size: [`Small`, `Medium`, `Large`],
        roast: 5,
        description: `As an origin, Peru has all the conditions necessary to produce world-class coffee: Its high elevation; prominence of good varieties like Typica, Bourbon, and Caturra. The small farm holders and cooperatives are operating in a quality focused movement especially its organic practises and farming techniques.`
    },
    {
        id: 8,
        image: `blend-coffee.png`,
        rating: 5,
        name: `Ultra Escapada Blend`,
        orignalPrice: 20,
        salePrice:  18,
        size: [`Small`, `Medium`, `Large`],
        roast: 4,
        description: `Made for the adventures!! Whether you are hiking up a mountain, early morning fishing on the river or exploring new lands, adventurers should drink great coffee. So begin your escapada right with a coffee made for you!`
    },
    {
        id: 9,
        image: `one-tree-blend-coffee.png`,
        rating: 4.4,
        name: `Ultra One Tree Blend`,
        orignalPrice: 50,
        salePrice:  48,
        size: [`Small`],
        roast: 5,
        description: `One For One! We have partnered with one tree planted, an organisation on a mission to tackle reforestation at all levels and have planted over 4 million trees and counting so far.`
    },
    {
        id: 10,
        image: `moana-coffee.png`,
        rating: 4.8,
        name: `Ultra MOANA Speciality Blend`,
        orignalPrice: 75,
        salePrice:  59,
        size: [`Small`, `Medium`, `Large`],
        roast: 5,
        description: `The Ocean couldn't express this enough, she is beautiful, mysterious, awe inspiring and free and we hope to encompass this spirit and deliver it through this amazing specialty blend MOANA.`
    }
];

const searchFilter = {
    searchQuery: '',
    price: 0
  }

// select the section with the class name results
const productTable = document.querySelector(`.results`);
const filterPrice = document.querySelector(`#filterPrice`);
const setProductToTable = function(array) {
    productTable.innerHTML = ``;

    array.forEach((item) => {
        const createItem = document.createElement(`article`);
        
        createItem.classList.add(`product`);

        createItem.innerHTML = `
        <section>
            <header>
              <div class="image_container">
                <img src="img/${item.image}" alt="Product Image">
              </div>              
              <div class="rate">
                <dl>
                  <dd><p>Rating : ${item.rating}</p> <span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star</span><span class="material-icons">star_half</span></dd>
                </dl>
              </div>
              <a href="product.html" class="product-link"><h3 class="product-title">${item.name}</h3></a>
              <div class="product-price">
                <data value="${item.salePrice}"><del>$${item.orignalPrice}</del> <ins>$${item.salePrice}</ins></data>
                </div>
              <!-- <div class="product-info"> -->
         
              <form class="product-property">
                <fieldset class="sizes">
                  <legend>Sizes</legend>
                  <ol>
                    <li class="size-label"><label><input type="radio" name="size" value="s"> Small</label></li>
                    <li class="size-label"><label><input type="radio" name="size" value="m"> Medium</label></li>
                    <li class="size-label"><label><input type="radio" name="size" value="l"> Large</label></li>
                  </ol>
                </fieldset>
                <fieldset class="roast">
                  <legend>Roast</legend>
                  <ol>
                    <li><label><img class="roast-img" src="img/roast.svg" alt=""></label></li>
                    <li><label><img class="roast-img" src="img/roast.svg" alt=""></label></li>
                    <li><label><img class="roast-img" src="img/roast.svg" alt=""></label></li>
                    <li><label><img class="roast-img" src="img/roast.svg" alt=""></label></li>
                    <li><label><img class="roast-img" src="img/roast.svg" alt=""></label></li>
                  </ol>
                </fieldset>
              </form>
              <div class="product-description">
              <p>${item.description}<a href="#">see more</a></p>
              </div>
            </header>
            <footer class="product-footer">
              <div class="product-footer-btn">
                <button type="button" class="add-to-cart"><i class="fa fa-shopping-cart fa-lg"></i> Add to Cart</button>
              </div>            
            </footer> 
          </section> 
          `
        productTable.appendChild(createItem);
    });

}

const filterAndSort = function(...args) {
    filtterPriceRange = args[0].price;
    const filterPrice = productsAr.filter(function(item) {
        return (item.salePrice > 0  && filtterPriceRange >= item.salePrice);
    })
    setProductToTable(filterPrice);

}

filterPrice.addEventListener(`input`, function(event) {
    // The range slider
    const priceRange = event.target;
    // The <output> for the range (so we can see what's happening)
    const theOutput = document.querySelector(`output[for="filterPrice"]`);
    // put the range "value" in the output
    theOutput.textContent = priceRange.value;  
    // Put the value into the filter object
    searchFilter.price = Number(priceRange.value);
    
    // Now search
    filterAndSort(searchFilter);
  
  })


setProductToTable(productsAr);
