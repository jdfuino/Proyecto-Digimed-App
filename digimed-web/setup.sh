#!/bin/bash

echo "🚀 Configurando Digimed Web..."
echo ""

# Verificar si Flutter está instalado
if ! command -v flutter &> /dev/null
then
    echo "❌ Flutter no está instalado"
    echo "Por favor instala Flutter desde: https://flutter.dev/docs/get-started/install"
    exit 1
fi

echo "✅ Flutter encontrado"
flutter --version
echo ""

# Instalar dependencias
echo "📦 Instalando dependencias..."
flutter pub get

echo ""
echo "✅ ¡Configuración completada!"
echo ""
echo "Para ejecutar la aplicación:"
echo "  flutter run -d chrome"
echo ""
echo "Para crear una build de producción:"
echo "  flutter build web"
