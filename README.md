# CoberturaBugRepro

To repro the issue.

- `npm ci`
- `npx ng test --coverage`
- Check `./coverage/cobertura-bug-repro/cobertura-coverage.xml`
  
  It should look like this:

  ```xml
  <class name="app.ts" filename="src/app/app.ts" line-rate="0.5" branch-rate="1">
    <methods>
    <method name="(anonymous_0)" hits="0" signature="()V">
        <lines>
        <line number="15" hits="0"/>
        </lines>
    </method>
    <method name="(anonymous_1)" hits="0" signature="()V">
        <lines>
        <line number="19" hits="0"/>
        </lines>
    </method>
    <method name="(anonymous_2)" hits="1" signature="()V">
        <lines>
        <line number="10" hits="1"/>
        </lines>
    </method>
    </methods>
    <lines>
    <line number="10" hits="4" branch="true" condition-coverage="100% (10/10)"/>
    <line number="11" hits="2" branch="true" condition-coverage="100% (1/1)"/>
    <line number="16" hits="0" branch="false"/>
    <line number="20" hits="0" branch="false"/>
    </lines>
  </class>
  ```

- As you can see, methods are generated with name `(anonymous_0)`, `(anonymous_1)` and so on. This is good.
- Now go and change the version to `1.0.3` in the following section in the `package.json`:
  
  ```
  "overrides": {
    "ast-v8-to-istanbul": "1.0.2"
  }
  ```

- Run `npm install`
- Run `npx ng test --coverage`
- Check `./coverage/cobertura-bug-repro/cobertura-coverage.xml`
  
  It should look like this:
  
  ```xml
  <class name="app.ts" filename="src/app/app.ts" line-rate="0.5" branch-rate="1">
    <methods>
      <method name="selectedReleases" hits="0" signature="()V">
        <lines>
          <line number="15" hits="0"/>
        </lines>
      </method>
      <method name="selectedReleases" hits="0" signature="()V">
        <lines>
          <line number="19" hits="0"/>
        </lines>
      </method>
      <method name="template" hits="1" signature="()V">
        <lines>
          <line number="10" hits="1"/>
        </lines>
      </method>
    </methods>
    <lines>
      <line number="10" hits="4" branch="true" condition-coverage="100% (10/10)"/>
      <line number="11" hits="2" branch="true" condition-coverage="100% (1/1)"/>
      <line number="16" hits="0" branch="false"/>
      <line number="20" hits="0" branch="false"/>
    </lines>
  </class>
  ```
  
  - Now with version `1.0.3` we have duplicate method names `selectedReleases`.