FROM postgres:16

ENV POSTGRES_USER=cotidian
ENV POSTGRES_PASSWORD=database
ENV POSTGRES_DB=cotidian

COPY ./database.sql /docker-entrypoint-initdb.d/

EXPOSE 5432