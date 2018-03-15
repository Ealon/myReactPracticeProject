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

export function isItemInOrder(orderInfo) {
  let isItemInOrderTrue = false;
  if (localStorage.orderItems) {
    const orderItems = JSON.parse(localStorage.orderItems);
    orderItems.map((cartItem) => {
      if (cartItem.id === orderInfo.id) {
        isItemInOrderTrue = true;
      }
    });
  }
  return isItemInOrderTrue;
}

export function addCartItemToOrder(orderInfo) {
  if (localStorage && !localStorage.orderItems) {
    localStorage.setItem('orderItems', JSON.stringify([]));
  }
  if (!isItemInOrder(orderInfo)) {
    const orderItems = JSON.parse(localStorage.orderItems);
    orderItems.push(orderInfo);
    localStorage.setItem('orderItems', JSON.stringify(orderItems));
    console.log('Added item successfully:', orderInfo);
    return true;
  }
  return false;
}

export function removeItemFromOrder(orderInfo) {
  removeItemFromCart(orderInfo.id);
  if (localStorage && !localStorage.orderItems) {
    localStorage.setItem('orderItems', JSON.stringify([]));
  }
  if (isItemInOrder(orderInfo)) {
    const orderItems = JSON.parse(localStorage.orderItems);
    const orderItemsAfterDeletion = orderItems.filter((orderItem) => {
      return orderItem.id !== orderInfo.id;
    });
    localStorage.setItem('orderItems', JSON.stringify(orderItemsAfterDeletion));
    console.log('deleted item:', orderInfo);
    return true;
  }
  return false;
}

export function updateOrderItems(orderInfo) {
  if (localStorage && !localStorage.orderItems) {
    localStorage.setItem('orderItems', JSON.stringify([]));
  }
  removeItemFromOrder(orderInfo);
  return addCartItemToOrder(orderInfo) && addItemToCart(orderInfo.id);
}
