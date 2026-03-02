pipeline {
    agent any

    environment {
        DOCKER_IMAGE = "sujith1999kumar/mini-devops-project"
        DOCKER_TAG = "latest"
        DOCKER_CREDENTIALS_ID = "dockerhub-credentials"
        CONTAINER_NAME = "mini-devops-container"
    }

    stages {

        stage('Checkout Code') {
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
                    passwordVariable: 'PASS'
                )]) {

                    bat "docker login -u %USER% -p %PASS%"
                }
            }
        }

        stage('Push Image to Docker Hub') {
            steps {
                bat "docker push %DOCKER_IMAGE%:%DOCKER_TAG%"
            }
        }

        stage('Deploy Container') {
            steps {
                bat """
                docker stop %CONTAINER_NAME% || exit 0
                docker rm %CONTAINER_NAME% || exit 0
                docker pull %DOCKER_IMAGE%:%DOCKER_TAG%
                docker run -d -p 3000:3000 --name %CONTAINER_NAME% %DOCKER_IMAGE%:%DOCKER_TAG%
                """
            }
        }
    }

    post {
        success {
            echo '✅ Application Deployed Successfully!'
        }
        failure {
            echo '❌ Pipeline Failed!'
        }
    }
}