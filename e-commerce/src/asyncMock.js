const listProducts = [
  {
    id: "1",
    name: "Canvas BackPack",
    price: 75,
    category: "middle-backPack",
    img: "https://static.wixstatic.com/media/a9ff3b_f852b0f8d589446d9b672173e24008f9.jpg/v1/fill/w_306,h_306,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_f852b0f8d589446d9b672173e24008f9.webp",
    stock: 15,
    sku:"0001",
    description: "Description about middle-backPack",
  },
  {
    id: "2",
    name: "Technical BackPack",
    price: 130,
    category: "Big-backPack",
    img: "https://static.wixstatic.com/media/a9ff3b_b0e020a191534969bccc74fb5f27684c.jpg/v1/fill/w_306,h_306,al_c,q_85,usm_0.66_1.00_0.01/a9ff3b_b0e020a191534969bccc74fb5f27684c.webp",
    stock: 20,
    sku:"0023",
    description: "Description about big back pack",
  },
  {
    id: "3",
    name: "Camo BackPack",
    price: 95,
    category: "backPack",
    img: "https://static.wixstatic.com/media/84770f_7b18884ff3e343208842ae1f30df28aa.jpg/v1/fill/w_306,h_306,al_c,q_85,usm_0.66_1.00_0.01/84770f_7b18884ff3e343208842ae1f30df28aa.webp",
    stock: 5,
    sku:"0200",
    description: "Description about back pack",
  },
];

export const getProducts = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listProducts);
      reject(console.error("ocurred any error in function getProducts"));
    }, 1300);
  });
};

export const getProductsByCategory = (category) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(listProducts.filter((prod) => prod.category === category));
      reject(console.error("ocurred any error in function getCategoryId"));
    }, 1200);
  });
};

export const getProductById = (id) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listProducts.find((prod) => prod.id === id));

    }, 1000);
  });
};
