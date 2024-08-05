# Notes
* building and deploing your schematics
```ps1
cd .\projects\templates\;npm version patch;npm run build;cd ..\..\dist\templates;npm publish;cd ../..
```

[Angular Schematics Location](https://github.com/angular/angular-cli/tree/main/packages/schematics/angular/library)


* building wml-componets base
```ps1
cd .\projects\wml-components-base\;npx ng build;npm version patch;cd ..\..\dist\wml-components-base;npm publish --access=public;cd ../..

```

* building social-media-card base
```ps1
cd .\projects\social-media-card\;npx ng build;npm version patch;cd ..\..\dist\social-media-card;npm publish --access=public;cd ../..

```

* building wml-notify
```ps1
cd .\projects\wml-notify\;npm version patch;npx ng build;cd ..\..\dist\wml-notify;npm publish --access=public;cd ../..

```

* building profile-detail-card

```ps1
cd .\projects\profile-detail-card;npx ng build;npm version patch;cd ..\..\dist\profile-detail-card;npm publish --access=public;cd ../..
```
