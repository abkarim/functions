function areLinksFromSameDomain(link1, link2) {
	const url1 = new URL(link1);
	const url2 = new URL(link2);

	return url1.hostname === url2.hostname;
}
