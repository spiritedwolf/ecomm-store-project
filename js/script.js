const productsAr = [
  {
      id: 1,
      image: `brazil-single-origin-coffee.png`,
      rating: 5,
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
      rating: 5,
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
      rating: 5,
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
      rating: 3,
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
      rating: 5,
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
      rating: 4,
      name: `Ultra MOANA Speciality Blend`,
      orignalPrice: 75,
      salePrice:  59,
      size: [`Small`, `Medium`, `Large`],
      roast: 5,
      description: `The Ocean couldn't express this enough, she is beautiful, mysterious, awe inspiring and free and we hope to encompass this spirit and deliver it through this amazing specialty blend MOANA.`
  }
];

const searchFilter = {
  price: 0,
  rating: 0
}

// select the section with the class name results
const productTable = document.querySelector(`.results`);
// select the input field with the id "filterPrice"
const filterPrice = document.querySelector(`#filterPrice`);
// select the input field with  the id "sm"
const filterSmallSize = document.querySelector(`#sm`);
// select the input field with  the id "md"
const filterMediumSize = document.querySelector(`#md`);
// select the input field with  the id "lg"
const filterLargeSize = document.querySelector(`#lg`);
// select the element with the id "sort"
const filterSort = document.querySelector(`#sort`);



const setProductToTable = function(array) {
  productTable.innerHTML = ``;

  array.forEach((item) => {
      const createItem = document.createElement(`article`);
      
      createItem.classList.add(`product`);
      
      let totalRating = ``;
      
      for(let i=0;i < item.rating; i++) {
          let listHtml = `
          <span class="material-icons">star</span>
          `;
          totalRating += listHtml;
      };
      let sizeType = ``;
      for(let i=0;i < (item.size).length; i++) {
          let listHtml = `
          <li class="size-label"><label><input type="radio" name="size" value="s">${(item.size)[i]}</label></li>
          `;
          sizeType += listHtml;
      };

      let totalRoast = ``;
      for(let i=0;i < item.roast; i++) {
          let roastHtml = `
          <img class="roast-img" src="img/roast.svg" alt="">
          `;
          totalRoast += roastHtml;
      } 

      

      createItem.innerHTML = `
      <section>
          <header>
            <a href="product.html" class="product-link">
              <h3 class="product-title">${item.name}</h3>
            
            <div class="image_container">
              <img src="img/${item.image}" alt="Product Image" class="center-img">
            </div></a>
            <div class="product-price">
            <data value="${item.salePrice}"><del>$${item.orignalPrice}</del> <ins>$${item.salePrice}</ins></data>
            </div>
            
            <!-- <div class="product-info"> -->
       
            <form class="product-property">
            <div class="product-size">  
            <fieldset class="sizes">
                <legend>Sizes</legend>
                <ol>
                  ${sizeType}
                </ol>
              </fieldset>
              </div>
              <div class="rating">
                <fieldset>
                    <legend>Rating : ${item.rating}</legend>
                    <dl>
                    <dd>${totalRating}</dd>
                  </dl>
                </fieldset>
              </div>
              <div class="product-roast">
                <fieldset>
                    <legend>Roast : ${item.roast}</legend>
                    <dl>
                    <dd>${totalRoast}</dd>
                  </dl>
                </fieldset>
              </div>
            </form>
            <div class="product-description">
            <p>${item.description}<a href="#">see more</a></p>
            </div>
            <div class="product-footer-btn">
              <button type="button" class="add-to-cart"><i class="fa fa-shopping-cart fa-lg"></i> Add to Cart</button>
            </div>            
          </header>
        </section> 
        `
      productTable.appendChild(createItem);
  });

}

const filterAndSort = function(...args) {
  let filtterPriceRange = args[0].price;

  let filterProduct = productsAr.filter(function(item) {
      return (item.salePrice <= filtterPriceRange);
  });
  
  // console.log(filterProduct)
  setProductToTable(filterProduct);
}


filterPrice.addEventListener(`input`, function(event) {
  // The range slider
  const priceRange = event.target;
  // The <output> for the range (so we can see what's happening)
  const theOutput = document.querySelector(`output[for="filterPrice"]`);
  // put the range "value" in the output
  // Example $50
  theOutput.textContent = ` $ ${priceRange.value}`;  
  // Put the value into the filter object
  searchFilter.price = Number(priceRange.value);
  
  // Now search
  filterAndSort(searchFilter);

})

// Small Size filter
filterSmallSize.addEventListener(`click`, function(event) {
  const smallSizeInput = event.target;
 
  if (smallSizeInput.checked == true) {
    let smallSizeFilter = productsAr.filter((item) => {
      return item.size.includes("Small");
      });
    setProductToTable(smallSizeFilter);
  }
  else {
    setProductToTable(productsAr);
  }
});

// Medium Size filter
filterMediumSize.addEventListener(`click`, function(event) {
  const mediumSizeInput = event.target;
 
  if (mediumSizeInput.checked == true) {
    let mediumSizeFilter = productsAr.filter((item) => {
      return item.size.includes("Medium");
      });
    setProductToTable(mediumSizeFilter);
  }
  else {
    setProductToTable(productsAr);
  }
});

// Large Size filter
filterLargeSize.addEventListener(`click`, function(event) {
  const LargeSizeInput = event.target;
 
  if (LargeSizeInput.checked == true) {
    let largeSizeFilter = productsAr.filter((item) => {
      return item.size.includes("Large");
      });
    setProductToTable(largeSizeFilter);
  }
  else {
    setProductToTable(productsAr);
  }
});

filterSort.addEventListener(`click`, function(event) {
  // Function to sort the productAr array elements by it's sale price from low to high 
  const lowToHighSort = (productsAr = []) => {
      const sortPrice = (min, max) => {
          return +min.salePrice - +max.salePrice;
      };
      productsAr.sort(sortPrice);
      setProductToTable(productsAr);
  };

  const highToLowSort = (productsAr = []) => {
  // Function to sort the productAr array elements by it's sale price from high to low 

      const sortPrice = (min, max) => {
          return +max.salePrice - +min.salePrice;
      };
      productsAr.sort(sortPrice);
      setProductToTable(productsAr);
  };

  if (filterSort.selectedIndex == 0) {
      lowToHighSort(productsAr);
  }
  else if (filterSort.selectedIndex == 1) {
      highToLowSort(productsAr);
  }
  else {
      return 0;
  }

});


setProductToTable(productsAr);
