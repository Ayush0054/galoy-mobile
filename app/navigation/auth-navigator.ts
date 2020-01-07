import { createStackNavigator } from "react-navigation-stack"
import { GetStartedScreen, LoginScreen } from "../screens/login-screen"
import { VerifyEmailScreen } from "../screens/verify-email-screen"
import { 
  WelcomeGaloyScreen, 
  WelcomeBitcoinScreen, 
  WelcomeBankScreen, 
  WelcomeEarnScreen,
  WelcomeFirstSatsScreen,
  WelcomeBackScreen,
  FirstRewardScreen,
 } from "../screens/welcome-screens"

import { WelcomePhoneInputScreen, WelcomePhoneValidationScreen } from "../screens/welcome-phone"
import { WelcomeSyncingScreen, WelcomeSyncCompletedScreen, WelcomeGeneratingWalletScreen  } from "../screens/welcome-sync" 
import { DebugScreen } from "../screens/demo-screen"

export const AuthNavigator = createStackNavigator(
  {
    getStarted: { screen: GetStartedScreen },
    login: { screen: LoginScreen },
    demo: { screen: DebugScreen },
    welcomeGaloy: { screen: WelcomeGaloyScreen },
    welcomeSyncing: { screen: WelcomeSyncingScreen },
    welcomeBitcoin: { screen: WelcomeBitcoinScreen },
    welcomeBank: { screen: WelcomeBankScreen },
    welcomeEarn: { screen: WelcomeEarnScreen },
    welcomeFirstSats: { screen: WelcomeFirstSatsScreen },
    welcomePhoneInput: { screen: WelcomePhoneInputScreen },
    welcomePhoneValidation: { screen: WelcomePhoneValidationScreen },
    welcomeSyncCompleted: { screen: WelcomeSyncCompletedScreen },
    welcomeGenerating: { screen: WelcomeGeneratingWalletScreen },
    welcomebackCompleted: { screen: WelcomeBackScreen },
    firstReward: { screen: FirstRewardScreen },
    verifyEmail: { screen: VerifyEmailScreen },
  },
  {
    headerMode: "float",
  },
)
