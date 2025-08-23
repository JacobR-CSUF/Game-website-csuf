class RandomNumberGenerator {
    constructor() {
        this.history = [];
        this.initializeElements();
        this.attachEventListeners();
        this.updateRangeInfo();
    }

    initializeElements() {
        this.minInput = document.getElementById('minValue');
        this.maxInput = document.getElementById('maxValue');
        this.generateBtn = document.getElementById('generateBtn');
        this.resultElement = document.getElementById('randomNumber');
        this.rangeInfo = document.getElementById('rangeInfo');
        this.historyContainer = document.getElementById('history');
        this.clearHistoryBtn = document.getElementById('clearHistory');
    }

    attachEventListeners() {
        this.generateBtn.addEventListener('click', () => this.generateRandomNumber());
        this.clearHistoryBtn.addEventListener('click', () => this.clearHistory());

        // Update range info when inputs change
        this.minInput.addEventListener('input', () => this.updateRangeInfo());
        this.maxInput.addEventListener('input', () => this.updateRangeInfo());

        // Allow Enter key to generate number
        document.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                this.generateRandomNumber();
            }
        });
    }

    validateInputs() {
        const min = parseFloat(this.minInput.value);
        const max = parseFloat(this.maxInput.value);

        // Remove previous error styling
        this.minInput.classList.remove('error');
        this.maxInput.classList.remove('error');

        // Check if inputs are valid numbers
        if (isNaN(min) || isNaN(max)) {
            if (isNaN(min)) this.minInput.classList.add('error');
            if (isNaN(max)) this.maxInput.classList.add('error');
            return { isValid: false, message: 'Please enter valid numbers' };
        }

        // Check if min is less than max
        if (min >= max) {
            this.minInput.classList.add('error');
            this.maxInput.classList.add('error');
            return { isValid: false, message: 'Minimum must be less than maximum' };
        }

        return { isValid: true, min, max };
    }

    generateRandomNumber() {
        const validation = this.validateInputs();

        if (!validation.isValid) {
            this.showError(validation.message);
            return;
        }

        const { min, max } = validation;

        // Generate random number within range (inclusive)
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;

        // Display the result with animation
        this.displayResult(randomNum, min, max);

        // Add to history
        this.addToHistory(randomNum, min, max);

        // Update range info
        this.updateRangeInfo();
    }

    displayResult(number, min, max) {
        this.resultElement.textContent = number;
        this.resultElement.classList.add('animate');

        // Remove animation class after animation completes
        setTimeout(() => {
            this.resultElement.classList.remove('animate');
        }, 300);
    }

    showError(message) {
        const originalText = this.resultElement.textContent;
        this.resultElement.textContent = message;
        this.resultElement.style.color = '#dc3545';
        this.resultElement.style.fontSize = '1.2rem';

        setTimeout(() => {
            this.resultElement.textContent = originalText;
            this.resultElement.style.color = '#667eea';
            this.resultElement.style.fontSize = '3rem';
        }, 2000);
    }

    updateRangeInfo() {
        const min = this.minInput.value || '?';
        const max = this.maxInput.value || '?';
        this.rangeInfo.textContent = `Range: ${min} to ${max}`;
    }

    addToHistory(number, min, max) {
        const timestamp = new Date().toLocaleTimeString();
        const historyItem = {
            number,
            min,
            max,
            timestamp
        };

        this.history.unshift(historyItem);

        // Keep only the last 10 numbers
        if (this.history.length > 10) {
            this.history = this.history.slice(0, 10);
        }

        this.updateHistoryDisplay();
    }

    updateHistoryDisplay() {
        if (this.history.length === 0) {
            this.historyContainer.innerHTML = '<p class="no-history">No numbers generated yet</p>';
            this.clearHistoryBtn.style.display = 'none';
            return;
        }

        const historyHTML = this.history.map(item => `
            <div class="history-item">
                <span class="history-number">${item.number}</span>
                <div>
                    <div class="history-range">Range: ${item.min} - ${item.max}</div>
                    <div class="history-time">${item.timestamp}</div>
                </div>
            </div>
        `).join('');

        this.historyContainer.innerHTML = historyHTML;
        this.clearHistoryBtn.style.display = 'block';
    }

    clearHistory() {
        this.history = [];
        this.updateHistoryDisplay();
    }
}

// Initialize the game when the page loads
document.addEventListener('DOMContentLoaded', () => {
    new RandomNumberGenerator();
});
