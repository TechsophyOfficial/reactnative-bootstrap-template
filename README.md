# React native bootstrap template


## Run

Install dependencies
```sh
yarn install
```
Make sure the patches for react native snap carousel and vision-camera-code-scanner are applied.
If not, run
```sh
npx patch-package
```

### Android
```sh
yarn android
```

### iOS
```sh
cd ios
pod install
cd ..
yarn ios
```