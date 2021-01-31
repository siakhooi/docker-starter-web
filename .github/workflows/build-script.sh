cd $MY_DIRECTORY

docker build -f $MY_DOCKERFILE -t $MY_REGISTRY/$MY_TAG  .

docker images

docker login -u $MY_REGISTRY_USER -p "$MY_REGISTRY_PASSWORD" $MY_REGISTRY

docker push $MY_REGISTRY/$MY_TAG
