// countdownTimer.js
// Simple countdown timer utility
// Author: [NomadeDigi] - Educational purposes only

class CountdownTimer {
  constructor(durationSeconds, onTick, onComplete) {
    this.duration = durationSeconds;
    this.remaining = durationSeconds;
    this.intervalId = null;
    this.onTick = onTick;
    this.onComplete = onComplete;
  }

  start() {
    if (this.intervalId) return; // prevent multiple starts
    this.intervalId = setInterval(() => {
      this.remaining--;

      if (typeof this.onTick === 'function') {
        this.onTick(this.remaining);
      }

      if (this.remaining <= 0) {
        this.stop();
        if (typeof this.onComplete === 'function') {
          this.onComplete();
        }
      }
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  reset() {
    this.stop();
    this.remaining = this.duration;
  }

  getTimeLeft() {
    return this.remaining;
  }
}

// Example usage:
// const timer = new CountdownTimer(
//   5,
//   (timeLeft) => console.log(`Time left: ${timeLeft}s`),
//   () => console.log('Countdown complete!')
// );
// timer.start();

export default CountdownTimer;
