**Deployment_with_K8s-React NodeJs Application**

To deploy a frontend and backend application on minikube locally and enable communication between them, you can follow these steps:

**Prerequisites:**

Before you begin, make sure you have the following prerequisites installed on your system:

Docker: This project utilizes Docker for containerization. You can install it from the official website.

Docker-Compose: Make sure you have Docker Compose installed.

Git: To clone the project, you need Git installed on your system.

Nginx: This project assumes that Nginx is installed and configured on your system.

Minikube: Make sure you have Minikube installed on your system.

**Installation and Usage:**

Follow these steps to get started with the Deployment of React NodeJs Application using K8s

**Clone the Repository:**

``git clone https://github.com/Saurabh-DevOpsVoyager77/Deployment_with_K8s-React_NodeJs_Application.git``

**Change Directory:**

``cd Deployment_with_K8s-React_NodeJs_Application``

**Run the following commands:**

kubectl apply -f frontend-deployment.yaml
kubectl apply -f frontend-service.yaml
kubectl apply -f backend-deployment.yaml
kubectl apply -f backend-service.yaml
kubectl apply -f backend-pvc.yaml

**NOTE:**
In this project I have already uploaded my Docker Image over the Docker Hub. To see this How you can do that please read this article:

**Access the applications:**

1. To access your frontend application.

   ``minikube service frontend-service``

2. To access your backend application.

   ``minikube service backend-service``

This command will open a browser window with the URL to access your frontend application. The frontend application can then communicate with the backend application using the hostname or IP address of the backend service.

That's it! You've deployed your frontend and backend applications on minikube locally and enabled communication between them.
