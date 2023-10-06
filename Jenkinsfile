pipeline {
    agent any
    stages {
        stage('Clone Repo') {
            steps {
                echo "Cloning Repo..."
                git branch: 'main', credentialsId: '91ddaf27-3c31-43a0-b7cd-39ec5e4a248f', url: 'https://github.com/ajinkyarode/LoadRunner-Jenkins-Build.git'
            }
        }
        stage('Execute LoadRunner Test') {
            steps {
              bat '''C:\\"Program Files (x86)"\\Micro Focus\\Virtual User Generator\\bin\\mdrv.exe -usr "Correlation_Challenge_1.usr" '''
            }
        }
        stage('Execute Dummy Test') {
            steps {
              echo "Dummy Test"
            }
        }
        stage('Publish Test Reports') {
            steps {
              echo "Test Complete"
            }
        }
        

    }
}