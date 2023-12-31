import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'monster-challenge',
  webDir: 'dist/monster-challenge',
  server: {
    url: 'http://192.168.3.218:4200',
    cleartext: true
  },
  plugins: {
    LocalNotifications: {
      iconColor: "#001A38",
    }
  }
};

export default config;
