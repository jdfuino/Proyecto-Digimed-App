# 🏥 Digimed Web - Versión HTML/CSS/JS

Versión web simplificada de Digimed construida con HTML, CSS y JavaScript vanilla.

## 📁 Estructura del Proyecto

```
digimed-web/
├── index.html          # Página de login
├── dashboard.html      # Dashboard principal
├── css/
│   └── styles.css      # Estilos globales
├── js/
│   └── app.js          # Lógica de la aplicación
└── README.md           # Este archivo
```

## 🚀 Instalación y Despliegue

### Opción 1: Abrir Localmente

1. Descomprime el archivo `digimed-web.zip`
2. Abre `index.html` en tu navegador web

### Opción 2: Servidor Local con Python

```bash
# Python 3
python3 -m http.server 8000

# Python 2
python -m SimpleHTTPServer 8000
```

Luego abre: http://localhost:8000

### Opción 3: Servidor Local con Node.js

```bash
# Instala http-server globalmente
npm install -g http-server

# Ejecuta en el directorio del proyecto
http-server
```

### Opción 4: Desplegar en Hosting

Puedes subir todos los archivos a cualquiera de estos servicios:

#### **Netlify** (Recomendado - Gratis)
1. Ve a https://netlify.com
2. Arrastra la carpeta completa al área de "Drop"
3. ¡Listo! Tu sitio estará en línea en segundos

#### **Vercel** (Gratis)
1. Ve a https://vercel.com
2. Importa el proyecto o arrastra la carpeta
3. Deploy automático

#### **GitHub Pages** (Gratis)
1. Crea un repositorio en GitHub
2. Sube los archivos
3. Ve a Settings > Pages
4. Selecciona la rama main
5. Tu sitio estará en: `https://tuusuario.github.io/nombre-repo`

#### **Firebase Hosting** (Gratis)
```bash
npm install -g firebase-tools
firebase login
firebase init hosting
firebase deploy
```

#### **Servidor Web Tradicional**
Sube los archivos vía FTP/SFTP a tu servidor web (Apache, Nginx, etc.)

## 🔐 Uso

### Login
- **Email**: Cualquier email válido
- **Contraseña**: Cualquier contraseña
- El sistema acepta cualquier credencial en modo demo

### Funcionalidades
- ✅ Login/Logout
- ✅ Dashboard con información de usuario
- ✅ Tarjetas de acciones rápidas
- ✅ Diseño responsive
- ✅ Almacenamiento local de sesión

## 🎨 Características

- **Sin dependencias**: HTML, CSS y JavaScript puro
- **Responsive**: Funciona en móviles, tablets y desktop
- **Moderno**: Diseño limpio con animaciones suaves
- **Rápido**: No requiere compilación ni build
- **Compatible**: Funciona en todos los navegadores modernos

## 🌐 Compatibilidad de Navegadores

- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

## 📱 Responsive

La aplicación se adapta automáticamente a:
- 📱 Móviles (< 768px)
- 💻 Tablets (768px - 1024px)
- 🖥️ Desktop (> 1024px)

## 🔒 Seguridad

⚠️ **IMPORTANTE**: Esta es una versión DEMO
- No uses para datos reales
- No incluye autenticación real
- No conecta a backend
- Los datos se guardan solo en el navegador (localStorage)

## 🛠️ Personalización

### Cambiar Colores

Edita las variables CSS en `css/styles.css`:

```css
:root {
    --primary-color: #10006D;
    --primary-dark: #0a0050;
    --primary-light: #1a0f91;
    /* ... más colores */
}
```

### Conectar a API Real

Edita `js/app.js` y modifica la función `auth.login()` para llamar a tu API:

```javascript
login: async (email, password) => {
    const response = await fetch('https://tu-api.com/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password })
    });
    const data = await response.json();
    return data;
}
```

## 📄 Licencia

Proyecto privado - Digimed

## 🆘 Soporte

Para soporte o preguntas, contacta al equipo de Digimed.

---

**Versión**: 1.0.0
**Fecha**: Diciembre 2024
**Desarrollado para**: Digimed
