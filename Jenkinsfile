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
        stage('Pre-commit check') {
            steps{
                sh '''
                result=${PWD##*/}
                git config --global --add safe.directory /var/lib/jenkins/workspace/'$result'
                export TALISMAN_HOME=/home/user/.talisman/bin && alias talisman=$TALISMAN_HOME/talisman_linux_amd64
                export TALISMAN_INTERACTIVE=true
                pwd
                talisman --scan
                '''
            }
        }
        stage('Dependencies Check') {
            steps{
                dependencyCheck additionalArguments: '--scan="./package.json" --format HTML', odcInstallation: 'Dependencies-Check'
            }
        }
        // stage('Linting Stage') {
        //     steps{
        //         sh 'npm run lint'
        //     }
        // }
        stage('SonarQube Analysis') {
            steps{
                script {
                    scannerHome = tool 'sonarqube';
                }
                withSonarQubeEnv(installationName: 'sonarqube-jenkins') {
                    sh "${scannerHome}/bin/sonar-scanner"
                }
            }
        }
        stage('Running Application') {
            steps{
                sh '''
                screen -dm npm start
                sleep 5
                '''
            }
        }
        stage('Code Coverage') {
            steps{
                sh '''
                    cd ./testcase/
                    npm install
                    node signin.js
                    nyc report --reporter=html
                    sleep 5
                '''
            }
        }
    }
}
