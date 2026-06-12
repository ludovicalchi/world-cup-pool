package topscorer

import (
	"testing"
	"time"
)

func TestRateLimiterBlocksWithinWindow(t *testing.T) {
	limiter := &rateLimiter{hits: map[string][]time.Time{}}

	if !limiter.allow("user-1", 2, time.Minute) {
		t.Fatal("first request was blocked")
	}
	if !limiter.allow("user-1", 2, time.Minute) {
		t.Fatal("second request was blocked")
	}
	if limiter.allow("user-1", 2, time.Minute) {
		t.Fatal("third request was not blocked")
	}
}

func TestRateLimiterExpiresOldHits(t *testing.T) {
	limiter := &rateLimiter{hits: map[string][]time.Time{
		"user-1": {time.Now().Add(-2 * time.Minute)},
	}}

	if !limiter.allow("user-1", 1, time.Minute) {
		t.Fatal("expired hit still counted against the rate limit")
	}
}
