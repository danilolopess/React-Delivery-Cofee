import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react';
import { useContext } from 'react';
import heroImg from '../../assets/images/img-hero.png';
import { CoffeeCard } from '../../components/CoffeeCard';
import { CoffeeContext } from '../../contexts/CartContext';

import { Container } from "../../styles/global";
import { HeroContainer, HeroImg, HeroText, HeroList, CoffeeListContainer, CoffeeList } from "./styles";


export function Home(){

  const { defaultList } = useContext(CoffeeContext)

  return(
    <>
      <HeroContainer>
        <Container>
          <HeroText>
            <div className="title">
              <h1>Encontre o café perfeito para qualquer hora do dia</h1>
              <p>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora</p>
            </div>
            <HeroList>
              <li>
                <div className="ico yellow-dark">
                  <ShoppingCart size={18} weight="fill" />
                </div>
                <span>Compra simples e segura</span>
              </li>
              <li>
                <div className="ico yellow">
                  <Timer size={18} weight="fill" />
                </div>
                <span>Entrega rápida e rastreada</span>
              </li>
              <li>
                <div className="ico gray">
                  <Package size={18} weight="fill" />
                </div>
                <span>Embalagem mantém o café intacto</span>
              </li>
              <li>
                <div className="ico purple">
                  <Coffee size={18} weight="fill" />
                </div>
                <span>O café chega fresquinho até você</span>
              </li>
            </HeroList>
          </HeroText>
          <HeroImg src={heroImg} />
        </Container>
      </HeroContainer>

      <CoffeeListContainer>
        <Container>
          <h2>Nossos cafés</h2>
          <CoffeeList>
            {defaultList.map(({ id, image, tags, title, description, price }) => (
              <CoffeeCard
                key={id}
                id={id}
                image={image}
                tags={tags}
                title={title}
                description={description}
                price={price}
              />
            ))}
          </CoffeeList>
        </Container>
      </CoffeeListContainer>
    </>
  )
}