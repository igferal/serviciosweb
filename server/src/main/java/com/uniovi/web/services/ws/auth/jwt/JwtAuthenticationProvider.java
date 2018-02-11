package com.uniovi.web.services.ws.auth.jwt;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;

import com.uniovi.web.services.ws.auth.config.ConfigurationSettings;
import com.uniovi.web.services.ws.auth.model.RawAccessJwtToken;
import com.uniovi.web.services.ws.auth.model.UserContext;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jws;

@Component
public class JwtAuthenticationProvider implements AuthenticationProvider {

	private static Logger logger = LoggerFactory
			.getLogger(JwtAuthenticationProvider.class);

	@Override
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
		RawAccessJwtToken rawAccessToken = (RawAccessJwtToken) authentication
				.getCredentials();

		Jws<Claims> jwsClaims = rawAccessToken
				.parseClaims(ConfigurationSettings.TOKEN_SIGNIN_KEY);
		String subject = jwsClaims.getBody().getSubject();

		UserContext context = UserContext.create(subject);
		logger.info("Request from user " + context.getEmail());
		return new JwtAuthenticationToken(context);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return (JwtAuthenticationToken.class.isAssignableFrom(authentication));
	}
}
