function truncatedString(string, length) {
	return string.length < length
		? string
		: string.substring(0, length) + '...';
}
