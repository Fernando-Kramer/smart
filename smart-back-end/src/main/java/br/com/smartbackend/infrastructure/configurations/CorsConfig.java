package br.com.smartbackend.infrastructure.configurations;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.Ordered;
import org.springframework.core.annotation.Order;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

	 @Bean
	    @Order(Ordered.HIGHEST_PRECEDENCE)
	    public CorsFilter corsFilter() {
	        CorsConfiguration config = new CorsConfiguration();
	        config.setAllowCredentials(true);
	        config.addAllowedOrigin("http://localhost:4200");
	        config.addAllowedHeader("*");
	        config.addAllowedMethod("OPTIONS");
	        config.addAllowedMethod("GET");
	        config.addAllowedMethod("POST");
	        config.addAllowedMethod("PUT");
	        config.addAllowedMethod("DELETE");
	        config.addAllowedMethod("PATCH");

	        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
	        source.registerCorsConfiguration("/**", config);

	        return new CorsFilter(source);
	    }
}
