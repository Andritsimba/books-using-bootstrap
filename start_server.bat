@echo off
echo Lancement du serveur local Python...
cd /d %~dp0
python -m http.server 8000
pause