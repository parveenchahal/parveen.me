docker-build:
	if [ -d './build' ]; then rm build -r; fi
	PUBLIC_URL=${PUBLIC_URL}
	npm run build
	sudo docker build . -t ${IMG}

docker-push:
	sudo docker push ${IMG}