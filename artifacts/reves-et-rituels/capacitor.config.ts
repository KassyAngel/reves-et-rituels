import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.revesrituels.app',
  appName: 'Rêves & Rituels',
  webDir: 'dist/public',
  android: {
    backgroundColor: '#F5F0FF',
    allowMixedContent: false,
  },
  plugins: {
    LocalNotifications: {
      smallIcon: "ic_stat_icon_config_sample",
      iconColor: "#B8A9E8",
      sound: "beep.wav",
    },
    SplashScreen: {
      launchShowDuration: 2000,
      launchAutoHide: true,
      backgroundColor: "#F5F0FF",
      androidSplashResourceName: "splash",
      showSpinner: false,
    },
  },
};

export default config;