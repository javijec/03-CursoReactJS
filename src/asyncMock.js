const products = [
    {
      "id": 1,
      "nombre": "iPhone 13 PRO",
      "precio": 999.0,
      "stock": 20,
      "imagen": "https://www.undertec.store/wp-content/uploads/2021/11/iphone-13-pro-undertaker-tec-store-500x500.jpg"
    },
    {
      "id": 2,
      "nombre": "Samsung Galaxy S24 Ultra",
      "precio": 799.0,
      "stock": 30,
      "imagen": "https://www.undertec.store/wp-content/uploads/2024/02/samsung-s24-ultra.webp"
    },
    {
      "id": 3,
      "nombre": "Google Pixel 6",
      "precio": 699.0,
      "stock": 25,
      "imagen": "https://www.undertec.store/wp-content/uploads/2021/11/Google-Pixel-6-undertaker-tec-store-500x500.jpg"
    },
    {
      "id": 4,
      "nombre": "OnePlus 12R",
      "precio": 729.0,
      "stock": 15,
      "imagen": "https://www.undertec.store/wp-content/uploads/2024/04/ONEPLUS-12R.webp"
    },
    {
      "id": 5,
      "nombre": "Xiaomi Mi 14",
      "precio": 749.0,
      "stock": 40,
      "imagen": "https://www.undertec.store/wp-content/uploads/2024/04/XIAOMI-14.webp"
    },
    {
      "id": 6,
      "nombre": "Realme GT3",
      "precio": 1199.0,
      "stock": 10,
      "imagen": "https://www.undertec.store/wp-content/uploads/2023/09/realme-gt-3.webp"
    },
    {
      "id": 7,
      "nombre": "Oppo Reno 10 PRO",
      "precio": 1099.0,
      "stock": 12,
      "imagen": "https://www.undertec.store/wp-content/uploads/2023/07/oppo-reno-10-pro.jpg"
    },
    {
      "id": 8,
      "nombre": "Nubia Red Magic 9 PRO",
      "precio": 999.0,
      "stock": 18,
      "imagen": "https://www.undertec.store/wp-content/uploads/2024/04/nubia-red-magic-9-pro.webp"
    },
    {
      "id": 9,
      "nombre": "POCO M6 PRO",
      "precio": 599.0,
      "stock": 22,
      "imagen": "https://www.undertec.store/wp-content/uploads/2024/02/poco-m6-pro.webp"
    },
    {
      "id": 10,
      "nombre": "Asus Zenfone 11 Ultra",
      "precio": 999.0,
      "stock": 8,
      "imagen": "https://www.undertec.store/wp-content/uploads/2024/04/asus-zenfonw-11-ultra.webp"
    }
  ]
  
  export const getProducts  = () => {
    return new Promise((resolve) => {
        setTimeout( () => {
            resolve(products)
        },500)
    })
  }