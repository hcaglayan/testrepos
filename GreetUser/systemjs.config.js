System.config({
    "transpiler": "ts",
    "typescriptOptions": {
        "target": "es5",
        "module": "system",
        "moduleResolution": "node",
        "emitDecoratorMetadata": true,
        "experimentalDecorators": true,
        "jsx": "react"
    },
    "meta": {
        "typescript": {
            "exports": "ts"
        },
        "*.json": { "loader": "plugin-json" }
    },
    "paths": {
    },
    "map": {
        "app": "/",
        "ts": "https://unpkg.com/plugin-typescript@4.0.10/lib/plugin.js",
        "typescript": "https://unpkg.com/typescript@2.2.2/lib/typescript.js",
        "plugin-json": "https://cdnjs.cloudflare.com/ajax/libs/systemjs-plugin-json/0.3.0/json.min.js",
        "react-dom": "https://unpkg.com/react-dom@15.5.4/dist/react-dom.min.js",
        "react": "https://unpkg.com/react@15.5.4/dist/react.min.js"

    },
    "packages": {
        "app": {
            "main": "MyApp",
            "defaultExtension": "tsx"
        }
    }
}); 

System.import('app');
