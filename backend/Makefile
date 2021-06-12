RUNFILE:=bin/harperdb

test:
	go test -v

build:
	go build -o $(RUNFILE) .

run: build
	./$(RUNFILE)

clean:
	rm $(RUNFILE)