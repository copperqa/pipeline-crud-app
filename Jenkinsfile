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
//         stage('Pre-commit check') {
//             steps{
//                 sh 'result=${PWD##*/}'
//                 sh 'git config --global --add safe.directory /var/lib/jenkins/workspace/$result'
//                 sh 'talisman --scan -r /home/user/Desktop/'
//             }
//         }
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
        stage('Running Application') {
            steps{
                sh 'nohup npm run start&'
            }
        }
        stage('Code Coverage') {
            steps{
                sh '''
                    cd ./testcase/
                    npm install
                    node signin.js
                    nyc report --reporter=html
                '''
            }
        }
    }
}
