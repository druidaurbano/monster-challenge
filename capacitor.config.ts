import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'monster-challenge',
  webDir: 'dist/monster-challenge',
  server: {
    androidScheme: 'https'
  }
};

export default config;
