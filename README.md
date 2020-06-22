# Commute Analyzer Authentication Service

The other microservices in the parent API issue a GET request to this API
with a bearer token in the header and this service uses the `express-jwt`
and `jwks-rsa` middleware packages to process and validate the token,
returning the corresponding user data if valid, or a 401 if invalid.
