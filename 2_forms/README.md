# Angular Forms

## 1. Minimum Form Control (FormsModule)

```html
<form>
  <!-- 최소한의 코드로만 동작하려면 standalone: true가 필수 -->
  <input type="email" [(ngModel)]="email" [ngModelOptions]="{standalone: true}" />
</form>
```

```ts
@Component({ ... })
export class AppComponent implements OnChanges, DoCheck {
  email: string;
}
```
