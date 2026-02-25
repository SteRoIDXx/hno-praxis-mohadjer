# Beitragen — HNO Praxis Mohadjer

## Branch-Workflow

Alle Änderungen laufen über Feature-Branches und Pull Requests.
Direkte Commits auf `main` sind nur für Hotfixes erlaubt.

### 1. Neuen Branch erstellen

```bash
git checkout main
git pull
git checkout -b feat/kurze-beschreibung
```

**Branch-Namenskonvention:**
- `feat/...` — Neues Feature oder Inhalt
- `fix/...` — Bugfix
- `style/...` — Design-/CSS-Änderungen
- `docs/...` — Dokumentation
- `ci/...` — Deployment, GitHub Actions

### 2. Änderungen committen

```bash
git add src/pages/neue-seite.astro
git commit -m "feat: Neue Unterseite für Leistungen"
```

**Commit-Style:** Conventional Commits (`feat:`, `fix:`, `style:`, `docs:`, `ci:`)

### 3. Branch pushen

```bash
git push -u origin feat/kurze-beschreibung
```

### 4. Pull Request erstellen

```bash
gh pr create --title "feat: Neue Unterseite für Leistungen" --fill
```

Oder manuell auf GitHub unter **Pull Requests → New Pull Request**.

### 5. Nach dem Merge aufräumen

```bash
git checkout main
git pull
git branch -d feat/kurze-beschreibung
```

## Kurzversion (Copy-Paste)

```bash
# Neuer Branch
git checkout main && git pull
git checkout -b feat/mein-feature

# Arbeiten, committen, pushen
git add .
git commit -m "feat: Beschreibung der Änderung"
git push -u origin feat/mein-feature

# PR erstellen
gh pr create --title "feat: Beschreibung" --fill

# Nach Merge aufräumen
git checkout main && git pull && git branch -d feat/mein-feature
```
