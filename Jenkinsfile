# vim: ft=groovy
@Library("github.com/sorah/jenkinsfile-slack@master")

pipeline {
  agent { node }
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
  }
}
