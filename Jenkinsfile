pipeline {
    agent any
    stages {
        stage('Descargar y Probar') {
            steps {
                echo 'Instalando dependencias...'
                sh 'npm install'
                echo 'Ejecutando pruebas...'
                sh 'npm test'
            }
        }
    }
}
