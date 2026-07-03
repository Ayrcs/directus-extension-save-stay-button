# Directus Extension Save Stay Button

Interface Directus qui ajoute un bouton de sauvegarde dans un formulaire, sans quitter la page courante.

Le bouton simule le raccourci natif `Ctrl + S` de Directus. Il permet donc de sauvegarder l'item en cours tout en restant sur la meme vue.

## Fonctionnalites

- Ajoute une interface de presentation `save-stay-button`
- Affiche un bouton "Sauvegarder" configurable
- Declenche la sauvegarde native Directus via le raccourci clavier
- Reste sur la page apres la sauvegarde

## Prerequis

- Node.js
- Directus `^12.0.0`
- npm

## Installation locale

Installe les dependances :

```bash
npm install
```

Build l'extension :

```bash
npm run build
```

Lie l'extension a une instance Directus locale :

```bash
npm run link
```

Tu peux aussi lancer le build en mode watch pendant le developpement :

```bash
npm run dev
```

## Utilisation dans Directus

1. Redemarre Directus apres avoir installe ou lie l'extension.
2. Ouvre le modele de donnees.
3. Ajoute un champ de type presentation.
4. Selectionne l'interface "Bouton Sauvegarder".
5. Configure le libelle si besoin.

## Structure

```text
src/index.js       Source de l'extension
package.json       Configuration npm et Directus extension
package-lock.json  Versions verrouillees des dependances
```

Le dossier `dist/` est genere par `npm run build` et n'est pas versionne.

## Scripts

```bash
npm run build  # Compile l'extension dans dist/
npm run dev    # Compile en watch mode sans minification
npm run link   # Lie l'extension a Directus pour le developpement local
```
