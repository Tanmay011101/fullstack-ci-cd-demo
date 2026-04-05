Pipeline {
    agent any
    stages {
        stage('Backend Build') {
            steps {
                sh 'docker build -t backend-demo ./backend'
            }
        }
        stage('Frontend Build') {
            steps {
                sh 'docker build -t  frontend-demo ./frontend'
            }
        }
        stage('Deploy Backend') {
            steps {
                sh 'docker rm -f backend-demo || true'
                sh 'docker run -d -p  5000:5000 --name backend-demo backend-demo'
            }
        }
        stage('Deploy Frontend') {
            steps {
                sh 'docker rm -f frontend-demo || true'
                sh 'docker run -d -p 3000:3000 --name frontend-demo frontend-demo'
            }
        }
    }
}