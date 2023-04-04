pipeline {
    agent {label 'linux'}
    stages {
        stage('Cloning the repository'){
            steps {
                git branch: 'usguleria', credentialsId: 'github', url: 'git@github.com:copperdevops/nestjs-crud-app.git'
            }
        }
        stage('Installing Application Dependencies') {
            steps{
                sh 'npm install'
            }
        }
        stage('Linting Stage') {
            steps{
                sh 'npm run lint'
            }
        }
    }
}