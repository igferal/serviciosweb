package com.uniovi.web.services.ws.auth.auth;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Component;
import org.springframework.util.Assert;

import com.uniovi.web.services.business.UserService;
import com.uniovi.web.services.model.User;
import com.uniovi.web.services.ws.auth.model.UserContext;

@Component
public class AuthAuthenticationProvider implements AuthenticationProvider {

	@Autowired
	private UserService userService;

	@Override
	public Authentication authenticate(Authentication authentication)
			throws AuthenticationException {
		Assert.notNull(authentication, "No authentication data provided");
		String email = (String) authentication.getPrincipal();
		String password = (String) authentication.getCredentials();

		User user = userService.authenticate(email, password);
		if (null == user) {
			throw new BadCredentialsException("Bad credentials");
		}

		UserContext userContext = UserContext.create(user.getEmail());
		return new UsernamePasswordAuthenticationToken(userContext, null);
	}

	@Override
	public boolean supports(Class<?> authentication) {
		return (UsernamePasswordAuthenticationToken.class
				.isAssignableFrom(authentication));
	}
}
