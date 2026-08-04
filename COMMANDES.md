# Aide-mémoire — Commandes du projet CARAU

Pense-bête des commandes utilisées régulièrement pour développer et maintenir le site.
À lancer dans le terminal, à la racine du projet (`cd $env:USERPROFILE\Desktop\site-association`).

---

## 🚀 Démarrer le serveur local

```powershell
npm run dev
```
Lance le site en local sur `http://localhost:4321`. Laisser la fenêtre ouverte pendant le développement.
Arrêter avec `Ctrl + C`.

---

## 🔄 Synchronisation Git — les réflexes de base

### Avant de commencer à coder (récupérer les changements distants)
```powershell
git pull origin main
```
Toujours faire ça en premier si le CMS a pu être utilisé entre-temps (DecapBridge commite directement sur GitHub).

### Après avoir terminé une modification (envoyer sur GitHub)
```powershell
git add .
git commit -m "Description claire de la modification"
git push
```

### Si le push est rejeté (remote a des commits que tu n'as pas)
```powershell
git pull --rebase origin main
git push
```

### Voir l'état actuel (fichiers modifiés, en attente, etc.)
```powershell
git status
```

---

## 🆘 Cas particuliers Git

### Récupérer la version GitHub en écrasant tes changements locaux non sauvegardés
⚠️ Supprime définitivement les modifications locales non commitées.
```powershell
git fetch origin
git reset --hard origin/main
```

### Garder tes changements locaux ET récupérer ceux de GitHub
```powershell
git add .
git commit -m "Mes modifications locales"
git pull --rebase origin main
```

### Vérifier l'historique des derniers commits
```powershell
git log --oneline -10
```

---

## 📦 Node / npm

### Vérifier que Node et npm fonctionnent
```powershell
node -v
npm -v
```

### Réinstaller les dépendances (si erreur bizarre après un pull)
```powershell
npm install
```

---

## 🗂️ Navigation dans le projet

### Aller à la racine du projet
```powershell
cd $env:USERPROFILE\Desktop\site-association
```

### Vérifier où on se trouve
```powershell
pwd
```

### Lister le contenu d'un dossier
```powershell
Get-ChildItem nom-du-dossier
```

---

## 🌐 Adresses utiles

| Quoi | Où |
|---|---|
| Site en local | http://localhost:4321 |
| Site en ligne | https://carau.netlify.app |
| Administration CMS | https://carau.netlify.app/admin |
| Dépôt GitHub | https://github.com/JMON73/site-association |
| Tableau de bord Netlify | https://app.netlify.com |
| Formulaires (Web3Forms) | https://web3forms.com |

---

## 🩹 Dépannage rapide

### `npm` non reconnu / erreur de politique d'exécution PowerShell
Ouvrir PowerShell **en administrateur** :
```powershell
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
```

### Le site local ne se charge pas (`localhost` refuse la connexion)
Essayer avec l'adresse IPv4 directe :
```
http://127.0.0.1:4321
```

### Après une modification de collection (`content.config.ts`), rien ne s'affiche
Redémarrer complètement le serveur :
```powershell
Ctrl + C
npm run dev
```

### Erreur YAML dans `config.yml` (page `/admin` cassée)
Vérifier l'indentation — chaque `- name:` d'une même liste doit être aligné avec **exactement** le même nombre d'espaces.

---

## 📝 Rappels importants

- Après toute publication de contenu via le CMS (`/admin`), penser à faire `git pull origin main` avant de reprendre le code en local.
- Après toute modification des champs d'un formulaire, un nouveau déploiement est nécessaire pour que Netlify/Web3Forms prenne en compte les changements.
- Toujours vérifier `git status` avant un `git pull` si on a des doutes sur des changements non sauvegardés.
