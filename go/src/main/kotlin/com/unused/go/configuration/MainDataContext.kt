package com.unused.go.configuration

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import org.hibernate.cfg.Environment
import org.springframework.boot.context.properties.ConfigurationProperties
import org.springframework.context.annotation.Bean
import org.springframework.context.annotation.Configuration
import org.springframework.data.jpa.repository.config.EnableJpaRepositories
import org.springframework.orm.jpa.JpaTransactionManager
import org.springframework.orm.jpa.LocalContainerEntityManagerFactoryBean
import org.springframework.orm.jpa.vendor.HibernateJpaVendorAdapter
import java.util.Properties
import javax.sql.DataSource

@EnableJpaRepositories(
    basePackages = ["com.unused.go.repository"],
    entityManagerFactoryRef = "unusedGoEntityManager",
    transactionManagerRef = "unusedGoTransactionManager"
)
@Configuration
@ConfigurationProperties("spring.datasource.hikari")
class MainDataContext: HikariConfig() {
    @Bean

    fun unusedGoDataSource(): DataSource = HikariDataSource(this)

    @Bean
    fun unusedGoEntityManager(): LocalContainerEntityManagerFactoryBean =
        (LocalContainerEntityManagerFactoryBean()).apply {
            dataSource = unusedGoDataSource()
            setPackagesToScan("com.unused.go.domain")
            setJpaProperties(jpaHibernateProperties())
            jpaVendorAdapter = HibernateJpaVendorAdapter()
        }

    @Bean
    fun unusedGoTransactionManager() = unusedGoEntityManager().`object`?.let { JpaTransactionManager(it) }

    private fun jpaHibernateProperties(): Properties {
//        val props = Properties()
//        props["generate-ddl"] = "true"
//        props["hibernate.ddl-auto"] = "create"
//        props["hibernate.show_sql"] = "true"
//        props["hibernate.format_sql"] = "true"
//        props["hibernate.jdbc.time_zone"] = "Asia/Seoul"
//        props["hibernate.dialect"] = "org.hibernate.dialect.PostgreSQLDialect"
//        return props
        return Properties().apply {
            setProperty(Environment.HBM2DDL_AUTO, "none")
            setProperty("hibernate.show_sql", "false")
            setProperty("hibernate.format_sql", "true")
            setProperty("hibernate.jdbc.time_zone", "Asia/Seoul")
            setProperty("hibernate.dialect", "org.hibernate.dialect.PostgreSQLDialect")
        }
    }
}