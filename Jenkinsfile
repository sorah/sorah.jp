// vim: ft=groovy
@Library("github.com/sorah/jenkinsfile-slack@master") _

pipeline {
  agent any
  stages {
    stage('Prepare') {
      steps {
        sh 'bundle install --path $JENKINS_HOME/tmp/bundle'
      }
    }
    stage('Build') {
      steps {
        sh 'bundle exec middleman build'
      }
    }
    stage('Deploy') {
      // when { branch 'master' }
      steps { sh 'bundle exec middleman s3_sync' }
    }
  }
  post {
    always {
      postNotifySlack currentBuild.result
    }
  }
}
