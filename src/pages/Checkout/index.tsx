import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { useNavigate } from "react-router-dom";

import { Bank, CreditCard, CurrencyDollar, MapPinLine, Money } from "phosphor-react";

import { CoffeeContext } from "../../contexts/CartContext";
import { CartItem } from "../../components/CartItem";
import { formatPrice } from "../../util/format";

import { Container } from "../../styles/global";
import { 
  CartContainer, 
  CheckoutContainer, 
  CheckoutForm, 
  FormInput, 
  FormInputRow, 
  PaymentMethod, 
  SelectedCoffeeContainer, 
  CartItemContainerFooter 
} from "./styles";

const checkoutAdressFormValidationSchema = zod.object({
  zipCode: zod.number(),
  street: zod.string().min(1),
  complemento: zod.string().optional(),
  number: zod.number(),
  bairro: zod.string().min(1),
  cidade: zod.string().min(1),
  uf: zod.string().min(2),
})

type CheckoutAdressFormData = zod.infer<typeof checkoutAdressFormValidationSchema>

export function Checkout(){

  const { 
    cart, 
    paymentMethod, 
    setPaymentMethod, 
    subtotalItems, 
    shipping, 
    setShipping,
    setAdress,
    setCity
  } = useContext(CoffeeContext)

  const navigate = useNavigate();

  const { register, handleSubmit, watch } = useForm<CheckoutAdressFormData>({
    resolver: zodResolver(checkoutAdressFormValidationSchema),
  })

  function sendCheckoutForm(data: CheckoutAdressFormData){
    const adress = `${data.street}, ${data.number}`;
    const city = `${data.cidade}, ${data.uf}`;
    setAdress(adress)
    setCity(city)
    navigate('/success')
  }

  const zipCode = watch('zipCode')

  const isSubmitDesabled = !zipCode;

  const shippingTax: number = zipCode ? 7.5 : 0 ;
  
  useEffect(() => {
    shippingTax > 0 ? setShipping(shippingTax) : setShipping(0);
  }, [shippingTax])


  return(
    <CheckoutContainer>
      <form onSubmit={handleSubmit(sendCheckoutForm)}>
        <Container>
            <div>
              <h2>Complete seu pedido</h2>

              <CheckoutForm>
                <header>
                  <div className="icon-map">
                    <MapPinLine size={22} />
                  </div>
                  <div className="text">
                    <h3>Endereço de Entrega</h3>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                  </div>
                </header>
                <main>
                  <FormInputRow>
                    <FormInput 
                      type="number" 
                      id="zipCode" 
                      placeholder="CEP"
                      required
                      {...register('zipCode', { valueAsNumber: true })}
                    /> 
                  </FormInputRow>
                  <FormInputRow>
                    <FormInput 
                      type="text" 
                      id="rua" 
                      placeholder="Rua"
                      {...register('street')}
                    />
                  </FormInputRow>
                  <FormInputRow>
                    <FormInput 
                      type="number" 
                      id="number"
                      placeholder="Número"
                      
                      {...register('number', { valueAsNumber: true })}
                    />
                    <FormInput 
                      type="text" 
                      id="complemento" 
                      placeholder="Complemento"
                      {...register('complemento')}
                    />
                  </FormInputRow>
                  <FormInputRow>
                    <FormInput 
                      type="text" 
                      id="bairro" 
                      placeholder="Bairro"
                      {...register('bairro')}
                    />
                    <FormInput 
                      type="text" 
                      id="cidade" 
                      placeholder="Cidade"
                      {...register('cidade')}
                    />
                    <FormInput 
                      type="text" 
                      id="uf" 
                      placeholder="UF"
                      {...register('uf')}
                    />
                  </FormInputRow>
                </main>
              </CheckoutForm>

              <CheckoutForm>
                <header>
                  <div className="icon-dollar">
                    <CurrencyDollar size={22} />
                  </div>
                  <div className="text">
                    <h3>Endereço de Entrega</h3>
                    <span>Informe o endereço onde deseja receber seu pedido</span>
                  </div>
                </header>
                <main>
                <FormInputRow>
                  <PaymentMethod
                    type="button"
                    onClick={()=>{setPaymentMethod('Cartão de Crédito')}}
                    isActive={paymentMethod === 'Cartão de Crédito'}
                  >
                    <CreditCard size={16} />
                    <span>Cartão de crédito</span>
                  </PaymentMethod>
                  <PaymentMethod
                    type="button"
                    onClick={()=>{setPaymentMethod('Cartão de débito')}}
                    isActive={paymentMethod === 'Cartão de débito'}
                  >
                    <Bank size={16} />
                    <span>Cartão de débito</span>
                  </PaymentMethod>
                  <PaymentMethod
                    type="button"
                    onClick={()=>{setPaymentMethod('Dinheiro')}}
                    isActive={paymentMethod === 'Dinheiro'}
                  >
                    <Money size={16} />
                    <span>Dinheiro</span>
                  </PaymentMethod>
                </FormInputRow>
                </main>
              </CheckoutForm>
            </div>

          <SelectedCoffeeContainer>
            <h2>Cafés Selecionados</h2>
            <CartContainer>
              <div className="cartItemsList">
                {
                  cart.map(({id, amount})=>(
                    <CartItem 
                      key={id}
                      id={id}
                      amount={amount}
                    />
                  ))
                }
              </div>            
              <CartItemContainerFooter>
                <div className="row">
                  <span>Total de itens</span>
                  <span>{formatPrice(subtotalItems)}</span>
                </div>
                <div className="row">
                  <span>Entrega</span>
                  <span>{formatPrice(shipping)}</span>
                </div>
                <div className="row">
                  <strong>Total</strong>
                  <strong>{formatPrice(subtotalItems+shipping)}</strong>
                </div>
                <button type="submit" disabled={isSubmitDesabled} className="confirm">
                  Confirmar pedido
                </button>
              </CartItemContainerFooter>
          </CartContainer>
          </SelectedCoffeeContainer>

        </Container>
      </form>
    </CheckoutContainer>
  )
}