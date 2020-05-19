export const isFieldsEmpty = () => {
  let length, value, index = 0;
  let isError = false;
  let errors = {
    name: "",
    sku: "",
    category: "",
    tag: "",
    price: "",
    discount: "",
    rating: "",
    saleCount: "",
    stock: "",
    shortDescription: "",
    model: "",
    isError: false
  };

  length = document.forms["product"]["name"].value.length;
  if (length === 0 || length < 3) {
    errors.name = 'Name must not be empty or less than 3 chars!'
    isError = true;
  } else
    errors.name = '';

  length = document.forms["product"]["sku"].value.length;
  if (length === 0 || length > 7) {
    errors.sku = 'SKU must not be empty or more than 7 chars!'
    isError = true;
  } else
    errors.sku = '';

  index = document.forms["product"]["category"].options.selectedIndex;
  if (index === 0) {
    errors.category = 'Category must not be empty!'
    isError = true;
  } else
    errors.category = '';

  index = document.forms["product"]["tag"].options.selectedIndex;
  if (index === 0) {
    errors.tag = 'Tag must not be empty!'
    isError = true;
  } else
    errors.tag = '';

  length = document.forms["product"]["price"].value.length;
  value = document.forms["product"]["price"].value;
  if (length === 0 || value < 0) {
    errors.price = 'Price must not be empty!'
    isError = true;
  } else
    errors.price = '';

  length = document.forms["product"]["discount"].value.length;
  value = document.forms["product"]["discount"].value;
  if (length === 0 || value < 0 || value > 100) {
    errors.discount = 'Discount must not be empty or more than 100!'
    isError = true;
  } else
    errors.discount = '';

  length = document.forms["product"]["rating"].value.length;
  value = document.forms["product"]["rating"].value;
  if (length === 0 || value < 0 || value > 5) {
    errors.rating = 'Rating must not be empty or more than 5!'
    isError = true;
  } else
    errors.rating = '';

  length = document.forms["product"]["saleCount"].value.length;
  value = document.forms["product"]["saleCount"].value;
  if (length === 0 || value < 0 || value > 9999) {
    errors.saleCount = 'SaleCount must not be empty!'
    isError = true;
  } else
    errors.saleCount = '';

  length = document.forms["product"]["stock"].value.length;
  value = document.forms["product"]["stock"].value;
  if (length === 0 || value < 0 || value > 999) {
    errors.stock = 'Stock must not be empty!'
    isError = true;
  } else
    errors.stock = '';

  length = document.forms["product"]["shortDescription"].value.length;
  if (length === 0 || length > 500) {
    errors.shortDescription = 'ShortDescription must not be empty or more than 500 chars!'
    isError = true;
  } else
    errors.shortDescription = '';

  length = document.forms["product"]["model"].value.length;
  if (length === 0 || length > 30) {
    errors.model = 'Model must not be empty or more than 30 chars!'
    isError = true;
  } else
    errors.model = '';

  if (isError) {
    errors.isError = true;
  } else {
    errors.isError = false;
  }
  return errors;
}
