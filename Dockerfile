FROM openjdk:17-alpine

COPY api-0.0.1-SNAPSHOT.jar /api.jar

CMD ["java","-jar","api.jar"]