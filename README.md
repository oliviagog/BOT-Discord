# BOT-Discord-GOGUILLON

Création d'un BOT sur Discord.

# Table des matières

- [Profil](#profil)
- [Caractéristiques de l'application](#features)
- [Outils requis](#tools)
- [Avant de commencer](#gettingStarted)
- [Installation ](#installation)
- [Configuration ](#configuration)
- [Pour lancer l'application](#starting)
- [Rapport](#rapport)

# <a name="profil"> Profil

- "GOGUILLON Olivia"
  Réalisation de ce projet lors de ma Licence Professionnelle.

## <a name="features"> Présentation du projet

- 👑 **Informatif**: `userinfo`,`help`,`ping`,`poll`,`poll2`,`serverinfo`, `botinfo`
- 👻 **Jeux**: `chifoumi`,`pile`,`face`
- Welcom message when people join the server and when id server was declared

## <a name="tools"> Outils requis

- [Node](https://nodejs.org/en/)
- [YARN](https://www.yarnpkg.com/)

## <a name="gettingStarted"> Avant de commencer

Tout d'abord, assurez-vous que tous les outils requis soient installés sur votre machine locale, puis suivez les étapes.

### <a name="installation"> Installation

```bash
# Clone the repository
git clone https://github.com/ccaruyer/Erub

# Enter into the directory
cd Erub/

# Install the dependencies
yarn install
```

### <a name="configuration"> Configuration

Après avoir cloné le projet et installé toutes les dépendances, vous devez ajouter dans le fichier config.json:

- votre jeton d'API Discord
- le préfix par défaut est "?" mais vous pouvez le changer si besoin
- votre id
- l'id de votre channel d'accueil, mettre vide si vous ne voulez pas l'utiliser

### <a name="starting"> Pour lancer l'application

```bash
node main
```

## <a name="rapport"> Rapport

Vous pouvez retrouver le rapport de ce projet [ici](https://drive.google.com/file/d/1GdIxuQQ62irVgNe16ZMV642FnGdDtApT/view?usp=sharing)
