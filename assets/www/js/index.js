document.addEventListener('deviceready', function() {
    // Initialize status bar plugin
    if (window.StatusBar) {
        StatusBar.overlaysWebView(true);
        StatusBar.backgroundColorByHexString("#060606");
        StatusBar.styleLightContent();
    }

    // Initialize navigation bar plugin
    if (window.TransparentNavigationBar) {
        window.TransparentNavigationBar.setNavigationBarTransparent();
        window.TransparentNavigationBar.setNavigationBarButtonsColor('light');
    }
    
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.NavbarColor) {
        // Set the navigation bar color to match app theme
        cordova.plugins.NavbarColor.setColor("#060606", function() {
            console.log("Navigation bar color set successfully.");
        }, function(error) {
            console.error("Error setting navigation bar color: ", error);
        });
    }
}, false);
