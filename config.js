const CONFIG = {
    // Replace with your actual Google Apps Script deployment URL
    GOOGLE_SCRIPT_URL: 'https://script.google.com/macros/s/AKfycbwxddHbw-oIgjEJ1pw23HXZieVycmqTgsLKJW2QrzXedAdTmuCPL_7DQUEYA_Mdcb81CQ/exec',
    
    // App settings
    APP_VERSION: '1.0.0',
    APP_NAME: 'Stock Verification System',
    
    // Timing settings (milliseconds)
    SYNC_INTERVAL: 30000,    // 30 seconds
    RETRY_ATTEMPTS: 3,
    RETRY_DELAY: 2000,        // 2 seconds
    REQUEST_TIMEOUT: 10000,   // 10 seconds
    
    // Feature flags
    ENABLE_OFFLINE: true,
    ENABLE_AUTO_SYNC: true,
    ENABLE_AUTO_CALCULATE: true,
    
    // Debug mode
    DEBUG: false
};

// Make config immutable
Object.freeze(CONFIG);