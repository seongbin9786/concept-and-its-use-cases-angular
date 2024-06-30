# Angular Primitives and Core Concepts

Angular는 framework이기 때문에, Angular의 틀에 맞게 사용할 수 있는 역할을 미리 정의해놓았다.

Angular를 사용하는 개발자는 각 역할을 이해하고, 그 역할에 맞게 제품의 뷰와 비즈니스 로직을 Angular에게 입력으로 제공한다.

Angular는 framework로써 입력받은 코드가 요구하는 기본적인 기능들을 제공한다.

## Primitives

5개의 기초 구성 요소가 존재한다.

1. Component
2. Service
3. Directive
4. Pipe
5. Module

### Component

#### 역할: 단위 화면을 렌더링한다.

1. 화면의 정적인 부분은 html을 활용해서 표현한다.
2. 화면의 동적인 부분은 바인딩을 활용해서 상태로 관리한다.
    - 이 때 DOM에서 활용되는 값, 함수를 제공한다.

#### 다른 요소와의 관계: DOM으로의 어댑터 역할이다.

1. Service: Service가 제공하는 비즈니스 로직을 DOM과 연결하는 역할을 수행한다.
2. Directive: Directive가 제공하는 DOM 로직을 DOM과 연결하는 역할을 수행한다.
3. Pipe: Pipe에서 제공하는 유틸성 로직을 DOM과 연결하는 역할을 수행한다.

### Service

#### 역할: 비즈니스 로직을 소유한다.

1. 의존성 주입을 통해 역할을 분리한다.
2. 임의의 객체에 대해 singleton으로 제공되기 때문에 가능한 stateless하게 구성한다.

#### 다른 요소와의 관계:

- 모든 요소: DOM과 관계 없는 로직을 제공한다.

### Directive

#### 역할: DOM에 의존하는 로직을 소유한다.

1. HTML을 다루는 로직을 소유한다. (for문, if문의 기능 등)
2. 무한 스크롤, 지연 로딩 등 DOM에서 재사용되는 로직을 소유한다.

#### 다른 요소와의 관계:

- Component: 컴포넌트의 템플릿(html)에서 사용된다.
- Service: Service의 비즈니스 로직을 사용할 수도 있다.

### Pipe

#### 역할: 데이터 변환 로직의 DOM으로의 어댑터 역할이다.

1. html 표현식에서 직관적으로 사용할 수 있는 특별한 요소이다.
2. 외부의 데이터 변환 로직을 위임받아서 제공한다.

#### 다른 요소와의 관계:

- Component: 컴포넌트의 템플릿(html)에서 사용된다.
- Service: Service의 비즈니스 로직을 사용할 수도 있다.

### Module

#### 역할: 페이지, 기능 단위로 사용 범위를 제한한다.

1. 명시적인 import/export 없이 모듈 바깥 코드에서 의존성 주입을 받지 못하게 한다. (의존성 주입이 필요 없는 경우는 제한할 수 없다.)

#### 다른 요소와의 관계:

- 모든 요소: 모듈에 등록하고 외부로의 공개 여부를 설정한다.

## Core Concept

1. 템플릿
2. 동적 바인딩 방법
3. 의존성 주입

### Template

HTML 파일이다.

### Dynamic Binding

1. HTML 파일의 동적인 부분을 처리한다.
2. 세 가지 방식이 있다.
    1. 삽입식: 동적인 값을 평가한 결과를 String으로 변환하여 html에 삽입한다. 
    2. 프로퍼티: String으로 변환하지 않는 삽입식 방식이다.
        - 기본 binding의 기능으로 className 적용 여부를 결정할 수도 있다.
            - `[class.myClassName] = "useMyClassNameOrNot()"`은 `useMyClassNameOrNot()`의 결과에 따라 `myClassName`의 존재 여부가 결정된다.
    3. 이벤트: 인라인으로 이벤트 핸들러를 정의할 수 있다.
        - 간단한 전처리와 단순 호출문이 권장된다.

### Dependency Injection

의존하는 객체를 직접 생성하지 않을 수 있게 한다.
- 직접 생성하지 않음으로써 구현체라는 외부 맥락에 대한 결합을 제거할 수 있다.
