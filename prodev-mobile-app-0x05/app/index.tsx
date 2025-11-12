import { Text, View, Image, ImageBackground, TouchableOpacity } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { styles } from "@/styles/_mainstyle"; 
import { BACKGROUNDIMAGE, HEROLOGO } from "@/constants"; 

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{ flex: 1 }}>
        <ImageBackground
          source={BACKGROUNDIMAGE} 
          style={styles.backgroundImageContainer}
          resizeMode="cover"
        >
          <View style={styles.container}>
            <View style={styles.logoContainer}>
              <Image source={HEROLOGO} /> {/* Use constant */}
            </View>

            <View style={styles.titleContainer}>
              <Text style={styles.titleText}>Find your favorite place here</Text>
            </View>

            <View style={styles.titleSubTextContainer}>
              <Text style={styles.titleSubText}>The best prices for over 2</Text>
              <Text style={styles.titleSubText}>million properties worldwide</Text>
            </View>

            <View style={{ position: "absolute", bottom: 50, width: "100%" }}>
              <View style={styles.buttonGroup}>
                {/* Link to the 'join' screen */}
                <Link href="/join" asChild>
                  <TouchableOpacity style={styles.buttonPrimary}>
                    <Text style={styles.buttonPrimaryText}>Join here</Text>
                  </TouchableOpacity>
                </Link>

                {/* Link to the 'signin' screen */}
                <Link href="/signin" asChild>
                  <TouchableOpacity style={styles.buttonSecondary}>
                    <Text style={styles.buttonSecondaryText}>Sign In</Text>
                  </TouchableOpacity>
                </Link>
              </View>
              <Link href="/(home)" asChild> 
                <TouchableOpacity style={styles.buttonGroupSubText}>
                  <Text style={{ color: "white" }}>Continue to home</Text>
                </TouchableOpacity>
              </Link>
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}