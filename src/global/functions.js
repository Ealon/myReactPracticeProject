export function hasValue(val) {
  if (val.toString().trim().length > 0) {
    return true;
  }
  return false;
}

export function isItemInCart(itemID) {
  let isItemInCartTrue = false;
  if (localStorage.cartItems) {
    const cartItems = JSON.parse(localStorage.cartItems);
    cartItems.map((cartItem) => {
      if (cartItem === itemID) {
        isItemInCartTrue = true;
      }
    });
  }
  return isItemInCartTrue;
}

export function addItemToCart(itemID) {
  if (localStorage && !localStorage.cartItems) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  if (!isItemInCart(itemID)) {
    const cartItems = JSON.parse(localStorage.cartItems);
    cartItems.push(itemID);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Added item:', itemID);
    return true;
  }
  return false;
}

export function removeItemFromCart(itemID) {
  if (localStorage && !localStorage.cartItems) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  if (isItemInCart(itemID)) {
    const cartItems = JSON.parse(localStorage.cartItems);
    const cartItemsAfterDeletion = cartItems.filter((cartItem) => {
      return cartItem !== itemID;
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItemsAfterDeletion));
    console.log('deleted item:', itemID);
    return true;
  }
  return false;
}

