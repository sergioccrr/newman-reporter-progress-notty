PROJECT = "newman-reporter-progress-notty"

install:
	npm uninstall -g ${PROJECT}
	npm pack
	npm install -g ${PROJECT}-*.tgz

test:
	newman \
		run https://www.postman.com/collections/cb208e7e64056f5294e5 \
		--reporters progress-notty
