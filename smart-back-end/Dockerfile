FROM openjdk:17-alpine
WORKDIR "/home"
COPY . .
RUN apk add maven
WORKDIR "/home"
RUN mvn clean package
EXPOSE 8080
CMD ["java", "-jar",  "target/smart-back-end-0.0.1-SNAPSHOT.jar"]