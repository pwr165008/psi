pipeline {
    environment {
        REGISTRY = 'devfull'
        APP_IMAGE = 'app'
        TAG = '0.1'
    }
    agent {
        label 'vagrant'
    }
    stages {
        stage('Build') {
            steps {
                sh 'mvn clean package'
            }
        }
    }
}
