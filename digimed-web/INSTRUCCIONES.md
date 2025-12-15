# 🚀 Instrucciones para Ejecutar Digimed Web en iMac

## 📋 Paso 1: Verificar Flutter

Abre la Terminal y verifica que Flutter esté instalado:

```bash
flutter --version
```

Si no está instalado, instálalo desde: https://flutter.dev/docs/get-started/install/macos

## 📂 Paso 2: Navegar al Proyecto

```bash
cd /ruta/a/Proyecto-Digimed-App-Web
```

## 📦 Paso 3: Instalar Dependencias

### Opción A: Usando el script automatizado
```bash
./setup.sh
```

### Opción B: Manual
```bash
flutter pub get
```

## ▶️ Paso 4: Ejecutar la Aplicación

### En Chrome:
```bash
flutter run -d chrome
```

### En tu navegador predeterminado:
```bash
flutter run -d web-server
```

Esto abrirá un servidor local en http://localhost:[puerto]

## 🎯 Usar la Aplicación

1. La app se abrirá en tu navegador
2. Verás la pantalla de login
3. **Ingresa cualquier email y contraseña** (es modo demo)
4. Accederás al dashboard principal
5. Puedes explorar las opciones del menú

## 🏗️ Build para Producción

Para crear archivos optimizados para desplegar:

```bash
flutter build web
```

Los archivos estarán en: `build/web/`

## 🌐 Desplegar Localmente

Para probar la build de producción:

```bash
cd build/web
python3 -m http.server 8000
```

Abre: http://localhost:8000

## 🐛 Solución de Problemas

### Problema: "flutter: command not found"
**Solución**: Flutter no está en tu PATH. Añádelo a tu `.zshrc` o `.bash_profile`:
```bash
export PATH="$PATH:/ruta/donde/instalaste/flutter/bin"
```

### Problema: Errores de dependencias
**Solución**: Limpia y reinstala:
```bash
flutter clean
flutter pub get
```

### Problema: La app no carga en el navegador
**Solución**: Verifica que Chrome esté instalado o usa otro navegador:
```bash
flutter devices  # Para ver dispositivos disponibles
flutter run -d edge  # Para usar Edge
flutter run -d safari  # Para usar Safari
```

## ✨ Características de la Versión Web

### ✅ Incluido:
- Login/Logout
- Dashboard básico
- Interfaz responsive
- Almacenamiento local

### ❌ No incluido (solo en app móvil):
- Notificaciones push
- Geolocalización
- Cámara/Galería
- Autenticación biométrica

## 📝 Notas Importantes

- Esta es una versión **DEMO** simplificada
- Los datos se guardan solo en tu navegador (localStorage)
- No se conecta a backend real
- Cualquier email/contraseña funciona para login

## 🔧 Comandos Útiles

```bash
# Ver logs detallados
flutter run -d chrome -v

# Hot reload (mientras está corriendo, presiona 'r')
# Hot restart (mientras está corriendo, presiona 'R')

# Limpiar cache
flutter clean

# Actualizar dependencias
flutter pub upgrade

# Ver dispositivos disponibles
flutter devices
```

## 📞 Soporte

Si tienes problemas, verifica:
1. Flutter está correctamente instalado
2. Estás en el directorio correcto del proyecto
3. Ejecutaste `flutter pub get`
4. Tu navegador está actualizado

---

¡Listo para usar! 🎉
