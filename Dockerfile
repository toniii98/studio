# Użyj oficjalnego obrazu Node.js jako bazy
# Wybierz wersję LTS (Long Term Support) Node.js, np. 20.x
# Możesz sprawdzić aktualną wersję LTS na stronie Node.js
FROM node:20-alpine AS base

# Ustaw katalog roboczy w kontenerze
WORKDIR /app

# Zainstaluj pnpm globalnie (jeśli nie ma go w obrazie bazowym lub dla pewności)
RUN npm install -g pnpm

# Kopiuj pliki manifestu zależności i lockfile
COPY package.json pnpm-lock.yaml ./

# Zainstaluj zależności produkcyjne (dla mniejszego obrazu finalnego)
# Jeśli masz workspace'y w monorepo, pnpm automatycznie sobie z tym poradzi
RUN pnpm install --prod

# Etap budowania aplikacji
FROM base AS builder
WORKDIR /app
COPY --from=base /app/node_modules ./node_modules
COPY . .
RUN pnpm build

# Etap produkcyjny - minimalny obraz
FROM base AS runner
WORKDIR /app

# Ustaw zmienną środowiskową NODE_ENV na production
ENV NODE_ENV production

# Skopiuj zbudowaną aplikację z etapu 'builder'
COPY --from=builder /app/public ./public
COPY --from=builder /app/.next/standalone ./
COPY --from=builder /app/.next/static ./.next/static

# Next.js nasłuchuje domyślnie na porcie 3000
EXPOSE 3000

# Ustaw polecenie uruchamiające aplikację
# Używamy `node server.js` z outputu standalone Next.js
CMD ["node", "server.js"]