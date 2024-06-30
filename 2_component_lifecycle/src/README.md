# Angular Lifecycle

## Lifecycle hooks

- constructor
- onChanges (반복)
- onInit
- doCheck
- afterContentInit
- afterContentChecked
- afterViewInit
- afterViewChecked
- doCheck (반복)
- afterContentChecked (반복)
- afterViewChecked (반복)
- onDestory

```
lifecycle: [constructor],       propValue: [undefined]
lifecycle: [setter],            propValue: [value from parent!]
lifecycle: [changes],           propValue: [value from parent!]
lifecycle: [init],              propValue: [value from parent!]
lifecycle: [doCheck],           propValue: [value from parent!]
lifecycle: [contentInit],       propValue: [value from parent!]
lifecycle: [contentChecked],    propValue: [value from parent!]
lifecycle: [dom],               propValue: [value from parent!]

lifecycle: [viewInit],          propValue: [value from parent!]
lifecycle: [viewChecked],       propValue: [value from parent!]
lifecycle: [dom],               propValue: [value from parent!]

lifecycle: [doCheck],           propValue: [value from parent!]
lifecycle: [contentChecked],    propValue: [value from parent!]
lifecycle: [dom],               propValue: [value from parent!]

lifecycle: [viewChecked],       propValue: [value from parent!]
lifecycle: [dom],               propValue: [value from parent!]
```
