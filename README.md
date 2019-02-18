### UNITY 15

Vamos a ver estructuras y buenas practicas

[App]
    -[config]
    -[node_modules]
    -[public]
    -[scripts]
    -[src]
        -[assets]
            -[contains]
        -[components]
            -[Cockpit]
                - Cockpit.js
            -[Persons]
                -[Person]
                    - Person.js
                    - Person.css
                - Persons.js
        -[containers]
            - App.js
            - App.css
            - App.test.js
        - index.css
        - index.js
        - logo.svg
        - serviceWorker.svg
    - .gitignore
    - package.json
    - README.md

## Ciclo de vida de un componente
constructor()

getDerivedStateFromProps() - ShouldComponentUpdate()
getSnapshotBeforeUpdate() - ComponentDidUpdate()
componentDidCatch() - componentDidMont()
componentWillUnmount() - render()

## Creación
constructor(props) //ES6 => getDerivedStateFromProps(props,state) => render() => componentDidMont()