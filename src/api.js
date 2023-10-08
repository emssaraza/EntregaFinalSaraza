import { initializeApp } from "firebase/app";
import { addDoc, getFirestore } from "firebase/firestore";
import { collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB5CsCUzB_b3-VLhIbUs5CZaGX0S4EpAnc",
  authDomain: "tienda-coder-e94aa.firebaseapp.com",
  projectId: "tienda-coder-e94aa",
  storageBucket: "tienda-coder-e94aa.appspot.com",
  messagingSenderId: "345217375904",
  appId: "1:345217375904:web:c568587ed817ede4b5f3c5",
  measurementId: "G-YXGB87JJTH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export async function getProducts() {
  const querySnapshot = await getDocs(collection(db, "products"));
  const products = [];
  querySnapshot.forEach((doc) => {
    products.push({ id: doc.id, ...doc.data() });
  });
  return products;
}

export async function getProductsByCategory(category) {
  const products = await getProducts();
  return products.filter((product) => product.category === category);
}

export async function getProductById(id) {
  const products = await getProducts();
  return products.find((product) => product.id === id);
}

export async function createCart(items) {
  const ref = await addDoc(collection(db, "carts"), { items });
  return ref.id
}


