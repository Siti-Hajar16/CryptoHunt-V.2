cordova.define('cordova/plugin_list', function(require, exports, module) {
  module.exports = [
    {
      "id": "cordova-plugin-splashscreen.SplashScreen",
      "file": "plugins/cordova-plugin-splashscreen/www/splashscreen.js",
      "pluginId": "cordova-plugin-splashscreen",
      "clobbers": [
        "navigator.splashscreen"
      ]
    },
    {
      "id": "cordova-plugin-statusbar.statusbar",
      "file": "plugins/cordova-plugin-statusbar/www/statusbar.js",
      "pluginId": "cordova-plugin-statusbar",
      "clobbers": [
        "window.StatusBar"
      ]
    },
    {
      "id": "cordova-plugin-transparent-navigationbar.transparentnavigationbar",
      "file": "plugins/cordova-plugin-transparent-navigationbar/www/transparentnavigationbar.js",
      "pluginId": "cordova-plugin-transparent-navigationbar",
      "clobbers": [
        "window.TransparentNavigationBar"
      ]
    }
  ];
  module.exports.metadata = {
    "cordova-plugin-splashscreen": "6.0.1",
    "cordova-plugin-statusbar": "2.4.3",
    "cordova-plugin-navbar-color": "1.0.0",
    "cordova-plugin-transparent-navigationbar": "1.0.0"
  };
});