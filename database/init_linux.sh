apt install docker -y

docker build -t cotidian-db .
docker run -d -p 5432:5432 --name cotidian-db cotidian-db

ip a