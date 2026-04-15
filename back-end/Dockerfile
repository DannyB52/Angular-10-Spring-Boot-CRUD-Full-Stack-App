
#FROM openjdk:17-oracle


FROM eclipse-temurin:17-jdk
#FROM eclipse-temurin:25

ADD target/spring-boot-mysql-docker-0.0.1-SNAPSHOT.jar app.jar
ENTRYPOINT ["java","-jar","app.jar"]
