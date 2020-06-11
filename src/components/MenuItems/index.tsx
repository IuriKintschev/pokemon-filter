import React from "react";

import { Container } from "./styles";

// assets
import logo from "../../assets/Voltbras.png";
import caminho from "../../assets/Caminho-2.svg";
import event from "../../assets/emoji_events-24px.svg";
import dashboard from "../../assets/dashboard-24px.svg";
import help from "../../assets/help_outline-24px.svg";
import services from "../../assets/miscellaneous_services-24px.svg";

interface TileType {
  id: string;
  imagem: string;
  title: string;
}

const MenuItems: React.FC = () => {
  const dataTile: TileType[] = [
    {
      id: "1",
      imagem: caminho,
      title: "Lista",
    },
    {
      id: "2",
      imagem: event,
      title: "Conquistas",
    },
    {
      id: "3",
      imagem: dashboard,
      title: "Pokédex",
    },
    {
      id: "4",
      imagem: help,
      title: "Ajuda",
    },
    {
      id: "5",
      imagem: services,
      title: "Configuração",
    },
  ];

  return (
    <Container>
      <header>
        <img src={logo} alt="Logo voltbras" />
        <p>
          <span>Voltbras App</span>
          Pokémon Manager
        </p>
      </header>

      <main>
        <ul className="tileUl">
          {dataTile.map((tile) => (
            <li key={tile.id}>
              <div className="tileLi">
                <div className="tileWrapperImg">
                  <img src={tile.imagem} alt={tile.title} />
                </div>
                <p>{tile.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </main>

      <footer>
        <p>Versão 5.12.485</p>
      </footer>
    </Container>
  );
};

export default MenuItems;
