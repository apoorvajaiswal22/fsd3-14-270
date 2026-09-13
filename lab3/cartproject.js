import readline from "readline/promises";
import { stdin, stdout } from "process";
import { readFile, writeFile } from "fs/promises";

const FILE = "product.json";

// Read cart from file
const getCart = async () => {
  try {
    const data = await readFile(FILE, "utf-8");

    if (!data.trim()) {
      return [];
    }

    return JSON.parse(data);
  } catch (err) {
    return [];
  }
};

// Save cart to file
const saveCart = async (cart) => {
  await writeFile(FILE, JSON.stringify(cart, null, 2));
};

// Add product
const addToCart = async (product) => {
  const cart = await getCart();

  const isFoundInCart = cart.find(
    (item) => item.id === product.id
  );

  if (isFoundInCart) {
    isFoundInCart.qty += product.qty;
  } else {
    cart.push(product);
  }

  await saveCart(cart);
  console.log(`${product.name} added/updated to 🛒`);
};

// Display cart
const displayCart = async () => {
  const cart = await getCart();

  if (cart.length === 0) {
    console.log("\n🛒 Cart is empty\n");
    return;
  }

  console.table(cart);

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  console.log(`Total payable amount: Rs. ${total}`);
};

// Remove product
const removeProduct = async (pId) => {
  const cart = await getCart();

  const newCart = cart.filter(
    (item) => item.id !== pId
  );

  if (cart.length === newCart.length) {
    console.log(`❌ Product with ID ${pId} not found`);
    return;
  }

  await saveCart(newCart);
  console.log(`✅ Product with ID ${pId} removed`);
};

// Update quantity
const updateQuantity = async (pId, qty) => {
  const cart = await getCart();

  const product = cart.find(
    (item) => item.id === pId
  );

  if (!product) {
    console.log(`❌ Product with ID ${pId} not found`);
    return;
  }

  product.qty = qty;

  await saveCart(cart);
  console.log(`✅ Quantity updated`);
};

// Checkout
const checkout = async () => {
  const cart = await getCart();

  if (cart.length === 0) {
    console.log("🛒 Cart is empty");
    return;
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  console.table(cart);
  console.log(`Total Amount: Rs. ${total}`);

  await saveCart([]);
  console.log("✅ Order placed successfully");
};

const main = async () => {
  const cin = readline.createInterface({
    input: stdin,
    output: stdout,
  });

  let choice;

  do {
    console.log("\nWelcome to Amazon Shopping 🛒");
    console.log("1........Show Cart");
    console.log("2........Add Product");
    console.log("3........Remove Product");
    console.log("4........Update Quantity");
    console.log("5........Checkout");
    console.log("6........Exit");

    choice = Number(
      await cin.question("Enter your choice: ")
    );

    switch (choice) {
      case 1:
        await displayCart();
        break;

      case 2: {
        const item = await cin.question(
          "Enter id,name,price,qty: "
        );

        const [id, name, price, qty] = item
          .split(",")
          .map((p) => p.trim());

        await addToCart({
          id: Number(id),
          name,
          price: Number(price),
          qty: Number(qty),
        });

        break;
      }

      case 3: {
        const pid = Number(
          await cin.question(
            "Enter Product ID to remove: "
          )
        );

        await removeProduct(pid);
        break;
      }

      case 4: {
        const pid = Number(
          await cin.question(
            "Enter Product ID: "
          )
        );

        const qty = Number(
          await cin.question(
            "Enter New Quantity: "
          )
        );

        await updateQuantity(pid, qty);
        break;
      }

      case 5:
        await checkout();
        break;

      case 6:
        console.log("🙏 Thank you for shopping!");
        break;

      default:
        console.log("❌ Invalid choice");
    }
  } while (choice !== 6);

  cin.close();
};

main();