pipeline {
    agent {label 'linux'}
    stages {
        stage('Cloning the repository'){
            steps {
                git branch: 'usguleria', credentialsId: 'github', url: 'git@github.com:copperdevops/nestjs-crud-app.git'
            }
        }
        stage('Downloading Dependencies') {
            steps {
                sh '''
                curl -sL https://deb.nodesource.com/setup_16.x | bash -
                sudo apt-get install -y nodejs
                '''
            }
        }
        stage('Installing Application') {
            steps{
                sh 'npm install'
                sh 'npm start'
            }
        }
    }
}
