# React Native App 发布

* iOS
    * 打 Release 包
    * 发布到 AppStore
* Android
    * 打 Release 包
    * 发布到 Google Play
* 发布到 https://fir.im/


## iOS

### 打 Release 包

* 进入苹果开发者网站的 Certificates, Identifiers & Profiles
    * Overview -> Certificates, Identifiers & Profiles
* 生成 Distribution 证书
    * Certificates -> Add iOS Certificate(+) -> App Store and Ad Hoc -> Download
    * 通过本地 Keychain Access 生成证书
* 创建应用 Identifiers
    * Identifiers -> Register iOS App IDs -> 选择并填写相关内容 Next & Next .. 
* 创建 Provisioning Profiles
    * Provisioning Profiles -> Add iOS Provisioning Profiles(+) -> Distribution App Store -> 选择并填写相关内容 Next & Next .. -> Download
    * 其中有一步需要把自己的或者要测试的设备 UID 导入 
    * 本地双击 PP 文件导入
* 在 Xcode 中设置应用的签名证书
    * TTARGETS -> General -> Signing(Release)
    * https://reactnative.cn/docs/running-on-device/
* 通过 Xcode 发布正式包
    * Product -> Archive
    * Archives -> Distribute App
* 参考：https://www.jianshu.com/p/304ec98842e1

### 发布到 AppStore

* 进入苹果开发者网站的 App Store Connect
    * Overview -> App Store Connect -> MyApps
* New App 填写 App 信息
* 设置 APP STORE INFORMATION
    * App Information
    * Pricing and Availability
    * iOS APP -> 0.1.0 -> Submit for Review

## Android

### 打 Release 包

* 生成签名密钥：
    * keytool -genkey -v -keystore your-app-name-release.keystore -alias your-app-name -keyalg RSA -keysize 2048 -validity 100000
    * 参考：https://docs.oracle.com/javase/8/docs/technotes/tools/windows/keytool.html
* 设置gradle变量
    * 把 `your-app-name-release.keystore` 文件放到你工程中的 `android/app/` 文件夹下
    * 编辑项目 `android/gradle.properties`
* 把签名配置加入到项目的 gradle 配置中
    * `android/app/build.gradle` 添加如下的签名配置
* 生成 release APK 包
    * `cd android` 进入工程的 `android` 文件夹，运行 `./gradlew assembleRelease`
    * Or 进入工程根目录，运行 `react-native run-android --variant=release`
* 包位置
    * `android/app/build/outputs/app/xxx-relase.apk`
* 验证是否签名
    * keytool -printcert -jarfile app-release.apk
* 参考：
    * https://reactnative.cn/docs/signed-apk-android/
    * https://www.jianshu.com/p/7d2def9b93a8

```
// android/gradle.properties
APP_RELEASE_STORE_FILE=wallet-release.keystore
APP_RELEASE_KEY_ALIAS=trio-wallet
APP_RELEASE_STORE_PASSWORD=ecotech888
APP_RELEASE_KEY_PASSWORD=ecotech888
```

```
// android/app/build.gradle
android {
    ...
    defaultConfig { ... }
    signingConfigs {
        release {
            if (project.hasProperty('APP_RELEASE_STORE_FILE')) {
                storeFile file(APP_RELEASE_STORE_FILE)
                storePassword APP_RELEASE_STORE_PASSWORD
                keyAlias APP_RELEASE_KEY_ALIAS
                keyPassword APP_RELEASE_KEY_PASSWORD
            }
        }
    }
    buildTypes {
        release {
            ...
            signingConfig signingConfigs.release
        }
    }
}
```

### 发布到 Google Play

* 进入 Google Play Console 网站：https://developer.android.com
    * Google Play -> LAUNCH PLAY CONSOLE
* 创建应用：填写应用名称
* 填写应用发布信息
    * 应用版本
        * 上传应用
    * 商品详情
    * 内容分级
    * 定价和分发信息
* 发布

## 发布到 https://fir.im/

* 把上面打包的 apk 和 ipa 文件直接拖到 fir 的后台系统
* 填写应用名和应用更新日志
* 生成连接，完成发布

