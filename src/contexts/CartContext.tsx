import { createContext, ReactNode, useEffect, useState } from "react"

interface CoffeeContextProviderProps {
  children: ReactNode
}

export interface CoffeeCardProps {
  id: number
  image: string
  tags: string[]
  title: string
  description: string
  price: number
}

interface CoffeeContextType {
  defaultList: CoffeeCardProps[]
  cart: CartProps[]
  addToCart: (product: CartProps) => void
  updateCart: (product: CartProps) => void
  removeItemFromCart: (productId: number) => void
  countCartItems: number
  subtotalItems: number
  shipping: number
  setShipping: (shippingTax: number) => void
  paymentMethod: string
  setPaymentMethod: (paymentMethod: string) => void
  adress: string
  setAdress:  (adress: string) => void
  city: string
  setCity:  (city: string) => void
}

interface CartProps{
  id: number
  amount: number
}

export const CoffeeContext = createContext({} as CoffeeContextType)

export function CoffeeContextProvider({ children }: CoffeeContextProviderProps) {

  const [cart, setCart] = useState<CartProps[]>(()=>{
    const storagedCart = localStorage.getItem('@CofeeDelivery:cart-1.0.0');

    if (storagedCart) {
      return JSON.parse(storagedCart);
    }

    return [];
  })

  const [paymentMethod, setPaymentMethod] = useState('');

  const [subtotalItems, setSubtotalItems] = useState(0)

  const [shipping, setShipping] = useState(0)

  const [adress, setAdress] = useState('')

  const [city, setCity] = useState('')

  const defaultList = [
    {
    "id": 1,
    "title": "Expresso Tradicional",
    "price": 5.50,
    "image": "Type=Expresso.png",
    "description": "O tradicional café feito com água quente e grãos moídos",
    "tags": ["Tradicional"]
    },
    {
      "id": 2,
      "title": "Expresso Americano",
      "price": 5.50,
      "image": "Type=Americano.png",
      "description": "Expresso diluído, menos intenso que o tradicional",
      "tags": ["Tradicional"]
    },
    {
      "id": 3,
      "title": "Expresso Cremoso",
      "price": 10,
      "image": "Type=Expresso Cremoso.png",
      "description": "Café expresso tradicional com espuma cremosa",
      "tags": ["Tradicional"]
    },
    {
      "id": 4,
      "title": "Expresso Gelado",
      "price": 10,
      "image": "Type=Café Gelado.png",
      "description": "Bebida preparada com café expresso e cubos de gelo",
      "tags": ["Tradicional", "Gelado"]
    },
    {
      "id": 5,
      "title": "Café com Leite",
      "price": 9.90,
      "image": "Type=Café com Leite.png",
      "description": "Meio a meio de expresso tradicional com leite vaporizado",
      "tags": ["Tradicional", "Com Leite"]
    },
    {
      "id": 6,
      "title": "Latte",
      "price": 9.90,
      "image": "Type=Latte.png",
      "description": "Uma dose de café expresso com o dobro de leite e espuma cremosa",
      "tags": ["Tradicional", "Com Leite"]
    },
    {
      "id": 7,
      "title": "Capuccino",
      "price": 9.90,
      "image": "Type=Capuccino.png",
      "description": "Bebida com canela feita de doses iguais de café, leite e espuma",
      "tags": ["Tradicional", "Com Leite"]
    },
    {
      "id": 8,
      "title": "Macchiato",
      "price": 9.90,
      "image": "Type=Macchiato.png",
      "description": "Café expresso misturado com um pouco de leite quente e espuma",
      "tags": ["Tradicional", "Com Leite"]
    },
    {
      "id": 9,
      "title": "Mocaccino",
      "price": 9.90,
      "image": "Type=Mochaccino.png",
      "description": "Café expresso com calda de chocolate, pouco leite e espuma",
      "tags": ["Tradicional", "Com Leite"]
    },
    {
      "id": 10,
      "title": "Chocolate Quente",
      "price": 9.90,
      "image": "Type=Chocolate Quente.png",
      "description": "Bebida feita com chocolate dissolvido no leite quente e café",
      "tags": ["Especial", "Com Leite"]
    },
    {
      "id": 11,
      "title": "Cubano",
      "price": 9.90,
      "image": "Type=Cubano.png",
      "description": "Drink gelado de café expresso com rum, creme de leite e hortelã",
      "tags": ["Especial", "Alcoólico", "Gelado"]
    },
    {
      "id": 12,
      "title": "Havaiano",
      "price": 9.90,
      "image": "Type=Havaiano.png",
      "description": "Bebida adocicada preparada com café e leite de coco",
      "tags": ["Especial"]
    },
    {
      "id": 13,
      "title": "Árabe",
      "price": 9.90,
      "image": "Type=Árabe.png",
      "description": "Bebida preparada com grãos de café árabe e especiarias",
      "tags": ["Especial"]
    },
    {
      "id": 14,
      "title": "Irlandês",
      "price": 9.90,
      "image": "Type=Irlandês.png",
      "description": "Bebida a base de café, uísque irlandês, açúcar e chantilly",
      "tags": ["Especial", "Alcoólico"]
    }
  ];

  const countCartItems = cart.reduce((sumTotal, product) => {
    return sumTotal + product.amount;
  }, 0)

  function addToCart(itemToAdd: CartProps){

    const updatedCart = [...cart];
    const productExists = updatedCart.find(product => product.id === itemToAdd.id);


    if(productExists) {
      productExists.amount = productExists.amount + itemToAdd.amount
    } else {
      updatedCart.push(itemToAdd);
    }

    setCart(updatedCart);
    localStorage.setItem('@CofeeDelivery:cart-1.0.0', JSON.stringify(updatedCart))

  }

  function updateCart(itemToUpdate: CartProps){
    const updatedCart = [...cart];
    const editedProduct = updatedCart.find(product => product.id === itemToUpdate.id) as CartProps;
    editedProduct.amount = itemToUpdate.amount
    setCart(updatedCart);
    localStorage.setItem('@CofeeDelivery:cart-1.0.0', JSON.stringify(updatedCart))
  }

  function removeItemFromCart(productId: number){
    const updatedCart = [...cart];
    const productIndex = updatedCart.findIndex(product => product.id === productId);

    if (productIndex >= 0){ // Quando não encotrado, o retorno é -1

      updatedCart.splice(productIndex, 1);

      setCart(updatedCart)
      localStorage.setItem('@CofeeDelivery:cart-1.0.0', JSON.stringify(updatedCart))

    } else {
      throw Error();
    }
  }

  function totalsCalc(){

    const total:number[] = []

    cart.map(({ id, amount })=>{    
      const updatedCart = [...defaultList];
      const product = updatedCart.find(product => product.id === id) as CoffeeCardProps;
      const subtotalProduct = product.price*amount
      total.push(subtotalProduct)
    })
    
    var soma = total.reduce(function(soma, i) {
      return soma + i;
    }, 0);

    setSubtotalItems(soma)

  }

  useEffect(() => {
    totalsCalc()
  }, [cart])

  return (
    <CoffeeContext.Provider
      value={{
        defaultList,
        cart,
        addToCart,
        updateCart,
        removeItemFromCart,
        countCartItems,
        subtotalItems,
        shipping,
        setShipping,
        paymentMethod,
        setPaymentMethod,
        adress,
        setAdress,
        city,
        setCity
      }}
    >
      {children}
    </CoffeeContext.Provider>
  )
}