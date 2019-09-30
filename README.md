# Getting Started

```
# Install dependencies
npm install

# Start development live-reload server
npm run dev

# Start production server:
npm start
```

# Docker Support

```
# Build your docker
docker build -t greeter .

# run your docker
docker run -p 5000:5000 greeter
```


# Kubernetes Deployment and Service

```
apiVersion: apps/v1beta1
kind: Deployment
metadata:
  name: greeter
spec:
  replicas: 1
  template:
    metadata:
      labels:
        app: greeter
    spec:
      containers:
      - name: greeter
        image: narayanprusty/greeter-service
        imagePullPolicy: Always
        ports:
        - containerPort: 5000
---
kind: Service
apiVersion: v1
metadata:
  name: greeter
spec:
  ports:
    - name: api
      port: 5000
  selector:
      app: greeter
```
