SHELL=/bin/bash

build_image:
	bash deployment/deploy.sh build

push_image:
	bash deployment/deploy.sh push
