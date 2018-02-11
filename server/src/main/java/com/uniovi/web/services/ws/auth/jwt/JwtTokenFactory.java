package com.uniovi.web.services.ws.auth.jwt;

import java.util.Calendar;
import java.util.Date;

import org.apache.commons.lang3.StringUtils;
import org.springframework.stereotype.Component;

import com.uniovi.web.services.ws.auth.config.ConfigurationSettings;
import com.uniovi.web.services.ws.auth.model.AccessJwtToken;
import com.uniovi.web.services.ws.auth.model.UserContext;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@Component
public class JwtTokenFactory {

	/**
	 * Factory method for issuing new JWT Tokens.
	 * 
	 * @param username
	 * @param roles
	 * @return
	 */
	public AccessJwtToken createAccessJwtToken(UserContext userContext) {
		if (StringUtils.isBlank(userContext.getEmail()))
			throw new IllegalArgumentException(
					"Cannot create JWT Token without email");

		Claims claims = Jwts.claims().setSubject(userContext.getEmail());

		String token = Jwts.builder().setClaims(claims)
				.setIssuer(ConfigurationSettings.TOKEN_ISSUER)
				.setIssuedAt(new Date()) //
				.setExpiration(this.getExpirationDate())
				.signWith(SignatureAlgorithm.HS512,
						ConfigurationSettings.TOKEN_SIGNIN_KEY)
				.compact();

		return new AccessJwtToken(token, claims);
	}

	private Date getExpirationDate() {
		Calendar c = Calendar.getInstance();
		c.add(Calendar.DAY_OF_YEAR,
				ConfigurationSettings.TOKEN_EXPIRATION_TIME);
		return c.getTime();
	}
}
