openshift.withCluster() {
  env.APP_NAME = "${APP_NAME}"
  env.BUILD = openshift.project()
  env.DEV = "${DEV_PROJECT}"
  env.STAGE = "${STAGE_PROJECT}"
  echo "Starting Pipeline for ${APP_NAME}..."
}

pipeline {
  agent {
    label 'nodejs'
  }


  stages {
    stage('Git Checkout') {
      steps {
        git url: "${APPLICATION_SOURCE_REPO}", branch: "${APPLICATION_SOURCE_REF}"
      }
    }

    stage('Test') {
      steps {
        sh "npm test"
      }
    }

    stage('Build Image') {
       
       steps {
         script {
            openshift.withCluster() {
              openshift.withProject(env.DEV_PROJECT) {
                openshift.selector("bc", "${APP_NAME}").startBuild("--from-file=.", "--wait=true")
              }
            }
         }
       }
   }

  }
}

println "Application ${env.APP_NAME} is now in Production!"


