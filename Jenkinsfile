pipeline {
    agent any

    stages {
        stage('Cleanup') {
            steps {
                // Stop and remove old containers if they exist
                sh 'docker rm -f backend-demo || true'
                sh 'docker rm -f frontend-demo || true'

                // Remove old images if they exist
                sh 'docker rmi -f backend-demo || true'
                sh 'docker rmi -f frontend-demo || true'
            }
        }

        stage('Backend Build') {
            steps {
                sh 'docker build -t backend-demo ./backend'
            }
        }

        stage('Frontend Build') {
            steps {
                sh 'docker build -t frontend-demo ./frontend'
            }
        }

        stage('Deploy Backend') {
            steps {
                sh 'docker run -d -p 5000:5000 --name backend-demo backend-demo'
            }
        }

        stage('Deploy Frontend') {
            steps {
                sh 'docker run -d -p 3000:3000 --name frontend-demo frontend-demo'
            }
        }
    }

    post {
        always {
            echo 'Pipeline finished. Check containers with: docker ps'
        }
    }
}