import org.jetbrains.kotlin.gradle.tasks.KotlinCompile

plugins {
    id("org.springframework.boot") version "2.6.3"
    id("io.spring.dependency-management") version "1.0.11.RELEASE"
    war
    kotlin("jvm") version "1.6.10"
    kotlin("plugin.spring") version "1.6.10"
    kotlin("plugin.jpa") version "1.6.10"
}

group = "com.unused"
version = "0.0.1-SNAPSHOT"
java.sourceCompatibility = JavaVersion.VERSION_1_8

configurations {
    compileOnly {
        extendsFrom(configurations.annotationProcessor.get())
    }
}

repositories {
    mavenCentral()
}

dependencies {
    implementation("org.springframework.boot:spring-boot-starter-thymeleaf")
    implementation("org.springframework.boot:spring-boot-starter-web")
    implementation("com.fasterxml.jackson.module:jackson-module-kotlin")
    implementation("org.jetbrains.kotlin:kotlin-reflect")
    implementation("org.jetbrains.kotlin:kotlin-stdlib-jdk8")
    compileOnly("org.projectlombok:lombok")
    developmentOnly("org.springframework.boot:spring-boot-devtools")
    runtimeOnly("org.postgresql:postgresql")
    annotationProcessor("org.projectlombok:lombok")
    providedRuntime("org.springframework.boot:spring-boot-starter-tomcat")
    testImplementation("org.springframework.boot:spring-boot-starter-test")

    implementation("org.springframework.boot:spring-boot-starter-data-jpa")
    annotationProcessor("org.springframework.boot:spring-boot-configuration-processor")
    implementation("org.springframework.boot:spring-boot-starter-security")
    testImplementation("org.springframework.security:spring-security-test")
//    implementation("io.jsonwebtoken:jjwt:0.9.1")
    implementation("io.jsonwebtoken:jjwt-api:0.11.2")
    runtimeOnly("io.jsonwebtoken:jjwt-impl:0.11.2")
    runtimeOnly("io.jsonwebtoken:jjwt-jackson:0.11.2")
}

val webappDir = "$projectDir/src/main/web"

sourceSets {
    main {
        resources {
            srcDirs(
                listOf(
                    "$webappDir/build",
                    "$projectDir/src/main/resources",
                    "$projectDir/src/main/resources/fonts"
                )
            )
        }
    }
}



tasks {
    processResources {
        dependsOn("buildReact")
        duplicatesStrategy = org.gradle.api.file.DuplicatesStrategy.EXCLUDE
    }
}
tasks.register("buildReact", Exec::class) {
    onlyIf { !project.hasProperty("isDev") }
    dependsOn("installReact")
    workingDir(webappDir)
    inputs.dir(webappDir)
    group = BasePlugin.BUILD_GROUP
    if (System.getProperty("os.name").toLowerCase().contains("windows")) {
        commandLine("npm.cmd", "run-script", "build")
    } else {
        commandLine("npm", "run-script", "build")
    }
}

tasks.register("installReact", Exec::class) {
    onlyIf { !project.hasProperty("isDev") }
    workingDir(webappDir)
    inputs.dir(webappDir)
    group = BasePlugin.BUILD_GROUP
    if (System.getProperty("os.name").toLowerCase().contains("windows")) {
//        commandLine("npm.cmd", "audit", "fix")
        commandLine("npm.cmd", "install")
    } else {
//        commandLine("npm", "audit", "fix")
        commandLine("npm", "install")
    }
}
tasks.withType<KotlinCompile> {
    kotlinOptions {
        freeCompilerArgs = listOf("-Xjsr305=strict")
        jvmTarget = "1.8"
    }
}

tasks.withType<Test> {
    useJUnitPlatform()
}
