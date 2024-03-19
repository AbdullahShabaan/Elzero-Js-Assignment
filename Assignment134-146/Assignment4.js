let re = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i;
// can start with https or http
// [-\w] to get any char or - _
// matches ://
// ?:[-\w]+\. Matches an optional subdomain one or more word char
// [-\w]+ main domain name have one or more char
// \.\w+ to get the . with the top level domain like .com or .org
// ?:\.\w+ to get second level domain one or more char
// \/? to get slash /
// .* to get any char from zero to many (if it exist or not) expect newline
// i flag to make case-insensitive
