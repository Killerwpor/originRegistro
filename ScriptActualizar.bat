git pull
start cmd /c "ng build"
pause
pscp -i C:\Users\killerwpor\Desktop\Dream-House\formulario\Credenciales\llaveFormulario.ppk -r C:\Users\killerwpor\Desktop\Dream-House\formulario\Frontend\dist\formulario\* ubuntu@ec2-3-137-142-81.us-east-2.compute.amazonaws.com:/opt/front-end
pause