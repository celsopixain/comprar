# 📱 Comprar - Lista de Compras

Um aplicativo mobile desenvolvido com React Native e Expo para gerenciar sua lista de compras de forma simples e eficiente.

## 🚀 Tecnologias Utilizadas

- **React Native** - Framework para desenvolvimento mobile
- **Expo** - Plataforma para desenvolvimento React Native
- **TypeScript** - Linguagem de programação tipada
- **Lucide React Native** - Biblioteca de ícones
- **React Native SVG** - Suporte a gráficos vetoriais
- **@expo/vector-icons** - Biblioteca de ícones do Expo
- **@react-native-async-storage/async-storage** - Armazenamento local assíncrono
- **expo-status-bar** - Componente para controlar a barra de status
- **react-native-web** - Suporte para execução na web
- **@expo/metro-runtime** - Runtime do Metro bundler para Expo

## 📋 Funcionalidades

- ✅ Adicionar itens à lista de compras
- 🔄 Marcar itens como pendentes ou concluídos
- 🗑️ Remover itens da lista
- 🔍 Filtrar itens por status (pendente/concluído)
- 🧹 Limpar filtros
- 📱 Interface responsiva e intuitiva

## 🛠️ Como Executar o Projeto

### Pré-requisitos

- Node.js (versão 18 ou superior)
- npm ou yarn
- Expo CLI (`npm install -g @expo/cli`)
- Dispositivo móvel com Expo Go ou emulador

### Instalação

1. Clone o repositório:
```bash
git clone <url-do-repositorio>
cd comprar
```

2. Instale as dependências:
```bash
npm install
```

3. Execute o projeto:
```bash
# Para iniciar o servidor de desenvolvimento
npm start

# Para Android
npm run android

# Para iOS
npm run ios

# Para Web
npm run web
```

## 📱 Como Usar

1. **Adicionar Item**: Digite o nome do item no campo de texto e pressione "Adicionar"
2. **Marcar como Concluído**: Toque no ícone de status ao lado do item
3. **Remover Item**: Toque no ícone da lixeira
4. **Filtrar**: Use os filtros "Pendente" e "Concluído" para organizar sua lista
5. **Limpar Filtros**: Pressione "Limpar" para mostrar todos os itens

## 🏗️ Estrutura do Projeto

```
src/
├── app/
│   └── Home/           # Tela principal do aplicativo
├── components/         # Componentes reutilizáveis
│   ├── Button/         # Botão customizado
│   ├── Filter/         # Componente de filtro
│   ├── Input/          # Campo de entrada
│   └── StatusIcon/     # Ícone de status
├── Item/               # Componente de item da lista
├── types/              # Definições de tipos TypeScript
└── assets/             # Recursos estáticos (imagens, ícones)
```

## 🎨 Componentes Principais

- **Home**: Tela principal com lista de compras e formulário de adição
- **Item**: Componente individual da lista com ações de status e remoção
- **Filter**: Filtros para organizar itens por status
- **Button**: Botão customizado para ações
- **Input**: Campo de entrada de texto
- **StatusIcon**: Ícone visual para status do item

## 📊 Status dos Itens

- **Pendente**: Item ainda não comprado
- **Concluído**: Item já comprado

## 🔧 Scripts Disponíveis

- `npm start` - Inicia o servidor de desenvolvimento
- `npm run android` - Executa no Android
- `npm run ios` - Executa no iOS
- `npm run web` - Executa na web

## 📄 Licença

Este projeto é privado e desenvolvido para fins educacionais.

## 👨‍💻 Desenvolvido por

Projeto desenvolvido como parte do curso da Rocketseat.
Celso Ricardo de Albuquerque

**Versão**: 1.0.0  
**Plataforma**: React Native + Expo  
**Orientação**: Portrait  
**Arquitetura**: New Architecture habilitada
