# Digimed Web - Versión Simplificada

Esta es una versión web simplificada del proyecto Digimed, optimizada para ejecutarse en navegadores web con funcionalidad básica.

## Características

- ✅ Login/Logout básico (modo demo)
- ✅ Dashboard simplificado
- ✅ Interfaz responsive
- ✅ Sin dependencias de plataforma móvil
- ✅ Almacenamiento local (SharedPreferences)

## Requisitos

- Flutter SDK 3.1.0 o superior
- Navegador web moderno (Chrome, Firefox, Safari, Edge)

## Instalación

1. Instalar dependencias:
```bash
flutter pub get
```

## Ejecutar en Desarrollo

Para ejecutar la aplicación en tu navegador:

```bash
flutter run -d chrome
```

O para abrir automáticamente en tu navegador predeterminado:

```bash
flutter run -d web-server
```

## Build para Producción

Para crear una build optimizada para producción:

```bash
flutter build web
```

Los archivos compilados estarán en `build/web/`

## Despliegue

Puedes desplegar la carpeta `build/web/` en cualquier servidor web estático:

- Firebase Hosting
- Netlify
- Vercel
- GitHub Pages
- AWS S3
- Cualquier servidor HTTP

### Ejemplo con servidor local:

```bash
# Después de hacer flutter build web
cd build/web
python3 -m http.server 8000
# Abre http://localhost:8000 en tu navegador
```

## Modo Demo

La aplicación está en modo demo:
- Puedes iniciar sesión con cualquier email y contraseña
- Los datos se guardan localmente en el navegador
- No se conecta a API backend real

## Diferencias con la App Móvil

Esta versión NO incluye:
- ❌ Firebase Cloud Messaging
- ❌ Autenticación biométrica
- ❌ Geolocalización
- ❌ Selección de imágenes desde cámara
- ❌ Notificaciones push
- ❌ Almacenamiento seguro (Secure Storage)

## Estructura del Proyecto

```
lib/
├── app/
│   ├── data/
│   │   └── services/
│   │       └── auth_service.dart
│   ├── domain/
│   │   └── models/
│   │       └── user.dart
│   └── presentation/
│       ├── controllers/
│       │   └── auth_controller.dart
│       └── pages/
│           ├── login_page.dart
│           └── home_page.dart
└── main.dart
```

## Licencia

Proyecto privado - Digimed
