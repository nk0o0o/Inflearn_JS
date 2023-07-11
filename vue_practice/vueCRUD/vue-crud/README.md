# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/)

# vue-crud

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run dev
```

### db.json 연결
```
npm install --save axios
npm install -g json-server
npm install json-server --save-dev
json-server --watch db.json --port 5000

