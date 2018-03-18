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
      if (cartItem.id === itemID) {
        isItemInCartTrue = true;
      }
    });
  }
  return isItemInCartTrue;
}

export function addItemToCart(itemInfo) {
  if (localStorage && !localStorage.cartItems) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  if (!isItemInCart(itemInfo.id)) {
    const cartItems = JSON.parse(localStorage.cartItems);
    cartItems.push(itemInfo);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));
    console.log('Added item to cart successfully:', itemInfo);
    return true;
  }
  return false;
}

export function updateCartItems(itemInfo) {
  if (localStorage && !localStorage.orderItems) {
    localStorage.setItem('orderItems', JSON.stringify([]));
  }
  removeItemFromCart(itemInfo);
  return addItemToCart(itemInfo);
}

export function removeItemFromCart(itemInfo) {
  if (localStorage && !localStorage.cartItems) {
    localStorage.setItem('cartItems', JSON.stringify([]));
  }
  if (isItemInCart(itemInfo.id)) {
    const cartItems = JSON.parse(localStorage.cartItems);
    const cartItemsAfterDeletion = cartItems.filter((cartItem) => {
      return cartItem.id !== itemInfo.id;
    });
    localStorage.setItem('cartItems', JSON.stringify(cartItemsAfterDeletion));
    console.log('deleted item successfully:', itemInfo);
    return true;
  }
  return false;
}

export function returnItemInfoInCart(itemID) {
  const cartItems = JSON.parse(localStorage.cartItems);
  const requestedItem = cartItems.filter((cartItem) => {
    return cartItem.id === itemID;
  });
  return requestedItem;
}
