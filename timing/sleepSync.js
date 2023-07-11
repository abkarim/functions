function sleepSync(ms) {
	var start = Date.now(),
		now = start;
	while (now - start < ms) {
		now = Date.now();
	}
}
