import React from "react";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HighlightCards,
  Transactions,
  Title,
  TransactionList,
} from "./styles";
import { HighlightCard } from "../../components/HighlightCard";
import {
  TransactionCard,
  TransactionCardProps,
} from "../../components/TransactionCard";

export interface DataListProps extends TransactionCardProps {
  id: string;
}

export default function Dashboard() {
  const data: DataListProps[] = [
    {
      id: "1",
      amount: "R$ 12.000,00",
      title: "Desenvolvedor de site",
      date: "20/03/2024",
      category: { name: "Vendas", icon: "dollar-sign" },
      type: "positive",
    },
    {
      id: "2",
      amount: "R$ 8.000,00",
      title: "Desenvolvedor Mobile",
      date: "22/02/2024",
      category: { name: "Compras", icon: "shopping-bag" },
      type: "positive",
    },
    {
      id: "3",
      amount: "R$ 5.000,00",
      title: "Pizzaria",
      date: "15/03/2024",
      category: { name: "Compras", icon: "coffee" },
      type: "negative",
    },
  ];

  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/44328909?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Caio</UserName>
            </User>
          </UserInfo>
          <Icon name="power" />
        </UserWrapper>
      </Header>

      <HighlightCards>
        <HighlightCard
          type="up"
          title="Entradas"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de Abril"
        />
        <HighlightCard
          type="down"
          title="Saídas"
          amount="R$ 1.259,00"
          lastTransaction="Última saída dia 03 de Abril"
        />
        <HighlightCard
          type="total"
          title="Total"
          amount="R$ 16.000,00"
          lastTransaction="Último total dia 13 de Abril"
        />
      </HighlightCards>

      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          keyExtractor={(item) => item.id}
          data={data}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingBottom: 20,
          }}
        />
      </Transactions>
    </Container>
  );
}
