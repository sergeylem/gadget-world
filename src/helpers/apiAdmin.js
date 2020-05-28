import { API } from "../config";

export const createSpecification = (userId, token, specification) => {
    return fetch(`${API}/specification/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${token}`
        },
        body: specification
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createProduct = (userId, token, product) => {

    return fetch(`${API}/product/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
//            "Content-Type": "application/json",  
//            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${token}`
        },
//        body: JSON.stringify(product)
        body: product
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const createCategory = (userId, token, category) => {
    return fetch(`${API}/category/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(category)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getCategories = () => {
    return fetch(`${API}/categories`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const createTag = (userId, token, tag) => {
    return fetch(`${API}/tag/create/${userId}`, {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        },
        body: JSON.stringify(tag)
    })
        .then(response => {
            return response.json();
        })
        .catch(err => {
            console.log(err);
        });
};

export const getTags = () => {
    return fetch(`${API}/tags`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProducts = () => {
    return fetch(`${API}/products?limit=undefined`, {
        method: "GET"
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const getProduct = productId => {
  return fetch(`${API}/product/${productId}`, {
      method: "GET"
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};

export const deleteProduct = (productId, userId, token) => {
    return fetch(`${API}/product/${productId}/${userId}`, {
        method: "DELETE",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            return response.json();
        })
        .catch(err => console.log(err));
};

export const updateProduct = (productId, userId, token, product) => {
  return fetch(`${API}/product/${productId}/${userId}`, {
      method: "PUT",
      headers: {
          Accept: "application/json",
          Authorization: `Bearer ${token}`
      },
      body: product
  })
      .then(response => {
          return response.json();
      })
      .catch(err => console.log(err));
};
