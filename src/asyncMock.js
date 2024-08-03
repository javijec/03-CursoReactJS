const category = ["iPhone", "Samsung", "Google", "OnePlus", "Xiaomi", "Realme", "Oppo", "Nubia", "POCO", "Asus"];

const products = [
  {
    id: 1,
    category: "iPhone",
    nombre: "iPhone 13 PRO",
    precio: 999.0,
    stock: 20,
    imagen: "https://www.undertec.store/wp-content/uploads/2021/11/iphone-13-pro-undertaker-tec-store-500x500.jpg",
    description:
      "iPhone 13 Pro es un smartphone de alta gama diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El iPhone 13 Pro es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 2,
    category: "Samsung",
    nombre: "Samsung Galaxy S24 Ultra",
    precio: 799.0,
    stock: 30,
    imagen: "https://www.undertec.store/wp-content/uploads/2024/02/samsung-s24-ultra.webp",
    description:
      "El Samsung Galaxy S24 Ultra es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Samsung Galaxy S24 Ultra es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 3,
    category: "Google",
    nombre: "Google Pixel 6",
    precio: 699.0,
    stock: 25,
    imagen: "https://www.undertec.store/wp-content/uploads/2021/11/Google-Pixel-6-undertaker-tec-store-500x500.jpg",
    description:
      "El Google Pixel 6 es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Google Pixel 6 es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 4,
    category: "OnePlus",
    nombre: "OnePlus 12R",
    precio: 729.0,
    stock: 15,
    imagen: "https://www.undertec.store/wp-content/uploads/2024/04/ONEPLUS-12R.webp",
    description:
      "El OnePlus 12R es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El OnePlus 12R es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 5,
    category: "Xiaomi",
    nombre: "Xiaomi Mi 14",
    precio: 749.0,
    stock: 40,
    imagen: "https://www.undertec.store/wp-content/uploads/2024/04/XIAOMI-14.webp",
    description:
      "El Xiaomi Mi 14 es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Xiaomi Mi 14 es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 6,
    category: "Realme",
    nombre: "Realme GT3",
    precio: 1199.0,
    stock: 10,
    imagen: "https://www.undertec.store/wp-content/uploads/2023/09/realme-gt-3.webp",
    description:
      "El Realme GT3 es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Realme GT3 es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 7,
    category: "Oppo",
    nombre: "Oppo Reno 10 PRO",
    precio: 1099.0,
    stock: 12,
    imagen: "https://www.undertec.store/wp-content/uploads/2023/07/oppo-reno-10-pro.jpg",
    description:
      "El Oppo Reno 10 Pro es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Oppo Reno 10 Pro es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 8,
    category: "Nubia",
    nombre: "Nubia Red Magic 9 PRO",
    precio: 999.0,
    stock: 18,
    imagen: "https://www.undertec.store/wp-content/uploads/2024/04/nubia-red-magic-9-pro.webp",
    description:
      "El Nubia Red Magic 9 Pro es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Nubia Red Magic 9 Pro es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 9,
    category: "POCO",
    nombre: "POCO M6 PRO",
    precio: 599.0,
    stock: 22,
    imagen: "https://www.undertec.store/wp-content/uploads/2024/02/poco-m6-pro.webp",
    description:
      "El POCO M6 Pro es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El POCO M6 Pro es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
  {
    id: 10,
    category: "Asus",
    nombre: "Asus Zenfone 11 Ultra",
    precio: 999.0,
    stock: 8,
    imagen: "https://www.undertec.store/wp-content/uploads/2024/04/asus-zenfonw-11-ultra.webp",
    description:
      "El Asus Zenfone 11 Ultra es un smartphone de gama media diseñado para ofrecer una experiencia de usuario óptima y una excelente experiencia de uso. Este modelo de smartphone ofrece una pantalla de alta resolución y una cámara de 8MP, lo que le permite una experiencia de video y audio de alta calidad. Además, ofrece un procesador A14 Bionic, una batería de larga duración y un sistema operativo de Android 13. El Asus Zenfone 11 Ultra es ideal para aquellos que buscan una experiencia de usuario óptima y una excelente experiencia de uso, y para aquellos que buscan una pantalla de alta resolución y una cámara de 8MP.",
  },
];

export const getCategory = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(category);
    }, 500);
  });
};

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 500);
  });
};
