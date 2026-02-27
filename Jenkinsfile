pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "sujith1999kumar/mini-devops-project"
        DOCKER_TAG = "latest"
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                url: 'https://github.com/sujithkumarr99/mini-devops-project.git'
            }
        }

        stage('Build Docker Image') {
            steps {
                bat "docker build -t %DOCKER_IMAGE%:%DOCKER_TAG% ."
            }
        }

        stage('Docker Login') {
            steps {
                withCredentials([usernamePassword(
                    credentialsId: DOCKER_CREDENTIALS_ID,
                    usernameVariable: 'USER',
                    passwordVariable: 'PASS')]) {

                    bat "docker login -u %USER% -p %PASS%"
                }
            }
        }

        stage('Push Image') {
            steps {
                bat "docker push %DOCKER_IMAGE%:%DOCKER_TAG%"
            }
        }
    }
}