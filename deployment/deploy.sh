#!/bin/bash

cmd=$1

if [[ -z "$cmd" ]]; then
    echo "Missing command"
    exit 1
fi

gen_image_info() {
    IMAGE_PATH="${IMAGE_PATH:-mlops.vn}"
    IMAGE_TAG="${IMAGE_TAG:-$(git describe --always)}"
}

create_dotenv() {
    if [[ ! -f ".env" ]]; then
        if [[ -z "$ENV_VARS" ]]; then
            echo "Missing ENV_VARS or .env file"
            exit 1
        fi
        echo "$ENV_VARS" >.env
    fi
}

build() {
    gen_image_info
    docker build --tag $IMAGE_PATH:$IMAGE_TAG -f deployment/Dockerfile .
    docker tag $IMAGE_PATH:$IMAGE_TAG $IMAGE_PATH:latest
}

push() {
    gen_image_info
    docker push $IMAGE_PATH:$IMAGE_TAG
    docker push $IMAGE_PATH:latest
}

shift

case $cmd in
create_dotenv)
    create_dotenv "$@"
    ;;
build)
    build "$@"
    ;;
push)
    push "$@"
    ;;
*)
    echo -n "Unknown command: $cmd"
    exit 1
    ;;
esac
