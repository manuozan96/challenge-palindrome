# Backend for challenge-palindromo

El backend está desarrollado con **Node.js**, **Express** y **TypeScript**, y la documentación de los endpoints se encuentra disponible mediante **Swagger UI**.

---

## ⚙️ Setup

Segui estos pasos para instalar y ejecutar el backend:

```bash
cd back           # Ingresar a la carpeta del backend
npm install       # Instalar dependencias
npm run dev       # Iniciar el servidor en modo desarrollo
```

## Documentacin de la API en Swagger:
http://localhost:3000/api-docs

## Endpoints disponibles
POST	/palindrome/check	        # Verifica si un texto es palíndromo
GET	    /palindrome/history	        # Devuelve el historial de consultas
DELETE	/palindrome/history/:index	# Elimina un ítem del historial por índice