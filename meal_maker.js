const menu = {
  _meal: '',
  _price : 0,
  set meal(mealToCheck) {
    if (typeof mealToCheck === 'string') {
      return this._meal = mealToCheck;
    }
  },
  set price(priceToCheck) {
    if (typeof priceToCheck === 'number') {
      return this._price = priceToCheck;
    }
  }
};

// menu._meal = 'burger';
// menu._price = 9.99;
// console.log(menu);

menu.meal = 'pizza'
menu.price = 8.49;
console.log(menu);
