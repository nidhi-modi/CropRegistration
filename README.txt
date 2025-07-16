******************************************

This build as been simulated, archived and tested on flight mode.

Repo Git clone: https://github.com/nidhi-modi/CropRegistration.git (last updated Feb-2024)
macOS: Sequoia 15.5 (24F74)
Xcode version: 16.4
Xcode CLT version: 16.4
RN version: 0.64
Node version: 16.13.0

Last update: 17.07.25

Updating yarn and pods:
/CropRegistration: install yarn
/CropRegistration/ios: install pods

Launching Metro (prior Build/Simulator)
/CropRegistration: yarn start

*'CURRENT_ARCH=arm64 pod install' or 'CURRENT_ARCH=arm64 pod install --repo-update' solved glog (0.35.0) install error. Althought this wasn't a problem with this project.

--------------------------------------------Error Logs----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

1. Build project: 'Yoga' > accept the suggested fix

2. Build project: 'flat_tree'

   template<class C2>
   void merge_unique(flat_tree<Value, KeyOfValue, C2, Allocator>& source)
   {
    # Previous 'insert'
      this->insert( boost::make_move_iterator(source.begin())
    # Updated to 'insert_unique'
      this->insert_unique( boost::make_move_iterator(source.begin())
                  , boost::make_move_iterator(source.end()));
   }
   template<class C2>
   void merge_equal(flat_tree<Value, KeyOfValue, C2, Allocator>& source)
   {
    # Previous 'insert'
      this->insert( boost::make_move_iterator(source.begin())
    # Updated to 'insert_equal'
      this->insert_equal( boost::make_move_iterator(source.begin())
                  , boost::make_move_iterator(source.end()));

3. Build project: 'RCT-Folly' > Updated Podfile (check at the end of the document)

4. Build project: 'Node.js' not found > Updated 'Bundle React Native code and images' (/Targets/Build Phase)

set -e

# Previous
export NODE_BINARY=node
# Updated
export NODE_BINARY=/Users/nidhimodi/.nvm/versions/node/v16.13.0/bin/node
../node_modules/react-native/scripts/react-native-xcode.sh

Check node open the Terminal and using command 'which node' or 'node -v' 

5. Build project: 'main.jsbundle' missinfg > used a workaround

On the Terminal:
cd /path/to/CropRegistration

# Make sure you’re on the right node
nvm use 16.13.0

# Generate the iOS bundle into the source folder
npx react-native bundle \
  --entry-file index.js \
  --platform ios \
  --dev false \
  --bundle-output ios/CropRegistration/main.jsbundle \
  --assets-dest ios/CropRegistration

6. Build project: "ld: library 'swiftWebKit' not found
clang: error: linker command failed with exit code 1 (use -v to see invocation)" > DELETE 'libSwiftWebKit.tbd' from "Project Navigator/Frameworks'
This seems to be an error with new WebKit releases

7. Simulating project: empty dSYM file detected > didn't affect project

8. Validating project: 'CropRegistration.app/Frameworks/OpenSSL.framework/OpenSSL' bitcode error:
 
-Opened the terminal and ran:
'xcrun bitcode_strip -r "/Users/nidhimodi/Desktop/CropRegistration/ios/Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_arm64e_armv7_armv7s/OpenSSL.framework/OpenSSL" -o "/Users/nidhimodi/Desktop/CropRegistration/ios/Pods/OpenSSL-Universal/Frameworks/OpenSSL.xcframework/ios-arm64_arm64e_armv7_armv7s/OpenSSL.framework/OpenSSL'
 -Updated Podfile (check below)

9. TestFlight stage: Missing Compliance > Added to Targets/Info: 'App Uses Non-Exempt Encryption: string, no'

Added to Podfile lines 22 to 57 to fix:
-Issues with 'RCT-Folly' (Build error)
-Node.js missmatch
-Remove bitcode* from 'CropRegistration.app/Frameworks/OpenSSL.framework/OpenSSL' (Validation error)
-Remove any bitcode* trace from other dependencies (Validation error)
*Submission with Bitcode are not longer allowed from Xcode 16

---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Project changes commited to: https://github.com/CoveredCropsTG/CropRegistration-v69.1.git